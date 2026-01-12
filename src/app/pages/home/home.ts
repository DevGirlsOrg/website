import { Component, OnInit, inject } from '@angular/core';
import { Hero } from './hero/hero';
import { Mentors } from './mentors/mentors';
import { Events } from './events/events';
import { FutureEvents } from './future-events/future-events';
import { ContactForm } from '../../components/contact-form/contact-form';
import { SeoService } from '../../services/seo.service';
import { SEO_CONFIG } from '../../config/seo.config';

@Component({
  selector: 'app-home',
  imports: [Hero, Mentors, Events, FutureEvents, ContactForm],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    // Appliquer les métadonnées SEO pour la page d'accueil
    this.seoService.updateSeo(SEO_CONFIG['home'].metadata);

    // Ajouter les données structurées de l'organisation
    this.seoService.addOrganizationStructuredData();
  }
}
