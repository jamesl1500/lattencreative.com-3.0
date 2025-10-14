/**
 * newsletter-subscription router
 */

export default {
  routes: [
    {
      method: 'POST',
      path: '/newsletter-subscription/subscribe',
      handler: 'newsletter-subscription.subscribe',
      config: {
        auth: false, // Allow public access
      },
    },
    {
      method: 'POST',
      path: '/newsletter-subscription/unsubscribe',
      handler: 'newsletter-subscription.unsubscribe',
      config: {
        auth: false, // Allow public access
      },
    },
  ],
};