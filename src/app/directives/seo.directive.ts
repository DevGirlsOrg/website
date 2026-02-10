import { Directive, input, OnInit, OnDestroy } from '@angular/core';
import { SeoService } from '../services/seo.service';
import { SeoMetadata } from '../interfaces/seo.interface';

@Directive({
  selector: '[appSeo]',
  standalone: true,
})
export class SeoDirective implements OnInit, OnDestroy {
  readonly seoData = input<Partial<SeoMetadata>>({}, { alias: 'appSeo' });
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    if (this.seoData()) {
      this.seoService.updateSeo(this.seoData());
    }
  }

  ngOnDestroy(): void {
    // Reset to default metadata when component is destroyed
    this.seoService.updateSeo(this.seoService.getDefaultMetadata());
  }
}
