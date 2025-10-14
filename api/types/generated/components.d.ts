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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'metric.metrics': MetricMetrics;
    }
  }
}
