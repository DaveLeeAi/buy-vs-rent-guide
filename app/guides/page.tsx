import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { guides } from '@/config/guides';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { InternalLinks } from '@/components/content/InternalLinks';
import { CtaBlock } from '@/components/content/CtaBlock';
import { TrustNotice } from '@/components/content/TrustNotice';

export const metadata: Metadata = generatePageMetadata({
  title: 'Guides and Explainers',
  description: '20+ in-depth guides on buy-vs-rent economics, costs, and decision factors. Price-to-rent ratios, break-even math, hidden costs of buying, renter opportunity cost, and more.',
  path: '/guides',
});

export default function GuidesIndex() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides' }]} />
      <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">Guides and Explainers</h1>
      <p className="mb-6 text-base text-muted-foreground">
        Decision-focused explainers that sit behind every state and city page. Read these before you trust any calculator output.
      </p>

      <BlufSummary
        verdict="Guides explain the concepts that move your break-even year, the costs buyers and renters usually miss, and how long you really need to stay."
        context="Each guide links back into the calculator, relevant state and city pages, and the FAQ topics that go deeper on the same subject."
      />

      <TrustNotice />

      <InternalLinks
        heading="All guides"
        links={guides.map((g) => ({
          label: g.title,
          href: `/guides/${g.slug}`,
          description: g.bluf.slice(0, 90) + '...',
        }))}
      />

      <InternalLinks
        heading="Specialized step-by-step guides"
        links={[
          { label: 'Buying guide', href: '/buying-guide', description: 'Pre-approval through closing, step by step.' },
          { label: 'Renting guide', href: '/renting-guide', description: 'Lease math, tenant protections, and when renting wins.' },
          { label: 'First-time home buyer guide', href: '/first-time-home-buyer-guide', description: 'Programs, down payment, and what to expect at close.' },
          { label: 'Moving costs guide', href: '/moving-costs-guide', description: 'Local and long-distance move costs and how to cut them.' },
        ]}
      />

      <InternalLinks
        heading="Go deeper"
        links={[
          { label: 'Buy vs. Rent Calculator', href: '/buy-vs-rent', description: 'Apply guide concepts to your own numbers.' },
          { label: 'FAQ Library', href: '/faq', description: 'Topic clusters on mortgages, taxes, HOAs, and more.' },
          { label: 'Methodology', href: '/methodology', description: 'The formulas behind every guide.' },
          { label: 'Limitations', href: '/limitations', description: 'What the tool and the guides cannot tell you.' },
        ]}
      />

      <CtaBlock />
    </div>
  );
}
