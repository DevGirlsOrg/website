import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../services/seo.service';
import { SeoDirective } from '../directives/seo.directive';

@Component({
  selector: 'app-seo-example',
  standalone: true,
  imports: [SeoDirective],
  template: `
    <div [appSeo]="dynamicSeoData">
      <h1>Exemple d'utilisation SEO avancé</h1>
      <p>Ce composant démontre différentes façons d'utiliser le système SEO.</p>

      <button (click)="updateSeoForArticle()">Simuler un article</button>
      <button (click)="updateSeoForEvent()">Simuler un événement</button>
      <button (click)="addBreadcrumbs()">Ajouter fil d'Ariane</button>
    </div>
  `,
  styles: [
    `
      button {
        margin: 10px;
        padding: 10px 20px;
        background: #6366f1;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      button:hover {
        background: #4f46e5;
      }
    `,
  ],
})
export class SeoExampleComponent implements OnInit {
  private seoService = inject(SeoService);

  dynamicSeoData = {
    title: 'Exemple SEO - DevGirls',
    description: 'Démonstration du système SEO DevGirls',
  };

  ngOnInit(): void {
    // SEO de base pour la page d'exemple
    this.seoService.updateSeo({
      title: 'Exemple SEO - DevGirls',
      description: 'Page de démonstration du système SEO robuste de DevGirls',
      keywords: ['SEO', 'DevGirls', 'exemple', 'démonstration'],
      ogType: 'website',
    });
  }

  updateSeoForArticle(): void {
    // Exemple pour un article de blog
    const articleData = this.seoService.generateArticleStructuredData({
      headline: 'Comment débuter en développement web',
      description:
        'Guide complet pour les femmes qui souhaitent se lancer dans le développement web',
      author: 'DevGirls Team',
      datePublished: new Date().toISOString(),
      image: '/assets/images/article-dev-web.jpg',
      url: 'https://devgirls.org/blog/debuter-developpement-web',
    });

    this.seoService.updateSeo({
      title: 'Comment débuter en développement web - DevGirls Blog',
      description:
        'Guide complet pour les femmes qui souhaitent se lancer dans le développement web. Conseils, ressources et étapes clés.',
      keywords: ['développement web', 'débutant', 'femmes tech', 'guide'],
      ogType: 'article',
      ogImage: '/assets/images/article-dev-web.jpg',
      structuredData: articleData,
    });

    // Mettre à jour les données dynamiques pour la directive
    this.dynamicSeoData = {
      title: 'Article: Comment débuter en développement web',
      description: 'Guide complet pour débuter en développement web',
    };
  }

  updateSeoForEvent(): void {
    // Exemple pour un événement
    const eventData = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'Workshop DevGirls: Introduction à React',
      description: "Atelier d'introduction à React pour les développeuses débutantes",
      startDate: '2024-02-15T18:00:00+01:00',
      endDate: '2024-02-15T21:00:00+01:00',
      location: {
        '@type': 'Place',
        name: 'DevGirls Hub',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Rue de la Tech',
          addressLocality: 'Paris',
          addressCountry: 'FR',
        },
      },
      organizer: {
        '@type': 'Organization',
        name: 'DevGirls',
        url: 'https://devgirls.org',
      },
    };

    this.seoService.updateSeo({
      title: 'Workshop React - DevGirls Events',
      description:
        "Rejoignez notre atelier d'introduction à React spécialement conçu pour les développeuses débutantes.",
      keywords: ['workshop', 'React', 'DevGirls', 'événement', 'formation'],
      ogType: 'website',
      ogImage: '/assets/images/workshop-react.jpg',
      structuredData: eventData,
    });

    this.dynamicSeoData = {
      title: 'Événement: Workshop React',
      description: "Atelier d'introduction à React pour développeuses",
    };
  }

  addBreadcrumbs(): void {
    // Exemple de fil d'Ariane
    const breadcrumbs = [
      { name: 'Accueil', url: 'https://devgirls.org' },
      { name: 'Exemples', url: 'https://devgirls.org/examples' },
      { name: 'SEO Avancé', url: 'https://devgirls.org/examples/seo' },
    ];

    const breadcrumbData = this.seoService.generateBreadcrumbStructuredData(breadcrumbs);
    this.seoService.addStructuredData(breadcrumbData);

    this.dynamicSeoData = {
      title: "SEO avec fil d'Ariane",
      description: "Exemple d'implémentation du fil d'Ariane",
    };
  }
}
