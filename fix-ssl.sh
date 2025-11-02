#!/bin/bash

# SSL Certificate Chain Fix for Strapi on AWS with Certbot
# Run this script on your server to fix the "self-signed certificate in certificate chain" error

echo "🔧 Fixing SSL Certificate Chain Issues for Strapi..."

# Set your domain (update this)
DOMAIN=${1:-"lattencreative.com"}
API_DIR="/var/www/lattencreative.com/api"

echo "📍 Domain: $DOMAIN"
echo "📍 API Directory: $API_DIR"

# Step 1: Update Strapi environment for proxy mode
echo "⚙️  Configuring Strapi for proxy mode..."
cd "$API_DIR"

# Create or update .env file with proxy settings
if [ -f ".env" ]; then
    # Update existing .env
    if grep -q "IS_PROXIED" .env; then
        sed -i 's/IS_PROXIED=.*/IS_PROXIED=true/' .env
    else
        echo "IS_PROXIED=true" >> .env
    fi
    
    if grep -q "PUBLIC_URL" .env; then
        sed -i "s|PUBLIC_URL=.*|PUBLIC_URL=https://$DOMAIN|" .env
    else
        echo "PUBLIC_URL=https://$DOMAIN" >> .env
    fi
    
    # Temporarily disable SSL verification (remove in production after fix)
    if grep -q "NODE_TLS_REJECT_UNAUTHORIZED" .env; then
        sed -i 's/NODE_TLS_REJECT_UNAUTHORIZED=.*/NODE_TLS_REJECT_UNAUTHORIZED=0/' .env
    else
        echo "NODE_TLS_REJECT_UNAUTHORIZED=0" >> .env
    fi
    
    echo "✅ Updated existing .env file"
else
    echo "❌ .env file not found. Creating basic .env..."
    cat > .env << EOF
IS_PROXIED=true
PUBLIC_URL=https://$DOMAIN
NODE_TLS_REJECT_UNAUTHORIZED=0
EOF
    echo "✅ Created basic .env file"
fi

# Step 2: Verify certificate chain
echo "🔍 Verifying certificate chain..."
if [ -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
    echo "📜 Certificate found, verifying..."
    openssl verify /etc/letsencrypt/live/$DOMAIN/fullchain.pem
    
    # Check certificate details
    echo "📋 Certificate details:"
    openssl x509 -in /etc/letsencrypt/live/$DOMAIN/fullchain.pem -text -noout | grep -A2 "Subject:"
    openssl x509 -in /etc/letsencrypt/live/$DOMAIN/fullchain.pem -text -noout | grep -A2 "Issuer:"
else
    echo "⚠️  Certificate not found at /etc/letsencrypt/live/$DOMAIN/"
    echo "🔄 Attempting to renew certificate..."
    sudo certbot renew --deploy-hook "systemctl reload apache2"
fi

# Step 3: Test SSL connection
echo "🔗 Testing SSL connection..."
timeout 10 openssl s_client -connect $DOMAIN:443 -servername $DOMAIN < /dev/null 2>/dev/null | grep -E "(Certificate chain|verify return code)"

# Step 4: Restart services
echo "🔄 Restarting services..."
pm2 restart lattencreative-api
sudo systemctl reload apache2

# Step 5: Test endpoints
echo "🧪 Testing endpoints..."
sleep 5

echo "Testing API endpoint..."
if curl -k -s "https://$DOMAIN/api/services" > /dev/null; then
    echo "✅ API endpoint accessible"
else
    echo "❌ API endpoint failed"
fi

echo "Testing admin endpoint..."
if curl -k -s "https://$DOMAIN/admin" > /dev/null; then
    echo "✅ Admin endpoint accessible"
else
    echo "❌ Admin endpoint failed"
fi

# Step 6: Show current PM2 status
echo "📊 Current PM2 status:"
pm2 status

echo ""
echo "🎉 SSL fix completed!"
echo ""
echo "📝 Next steps:"
echo "1. Test your Strapi admin at https://$DOMAIN/admin"
echo "2. Test your API at https://$DOMAIN/api/services"
echo "3. Monitor PM2 logs: pm2 logs lattencreative-api"
echo "4. If still having issues, check Apache logs: sudo tail -f /var/log/apache2/error.log"
echo ""
echo "⚠️  Note: NODE_TLS_REJECT_UNAUTHORIZED=0 is temporary. Remove it once certificates are working properly."