import type { Schema, Struct } from '@strapi/strapi';

export interface MetricMetrics extends Struct.ComponentSchema {
  collectionName: 'components_metric_metrics';
  info: {
    displayName: 'Metrics';
    icon: 'stack';
  };
  attributes: {
    Description: Schema.Attribute.Text;
  };
}

export interface PricingPricing extends Struct.ComponentSchema {
  collectionName: 'components_pricing_pricings';
  info: {
    description: 'Pricing options for services';
    displayName: 'Pricing';
    icon: 'dollar-sign';
  };
  attributes: {
    ctaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get Started'>;
    ctaUrl: Schema.Attribute.String;
    currency: Schema.Attribute.String & Schema.Attribute.DefaultTo<'USD'>;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Text;
    isPopular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    period: Schema.Attribute.Enumeration<
      ['one-time', 'hourly', 'daily', 'weekly', 'monthly', 'yearly']
    > &
      Schema.Attribute.DefaultTo<'one-time'>;
    price: Schema.Attribute.Decimal;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProcessProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_process_steps';
  info: {
    description: 'Steps in the service process';
    displayName: 'Process Step';
    icon: 'list';
  };
  attributes: {
    deliverables: Schema.Attribute.JSON;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    estimatedDuration: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    stepNumber: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TestimonialTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_testimonials';
  info: {
    description: 'Customer testimonials for services';
    displayName: 'Testimonial';
    icon: 'quote-right';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    clientName: Schema.Attribute.String & Schema.Attribute.Required;
    clientTitle: Schema.Attribute.String;
    company: Schema.Attribute.String;
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    projectType: Schema.Attribute.String;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'metric.metrics': MetricMetrics;
      'pricing.pricing': PricingPricing;
      'process.process-step': ProcessProcessStep;
      'testimonial.testimonial': TestimonialTestimonial;
    }
  }
}
