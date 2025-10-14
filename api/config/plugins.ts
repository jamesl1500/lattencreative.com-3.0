export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'localhost'),
        port: env('SMTP_PORT', 587),
        // For Gmail, you might need:
        // service: 'gmail',
        // or for other providers like SendGrid, Mailgun, etc.
      },
      settings: {
        defaultFrom: env('SMTP_DEFAULT_FROM', 'noreply@lattencreative.com'),
        defaultReplyTo: env('SMTP_DEFAULT_REPLY_TO', 'noreply@lattencreative.com'),
      },
    },
  },
});
