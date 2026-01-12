import { Injectable } from '@angular/core';
import { SEO_CONFIG } from '../config/seo.config';

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

@Injectable({
  providedIn: 'root',
})
export class SitemapService {
  private baseUrl = 'https://devgirls.org';

  generateSitemap(): string {
    const urls: SitemapUrl[] = [
      {
        loc: this.baseUrl,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 1.0,
      },
    ];

    // Ajouter les pages configurées
    Object.values(SEO_CONFIG).forEach((config) => {
      urls.push({
        loc: `${this.baseUrl}${config.route}`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: config.route === '/home' ? 1.0 : 0.8,
      });
    });

    return this.generateXmlSitemap(urls);
  }

  private generateXmlSitemap(urls: SitemapUrl[]): string {
    const urlElements = urls
      .map(
        (url) => `
  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`
      )
      .join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
  }

  addDynamicUrl(url: SitemapUrl): void {
    // Cette méthode peut être utilisée pour ajouter des URLs dynamiques
    // Par exemple, des articles de blog ou des pages générées dynamiquement
  }
}
