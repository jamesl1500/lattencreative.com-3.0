/**
 * newsletter-subscription controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::newsletter-subscription.newsletter-subscription', ({ strapi }) => ({
  async subscribe(ctx) {
    try {
      const { email } = ctx.request.body;
      
      if (!email) {
        return ctx.badRequest('Email is required');
      }

      // Check if email already exists
      const existingSubscription = await strapi.entityService.findMany('api::newsletter-subscription.newsletter-subscription', {
        filters: { email },
      });

      if (existingSubscription.length > 0) {
        return ctx.badRequest('Email already subscribed');
      }

      // Create new subscription
      const subscription = await strapi.entityService.create('api::newsletter-subscription.newsletter-subscription', {
        data: {
          email,
          subscribedAt: new Date(),
          isActive: true,
          source: 'website'
        }
      });

      // Send welcome email
      try {
        const emailTemplates = await import('../../../extensions/email-templates');
        const welcomeEmail = emailTemplates.default.getWelcomeEmailTemplate(email);
        
        await strapi.plugins.email.services.email.send({
          to: email,
          from: strapi.config.get('plugins.email.settings.defaultFrom'),
          subject: welcomeEmail.subject,
          html: welcomeEmail.html,
        });
      } catch (emailError) {
        console.error('Failed to send welcome email:', emailError);
        // Don't fail the subscription if email fails
      }

      ctx.send({
        message: 'Successfully subscribed to newsletter!',
        subscription: {
          id: subscription.id,
          email: subscription.email
        }
      });

    } catch (error) {
      console.error('Newsletter subscription error:', error);
      ctx.internalServerError('Failed to subscribe to newsletter');
    }
  },

  async unsubscribe(ctx) {
    try {
      const { email } = ctx.request.body;
      
      if (!email) {
        return ctx.badRequest('Email is required');
      }

      // Find and update subscription
      const subscriptions = await strapi.entityService.findMany('api::newsletter-subscription.newsletter-subscription', {
        filters: { email },
      });

      if (subscriptions.length === 0) {
        return ctx.notFound('Subscription not found');
      }

      await strapi.entityService.update('api::newsletter-subscription.newsletter-subscription', subscriptions[0].id, {
        data: { isActive: false }
      });

      ctx.send({ message: 'Successfully unsubscribed from newsletter' });

    } catch (error) {
      console.error('Newsletter unsubscribe error:', error);
      ctx.internalServerError('Failed to unsubscribe from newsletter');
    }
  }
}));