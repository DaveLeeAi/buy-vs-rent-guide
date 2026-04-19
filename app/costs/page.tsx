import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { costs } from '@/config/costs';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { InternalLinks } from '@/components/content/InternalLinks';
import { CtaBlock } from '@/components/content/CtaBlock';
import { TrustNotice } from '@/components/content/TrustNotice';

export const metadata: Metadata = generatePageMetadata({
  title: 'Housing Cost Guides',
  description: 'Transparent cost breakdowns for buying, renting, and moving. What each cost actually includes, how it varies by market, and how to estimate it accurately for your situation.',
  path: '/costs',
});

export default function CostsIndex() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Costs', href: '/costs' }]} />
      <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">Housing Cost Guides</h1>

      <BlufSummary
        verdict="Most people underestimate the real cost of both buying and renting. These guides break down every cost category with honest ranges so your comparison is accurate before you run any numbers."
        context="Each guide covers what the cost includes, how it varies by market and property type, and what to watch out for."
      />

      <TrustNotice />

      <InternalLinks
        heading="All cost guides"
        links={costs.map((c) => ({
          label: c.title,
          href: `/costs/${c.slug}`,
          description: c.bluf.slice(0, 90) + '...',
        }))}
      />

      <InternalLinks
        heading="Related resources"
        links={[
          { label: 'Assumptions', href: '/assumptions', description: 'The default cost rates the calculator uses.' },
          { label: 'Formula glossary', href: '/formula-glossary', description: 'Definitions for every cost term.' },
          { label: 'Limitations', href: '/limitations', description: 'What costs the calculator does not model.' },
          { label: 'Calculator', href: '/buy-vs-rent', description: 'Run numbers with your cost estimates.' },
        ]}
      />

      <CtaBlock />
    </div>
  );
}
