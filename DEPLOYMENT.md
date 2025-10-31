# Deployment Setup Instructions

This document provides step-by-step instructions for setting up automated deployment for the Lattencreative.com project using GitHub Actions, Ubuntu server, Apache, and PM2.

## Server Prerequisites

### 1. Ubuntu Server Setup

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install required packages
sudo apt install -y curl wget git apache2 build-essential

# Install Node.js 18 (via NodeSource)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version
npm --version
```

### 2. Install PM2

```bash
# Install PM2 globally
sudo npm install -g pm2

# Setup PM2 startup script
pm2 startup
# Follow the instructions provided by the startup command

# Create PM2 log directory
sudo mkdir -p /var/log/pm2
sudo chown -R $USER:$USER /var/log/pm2
```

### 3. Configure Apache

```bash
# Enable required Apache modules
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod rewrite
sudo a2enmod ssl

# Restart Apache
sudo systemctl restart apache2
sudo systemctl enable apache2
```

### 4. Setup Project Directory

```bash
# Create project directory
sudo mkdir -p /var/www/lattencreative.com
sudo chown -R $USER:www-data /var/www/lattencreative.com
cd /var/www/lattencreative.com

# Clone the repository
git clone https://github.com/jamesl1500/lattencreative.com-3.0.git .

# Make deploy script executable
chmod +x deploy.sh
```

## GitHub Repository Setup

### 1. Add GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions, and add these secrets:

```
# Required GitHub Secrets for CI/CD
HOST=your-server-ip-address
USERNAME=your-server-username
PORT=22
DEPLOY_KEY=your-private-ssh-key (multi-line)
DEPLOY_PATH=/var/www/lattencreative.com

# Next.js Build Variables (used during CI build)
NEXT_PUBLIC_STRAPI_API_URL=https://api.yourdomain.com/api
NEXT_PUBLIC_STRAPI_URL=https://api.yourdomain.com

# Optional: API Build Variables (if Strapi build needs DB access during CI)
API_DATABASE_HOST=127.0.0.1
API_DATABASE_PORT=3306
API_DATABASE_NAME=latten_db
API_DATABASE_USERNAME=latten_user
API_DATABASE_PASSWORD=supersecret
ADMIN_JWT_SECRET=your-admin-jwt-secret
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=your-api-token-salt

# Optional: If website build needs API access during CI
STRAPI_API_TOKEN=your-strapi-api-token
```

### 2. SSH Key Setup

1. Generate SSH key pair on your local machine:
```bash
ssh-keygen -t rsa -b 4096 -C "github-deploy-key" -f ~/.ssh/lattencreative_deploy
```

2. Copy the public key to your server:
```bash
# Copy public key content
cat ~/.ssh/lattencreative_deploy.pub

# On your server (replace 'deploy' with your username)
mkdir -p ~/.ssh
echo "your-public-key-content-here" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

3. Test SSH connection:
```bash
ssh -i ~/.ssh/lattencreative_deploy your-username@your-server-ip
```

### 3. GitHub Secrets Configuration

Navigate to your GitHub repository:
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret** for each of the following:

#### Required Secrets:
```bash
# SSH Configuration
DEPLOY_KEY=<content of ~/.ssh/lattencreative_deploy (private key)>
HOST=your-server-ip-address
USERNAME=your-server-username
PORT=22
DEPLOY_PATH=/var/www/lattencreative.com

# Next.js Build Variables
NEXT_PUBLIC_STRAPI_API_URL=https://api.yourdomain.com/api
NEXT_PUBLIC_STRAPI_URL=https://api.yourdomain.com
```

#### Optional API Build Secrets (if Strapi build needs database access):
```bash
API_DATABASE_HOST=127.0.0.1
API_DATABASE_PORT=3306
API_DATABASE_NAME=latten_db
API_DATABASE_USERNAME=latten_user
API_DATABASE_PASSWORD=supersecret
ADMIN_JWT_SECRET=your-admin-jwt-secret
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=your-api-token-salt
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
```

#### Optional Website Build Secrets:
```bash
STRAPI_API_TOKEN=your-strapi-api-token  # If website needs API access during build
```

