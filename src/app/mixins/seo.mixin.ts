import { OnInit, OnDestroy } from '@angular/core';
import { SeoService } from '../services/seo.service';
import { SeoMetadata } from '../interfaces/seo.interface';

export interface SeoMixin extends OnInit, OnDestroy {
  seoService: SeoService;
  seoMetadata?: Partial<SeoMetadata>;
  applySeoMetadata(): void;
}

export function withSeo<T extends new (...args: any[]) => {}>(Base: T) {
  return class extends Base implements SeoMixin {
    seoService!: SeoService;
    seoMetadata?: Partial<SeoMetadata>;

    applySeoMetadata(): void {
      if (this.seoMetadata && this.seoService) {
        this.seoService.updateSeo(this.seoMetadata);
      }
    }

    ngOnInit(): void {
      if ('ngOnInit' in Base.prototype && typeof (Base.prototype as any).ngOnInit === 'function') {
        (Base.prototype as any).ngOnInit.call(this);
      }
      this.applySeoMetadata();
    }

    ngOnDestroy(): void {
      if (
        'ngOnDestroy' in Base.prototype &&
        typeof (Base.prototype as any).ngOnDestroy === 'function'
      ) {
        (Base.prototype as any).ngOnDestroy.call(this);
      }
    }
  };
}
