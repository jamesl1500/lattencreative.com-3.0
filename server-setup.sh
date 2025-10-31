#!/bin/bash

# Server Setup Script for Lattencreative.com
# Run this on a fresh Ubuntu server to set up the environment

set -e

echo "🚀 Setting up server for Lattencreative.com deployment..."

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Update system
print_status "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install basic packages
print_status "Installing basic packages..."
sudo apt install -y curl wget git build-essential software-properties-common

# Install Node.js 18
print_status "Installing Node.js ..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verify Node.js installation
print_status "Node.js version: $(node --version)"
print_status "NPM version: $(npm --version)"

# Install PM2
print_status "Installing PM2..."
sudo npm install -g pm2

# Install Apache
print_status "Installing Apache..."
sudo apt install -y apache2

# Enable Apache modules
print_status "Enabling Apache modules..."
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod rewrite
sudo a2enmod ssl
sudo a2enmod headers
sudo a2enmod deflate

# Install MySQL
print_status "Installing MySQL..."
sudo apt install -y mysql-server

print_warning "Please run 'sudo mysql_secure_installation' to secure MySQL"

# Install Certbot for SSL
print_status "Installing Certbot for SSL certificates..."
sudo apt install -y certbot python3-certbot-apache

# Create project directory
print_status "Creating project directory..."
sudo mkdir -p /var/www/lattencreative.com
sudo chown -R $USER:www-data /var/www/lattencreative.com
sudo chmod -R 755 /var/www/lattencreative.com

# Create PM2 log directory
print_status "Creating PM2 log directory..."
sudo mkdir -p /var/log/pm2
sudo chown -R $USER:$USER /var/log/pm2

# Setup firewall
print_status "Configuring firewall..."
sudo ufw allow ssh
sudo ufw allow 'Apache Full'
sudo ufw --force enable

# Start and enable services
print_status "Starting services..."
sudo systemctl start apache2
sudo systemctl enable apache2
sudo systemctl start mysql
sudo systemctl enable mysql

# Setup PM2 startup
print_status "Setting up PM2 startup..."
pm2 startup
print_warning "Please run the command shown above to complete PM2 startup setup"

print_status "✅ Server setup completed!"
echo ""
print_status "Next steps:"
echo "1. Run: sudo mysql_secure_installation"
echo "2. Create MySQL database and user for the application"
echo "3. Clone your repository to /var/www/lattencreative.com"
echo "4. Configure environment variables"
echo "5. Run the deploy script"
echo ""
print_status "Useful commands:"
echo "  sudo systemctl status apache2   - Check Apache status"
echo "  sudo systemctl status mysql     - Check MySQL status"
echo "  pm2 status                      - Check PM2 processes"
echo "  sudo ufw status                 - Check firewall status"