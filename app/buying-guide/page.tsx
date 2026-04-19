import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { GuideSection } from '@/components/content/GuideSection';
import { InternalLinks } from '@/components/content/InternalLinks';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Buying Guide',
  description:
    'Complete guide to buying a home. Covers budgeting, mortgage pre-approval, house hunting, making offers, inspections, closing, and common mistakes to avoid.',
  path: '/buying-guide',
});

export default function BuyingGuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Buying Guide', href: '/buying-guide' },
        ]}
      />

      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Home Buying Guide
      </h1>

      <BlufSummary
        verdict="Buying a home involves significantly more steps and costs than most people expect. This guide walks through each stage so you know what to prepare for before you start."
      />

      <GuideSection
        stepNumber={1}
        heading="Assess Your Financial Readiness"
        callout="A common rule of thumb: your total monthly housing cost should not exceed 28-30% of your gross monthly income."
      >
        <p className="mb-3">
          Before looking at homes, review your finances honestly. Check your credit
          score, calculate your debt-to-income ratio, and determine how much you
          can realistically afford for a down payment without depleting your
          emergency fund.
        </p>
        <p>
          Factor in not just the mortgage payment, but property taxes, insurance,
          maintenance (budget 1-2% of home value per year), HOA fees if
          applicable, and utilities.
        </p>
      </GuideSection>

      <GuideSection
        stepNumber={2}
        heading="Get Mortgage Pre-Approval"
        callout="Pre-approval is different from pre-qualification. Pre-approval involves a hard credit check and verified income documentation."
      >
        <p>
          Contact 2-3 lenders to compare rates and terms. Getting pre-approved
          tells you exactly how much you can borrow, strengthens your offers, and
          identifies any credit issues early. Lock your rate once you find a
          favorable one.
        </p>
      </GuideSection>

      <GuideSection stepNumber={3} heading="Search and Evaluate Homes">
        <p className="mb-3">
          Focus on location, commute, school districts, and neighborhood trends
          rather than cosmetic details. Cosmetic issues are fixable; location is
          not. Visit properties at different times of day and week.
        </p>
        <p>
          Research comparable recent sales (comps) to understand whether a home
          is priced fairly. Your agent can provide a comparative market analysis.
        </p>
      </GuideSection>

      <GuideSection
        stepNumber={4}
        heading="Make an Offer and Negotiate"
        callout="In competitive markets, your offer may need to be at or above asking price. In slower markets, there is room to negotiate."
      >
        <p>
          Your offer should be based on comps, the home condition, and market
          conditions — not the listing price alone. Include contingencies for
          inspection, appraisal, and financing to protect yourself.
        </p>
      </GuideSection>

      <GuideSection stepNumber={5} heading="Inspections and Due Diligence">
        <p className="mb-3">
          A professional home inspection costs $300-$500 and can save you tens
          of thousands. Consider additional specialized inspections for the roof,
          foundation, pests, radon, and sewer line depending on the property age
          and location.
        </p>
        <p>
          Use inspection findings to renegotiate if significant issues are
          discovered. Do not skip the inspection to win a bidding war.
        </p>
      </GuideSection>

      <GuideSection stepNumber={6} heading="Closing">
        <p className="mb-3">
          Closing costs typically run 2-5% of the purchase price and include
          lender fees, title insurance, escrow deposits, recording fees, and
          attorney fees where required. Review the Closing Disclosure carefully
          and compare it to your Loan Estimate.
        </p>
        <p>
          Do not make large purchases, change jobs, or open new credit accounts
          between pre-approval and closing — any of these can jeopardize your
          loan.
        </p>
      </GuideSection>

      <GuideSection stepNumber={7} heading="Common Mistakes to Avoid">
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Buying at the top of your pre-approval amount</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Draining your savings for the down payment</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Skipping the inspection</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Underestimating ongoing maintenance costs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Not shopping multiple lenders for the best rate</span>
          </li>
        </ul>
      </GuideSection>

      <InternalLinks
        heading="Related Pages"
        links={[
          { label: 'Buy vs. Rent Calculator', href: '/buy-vs-rent', description: 'See if buying makes sense for you.' },
          { label: 'First-Time Buyer Guide', href: '/first-time-home-buyer-guide', description: 'Extra tips for first-time buyers.' },
          { label: 'Moving Costs Guide', href: '/moving-costs-guide', description: 'Budget for the move.' },
          { label: 'Renting Guide', href: '/renting-guide', description: 'Compare with the renting path.' },
        ]}
      />
    </div>
  );
}