### 4. Server Environment Setup

1. **Create project directory on server:**
```bash
sudo mkdir -p /var/www/lattencreative.com
sudo chown $USER:$USER /var/www/lattencreative.com
cd /var/www/lattencreative.com
git clone https://github.com/jamesl1500/lattencreative.com-3.0.git .
```

2. **Create API environment file:**
```bash
# Create api/.env from api/.env.example
cp api/.env.example api/.env
nano api/.env  # Edit with your production values
```

3. **Create Website environment file:**
```bash
# Create website/.env from website/.env.example  
cp website/.env.example website/.env
nano website/.env  # Edit with your production values
```

## Environment Configuration

### 1. API Environment (.env)

Create `/var/www/lattencreative.com/api/.env`:

```bash
# Server
HOST=127.0.0.1
PORT=1337

# Security Best Practices

⚠️ **Important**: Never commit secrets to your repository!

1. **GitHub Secrets**: Store deployment credentials and build-time environment variables as GitHub repository secrets
2. **Server Environment**: Store runtime secrets in `.env` files on the server (not in the repository)
3. **Public Variables**: Only use `NEXT_PUBLIC_*` for variables that can be safely exposed to client-side code
4. **Secret Rotation**: Regularly rotate API tokens, JWT secrets, and database passwords

## Environment Variable Strategy

- **GitHub Secrets** (for CI/CD): SSH keys, server credentials, build-time API URLs
- **Server `.env` files** (for runtime): Database credentials, JWT secrets, API tokens, mail providers
- **Repository** (committed): Only non-sensitive configuration and `.env.example` templates

# Secrets (generate new ones for production)
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
ENCRYPTION_KEY=your-encryption-key
JWT_SECRET=your-jwt-secret

# Database
DATABASE_CLIENT=mysql
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_NAME=lattencreative_com
DATABASE_USERNAME=your-db-username
DATABASE_PASSWORD=your-db-password
DATABASE_SSL=false

# Email Configuration (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_DEFAULT_FROM=noreply@lattencreative.com
SMTP_DEFAULT_REPLY_TO=hello@lattencreative.com
```

### 2. Website Environment (.env.local)

Create `/var/www/lattencreative.com/website/.env.local`:

```bash
NEXT_PUBLIC_STRAPI_URL=http://your-domain.com
```

## Database Setup (MySQL)

```bash
# Install MySQL
sudo apt install -y mysql-server

# Secure installation
sudo mysql_secure_installation

# Create database and user
sudo mysql -u root -p
```

```sql
CREATE DATABASE lattencreative_com;
CREATE USER 'lattencreative'@'localhost' IDENTIFIED BY 'your-secure-password';
GRANT ALL PRIVILEGES ON lattencreative_com.* TO 'lattencreative'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

## SSL Certificate (Optional but Recommended)

### Using Let's Encrypt with Certbot:

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-apache

# Get SSL certificate
sudo certbot --apache -d lattencreative.com -d www.lattencreative.com

# Auto-renewal (usually set up automatically)
sudo systemctl enable certbot.timer
```

## Manual Deployment

For the first deployment or manual deployment:

```bash
cd /var/www/lattencreative.com
git pull origin master
./deploy.sh
```

## Monitoring and Maintenance

### PM2 Commands

```bash
# Check status
pm2 status

# View logs
pm2 logs

# Restart applications
pm2 restart all

# Stop applications
pm2 stop all

# Monitor in real-time
pm2 monit
```

### Apache Commands

```bash
# Check status
sudo systemctl status apache2

# View error logs
sudo tail -f /var/log/apache2/lattencreative_error.log

# View access logs
sudo tail -f /var/log/apache2/lattencreative_access.log

# Test configuration
sudo apache2ctl configtest

# Restart Apache
sudo systemctl restart apache2
```

### Troubleshooting

1. **Deployment fails**: Check the GitHub Actions logs
2. **PM2 processes not starting**: Check PM2 logs with `pm2 logs`
3. **Website not accessible**: Check Apache error logs
4. **Database connection issues**: Verify database credentials and connection

