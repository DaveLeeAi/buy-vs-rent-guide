import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { GuideSection } from '@/components/content/GuideSection';
import { InternalLinks } from '@/components/content/InternalLinks';

export const metadata: Metadata = generatePageMetadata({
  title: 'First-Time Home Buyer Guide',
  description:
    'Guide for first-time home buyers covering programs, down payment assistance, FHA loans, common mistakes, and how to decide if you are ready to buy your first home.',
  path: '/first-time-home-buyer-guide',
});

export default function FirstTimeBuyerGuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'First-Time Buyer Guide', href: '/first-time-home-buyer-guide' },
        ]}
      />

      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        First-Time Home Buyer Guide
      </h1>

      <BlufSummary
        verdict="First-time buyers have access to programs and loan types that repeat buyers do not. Understanding these options can save you thousands in upfront and ongoing costs."
      />

      <GuideSection
        stepNumber={1}
        heading="Are You Ready to Buy?"
        callout="Readiness is not just financial. Consider job stability, relationship status, likelihood of relocation, and whether you are prepared for the responsibilities of homeownership."
      >
        <p className="mb-3">
          Before exploring programs and homes, honestly assess whether now is the
          right time. Key financial benchmarks: credit score above 620 (ideally
          700+), debt-to-income ratio below 43%, at least 3 months of expenses in
          an emergency fund after the down payment, and stable employment for 2+
          years.
        </p>
        <p>
          If you are not sure whether buying makes sense financially, use our
          calculator to compare the costs over your expected stay.
        </p>
      </GuideSection>

      <GuideSection stepNumber={2} heading="First-Time Buyer Loan Programs">
        <ul className="space-y-3">
          <li>
            <strong>FHA Loans:</strong> Require as little as 3.5% down with a
            credit score of 580+. Lower barrier to entry, but require mortgage
            insurance premiums (MIP) for the life of the loan.
          </li>
          <li>
            <strong>Conventional 97:</strong> 3% down payment conventional loans
            offered by Fannie Mae and Freddie Mac. Private mortgage insurance
            (PMI) can be removed once you reach 20% equity.
          </li>
          <li>
            <strong>VA Loans:</strong> For eligible veterans and active-duty
            military. Zero down payment, no PMI, competitive rates.
          </li>
          <li>
            <strong>USDA Loans:</strong> For eligible rural areas. Zero down
            payment, income limits apply.
          </li>
          <li>
            <strong>State and local programs:</strong> Many states offer down
            payment assistance, below-market rates, or tax credits specifically
            for first-time buyers. Check your state housing finance agency.
          </li>
        </ul>
      </GuideSection>

      <GuideSection
        stepNumber={3}
        heading="Down Payment Strategies"
        callout="Putting less than 20% down is not automatically bad. Run the numbers: the cost of PMI versus waiting years to save may favor buying sooner."
      >
        <p className="mb-3">
          You do not need 20% down to buy a home. FHA requires 3.5%,
          conventional programs start at 3%, and VA/USDA offer zero-down options.
          However, smaller down payments mean mortgage insurance costs and higher
          monthly payments.
        </p>
        <p>
          Down payment assistance programs can provide grants or low-interest
          second mortgages to cover some or all of the down payment. These vary
          significantly by state and locality.
        </p>
      </GuideSection>

      <GuideSection stepNumber={4} heading="Avoiding First-Time Buyer Mistakes">
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Not getting pre-approved before starting your search</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Focusing on the house and ignoring the neighborhood</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Forgetting about closing costs (typically 2-5% of price)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Waiving the home inspection to win a bidding war</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Not budgeting for post-purchase expenses (furniture, repairs, tools)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Buying based on emotion rather than financial analysis</span>
          </li>
        </ul>
      </GuideSection>

      <GuideSection stepNumber={5} heading="Your First-Year Budget">
        <p>
          Many first-time buyers are surprised by costs in the first year beyond
          the mortgage: appliances, lawn equipment, window treatments, minor
          repairs, and higher utility bills than apartment living. Budget an
          additional $5,000-$10,000 for first-year setup costs beyond your
          emergency fund.
        </p>
      </GuideSection>

      <InternalLinks
        heading="Related Pages"
        links={[
          { label: 'Buy vs. Rent Calculator', href: '/buy-vs-rent', description: 'Run the numbers for your situation.' },
          { label: 'Buying Guide', href: '/buying-guide', description: 'Complete buying walkthrough.' },
          { label: 'Moving Costs Guide', href: '/moving-costs-guide', description: 'Budget for the move.' },
        ]}
      />
    </div>
  );
}
