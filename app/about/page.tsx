import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { buildWebPageSchema, buildOrganizationSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { ContentBlock } from '@/components/content/ContentBlock';
import { FaqModule } from '@/components/content/FaqModule';
import { InternalLinks } from '@/components/content/InternalLinks';
import { aboutFaq } from '@/config/faqData';
import { siteConfig } from '@/config/siteConfig';

export const metadata: Metadata = generatePageMetadata({
  title: 'About',
  description:
    'Learn about BuyOrRent, an independent housing decision tool. No affiliate relationships, no hidden agendas. Transparent methodology and open-source logic.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <SchemaMarkup
        data={buildWebPageSchema(
          'About BuyOrRent',
          'Learn about our independent housing decision tool.',
          `${siteConfig.baseUrl}/about`
        )}
      />
      <SchemaMarkup data={buildOrganizationSchema()} />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />

      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        About {siteConfig.name}
      </h1>

      <BlufSummary
        verdict="BuyOrRent is an independent, unaffiliated housing decision tool. We do not accept compensation from lenders, agents, or financial service providers."
      />

      <ContentBlock heading="Our Mission">
        <p className="mb-3">
          The buy-vs-rent decision is one of the largest financial choices most
          people face. Yet most online calculators are built by companies that
          profit from one answer over the other — lenders want you to buy,
          apartment listing sites want you to rent.
        </p>
        <p>
          We built {siteConfig.name} to provide a genuinely neutral analysis.
          All assumptions are visible. All logic is open and readable. We have no
          financial incentive tied to which option the calculator recommends.
        </p>
      </ContentBlock>

      <ContentBlock heading="Editorial Independence">
        <p className="mb-3">
          {siteConfig.name} is maintained by an independent editorial team. We
          have no partnerships with mortgage lenders, real estate brokerages,
          insurance companies, or financial advisors.
        </p>
        <p className="mb-3">
          Our content is not sponsored. Our calculator results are not influenced
          by any external party. We do not collect, sell, or share personal
          financial data entered into the calculator.
        </p>
        <p>
          For full details, see our{' '}
          <Link
            href="/editorial-policy"
            className="font-medium text-teal-600 hover:underline"
          >
            Editorial Policy
          </Link>
          .
        </p>
      </ContentBlock>

      <ContentBlock heading="Methodology">
        <p className="mb-3">
          Our calculator uses standard financial formulas for mortgage
          amortization, opportunity cost analysis, and net present value
          comparison. Every assumption is documented and adjustable by the user.
        </p>
        <p>
          For a complete description of our calculation methodology, data
          sources, and assumptions, see our{' '}
          <Link
            href="/methodology"
            className="font-medium text-teal-600 hover:underline"
          >
            Methodology
          </Link>{' '}
          page.
        </p>
      </ContentBlock>

      <ContentBlock heading="Important Disclaimers">
        <p>
          This tool provides educational estimates, not financial advice. Results
          are based on approximate data and simplified models. Your actual
          financial situation involves factors this tool cannot fully capture.
          Always consult a qualified financial advisor before making major
          housing decisions. See our full{' '}
          <Link
            href="/disclaimer"
            className="font-medium text-teal-600 hover:underline"
          >
            Disclaimer
          </Link>
          .
        </p>
      </ContentBlock>

      <FaqModule items={aboutFaq} />

      <InternalLinks
        heading="Trust and transparency"
        links={[
          { label: 'Editorial Policy', href: '/editorial-policy', description: 'How we maintain independence and avoid conflicts.' },
          { label: 'Methodology', href: '/methodology', description: 'Every formula and assumption behind the calculator.' },
          { label: 'Assumptions', href: '/assumptions', description: 'All defaults and the reasoning behind each.' },
          { label: 'Data sources', href: '/data-sources', description: 'Where state and city figures come from.' },
          { label: 'Limitations', href: '/limitations', description: 'What the tool cannot know or predict.' },
          { label: 'Disclaimer', href: '/disclaimer', description: 'Legal notice on tool use.' },
          { label: 'Contact', href: '/contact', description: 'Reach our editorial team.' },
        ]}
      />
    </div>
  );
}