### Backup Strategy

The deploy script automatically creates backups in `/var/backups/`. To manually backup:

```bash
# Backup database
mysqldump -u lattencreative -p lattencreative_com > backup_$(date +%Y%m%d).sql

# Backup uploaded files (if any)
tar -czf uploads_backup_$(date +%Y%m%d).tar.gz /var/www/lattencreative.com/api/public/uploads/
```

## Testing and Verification

### 1. Pre-Deployment Testing

**Test SSH connection:**
```bash
ssh -i ~/.ssh/lattencreative_deploy your-username@your-server-ip
```

**Test GitHub Actions workflow:**
```bash
# Push to master branch or trigger manually from GitHub Actions tab
git push origin master
```

**Dry-run deployment script locally:**
```bash
# Clone the repo on your server first
cd /var/www/lattencreative.com
chmod +x deploy.sh
# Review the script before running
cat deploy.sh
```

### 2. Manual Server Deployment Test

**Run deployment manually:**
```bash
cd /var/www/lattencreative.com
git pull origin master
chmod +x deploy.sh
./deploy.sh
```

**Check service status:**
```bash
# Check PM2 processes
pm2 status
pm2 logs

# Check Apache status
sudo systemctl status apache2
sudo apache2ctl configtest

# Check port bindings
sudo netstat -tlnp | grep -E ':1337|:3000|:80|:443'
```

### 3. Health Check Endpoints

**API Health Checks:**
```bash
# Strapi API
curl -I http://127.0.0.1:1337/api/services
curl -I http://127.0.0.1:1337/admin

# Via Apache proxy
curl -I http://your-domain.com/api/services
curl -I http://your-domain.com/admin
```

**Website Health Checks:**
```bash
# Next.js directly
curl -I http://127.0.0.1:3000

# Via Apache proxy
curl -I http://your-domain.com
```

**SSL Certificate Check:**
```bash
# Check SSL certificate
openssl s_client -connect your-domain.com:443 -servername your-domain.com < /dev/null
```

### 4. Troubleshooting Common Issues

**Check logs:**
```bash
# PM2 logs
pm2 logs strapi-api
pm2 logs nextjs-website

# Apache logs  
sudo tail -f /var/log/apache2/lattencreative_error.log
sudo tail -f /var/log/apache2/lattencreative_access.log

# System logs
sudo journalctl -u apache2 -f
```

**Reset deployment if needed:**
```bash
# Stop services
pm2 stop all

# Clear builds
rm -rf api/dist api/node_modules
rm -rf website/.next website/node_modules

# Re-run deployment
./deploy.sh
```

**Database connection test:**
```bash
# Test MySQL connection
mysql -h 127.0.0.1 -u lattencreative -p lattencreative_com
```

### 5. Post-Deployment Verification Checklist

- [ ] Strapi API responds at `/api/services`
- [ ] Strapi Admin accessible at `/admin` 
- [ ] Next.js website loads at `/`
- [ ] Images and uploads work correctly
- [ ] Database connections are working
- [ ] PM2 processes are running and stable
- [ ] Apache proxy rules work correctly
- [ ] SSL certificate is valid (if configured)
- [ ] All environment variables are loaded correctly
- [ ] Email functionality works (if configured)
- [ ] Backup scripts run without errors

### 6. Performance Monitoring

**Basic monitoring commands:**
```bash
# System resources
htop
df -h
free -h

# Application performance
pm2 monit

# Apache status
sudo systemctl status apache2
```

## Security Considerations

1. **Firewall**: Configure UFW to only allow necessary ports
2. **SSH**: Disable password authentication, use key-based auth only
3. **Database**: Use strong passwords and restrict access
4. **SSL**: Always use HTTPS in production
5. **Updates**: Keep system and dependencies updated regularly

```bash
# Configure UFW
sudo ufw allow ssh
sudo ufw allow 'Apache Full'
sudo ufw enable
```

## Support

For issues with this deployment setup, check the logs and ensure all prerequisites are met. The deployment script includes rollback functionality in case of failures.