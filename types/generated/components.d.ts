import type { Schema, Struct } from '@strapi/strapi';

export interface MapsAddress extends Struct.ComponentSchema {
  collectionName: 'components_maps_addresses';
  info: {
    description: '';
    displayName: 'address';
    icon: 'pinMap';
  };
  attributes: {
    latitude: Schema.Attribute.Float;
    location: Schema.Attribute.String;
    longitude: Schema.Attribute.Float;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'maps.address': MapsAddress;
    }
  }
}
