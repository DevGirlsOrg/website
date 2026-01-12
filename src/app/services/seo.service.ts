import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { SeoMetadata, OrganizationData } from '../interfaces/seo.interface';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private defaultMetadata: SeoMetadata = {
    title: 'DevGirls - Communauté Tech Féminine',
    description:
      'DevGirls est une communauté dynamique dédiée à encourager et soutenir les femmes voulant ou exerçant dans le domaine de la tech.',
    keywords: ['tech', 'femmes', 'développement', 'programmation', 'communauté', 'DevGirls'],
    author: 'DevGirls Community',
    robots: 'index, follow',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    lang: 'fr',
  };

  private organizationData: OrganizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevGirls',
    description: 'Communauté dynamique dédiée à encourager et soutenir les femmes dans la tech',
    url: 'https://devgirls.org',
    logo: 'https://devgirls.org/assets/logo.png',
    sameAs: [
      'https://twitter.com/devgirls',
      'https://linkedin.com/company/devgirls',
      'https://github.com/devgirls',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@devgirls.org',
    },
  };

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.initializeRouteListener();
  }

  private initializeRouteListener(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateCanonicalUrl(event.url);
      });
  }

  updateSeo(metadata: Partial<SeoMetadata>): void {
    const finalMetadata = { ...this.defaultMetadata, ...metadata };

    // Title
    this.title.setTitle(finalMetadata.title);

    // Basic meta tags
    this.meta.updateTag({ name: 'description', content: finalMetadata.description });
    this.meta.updateTag({ name: 'keywords', content: finalMetadata.keywords?.join(', ') || '' });
    this.meta.updateTag({
      name: 'author',
      content: finalMetadata.author || this.defaultMetadata.author!,
    });
    this.meta.updateTag({
      name: 'robots',
      content: finalMetadata.robots || this.defaultMetadata.robots!,
    });

    // Language
    if (finalMetadata.lang) {
      this.document.documentElement.lang = finalMetadata.lang;
    }

    // Open Graph tags
    this.meta.updateTag({
      property: 'og:title',
      content: finalMetadata.ogTitle || finalMetadata.title,
    });
    this.meta.updateTag({
      property: 'og:description',
      content: finalMetadata.ogDescription || finalMetadata.description,
    });
    this.meta.updateTag({ property: 'og:type', content: finalMetadata.ogType || 'website' });

    if (finalMetadata.ogImage) {
      this.meta.updateTag({ property: 'og:image', content: finalMetadata.ogImage });
    }

    if (finalMetadata.ogUrl) {
      this.meta.updateTag({ property: 'og:url', content: finalMetadata.ogUrl });
    }

    // Twitter Card tags
    this.meta.updateTag({
      name: 'twitter:card',
      content: finalMetadata.twitterCard || 'summary_large_image',
    });

    if (finalMetadata.twitterSite) {
      this.meta.updateTag({ name: 'twitter:site', content: finalMetadata.twitterSite });
    }

    if (finalMetadata.twitterCreator) {
      this.meta.updateTag({ name: 'twitter:creator', content: finalMetadata.twitterCreator });
    }

    this.meta.updateTag({
      name: 'twitter:title',
      content: finalMetadata.twitterTitle || finalMetadata.title,
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: finalMetadata.twitterDescription || finalMetadata.description,
    });

    if (finalMetadata.twitterImage) {
      this.meta.updateTag({ name: 'twitter:image', content: finalMetadata.twitterImage });
    }

    // Canonical URL
    if (finalMetadata.canonical) {
      this.updateCanonicalUrl(finalMetadata.canonical);
    }

    // Structured Data
    if (finalMetadata.structuredData) {
      this.addStructuredData(finalMetadata.structuredData);
    }
  }

  private updateCanonicalUrl(url: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const head = this.document.getElementsByTagName('head')[0];
    let canonicalLink = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

    if (!canonicalLink) {
      canonicalLink = this.document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      head.appendChild(canonicalLink);
    }

    const baseUrl = this.document.location.origin;
    canonicalLink.setAttribute('href', `${baseUrl}${url}`);
  }

  addStructuredData(data: any): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const head = this.document.getElementsByTagName('head')[0];

    // Remove existing structured data
    const existingScript = this.document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    head.appendChild(script);
  }

  addOrganizationStructuredData(): void {
    this.addStructuredData(this.organizationData);
  }

  generateBreadcrumbStructuredData(breadcrumbs: { name: string; url: string }[]): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };
  }

  generateArticleStructuredData(article: {
    headline: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    image?: string;
    url: string;
  }): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.headline,
      description: article.description,
      author: {
        '@type': 'Person',
        name: article.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'DevGirls',
        logo: {
          '@type': 'ImageObject',
          url: 'https://devgirls.org/assets/logo.png',
        },
      },
      datePublished: article.datePublished,
      dateModified: article.dateModified || article.datePublished,
      image: article.image,
      url: article.url,
    };
  }

  getDefaultMetadata(): SeoMetadata {
    return { ...this.defaultMetadata };
  }

  updateOrganizationData(data: Partial<OrganizationData>): void {
    this.organizationData = { ...this.organizationData, ...data };
  }
}
