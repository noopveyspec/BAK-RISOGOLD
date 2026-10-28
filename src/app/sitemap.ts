import { MetadataRoute } from 'next';
import { getProducts } from '@/data/products';
import { getArticles } from '@/data/articles';
import { SITE } from '@/data/company';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;
  const products = getProducts();
  const articles = getArticles();

  const productUrls = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date('2026-10-26'),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/knowledge/${article.slug}`,
    lastModified: new Date('2026-10-26'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-10-26'),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date('2026-10-26'),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/knowledge`,
      lastModified: new Date('2026-10-26'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-10-26'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...productUrls,
    ...articleUrls,
  ];
}
