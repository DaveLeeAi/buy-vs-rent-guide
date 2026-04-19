export const siteConfig = {
  name: 'BuyOrRent',
  tagline: 'Make smarter housing decisions with transparent data.',
  description:
    'Free, independent Buy vs. Rent calculator and decision hub. Compare the true cost of buying versus renting across all 50 states, 50 city pages, and 20+ guides. No ads, no affiliate links.',
  baseUrl: 'https://buyorrent.com',
  org: {
    name: 'BuyOrRent Editorial Team',
    type: 'Organization' as const,
    description:
      'An independent editorial team focused on transparent housing finance education.',
  },
  lastUpdated: '2025-04-19',
} as const;

export type SiteConfig = typeof siteConfig;
