import { MetadataRoute } from 'next';
import { mockArticles } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dadoseprivacidade.com.br';

  const staticPages = [
    '',
    '/conteudos',
    '/politica-de-privacidade',
    '/termos-de-uso',
    '/politica-editorial',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const articlePages = mockArticles.map((article) => ({
    url: `${baseUrl}/conteudos/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...articlePages];
}
