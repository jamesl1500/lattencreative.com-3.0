#!/bin/bash
set -e

# =====================================
# Environment Setup
# =====================================
APP_ENV=${1:-production}   # default to production
APP_BASE_DIR="/var/www"
REPO_BRANCH="master"

# For staging you could pass: ./deploy.sh staging
if [ "$APP_ENV" = "staging" ]; then
  DEPLOY_DIR="$APP_BASE_DIR/lattencreative.com-staging"
  REPO_BRANCH="staging"
  PM2_STRAPI_NAME="lattencreative-api-staging"
  PM2_NEXT_NAME="lattencreative-website-staging"
else
  DEPLOY_DIR="$APP_BASE_DIR/lattencreative.com"
  REPO_BRANCH="master"
  PM2_STRAPI_NAME="lattencreative-api"
  PM2_NEXT_NAME="lattencreative-website"
fi

echo "=========================================="
echo "🚀 Deploying $APP_ENV environment"
echo "📁 Directory: $DEPLOY_DIR"
echo "🌿 Branch: $REPO_BRANCH"
echo "=========================================="

cd "$DEPLOY_DIR" || { echo "❌ Directory not found: $DEPLOY_DIR"; exit 1; }

# =====================================
# Environment Setup
# =====================================
echo "🔧 Setting up environment..."
export NODE_ENV="$APP_ENV"
export PATH="$HOME/.nvm/versions/node/$(nvm version)/bin:$PATH"

# =====================================
# Git Update
# =====================================
echo "📦 Pulling latest code..."
git stash save "Auto-stash before deploy"
git fetch origin "$REPO_BRANCH"
git reset --hard "origin/$REPO_BRANCH"

# =====================================
# Build & Restart Strapi
# =====================================
echo "⚙️  Building Strapi API..."
cd "$DEPLOY_DIR/api" || cd "$DEPLOY_DIR/strapi"
npm ci --legacy-peer-deps
npm run build

echo "🔁 Restarting Strapi with PM2..."
pm2 restart "$PM2_STRAPI_NAME" || pm2 start npm --name "$PM2_STRAPI_NAME" -- run start -- -p 1337

# =====================================
# Build & Restart Next.js
# =====================================
echo "⚙️  Building Next.js website..."
cd "$DEPLOY_DIR/website" || cd "$DEPLOY_DIR/nextjs"
npm ci --legacy-peer-deps
npm run build

echo "🔁 Restarting Next.js with PM2..."
pm2 restart "$PM2_NEXT_NAME" || pm2 start npm --name "$PM2_NEXT_NAME" -- run start -- -p 3005

# =====================================
# Restart Apache (for reverse proxy)
# =====================================
echo "🌐 Restarting Apache..."
sudo systemctl restart apache2

echo "✅ $APP_ENV deployment completed successfully!"