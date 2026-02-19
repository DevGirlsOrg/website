import { Component, OnInit, inject } from '@angular/core';
import { ContactForm } from '../../components/contact-form/contact-form';
import { SEO_CONFIG } from '../../config/seo.config';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  imports: [ContactForm],
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
