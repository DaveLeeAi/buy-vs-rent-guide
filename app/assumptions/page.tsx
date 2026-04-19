import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { ContentBlock } from '@/components/content/ContentBlock';
import { TrustNotice } from '@/components/content/TrustNotice';
import { InternalLinks } from '@/components/content/InternalLinks';

export const metadata: Metadata = generatePageMetadata({
  title: 'Calculator Assumptions',
  description:
    'Every assumption baked into our buy vs. rent calculator, grouped by category, with the reasoning behind each default and when you should override it.',
  path: '/assumptions',
});

export default function AssumptionsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Assumptions', href: '/assumptions' },
        ]}
      />

      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Calculator assumptions
      </h1>

      <BlufSummary verdict="Every model is a set of assumptions. Here are ours, stated plainly, with the reasoning behind each default. Override anything that does not match your situation." />

      <TrustNotice />

      <ContentBlock heading="Financial assumptions">
        <ul className="space-y-2 text-sm">
          <li><strong>Investment return: 7% nominal.</strong> A mid-range long-run equity return. Conservative investors should use 5-6%; aggressive use 8%. The tool applies this to the renter&apos;s invested capital.</li>
          <li><strong>Home appreciation: 3.5% nominal.</strong> Tracks long-run U.S. averages. Many metros run higher or lower; override with the local number where you can defend it.</li>
          <li><strong>Rent growth: 3% per year.</strong> A central-case assumption. Coastal metros and supply-constrained cities often see higher; Rust Belt and flat Midwest often lower.</li>
          <li><strong>Opportunity cost applied to down payment and closing.</strong> The renter is assumed to invest these amounts instead, because a fair comparison must account for what the cash could earn.</li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="Ownership cost assumptions">
        <ul className="space-y-2 text-sm">
          <li><strong>Maintenance: 1% of home value annually.</strong> A central-case number. Older housing stock often requires 1.5-2%; new construction often closer to 0.5%.</li>
          <li><strong>Insurance: 0.4% of home value annually.</strong> Accurate for low-risk markets. In coastal Florida, Louisiana, California, and parts of Colorado, triple or more is realistic.</li>
          <li><strong>Renter&apos;s insurance: $15/month.</strong> A typical national figure; override if you have a quote.</li>
          <li><strong>Property tax applied to original purchase price.</strong> Some states reassess annually; others (California, New York caps) protect against rapid increases. Override for local rules.</li>
          <li><strong>Closing cost: not modeled separately in core output.</strong> Typical closing costs run 2-5% of purchase price. Add these mentally before comparing to short-horizon renting.</li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="Loan assumptions">
        <ul className="space-y-2 text-sm">
          <li><strong>Fixed-rate 30-year mortgage.</strong> We do not model ARMs, interest-only, or balloon products. Fixed is the dominant product and the cleanest baseline.</li>
          <li><strong>Rate held constant for the full term.</strong> The tool does not assume refinancing. If you refinance, re-run the tool with updated inputs at that point.</li>
          <li><strong>No PMI modeled by default below 20%.</strong> Most programs charge PMI at low down payments; override with an estimate if you are putting down under 20%.</li>
          <li><strong>Points not modeled.</strong> If you buy points, reduce your rate input accordingly.</li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="Tax assumptions">
        <ul className="space-y-2 text-sm">
          <li><strong>No itemized deduction modeled by default.</strong> Since the 2017 standard deduction increase, most filers no longer itemize. Override only if your itemized total clearly exceeds the standard.</li>
          <li><strong>No capital gains tax on primary residence sale.</strong> Aligned with the Section 121 exclusion for primary residences.</li>
          <li><strong>State income tax not modeled directly.</strong> Use a post-tax effective income figure when deciding what monthly cost you can afford.</li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="Behavioral assumptions">
        <ul className="space-y-2 text-sm">
          <li><strong>The renter actually invests the cost difference.</strong> In practice, many renters spend the difference. If you will not invest it, adjust your expected outcome down from the calculator&apos;s result.</li>
          <li><strong>The buyer maintains the home.</strong> If you defer maintenance, your real cost is deferred not eliminated, and your equity outcome will be worse than the model shows.</li>
          <li><strong>You remain employed at a stable income.</strong> Job loss during year 1-3 of ownership is a disproportionate risk. Keep a reserve — do not calibrate to the edge of what you can afford.</li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="When to override the defaults">
        <p className="mb-3">Override any assumption where you have a specific, defensible number. Use the defaults where you genuinely do not know — they are conservative central cases, not optimistic ones. If your answer depends heavily on a single assumption, that is a signal the decision is close; run the tool at both the optimistic and pessimistic ends of your range.</p>
        <p>The highest-leverage inputs to override are: your actual mortgage rate (get a real pre-approval quote), your property tax rate (pull from the county assessor for the specific parcel), and your time horizon (tenure is the single input that most often changes the direction of the result).</p>
      </ContentBlock>

      <ContentBlock heading="How to read the output when assumptions are uncertain">
        <p className="mb-3">
          If you are not sure what appreciation, rent growth, or investment return to use, run the calculator twice: once at the optimistic end (higher appreciation, lower investment return) and once at the conservative end (lower appreciation, higher investment return). The range of results is more informative than any single run.
        </p>
        <p>
          A decision that looks good only under the most favorable assumptions is fragile. A decision that looks good across a wide range of inputs is robust. Use the calculator to find which category you are in before committing.
        </p>
      </ContentBlock>

      <InternalLinks
        heading="Related documentation"
        links={[
          { label: 'Methodology', href: '/methodology', description: 'Every formula and what is included or excluded.' },
          { label: 'Limitations', href: '/limitations', description: 'What this tool cannot know or predict.' },
          { label: 'Data sources', href: '/data-sources', description: 'Where our state and city numbers come from.' },
          { label: 'Formula glossary', href: '/formula-glossary', description: 'Key terms defined plainly.' },
          { label: 'Update policy', href: '/update-policy', description: 'When defaults are reviewed and revised.' },
          { label: 'Calculator', href: '/buy-vs-rent', description: 'Run your numbers with these assumptions.' },
        ]}
      />
    </div>
  );
}
