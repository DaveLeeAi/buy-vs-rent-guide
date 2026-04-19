import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { scenarios } from '@/config/scenarios';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { InternalLinks } from '@/components/content/InternalLinks';
import { CtaBlock } from '@/components/content/CtaBlock';
import { TrustNotice } from '@/components/content/TrustNotice';

export const metadata: Metadata = generatePageMetadata({
  title: 'Buy vs. Rent Scenarios',
  description: 'Life-situation scenarios that map to buy-or-rent guidance with decision factors and FAQ. Find the scenario closest to your situation and run the calculator with pre-filled inputs.',
  path: '/scenarios',
});

export default function ScenariosIndex() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Scenarios', href: '/scenarios' }]} />
      <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">Buy vs. Rent Scenarios</h1>

      <BlufSummary
        verdict="The right choice depends heavily on your specific life situation — not just the market. Find the scenario closest to yours and use it as a starting point for the calculator."
        context="Each scenario includes a plain-English recommendation, the key decision factors, and a FAQ tailored to that situation."
      />

      <TrustNotice />

      <InternalLinks
        heading="All scenarios"
        links={scenarios.map((s) => ({
          label: s.title,
          href: `/scenarios/${s.slug}`,
          description: s.persona,
        }))}
      />

      <InternalLinks
        heading="More context"
        links={[
          { label: 'Buy vs. Rent Calculator', href: '/buy-vs-rent', description: 'Run the numbers for your specific situation.' },
          { label: 'FAQ library', href: '/faq', description: 'Common questions across all scenarios.' },
          { label: 'Guides', href: '/guides', description: 'Step-by-step guides for buyers and renters.' },
        ]}
      />

      <CtaBlock />
    </div>
  );
}
