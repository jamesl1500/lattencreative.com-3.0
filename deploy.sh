#!/bin/bash

# Deploy script for Strapi API and Next.js Website
# Ubuntu server with Apache and PM2

set -e  # Exit on any error

echo "🚀 Starting deployment..."

# Configuration
PROJECT_ROOT=$(pwd)
API_DIR="$PROJECT_ROOT/api"
WEBSITE_DIR="$PROJECT_ROOT/website"
BACKUP_DIR="/var/backups/lattencreative-$(date +%Y%m%d_%H%M%S)"
APACHE_SITE_CONFIG="/etc/apache2/sites-available/lattencreative.conf"
NODE_VERSION="22"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
print_status "Checking prerequisites..."

if ! command_exists node; then
    print_error "Node.js is not installed"
    exit 1
fi

if ! command_exists pm2; then
    print_error "PM2 is not installed"
    exit 1
fi

if ! command_exists apache2; then
    print_error "Apache2 is not installed"
    exit 1
fi

# Check Node.js version
NODE_CURRENT=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_CURRENT" -lt "$NODE_VERSION" ]; then
    print_warning "Node.js version $NODE_CURRENT detected. Recommended: $NODE_VERSION+"
fi

# Create backup directory
print_status "Creating backup directory..."
sudo mkdir -p "$BACKUP_DIR"

# Backup current deployment (if exists)
if [ -d "$API_DIR/dist" ]; then
    print_status "Backing up current API deployment..."
    sudo cp -r "$API_DIR" "$BACKUP_DIR/api_backup"
fi

if [ -d "$WEBSITE_DIR/.next" ]; then
    print_status "Backing up current website deployment..."
    sudo cp -r "$WEBSITE_DIR" "$BACKUP_DIR/website_backup"
fi

# Function to rollback on failure
rollback() {
    print_error "Deployment failed. Rolling back..."
    
    if [ -d "$BACKUP_DIR/api_backup" ]; then
        print_status "Restoring API backup..."
        rm -rf "$API_DIR/dist" "$API_DIR/node_modules"
        cp -r "$BACKUP_DIR/api_backup/dist" "$API_DIR/"
        cp -r "$BACKUP_DIR/api_backup/node_modules" "$API_DIR/"
    fi
    
    if [ -d "$BACKUP_DIR/website_backup" ]; then
        print_status "Restoring website backup..."
        rm -rf "$WEBSITE_DIR/.next" "$WEBSITE_DIR/node_modules"
        cp -r "$BACKUP_DIR/website_backup/.next" "$WEBSITE_DIR/"
        cp -r "$BACKUP_DIR/website_backup/node_modules" "$WEBSITE_DIR/"
    fi
    
    # Restart services
    pm2 restart all
    sudo systemctl reload apache2
    
    print_error "Rollback completed"
    exit 1
}

# Set trap for rollback on error
trap rollback ERR

# Stop PM2 processes
print_status "Stopping PM2 processes..."
pm2 stop all || true

# Deploy Strapi API
print_status "Deploying Strapi API..."
cd "$API_DIR"

# Install dependencies
print_status "Installing API dependencies..."
npm ci --production=false

# Build the API
print_status "Building API..."
npm run build

# Install production dependencies only
print_status "Installing production dependencies for API..."
npm ci --production

# Deploy Next.js Website
print_status "Deploying Next.js Website..."
cd "$WEBSITE_DIR"

# Install dependencies
print_status "Installing website dependencies..."
npm ci

# Build the website
print_status "Building website..."
npm run build

# Update PM2 ecosystem file
print_status "Updating PM2 configuration..."
cat > "$PROJECT_ROOT/ecosystem.config.js" << EOF
module.exports = {
  apps: [
    {
      name: 'strapi-api',
      cwd: '$API_DIR',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 1337,
        HOST: '127.0.0.1'
      },
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '1G',
      error_file: '/var/log/pm2/strapi-error.log',
      out_file: '/var/log/pm2/strapi-out.log',
      log_file: '/var/log/pm2/strapi-combined.log',
      time: true
    },
    {
      name: 'nextjs-website',
      cwd: '$WEBSITE_DIR',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOSTNAME: '127.0.0.1'
      },
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '1G',
      error_file: '/var/log/pm2/nextjs-error.log',
      out_file: '/var/log/pm2/nextjs-out.log',
      log_file: '/var/log/pm2/nextjs-combined.log',
      time: true
    }
  ]
};
EOF

