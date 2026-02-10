import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SEO_CONFIG } from '../../config/seo.config';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    // Appliquer les métadonnées SEO pour la page Contact
    this.seoService.updateSeo(SEO_CONFIG['contact'].metadata);
  }
}
