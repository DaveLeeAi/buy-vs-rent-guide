import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { generatePageMetadata } from '@/lib/seo';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { buildWebPageSchema, buildSoftwareApplicationSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { TrustNotice } from '@/components/content/TrustNotice';
import { LimitationsNotice } from '@/components/content/LimitationsNotice';
import { ContentBlock } from '@/components/content/ContentBlock';
import { FaqModule } from '@/components/content/FaqModule';
import { InternalLinks } from '@/components/content/InternalLinks';
import { CalculatorShell } from '@/components/calculator/CalculatorShell';
import { nationalFaq, toolFaq } from '@/config/faqData';
import { states } from '@/config/states';
import { cities } from '@/config/cities';
import { siteConfig } from '@/config/siteConfig';

export const metadata: Metadata = generatePageMetadata({
  title: 'Buy vs. Rent Calculator',
  description:
    'Free buy vs. rent calculator with transparent assumptions. Compare the total cost of buying versus renting using local data for all 50 U.S. states and 50 city pages.',
  path: '/buy-vs-rent',
});

export default function BuyVsRentPage() {
  const stateLinks = states.map((s) => ({
    label: s.name,
    href: `/buy-vs-rent/${s.slug}`,
  }));

  const cityLinks = cities.map((c) => ({
    label: `${c.name}, ${c.stateName}`,
    href: `/buy-vs-rent/${c.stateSlug}/${c.slug}`,
  }));

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <SchemaMarkup
        data={buildWebPageSchema(
          'Buy vs. Rent Calculator',
          'Free buy vs. rent calculator covering all 50 U.S. states.',
          `${siteConfig.baseUrl}/buy-vs-rent`
        )}
      />
      <SchemaMarkup data={buildSoftwareApplicationSchema()} />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Buy vs. Rent Calculator', href: '/buy-vs-rent' },
        ]}
      />

      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Buy vs. Rent Calculator
      </h1>

      <BlufSummary
        verdict="There is no universal answer to whether you should buy or rent. The right choice depends on your local market, how long you plan to stay, and your personal financial situation."
        context="This calculator compares the total cost of buying versus renting over your chosen time horizon, including opportunity cost, appreciation, and ongoing expenses."
      />

      <TrustNotice />

      <ContentBlock heading="How to Use This Calculator">
        <p className="mb-3">
          Enter your local home price, current rent, and financial details below.
          The calculator will compare total costs over your chosen time horizon and
          show you when (or if) buying becomes the better financial option.
        </p>
        <p>
          For localized defaults, select your state or city from the links below
          the calculator. Each page pre-fills the calculator with local market data.
        </p>
      </ContentBlock>

      <CalculatorShell />

      <div className="mt-10">
        <LimitationsNotice />
      </div>

      <FaqModule
        items={nationalFaq.slice(0, 8)}
        heading="Buy vs. Rent: Key Questions"
      />

      <FaqModule
        items={toolFaq}
        heading="Using This Calculator"
      />

      <ContentBlock heading="Browse by State">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {stateLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between rounded border px-3 py-2 text-sm transition-colors hover:border-teal-300 hover:bg-teal-50/30"
            >
              <span className="text-foreground group-hover:text-teal-700">
                {link.label}
              </span>
              <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-teal-600" />
            </Link>
          ))}
        </div>
      </ContentBlock>

      <InternalLinks
        heading="Browse by City"
        links={cityLinks.map((c) => ({ ...c, description: 'Local data and calculator' }))}
      />

      <InternalLinks
        heading="Key FAQ topics for calculator users"
        links={[
          { label: 'Break-even FAQ', href: '/faq/break-even-faq', description: 'How to read and trust the break-even year output.' },
          { label: 'Mortgage rate FAQ', href: '/faq/mortgage-rate-faq', description: 'How rate changes shift the whole comparison.' },
          { label: 'Down payment FAQ', href: '/faq/down-payment-faq', description: 'Is 20% required? Opportunity cost tradeoffs.' },
          { label: 'Property tax FAQ', href: '/faq/property-tax-faq', description: 'Effective rate vs headline rate and post-sale resets.' },
          { label: 'Maintenance FAQ', href: '/faq/maintenance-faq', description: 'Realistic maintenance budgeting — often understated.' },
          { label: 'Closing cost FAQ', href: '/faq/closing-cost-faq', description: 'The costs the calculator does not show.' },
        ]}
      />

      <InternalLinks
        heading="Build context before running numbers"
        links={[
          { label: 'How This Tool Works', href: '/how-this-tool-works', description: 'Step-by-step explanation of the calculator logic.' },
          { label: 'Methodology', href: '/methodology', description: 'Data sources, assumptions, formulas, and what is excluded.' },
          { label: 'Assumptions', href: '/assumptions', description: 'Every default and why we chose it.' },
          { label: 'Limitations', href: '/limitations', description: 'What the tool cannot know or predict.' },
          { label: 'Formula glossary', href: '/formula-glossary', description: 'Definitions for every term you will see.' },
          { label: 'Data sources', href: '/data-sources', description: 'Where local market data comes from.' },
        ]}
      />

      <InternalLinks
        heading="Guides worth reading alongside the calculator"
        links={[
          { label: 'Buying Guide', href: '/buying-guide', description: 'Complete guide to purchasing a home.' },
          { label: 'Renting Guide', href: '/renting-guide', description: 'What to consider before signing a lease.' },
          { label: 'First-time Home Buyer Guide', href: '/first-time-home-buyer-guide', description: 'Programs, down payment, and the purchase process.' },
          { label: 'Moving Costs Guide', href: '/moving-costs-guide', description: 'Move costs and how to cut them.' },
        ]}
      />
    </div>
  );
}