# Create PM2 log directory
sudo mkdir -p /var/log/pm2
sudo chown -R \$USER:pm2 /var/log/pm2

# Start/restart PM2 processes
print_status "Starting PM2 processes..."
cd "$PROJECT_ROOT"
pm2 delete all || true
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# Configure Apache (if not already configured)
if [ ! -f "$APACHE_SITE_CONFIG" ]; then
    print_status "Configuring Apache virtual host..."
    sudo tee "$APACHE_SITE_CONFIG" > /dev/null << EOF
<VirtualHost *:80>
    ServerName lattencreative.com
    ServerAlias www.lattencreative.com
    
    # Next.js Website (main domain)
    ProxyPreserveHost On
    ProxyPass /api/ http://127.0.0.1:1337/
    ProxyPassReverse /api/ http://127.0.0.1:1337/
    
    # Strapi Admin
    ProxyPass /admin/ http://127.0.0.1:1337/admin/
    ProxyPassReverse /admin/ http://127.0.0.1:1337/admin/
    
    # Everything else goes to Next.js
    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/
    
    # Enable WebSocket support for development
    RewriteEngine on
    RewriteCond %{HTTP:Upgrade} websocket [NC]
    RewriteCond %{HTTP:Connection} upgrade [NC]
    RewriteRule ^/?(.*) "ws://127.0.0.1:3000/\$1" [P,L]
    
    ErrorLog \${APACHE_LOG_DIR}/lattencreative_error.log
    CustomLog \${APACHE_LOG_DIR}/lattencreative_access.log combined
</VirtualHost>

# HTTPS Configuration (add SSL certificate details here)
# <VirtualHost *:443>
#     ServerName lattencreative.com
#     ServerAlias www.lattencreative.com
#     
#     SSLEngine on
#     SSLCertificateFile /path/to/certificate.crt
#     SSLCertificateKeyFile /path/to/private.key
#     
#     # Same proxy rules as above
#     ProxyPreserveHost On
#     ProxyPass /api/ http://127.0.0.1:1337/
#     ProxyPassReverse /api/ http://127.0.0.1:1337/
#     ProxyPass /admin/ http://127.0.0.1:1337/admin/
#     ProxyPassReverse /admin/ http://127.0.0.1:1337/admin/
#     ProxyPass / http://127.0.0.1:3000/
#     ProxyPassReverse / http://127.0.0.1:3000/
# </VirtualHost>
EOF

    # Enable required Apache modules
    sudo a2enmod proxy
    sudo a2enmod proxy_http
    sudo a2enmod rewrite
    sudo a2enmod ssl
    
    # Enable the site
    sudo a2ensite lattencreative.conf
    
    # Disable default site if enabled
    sudo a2dissite 000-default || true
fi

# Test Apache configuration
print_status "Testing Apache configuration..."
sudo apache2ctl configtest

# Reload Apache
print_status "Reloading Apache..."
sudo systemctl reload apache2

# Health checks
print_status "Performing health checks..."

# Wait for services to start
sleep 10

# Check if Strapi API is responding
if curl -f http://127.0.0.1:1337/api/services >/dev/null 2>&1; then
    print_status "✅ Strapi API is responding"
else
    print_warning "⚠️  Strapi API health check failed"
fi

# Check if Next.js is responding
if curl -f http://127.0.0.1:3000 >/dev/null 2>&1; then
    print_status "✅ Next.js website is responding"
else
    print_warning "⚠️  Next.js website health check failed"
fi

# Check PM2 status
print_status "PM2 Process Status:"
pm2 status

# Cleanup old backups (keep last 5)
print_status "Cleaning up old backups..."
sudo find /var/backups -name "lattencreative-*" -type d | sort | head -n -5 | xargs sudo rm -rf

# Set proper permissions
print_status "Setting proper permissions..."
sudo chown -R www-data:www-data "$PROJECT_ROOT"
sudo chmod -R 755 "$PROJECT_ROOT"

print_status "🎉 Deployment completed successfully!"
print_status "Website: http://lattencreative.com"
print_status "Strapi Admin: http://lattencreative.com/admin"
print_status "API: http://lattencreative.com/api"

echo ""
print_status "Useful commands:"
echo "  pm2 status          - Check PM2 processes"
echo "  pm2 logs            - View all logs"
echo "  pm2 logs strapi-api - View Strapi logs"
echo "  pm2 logs nextjs-website - View Next.js logs"
echo "  sudo systemctl status apache2 - Check Apache status"
echo "  sudo tail -f /var/log/apache2/lattencreative_error.log - View Apache errors"