import { MetadataRoute } from 'next';
import { states } from '@/config/states';
import { cities } from '@/config/cities';
import { siteConfig } from '@/config/siteConfig';
import { comparisons } from '@/config/comparisons';
import { scenarios } from '@/config/scenarios';
import { guides } from '@/config/guides';
import { faqClusters } from '@/config/faqClusters';
import { costs } from '@/config/costs';
import { markets } from '@/config/markets';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl;
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/buy-vs-rent`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/editorial-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/methodology`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/disclaimer`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/how-this-tool-works`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/renting-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/buying-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/first-time-home-buyer-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/moving-costs-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const statePages: MetadataRoute.Sitemap = states.map((state) => ({
    url: `${base}/buy-vs-rent/${state.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${base}/buy-vs-rent/${city.stateSlug}/${city.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const mkEntries = (base2: string, slugs: string[], priority = 0.6): MetadataRoute.Sitemap =>
    slugs.map((slug) => ({
      url: `${base}/${base2}/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority,
    }));

  const familyIndexes: MetadataRoute.Sitemap = [
    { url: `${base}/compare`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/scenarios`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/costs`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/markets`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const comparisonPages = mkEntries('compare', comparisons.map((c) => c.slug), 0.7);
  const scenarioPages = mkEntries('scenarios', scenarios.map((s) => s.slug), 0.7);
  const guidePages = mkEntries('guides', guides.map((g) => g.slug), 0.6);
  const faqClusterPages = mkEntries('faq', faqClusters.map((f) => f.slug), 0.6);
  const costsPages = mkEntries('costs', costs.map((c) => c.slug), 0.6);
  const marketsPages = mkEntries('markets', markets.map((m) => m.slug), 0.6);

  return [
    ...staticPages,
    ...familyIndexes,
    ...statePages,
    ...cityPages,
    ...comparisonPages,
    ...scenarioPages,
    ...guidePages,
    ...faqClusterPages,
    ...costsPages,
    ...marketsPages,
  ];
}
