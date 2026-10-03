import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/services/communication',
    '/services/marketing',
    '/services/audiovisuel',
    '/services/developpement-web',
    '/services/design-graphique',
    '/services/solutions-it',
    '/services/reseau-infrastructure',
    '/services/securite-systemes',
    '/portfolio',
    '/blog',
    '/contact',
    '/team',
    '/testimonials',
    '/faq',
    '/careers',
    '/quote',
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
