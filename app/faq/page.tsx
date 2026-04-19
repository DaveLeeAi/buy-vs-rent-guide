import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { FaqModule } from '@/components/content/FaqModule';
import { InternalLinks } from '@/components/content/InternalLinks';
import { nationalFaq, toolFaq, aboutFaq } from '@/config/faqData';
import { faqClusters } from '@/config/faqClusters';

export const metadata: Metadata = generatePageMetadata({
  title: 'Buy vs. Rent FAQ — 30+ Questions Answered',
  description:
    'Plain-English answers to 30+ questions on buying vs. renting — decision basics, calculator mechanics, mortgages, taxes, HOA fees, closing costs, and more. Plus 22 topic FAQ clusters.',
  path: '/faq',
});

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'FAQ', href: '/faq' },
        ]}
      />

      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Buy vs. Rent FAQ
      </h1>

      <BlufSummary
        verdict="Plain-English answers to the questions buyers and renters actually ask — decision basics, the math, and how to read calculator output."
        context={`${nationalFaq.length + toolFaq.length + aboutFaq.length} questions answered here. Deeper topic clusters covering mortgages, taxes, HOA fees, closing costs, and more are linked below.`}
      />

      <FaqModule items={nationalFaq} heading="Buy vs. Rent Questions" />

      <FaqModule items={toolFaq} heading="Calculator Questions" />

      <FaqModule items={aboutFaq} heading="About This Site" />

      <InternalLinks
        heading="Topic FAQ clusters"
        links={faqClusters.map((c) => ({
          label: c.title,
          href: `/faq/${c.slug}`,
          description: c.intro.slice(0, 100) + (c.intro.length > 100 ? '...' : ''),
        }))}
      />

      <InternalLinks
        heading="Use this with the calculator"
        links={[
          { label: 'Buy vs. Rent Calculator', href: '/buy-vs-rent', description: 'Run the numbers with your own inputs.' },
          { label: 'Methodology', href: '/methodology', description: 'How the calculator actually works.' },
          { label: 'Assumptions', href: '/assumptions', description: 'Default inputs and why we chose them.' },
          { label: 'Limitations', href: '/limitations', description: 'What the tool cannot know.' },
          { label: 'How This Tool Works', href: '/how-this-tool-works', description: 'Step-by-step walkthrough.' },
          { label: 'Guides', href: '/guides', description: 'Deeper explainers on buying and renting.' },
        ]}
      />
    </div>
  );
}
