import { PageSeoConfig } from '../interfaces/seo.interface';

export const SEO_CONFIG: { [key: string]: PageSeoConfig } = {
  home: {
    route: '/home',
    metadata: {
      title: 'DevGirls - Communauté Tech Féminine | Accueil',
      description:
        'Rejoignez DevGirls, la communauté dynamique qui encourage et soutient les femmes dans la tech. Découvrez nos événements, formations et opportunités.',
      keywords: [
        'DevGirls',
        'communauté tech',
        'femmes développeuses',
        'programmation',
        'événements tech',
        'formation',
      ],
      ogTitle: 'DevGirls - Communauté Tech Féminine',
      ogDescription: 'La communauté qui encourage et soutient les femmes dans la tech',
      ogType: 'website',
      twitterCard: 'summary_large_image',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'DevGirls',
        description: 'Communauté dynamique dédiée à encourager et soutenir les femmes dans la tech',
        url: 'https://devgirls.org',
      },
    },
  },
  about: {
    route: '/about',
    metadata: {
      title: 'À Propos - DevGirls | Notre Mission et Vision',
      description:
        "Découvrez l'histoire de DevGirls, notre mission pour soutenir les femmes dans la tech et notre vision d'un secteur plus inclusif.",
      keywords: [
        'DevGirls',
        'à propos',
        'mission',
        'vision',
        'inclusion tech',
        'femmes développeuses',
      ],
      ogTitle: 'À Propos de DevGirls - Notre Mission',
      ogDescription: 'Découvrez notre mission pour soutenir les femmes dans la tech',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'À Propos - DevGirls',
        description: 'Page à propos de la communauté DevGirls',
      },
    },
  },
  contact: {
    route: '/contact',
    metadata: {
      title: 'Contact - DevGirls | Nous Contacter',
      description:
        "Contactez l'équipe DevGirls pour toute question, suggestion ou pour rejoindre notre communauté tech féminine.",
      keywords: ['DevGirls', 'contact', 'nous contacter', 'rejoindre', 'communauté tech'],
      ogTitle: 'Contactez DevGirls',
      ogDescription: 'Contactez notre équipe pour rejoindre la communauté',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact - DevGirls',
        description: 'Page de contact de DevGirls',
      },
    },
  },
};

export const DEFAULT_SEO_IMAGES = {
  ogImage: '/assets/images/devgirls-og-image.png',
  twitterImage: '/assets/images/devgirls-twitter-card.jpg',
  logo: '/assets/images/devgirls-logo.png',
};

export const SOCIAL_LINKS = {
  twitter: '@devgirls_org',
  linkedin: 'https://www.linkedin.com/company/dev-girls-com',
  github: 'https://github.com/DevGirlsOrg',
  instagram: 'https://instagram.com/devgirls_org',
};
