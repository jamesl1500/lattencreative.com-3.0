module.exports = {
  apps: [
    {
      name: 'strapi-api',
      cwd: './api',
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
      time: true,
      restart_delay: 1000,
      max_restarts: 10
    },
    {
      name: 'nextjs-website',
      cwd: './website',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3005,
        HOSTNAME: '127.0.0.1'
      },
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '1G',
      error_file: '/var/log/pm2/nextjs-error.log',
      out_file: '/var/log/pm2/nextjs-out.log',
      log_file: '/var/log/pm2/nextjs-combined.log',
      time: true,
      restart_delay: 1000,
      max_restarts: 10
    }
  ]
};