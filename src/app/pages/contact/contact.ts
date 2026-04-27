import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SEO_CONFIG } from '../../config/seo.config';
import { ContactForm } from '../../components/contact-form/contact-form';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-contact',
  imports: [Header, ContactForm],
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
