import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { comparisons } from '@/config/comparisons';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { InternalLinks } from '@/components/content/InternalLinks';
import { CtaBlock } from '@/components/content/CtaBlock';
import { TrustNotice } from '@/components/content/TrustNotice';

export const metadata: Metadata = generatePageMetadata({
  title: 'Housing Market Comparisons',
  description: 'Side-by-side buy vs. rent comparisons across states, cities, and urban vs. suburban markets. See how price-to-rent ratios, appreciation, and local conditions differ.',
  path: '/compare',
});

export default function ComparePage() {
  const byKind = {
    'state-vs-state': comparisons.filter((c) => c.kind === 'state-vs-state'),
    'city-vs-city': comparisons.filter((c) => c.kind === 'city-vs-city'),
    'urban-vs-suburban': comparisons.filter((c) => c.kind === 'urban-vs-suburban'),
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Compare', href: '/compare' }]} />
      <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">Housing Market Comparisons</h1>

      <BlufSummary
        verdict="Markets vary enormously. A ratio that makes buying look attractive in one city can make renting look attractive in another. These comparisons put local data side by side so you can see what is actually different."
        context="Each comparison covers price-to-rent ratio, appreciation history, tax burden, and a plain-English verdict on which option tends to win — and for whom."
      />

      <TrustNotice />

      {(Object.entries(byKind) as [keyof typeof byKind, typeof comparisons][]).map(([kind, list]) => (
        <InternalLinks
          key={kind}
          heading={kind.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
          links={list.map((c) => ({
            label: c.title.replace(': Buy or Rent?', ''),
            href: `/compare/${c.slug}`,
            description: c.subtitle,
          }))}
        />
      ))}

      <InternalLinks
        heading="Dig deeper"
        links={[
          { label: 'State pages', href: '/buy-vs-rent', description: 'All 50 states with local data and calculator.' },
          { label: 'FAQ library', href: '/faq', description: 'Core questions on every aspect of the decision.' },
          { label: 'Methodology', href: '/methodology', description: 'How these comparisons are built.' },
        ]}
      />

      <CtaBlock />
    </div>
  );
}
