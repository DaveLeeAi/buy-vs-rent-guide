import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { GuideSection } from '@/components/content/GuideSection';
import { LimitationsNotice } from '@/components/content/LimitationsNotice';
import { InternalLinks } from '@/components/content/InternalLinks';

export const metadata: Metadata = generatePageMetadata({
  title: 'How This Tool Works',
  description:
    'Step-by-step explanation of how the BuyOrRent calculator works. Understand every assumption and how the buy vs. rent comparison is made.',
  path: '/how-this-tool-works',
});

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'How This Tool Works', href: '/how-this-tool-works' },
        ]}
      />

      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        How This Tool Works
      </h1>

      <BlufSummary
        verdict="The calculator compares two scenarios side by side: buying a home with a mortgage, or renting and investing the money you would have spent on a down payment. It shows which option builds more wealth over your chosen time horizon."
      />

      <GuideSection
        stepNumber={1}
        heading="You Enter Your Numbers"
        callout="If you select a state or city page, the calculator pre-fills with local market data. You can override any value."
      >
        <p>
          Start by entering (or accepting the defaults for) your home price,
          rent, down payment, mortgage rate, and time horizon. The calculator
          also accepts property tax rate, HOA fees, maintenance rate, and
          assumptions about appreciation, rent increases, and investment returns.
        </p>
      </GuideSection>

      <GuideSection
        stepNumber={2}
        heading="The Calculator Models Both Scenarios"
      >
        <p className="mb-3">
          <strong>Buying scenario:</strong> You put down a down payment and take
          out a mortgage. Each month you pay your mortgage, property taxes,
          insurance, maintenance, and HOA. Your home value grows at the
          appreciation rate you specified.
        </p>
        <p>
          <strong>Renting scenario:</strong> Instead of buying, you invest the
          down payment amount. Each month you pay rent (which increases annually).
          If your rent is lower than the total cost of buying, the monthly savings
          are also invested.
        </p>
      </GuideSection>

      <GuideSection
        stepNumber={3}
        heading="Year-by-Year Comparison"
      >
        <p>
          For each year of your time horizon, the calculator tracks: cumulative
          costs for both scenarios, your home equity (home value minus remaining
          mortgage), and your investment portfolio value. These are plotted on a
          chart so you can see when (or if) buying overtakes renting.
        </p>
      </GuideSection>

      <GuideSection
        stepNumber={4}
        heading="The Result: Net Worth Comparison"
        callout="The break-even year is the point at which buying becomes the better financial choice. If there is no break-even within your time horizon, renting remains ahead."
      >
        <p>
          At the end of your time horizon, the calculator compares the buyer{"'"}s
          home equity against the renter{"'"}s investment portfolio. The difference is
          your projected net worth gap. The calculator also identifies the
          break-even year and provides a plain-language verdict.
        </p>
      </GuideSection>

      <GuideSection
        stepNumber={5}
        heading="Interpreting the Results"
      >
        <p className="mb-3">
          If the numbers are close (within a few percent), non-financial factors
          should drive your decision: stability, flexibility, neighborhood
          preference, life plans.
        </p>
        <p>
          If one option is clearly cheaper over your time horizon, that is a
          strong financial signal. But remember: this is an estimate, not a
          prediction. Actual results depend on factors no calculator can foresee.
        </p>
      </GuideSection>

      <LimitationsNotice />

      <InternalLinks
        heading="Go deeper on how the calculator works"
        links={[
          { label: 'Methodology', href: '/methodology', description: 'Every formula spelled out with includes and excludes.' },
          { label: 'Assumptions', href: '/assumptions', description: 'All defaults and when to override them.' },
          { label: 'Formula glossary', href: '/formula-glossary', description: 'Plain-English definitions for every term.' },
          { label: 'Limitations', href: '/limitations', description: 'What the tool cannot know or predict.' },
          { label: 'Data sources', href: '/data-sources', description: 'Where state and city figures come from.' },
        ]}
      />
      <InternalLinks
        heading="Run your numbers"
        links={[
          { label: 'Buy vs. Rent Calculator', href: '/buy-vs-rent', description: 'National calculator with your own inputs.' },
          { label: 'FAQ library', href: '/faq', description: 'Common questions on buying, renting, and break-even.' },
          { label: 'Guides', href: '/guides', description: 'Deeper explainers on every part of the decision.' },
        ]}
      />
    </div>
  );
}
