import type { Schema, Struct } from '@strapi/strapi';

export interface WebSeoComponent extends Struct.ComponentSchema {
  collectionName: 'components_web_seo_components';
  info: {
    displayName: 'SeoComponent';
    icon: 'stack';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    shareImage: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'web.seo-component': WebSeoComponent;
    }
  }
}
