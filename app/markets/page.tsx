import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { markets } from '@/config/markets';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { InternalLinks } from '@/components/content/InternalLinks';
import { CtaBlock } from '@/components/content/CtaBlock';
import { TrustNotice } from '@/components/content/TrustNotice';

export const metadata: Metadata = generatePageMetadata({
  title: 'Housing Market Briefs',
  description: 'U.S. housing market briefs grouped by price-to-rent ratio, appreciation history, tax structure, and climate risk. Find markets where buying or renting has a structural edge.',
  path: '/markets',
});

export default function MarketsIndex() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Markets', href: '/markets' }]} />
      <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">Housing Market Briefs</h1>

      <BlufSummary
        verdict="Some markets structurally favor buyers; others structurally favor renters. These briefs group metros by their underlying economics so you can quickly find markets similar to where you are looking."
        context="Each brief covers price-to-rent ratio, typical appreciation, tax burden, and a verdict on which household types the market tends to suit."
      />

      <TrustNotice />

      <InternalLinks
        heading="All market briefs"
        links={markets.map((m) => ({
          label: m.title,
          href: `/markets/${m.slug}`,
          description: m.bluf.slice(0, 90) + '...',
        }))}
      />

      <InternalLinks
        heading="Related tools"
        links={[
          { label: 'Buy vs. Rent Calculator', href: '/buy-vs-rent', description: 'Run numbers for your specific market.' },
          { label: 'State and city pages', href: '/buy-vs-rent', description: 'Local data for all 50 states and 50 cities.' },
          { label: 'Comparisons', href: '/compare', description: 'Side-by-side market comparisons.' },
        ]}
      />

      <CtaBlock />
    </div>
  );
}
