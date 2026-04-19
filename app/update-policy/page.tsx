import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { ContentBlock } from '@/components/content/ContentBlock';
import { TrustNotice } from '@/components/content/TrustNotice';
import { InternalLinks } from '@/components/content/InternalLinks';

export const metadata: Metadata = generatePageMetadata({
  title: 'Update Policy',
  description:
    'How often we review data, methodology, and content — and what we do when something important changes in the market.',
  path: '/update-policy',
});

export default function UpdatePolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Update policy', href: '/update-policy' },
        ]}
      />

      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Update policy
      </h1>

      <BlufSummary verdict="We are transparent about when and how we update the site. We do not chase monthly fluctuations, but we do review data regularly and publish changes when central-case values shift." />

      <TrustNotice />

      <ContentBlock heading="Data review cadence">
        <ul className="space-y-2 text-sm">
          <li><strong>Median home prices and rents:</strong> Reviewed at least quarterly. Updated when central-case values shift materially.</li>
          <li><strong>Property tax rates:</strong> Reviewed annually, following state-level publications. Updated when effective rates change more than 0.1 percentage points.</li>
          <li><strong>Appreciation and rent growth defaults:</strong> Reviewed annually. Central cases rarely move more than 0.5 percentage points per year.</li>
          <li><strong>Interest rate environment:</strong> We do not hard-code a mortgage rate into default assumptions; users always enter their own. Narrative references to rate environments are reviewed periodically.</li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="Methodology review">
        <p>Formula logic is reviewed annually to confirm alignment with current best practice. Structural changes to the methodology are documented and linked from the methodology page. Minor improvements (text clarity, input labeling, rounding behavior) may occur without versioning.</p>
      </ContentBlock>

      <ContentBlock heading="Content review">
        <ul className="space-y-2 text-sm">
          <li>State and city narrative pages are reviewed when the underlying data is updated, or sooner if a major market shift occurs.</li>
          <li>FAQ answers are reviewed at least annually, with factual corrections prioritized.</li>
          <li>Guide pages are reviewed for accuracy on an ongoing basis. Material changes (new tax law, significant program changes) trigger dedicated updates.</li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="What triggers an immediate update">
        <ul className="space-y-2 text-sm">
          <li>Material factual errors identified by readers or internal review.</li>
          <li>Significant federal tax law changes affecting mortgage interest deduction, capital gains exclusion, or standard deduction.</li>
          <li>Major state-level policy changes affecting primary residence tax treatment.</li>
          <li>Rapid market shifts that make a specific local narrative clearly stale.</li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="What we do not promise">
        <ul className="space-y-2 text-sm">
          <li>Real-time rate updates. This site is a planning tool, not a rate tracker.</li>
          <li>ZIP-level precision on medians. The tool operates at state and city levels.</li>
          <li>Immediate reflection of every market cycle inflection. Directional accuracy is the goal.</li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="How to report an error">
        <p>If you find a factual error, please contact us through the <a className="text-teal-700 underline" href="/contact">contact page</a>. We review reader-submitted corrections and prioritize fixes for anything that could mislead a real decision.</p>
      </ContentBlock>

      <InternalLinks
        heading="Related documentation"
        links={[
          { label: 'Data sources', href: '/data-sources', description: 'Where our numbers come from.' },
          { label: 'Assumptions', href: '/assumptions', description: 'Every default we use.' },
          { label: 'Methodology', href: '/methodology', description: 'Formulas behind the tool.' },
          { label: 'Editorial policy', href: '/editorial-policy', description: 'Our independence standards.' },
          { label: 'Contact', href: '/contact', description: 'Report an issue.' },
        ]}
      />
    </div>
  );
}
