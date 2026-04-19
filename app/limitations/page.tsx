import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { ContentBlock } from '@/components/content/ContentBlock';
import { TrustNotice } from '@/components/content/TrustNotice';
import { InternalLinks } from '@/components/content/InternalLinks';

export const metadata: Metadata = generatePageMetadata({
  title: 'Calculator Limitations',
  description:
    'Everything this calculator cannot know about your situation — and the categories of error you should expect from any buy vs. rent tool.',
  path: '/limitations',
});

export default function LimitationsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Limitations', href: '/limitations' },
        ]}
      />

      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Calculator limitations
      </h1>

      <BlufSummary verdict="This is a planning tool, not a prediction engine. It cannot know your specific circumstances, and future markets are not knowable in advance. Here is what it cannot do." />

      <TrustNotice />

      <ContentBlock heading="What the calculator cannot know about you">
        <ul className="space-y-2 text-sm">
          <li><strong>Your actual tenure.</strong> Plans change. Jobs move. Relationships evolve. The single biggest input is tenure and the calculator takes your word for it.</li>
          <li><strong>Your exact credit profile.</strong> Your real mortgage rate depends on credit score, DTI, loan type, and lender. The tool uses whatever rate you enter.</li>
          <li><strong>Your tax situation.</strong> Deductions, state tax, and phase-outs are specific to your return. The tool uses simplified assumptions.</li>
          <li><strong>Your specific property.</strong> Two homes on the same street can have very different maintenance needs, tax bills, and insurance costs.</li>
          <li><strong>Your risk tolerance.</strong> A mathematically narrow buy win is not the same as the right decision for a nervous household.</li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="What the calculator cannot predict">
        <ul className="space-y-2 text-sm">
          <li><strong>Future home appreciation.</strong> Any projection past 5 years has meaningful error bars. Past results do not predict future results.</li>
          <li><strong>Future rent growth.</strong> Rent growth varies by cycle and metro. A 3% national average masks 0% stretches in some cities and 8% years in others.</li>
          <li><strong>Future investment returns.</strong> 7% is a reasonable long-run assumption; 10-year returns often differ materially from that number.</li>
          <li><strong>Future mortgage rates.</strong> The tool models a single rate for the full horizon. Real life includes refinancing opportunities.</li>
          <li><strong>Future property tax and insurance.</strong> Both have trended up significantly in recent years and may continue to do so.</li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="What the calculator intentionally excludes">
        <ul className="space-y-2 text-sm">
          <li><strong>Transaction-specific closing costs.</strong> Modeling closing would require knowing lender, title company, and state — all of which are buyer-specific.</li>
          <li><strong>Moving, renovation, and furniture costs.</strong> Real but highly variable.</li>
          <li><strong>Emotional value of ownership.</strong> Stability, pride, and customization matter to real people and are not in the model.</li>
          <li><strong>Non-primary-residence tax treatment.</strong> The tool is designed for primary residences only. Investment property math is fundamentally different.</li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="Categories of error you should expect">
        <ul className="space-y-2 text-sm">
          <li><strong>Central-case vs tails.</strong> The tool shows an expected path. In a bad market cycle, the actual outcome can be meaningfully worse. In a good one, meaningfully better.</li>
          <li><strong>Local deviation from state average.</strong> State-level defaults can be off 20-40% for a specific city, and city-level defaults can be off 20-30% for a specific ZIP.</li>
          <li><strong>Assumption sensitivity.</strong> Small changes in rate, appreciation, or return can swing the result by tens of thousands of dollars across a decade.</li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="What to do with these limitations">
        <p className="mb-3">Run the calculator multiple times at different plausible inputs. If the answer flips easily when you nudge one variable, the decision is close and non-financial factors should drive it. If one option clearly wins across most inputs, you have a robust answer.</p>
        <p>Supplement with professional advice for high-stakes decisions. A $2-5k fee for a fee-only financial planner is small relative to the size of the decision.</p>
      </ContentBlock>

      <InternalLinks
        heading="Related documentation"
        links={[
          { label: 'Assumptions', href: '/assumptions', description: 'The defaults the tool uses and when to override them.' },
          { label: 'Methodology', href: '/methodology', description: 'Formulas, includes, and excludes behind the output.' },
          { label: 'Data sources', href: '/data-sources', description: 'Where state and city figures come from.' },
          { label: 'Formula glossary', href: '/formula-glossary', description: 'Every term the calculator uses, defined plainly.' },
          { label: 'Disclaimer', href: '/disclaimer', description: 'Legal notice on tool use.' },
          { label: 'Calculator', href: '/buy-vs-rent', description: 'Run your numbers with these limitations in mind.' },
        ]}
      />
    </div>
  );
}
