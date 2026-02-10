import { SeoMetadata } from '../interfaces/seo.interface';

export function SeoConfig(metadata: Partial<SeoMetadata>) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      seoMetadata = metadata;
    };
  };
}

export interface SeoConfigurable {
  seoMetadata?: Partial<SeoMetadata>;
}
