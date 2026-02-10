# Guide SEO - DevGirls Website

## Vue d'ensemble

Ce système SEO robuste et moderne permet aux développeurs d'implémenter facilement des métadonnées SEO optimisées pour chaque page du site DevGirls.

## Architecture

### Fichiers principaux

- `interfaces/seo.interface.ts` - Définitions TypeScript pour les métadonnées SEO
- `services/seo.service.ts` - Service centralisé pour la gestion SEO
- `services/sitemap.service.ts` - Génération automatique du sitemap
- `config/seo.config.ts` - Configuration SEO par page
- `directives/seo.directive.ts` - Directive pour application simple du SEO
- `decorators/seo.decorator.ts` - Décorateur pour les composants
- `mixins/seo.mixin.ts` - Mixin pour étendre les composants

## Utilisation

### 1. Méthode recommandée : Injection de service

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SEO_CONFIG } from '../../config/seo.config';

@Component({
  selector: 'app-example',
  templateUrl: './example.html',
})
export class ExampleComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    // Utiliser la configuration prédéfinie
    this.seoService.updateSeo(SEO_CONFIG['home'].metadata);

    // Ou définir des métadonnées personnalisées
    this.seoService.updateSeo({
      title: 'Titre personnalisé',
      description: 'Description personnalisée',
      keywords: ['mot-clé1', 'mot-clé2'],
      ogImage: '/assets/images/custom-image.jpg',
    });
  }
}
```

### 2. Utilisation avec directive

```html
<div
  [appSeo]="{
  title: 'Titre de la page',
  description: 'Description de la page',
  keywords: ['tech', 'femmes', 'développement']
}"
>
  <!-- Contenu de la page -->
</div>
```

### 3. Utilisation avec décorateur

```typescript
import { SeoConfig } from '../../decorators/seo.decorator';

@SeoConfig({
  title: 'Page avec décorateur',
  description: 'Description via décorateur',
})
@Component({
  selector: 'app-decorated',
  templateUrl: './decorated.html',
})
export class DecoratedComponent {
  // Le SEO sera appliqué automatiquement
}
```

## Configuration des pages

### Ajouter une nouvelle page

1. Ouvrir `src/app/config/seo.config.ts`
2. Ajouter la configuration de la nouvelle page :

```typescript
export const SEO_CONFIG = {
  // ... pages existantes
  'nouvelle-page': {
    route: '/nouvelle-page',
    metadata: {
      title: 'Titre de la nouvelle page - DevGirls',
      description: 'Description de la nouvelle page',
      keywords: ['mots-clés', 'pertinents'],
      ogTitle: 'Titre Open Graph',
      ogDescription: 'Description Open Graph',
      ogImage: '/assets/images/nouvelle-page-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Nouvelle Page',
        description: 'Description de la nouvelle page',
      },
    },
  },
};
```

## Données structurées

### Organisation (automatique)

Le service SEO ajoute automatiquement les données structurées de l'organisation DevGirls.

### Articles de blog

```typescript
const articleData = this.seoService.generateArticleStructuredData({
  headline: "Titre de l'article",
  description: "Description de l'article",
  author: "Nom de l'auteur",
  datePublished: '2024-01-15',
  dateModified: '2024-01-16',
  image: '/assets/images/article-image.jpg',
  url: 'https://devgirls.org/blog/article-slug',
});

this.seoService.addStructuredData(articleData);
```

### Fil d'Ariane

```typescript
const breadcrumbs = [
  { name: 'Accueil', url: 'https://devgirls.org' },
  { name: 'Blog', url: 'https://devgirls.org/blog' },
  { name: 'Article', url: 'https://devgirls.org/blog/article' },
];

const breadcrumbData = this.seoService.generateBreadcrumbStructuredData(breadcrumbs);
this.seoService.addStructuredData(breadcrumbData);
```

## Métadonnées disponibles

### Métadonnées de base

- `title` - Titre de la page
- `description` - Description de la page
- `keywords` - Mots-clés (array)
- `author` - Auteur
- `robots` - Instructions pour les robots
- `canonical` - URL canonique
- `lang` - Langue de la page

### Open Graph

- `ogTitle` - Titre Open Graph
- `ogDescription` - Description Open Graph
- `ogImage` - Image Open Graph
- `ogUrl` - URL Open Graph
- `ogType` - Type de contenu

### Twitter Card

- `twitterCard` - Type de carte Twitter
- `twitterSite` - Compte Twitter du site
- `twitterCreator` - Compte Twitter de l'auteur
- `twitterTitle` - Titre Twitter
- `twitterDescription` - Description Twitter
- `twitterImage` - Image Twitter

## Bonnes pratiques

### Titres

- Maximum 60 caractères
- Inclure le nom de la marque "DevGirls"
- Être descriptif et unique

### Descriptions

- Entre 150-160 caractères
- Inclure les mots-clés principaux
- Inciter à l'action

### Images

- Format recommandé : 1200x630px pour Open Graph
- Format recommandé : 1200x600px pour Twitter Card
- Optimiser la taille des fichiers
- Utiliser des images pertinentes

### Mots-clés

- 3-5 mots-clés principaux par page
- Éviter la sur-optimisation
- Utiliser des mots-clés pertinents pour DevGirls

## Outils de validation

### Tester les métadonnées

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

### Vérifier le SEO

- Google Search Console
- Google PageSpeed Insights
- Lighthouse (intégré dans Chrome DevTools)

## Maintenance

### Mise à jour des métadonnées par défaut

Modifier `src/app/services/seo.service.ts` dans la propriété `defaultMetadata`.

### Mise à jour des données d'organisation

Modifier `src/app/services/seo.service.ts` dans la propriété `organizationData`.

### Génération du sitemap

Le sitemap est généré automatiquement basé sur `SEO_CONFIG`. Pour l'exposer :

```typescript
// Dans un contrôleur ou service
constructor(private sitemapService: SitemapService) {}

generateSitemap(): string {
  return this.sitemapService.generateSitemap();
}
```

## Support et questions

Pour toute question sur l'implémentation SEO, consulter :

1. Cette documentation
2. Les exemples dans les composants existants
3. L'équipe technique DevGirls
