import { Component, OnInit, inject } from '@angular/core';
import { Mentors } from './components/mentors/mentors';
import { Events } from './components/events/events';
import { FutureEvents } from './components/future-events/future-events';
import { ContactForm } from '../../components/contact-form/contact-form';
import { SeoService } from '../../services/seo.service';
import { SEO_CONFIG } from '../../config/seo.config';
import { Hero } from './components/hero/hero';

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
