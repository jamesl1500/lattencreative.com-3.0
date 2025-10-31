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
HOST=your-server-ip-address
USERNAME=your-server-username
PORT=22 (or your SSH port)
DEPLOY_KEY=your-private-ssh-key
DEPLOY_PATH=/var/www/lattencreative.com
NEXT_PUBLIC_STRAPI_URL=http://your-domain.com
```

### 2. SSH Key Setup

1. Generate SSH key pair on your local machine:
```bash
ssh-keygen -t rsa -b 4096 -C "github-deploy-key"
```

2. Add the public key to your server's `~/.ssh/authorized_keys`:
```bash
# On your server
mkdir -p ~/.ssh
cat >> ~/.ssh/authorized_keys << 'EOF'
your-public-key-content-here
EOF
chmod 600 ~/.ssh/authorized_keys
```

3. Add the private key content to GitHub secrets as `DEPLOY_KEY`

## Environment Configuration

### 1. API Environment (.env)

Create `/var/www/lattencreative.com/api/.env`:

```bash
# Server
HOST=127.0.0.1
PORT=1337

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