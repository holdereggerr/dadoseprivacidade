import { MetadataRoute } from 'next';
import { INITIAL_ARTICLES } from '@/data/articles';
import { CASE_STUDIES } from '@/data/cases';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://perito.tec.br';

  const staticPages = [
    '',
    '/artigos',
    '/computacao-forense',
    '/resiliencia-digital',
    '/inteligencia-artificial',
    '/shadow-ai',
    '/lgpd-eca-digital',
    '/casos',
    '/executive-briefing',
    '/academy',
    '/sobre',
    '/politica-de-privacidade',
    '/termos-de-uso',
    '/contato',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const articlePages = INITIAL_ARTICLES.map((article) => ({
    url: `${baseUrl}/artigos/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const casePages = CASE_STUDIES.map((c) => ({
    url: `${baseUrl}/casos/${c.slug}`,
    lastModified: new Date(c.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...articlePages, ...casePages];
}
