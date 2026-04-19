import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { ContentBlock } from '@/components/content/ContentBlock';
import { TrustNotice } from '@/components/content/TrustNotice';
import { InternalLinks } from '@/components/content/InternalLinks';

export const metadata: Metadata = generatePageMetadata({
  title: 'Formula Glossary',
  description:
    'Plain-English definitions for every term, ratio, and formula the buy vs. rent calculator uses.',
  path: '/formula-glossary',
});

export default function FormulaGlossaryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Formula glossary', href: '/formula-glossary' },
        ]}
      />

      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Formula glossary
      </h1>

      <BlufSummary verdict="Every term the calculator uses, defined in plain language. Use this page when a number in the output is not immediately obvious." />

      <TrustNotice />

      <ContentBlock heading="Ratios and screening metrics">
        <ul className="space-y-3 text-sm">
          <li>
            <strong>Price-to-rent ratio.</strong> Median home price divided by annual rent for a comparable property. Under 15 favors buying; 15-20 is mixed; over 20 favors renting as a starting screen.
          </li>
          <li>
            <strong>Effective property tax rate.</strong> Annual tax paid divided by current market value. Use this, not the headline mill rate, when comparing metros.
          </li>
          <li>
            <strong>Break-even horizon.</strong> The number of years after which total cost of buying falls below total cost of renting, holding assumptions constant.
          </li>
          <li>
            <strong>Loan-to-value (LTV).</strong> Mortgage balance divided by home value. Lenders price rate and PMI off this number.
          </li>
          <li>
            <strong>Debt-to-income (DTI).</strong> Monthly debt payments divided by gross monthly income. Lenders typically cap conventional loans near 43-45%.
          </li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="Cost components">
        <ul className="space-y-3 text-sm">
          <li>
            <strong>Principal and interest (P&amp;I).</strong> The mortgage payment. Principal reduces the loan balance; interest is the cost of borrowing.
          </li>
          <li>
            <strong>PITI.</strong> Principal, interest, taxes, and insurance — the full monthly carrying cost for a typical escrowed mortgage.
          </li>
          <li>
            <strong>PMI (private mortgage insurance).</strong> Additional insurance premium required when LTV exceeds 80% on conventional loans. Typically 0.3-1.5% of loan balance annually.
          </li>
          <li>
            <strong>HOA dues.</strong> Monthly fees paid to a homeowners or condo association for shared maintenance, amenities, and reserves.
          </li>
          <li>
            <strong>Special assessment.</strong> One-time fee charged by an HOA to fund a capital project the reserves cannot cover. Can be tens of thousands.
          </li>
          <li>
            <strong>Maintenance reserve.</strong> An annual budget line (typically 1% of home value) for ongoing repairs and component replacement.
          </li>
          <li>
            <strong>Closing costs.</strong> One-time fees at purchase: lender fees, title, escrow, recording, appraisal, prepaids. Typically 2-5% of price.
          </li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="Investment and opportunity terms">
        <ul className="space-y-3 text-sm">
          <li>
            <strong>Opportunity cost.</strong> The return you forgo by using cash for one purpose instead of another. The calculator applies this to the renter&apos;s equivalent of down payment and closing costs.
          </li>
          <li>
            <strong>Nominal return.</strong> Return before subtracting inflation. Our 7% investment assumption is nominal.
          </li>
          <li>
            <strong>Real return.</strong> Return after inflation. Real long-run equity returns run about 5%.
          </li>
          <li>
            <strong>Compounding.</strong> Earning returns on prior returns. The primary reason invested opportunity cost matters on long horizons.
          </li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="Tax terms">
        <ul className="space-y-3 text-sm">
          <li>
            <strong>Standard deduction.</strong> The flat deduction most taxpayers claim. Since 2017 it has been high enough that most households no longer itemize.
          </li>
          <li>
            <strong>Itemized deduction.</strong> A list of deductions including mortgage interest, property tax (capped at $10k SALT), and charitable giving. Only used when it exceeds the standard.
          </li>
          <li>
            <strong>Section 121 exclusion.</strong> The federal rule that excludes up to $250k ($500k married) of capital gain on primary-residence sale if you lived there 2 of the last 5 years.
          </li>
          <li>
            <strong>SALT cap.</strong> The $10k limit on state and local tax deductions. Relevant in high-tax states where property tax alone can exceed the cap.
          </li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="Amortization and equity">
        <ul className="space-y-3 text-sm">
          <li>
            <strong>Amortization.</strong> The schedule by which mortgage payments split between principal and interest over time. Early payments are mostly interest; later payments are mostly principal.
          </li>
          <li>
            <strong>Equity.</strong> Home value minus outstanding mortgage balance. Built through principal payments and appreciation, reduced by sale costs.
          </li>
          <li>
            <strong>Forced savings.</strong> The principal portion of each mortgage payment, which builds equity whether or not the borrower is a disciplined saver.
          </li>
          <li>
            <strong>Appreciation.</strong> Change in home market value over time. Can be positive or negative in any given period.
          </li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="Rent-side terms">
        <ul className="space-y-3 text-sm">
          <li>
            <strong>Rent growth.</strong> The annual rate at which rent is assumed to increase. Central case is roughly 3% nationally; varies by metro.
          </li>
          <li>
            <strong>Renter&apos;s insurance.</strong> A low-cost policy ($10-25/month typical) covering personal property and liability in a rental.
          </li>
          <li>
            <strong>Rent concession.</strong> Incentive a landlord offers (free month, waived fees) that reduces effective rent below asking.
          </li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="Core formulas the calculator uses">
        <ul className="space-y-3 text-sm">
          <li>
            <strong>Monthly mortgage payment:</strong> P &times; r &times; (1+r)^n / ((1+r)^n - 1), where P is loan principal, r is monthly rate, n is term in months.
          </li>
          <li>
            <strong>Total cost of owning:</strong> Sum of mortgage payments + property tax + insurance + maintenance + HOA - tax benefit - ending equity after sale costs.
          </li>
          <li>
            <strong>Total cost of renting:</strong> Sum of rent payments + renter&apos;s insurance - investment growth on down payment + closing cost opportunity fund.
          </li>
          <li>
            <strong>Break-even:</strong> The smallest year Y where cumulative cost of owning through Y falls below cumulative cost of renting through Y.
          </li>
        </ul>
      </ContentBlock>

      <InternalLinks
        heading="Related documentation"
        links={[
          { label: 'Methodology', href: '/methodology', description: 'How the formulas are applied.' },
          { label: 'Assumptions', href: '/assumptions', description: 'Default values used.' },
          { label: 'Limitations', href: '/limitations', description: 'What the formulas cannot capture.' },
          { label: 'Data sources', href: '/data-sources', description: 'Where inputs come from.' },
          { label: 'Calculator', href: '/buy-vs-rent', description: 'Run your numbers.' },
        ]}
      />
    </div>
  );
}
