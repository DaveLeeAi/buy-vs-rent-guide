import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { ContentBlock } from '@/components/content/ContentBlock';
import { LimitationsNotice } from '@/components/content/LimitationsNotice';
import { InternalLinks } from '@/components/content/InternalLinks';
import { siteConfig } from '@/config/siteConfig';

export const metadata: Metadata = generatePageMetadata({
  title: 'Methodology',
  description:
    'Complete explanation of our buy vs. rent calculator methodology, including formulas, data sources, default assumptions, and known limitations.',
  path: '/methodology',
});

export default function MethodologyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Methodology', href: '/methodology' },
        ]}
      />

      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Methodology
      </h1>

      <BlufSummary
        verdict="This page describes every formula, assumption, and data source used in our calculator. All logic is open and readable in the source code."
      />

      <ContentBlock heading="Core Calculation Approach">
        <p className="mb-3">
          The calculator compares two parallel scenarios over a user-selected time
          horizon: (1) buying a home with a fixed-rate mortgage, and (2) renting
          and investing the difference. It tracks cumulative costs, equity
          accumulation, and investment growth year by year.
        </p>
        <p>
          The result is a net worth comparison at the end of the time horizon:
          home equity for the buyer versus investment portfolio value for the
          renter.
        </p>
      </ContentBlock>

      <ContentBlock heading="Buying Costs">
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>
              <strong>Mortgage payment:</strong> Standard amortization formula.
              Monthly payment = P[r(1+r)^n] / [(1+r)^n - 1], where P is loan
              amount, r is monthly interest rate, n is total number of payments.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>
              <strong>Property tax:</strong> Annual rate applied to original
              purchase price, divided by 12 for monthly cost.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>
              <strong>Homeowners insurance:</strong> Estimated at 0.4% of home
              price per year.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>
              <strong>Maintenance:</strong> User-adjustable rate (default 1% of
              home value per year).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>
              <strong>HOA fees:</strong> User-specified monthly amount.
            </span>
          </li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="Renting Costs">
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>
              <strong>Monthly rent:</strong> User-specified starting amount,
              increasing annually at the user-specified rent inflation rate.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>
              <strong>Renter{"'"}s insurance:</strong> Estimated at $15/month.
            </span>
          </li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="Wealth Accumulation">
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>
              <strong>Home equity (buyer):</strong> Current home value minus
              remaining loan balance. Home value grows at the user-specified
              appreciation rate.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>
              <strong>Investment balance (renter):</strong> Starts with the down
              payment amount (which the renter invests instead). Monthly savings
              from lower housing costs are added when rent is cheaper. Grows at
              the user-specified investment return rate.
            </span>
          </li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="Default Assumptions">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="py-2 pr-4 font-semibold">Parameter</th>
                <th className="py-2 font-semibold">Default Value</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr><td className="py-2 pr-4">Home Price</td><td className="py-2">$400,000</td></tr>
              <tr><td className="py-2 pr-4">Down Payment</td><td className="py-2">20%</td></tr>
              <tr><td className="py-2 pr-4">Mortgage Rate</td><td className="py-2">6.75%</td></tr>
              <tr><td className="py-2 pr-4">Loan Term</td><td className="py-2">30 years</td></tr>
              <tr><td className="py-2 pr-4">Monthly Rent</td><td className="py-2">$2,000</td></tr>
              <tr><td className="py-2 pr-4">Property Tax Rate</td><td className="py-2">1.1%</td></tr>
              <tr><td className="py-2 pr-4">Maintenance Rate</td><td className="py-2">1.0%/year</td></tr>
              <tr><td className="py-2 pr-4">Home Appreciation</td><td className="py-2">3.5%/year</td></tr>
              <tr><td className="py-2 pr-4">Rent Increase</td><td className="py-2">3.0%/year</td></tr>
              <tr><td className="py-2 pr-4">Investment Return</td><td className="py-2">7.0%/year</td></tr>
              <tr><td className="py-2 pr-4">Insurance</td><td className="py-2">0.4% of home value</td></tr>
              <tr><td className="py-2 pr-4">Renter{"'"}s Insurance</td><td className="py-2">$15/month</td></tr>
            </tbody>
          </table>
        </div>
      </ContentBlock>

      <ContentBlock heading="Data Sources">
        <p className="mb-3">
          State and city median home prices, rents, and property tax rates are
          compiled from publicly available sources including U.S. Census Bureau
          data, state tax authority publications, and federal housing statistics.
          These are approximate figures intended as starting points.
        </p>
        <p>
          Users should replace default values with their own research for the
          most accurate results. Actual prices, rents, and tax rates vary by
          neighborhood and property type.
        </p>
      </ContentBlock>

      <ContentBlock heading="What the model includes">
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Mortgage principal and interest, modeled with standard amortization.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Property tax applied to original purchase price, held constant unless you adjust it.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Homeowners insurance as a fixed percent of value, adjustable.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Annual maintenance as a percent of value, adjustable.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>HOA dues if entered. Held flat unless you override.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Opportunity cost of the down payment, computed at the investment return you set.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Rent with annual escalation at the rate you set.</span>
          </li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="What the model excludes">
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-600" />
            <span>Closing costs at purchase and selling costs at exit. Model these separately — 2-5% at purchase and 5-7% at sale are typical.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-600" />
            <span>Federal and state tax treatment of mortgage interest, property tax, and capital gains.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-600" />
            <span>PMI or MIP. If your down payment is under 20%, model this as an additional monthly cost.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-600" />
            <span>Major capital projects (roof replacement, HVAC) that land unevenly rather than smoothly.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-600" />
            <span>Property tax reassessment at sale (some states reset to the buyer&apos;s purchase price).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-600" />
            <span>Insurance premium growth, which has outpaced inflation meaningfully in coastal and fire-exposed states.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-600" />
            <span>Moving costs, furnishings, and first-year repair surprises.</span>
          </li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="What the model cannot know">
        <p className="mb-3">
          The calculator runs on inputs. It does not know your credit score,
          your lender&apos;s pricing grid, your exact address&apos;s insurability,
          your neighbor&apos;s recent appeal, or whether your HOA is about to
          levy a special assessment. It also cannot predict rate, price, or
          rent paths. It projects forward using the rates you enter and
          compounds them arithmetically.
        </p>
        <p className="mb-3">
          The calculator also cannot weigh non-financial factors: stability,
          flexibility, school access, proximity to family, or how much you
          personally value modifying your own space. Those belong in your
          decision, but outside the math.
        </p>
        <p>
          When the output is close — within roughly 10% — the difference is
          usually noise. Let non-financial factors decide. When the output is
          far apart, investigate whether your assumptions are actually
          defensible before you rely on the direction.
        </p>
      </ContentBlock>

      <ContentBlock heading="Local interpretation limitations">
        <p className="mb-3">
          City and state pages apply a single median home price, median rent,
          and effective property tax rate to an entire geography. Real markets
          are heterogeneous. A metro-wide ratio of 22 can still contain
          buyer-friendly pockets with ratios under 15, and vice versa.
        </p>
        <p className="mb-3">
          Use state and city pages as starting points. Narrow to your target
          neighborhoods and property types before treating any number as real.
          For condos, add an HOA review step; for coastal properties, verify
          insurance availability; for older homes, inspect aggressively.
        </p>
        <p>
          The narrative blocks (buyer profile, renter profile, caveats) are
          written from market-wide signals. They are directional, not
          individualized. Your personal case may deviate sharply.
        </p>
      </ContentBlock>

      <ContentBlock heading="Why outputs should be treated as guidance">
        <p className="mb-3">
          Every calculator answer is a projection. The projection depends on
          rate, appreciation, rent growth, and your tenure — four inputs that
          are all uncertain. Small input changes can move break-even by years.
        </p>
        <p>
          Treat the output as a directional answer that says "buying looks
          cheaper at these assumptions" or "renting looks cheaper at these
          assumptions." Run the model a second time with more conservative
          inputs. If the answer flips, the decision is genuinely close and
          non-financial factors should drive it.
        </p>
      </ContentBlock>

      <LimitationsNotice />

      <InternalLinks
        heading="Related trust pages"
        links={[
          { label: 'How This Tool Works', href: '/how-this-tool-works', description: 'Plain-English walkthrough of the calculator flow.' },
          { label: 'Assumptions', href: '/assumptions', description: 'All defaults and why we chose them.' },
          { label: 'Limitations', href: '/limitations', description: 'What the tool cannot know or predict.' },
          { label: 'Formula glossary', href: '/formula-glossary', description: 'Every formula spelled out.' },
          { label: 'Data sources', href: '/data-sources', description: 'Where market data comes from.' },
          { label: 'Update policy', href: '/update-policy', description: 'How often the site and data are reviewed.' },
          { label: 'Editorial policy', href: '/editorial-policy', description: 'Our independence standards.' },
        ]}
      />
      <InternalLinks
        heading="Apply this methodology"
        links={[
          { label: 'Buy vs. Rent Calculator', href: '/buy-vs-rent', description: 'Run your own numbers now.' },
          { label: 'FAQ Library', href: '/faq', description: 'Core questions on buying, renting, and break-even.' },
          { label: 'Guides', href: '/guides', description: 'Deeper explainers behind the methodology.' },
        ]}
      />
    </div>
  );
}
