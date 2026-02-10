import { Component, OnInit, inject } from '@angular/core';
import { Team } from './components/team/team';
import { Galery } from './components/galery/galery';
import { ContactForm } from '../../components/contact-form/contact-form';
import { SeoService } from '../../services/seo.service';
import { SEO_CONFIG } from '../../config/seo.config';
import { SeoConfig } from '../../decorators/seo.decorator';

@Component({
  selector: 'app-about',
  imports: [Team, Galery, ContactForm],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
@SeoConfig({
  title: 'À propos - DevGirl',
  description: 'Découvrez l\'histoire et les valeurs de DevGirl',
})
export class About implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    // Appliquer les métadonnées SEO pour la page À propos
    this.seoService.updateSeo(SEO_CONFIG['about'].metadata);
  }
}
