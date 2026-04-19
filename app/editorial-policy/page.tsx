import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { ContentBlock } from '@/components/content/ContentBlock';
import { InternalLinks } from '@/components/content/InternalLinks';
import { siteConfig } from '@/config/siteConfig';

export const metadata: Metadata = generatePageMetadata({
  title: 'Editorial Policy',
  description:
    'Our editorial standards, independence commitments, and content review process. BuyOrRent maintains strict editorial independence with no affiliate relationships.',
  path: '/editorial-policy',
});

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Editorial Policy', href: '/editorial-policy' },
        ]}
      />

      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Editorial Policy
      </h1>

      <BlufSummary
        verdict="We maintain complete editorial independence. No lender, agent, or financial company has any influence over our content or calculator results."
      />

      <ContentBlock heading="Independence Statement">
        <p className="mb-3">
          {siteConfig.name} does not accept compensation, sponsorship, or any
          form of payment from mortgage lenders, real estate brokerages,
          insurance companies, financial advisors, or any other party that could
          benefit from the outcome of a buy-vs-rent analysis.
        </p>
        <p>
          Our calculator results are determined solely by the mathematical formulas
          described in our{' '}
          <Link
            href="/methodology"
            className="font-medium text-teal-600 hover:underline"
          >
            Methodology
          </Link>
          . No external party has access to modify these calculations.
        </p>
      </ContentBlock>

      <ContentBlock heading="Content Standards">
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>All data sources are cited and verifiable.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>All calculator assumptions are visible and adjustable by the user.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Limitations are clearly stated on every calculator page.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Content is reviewed quarterly for accuracy and currency.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>We do not use clickbait headlines or misleading framing.</span>
          </li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="Conflict of Interest Policy">
        <p className="mb-3">
          No member of the editorial team has financial relationships with
          mortgage lenders, real estate companies, or other entities that could
          create a conflict of interest.
        </p>
        <p>
          If any potential conflict arises in the future, it will be disclosed
          prominently on this page and on any affected content.
        </p>
      </ContentBlock>

      <ContentBlock heading="Content Review Process">
        <p className="mb-3">
          All content is reviewed by at least one editor before publication.
          Market data is refreshed quarterly. Methodology changes are documented
          in the{' '}
          <Link
            href="/methodology"
            className="font-medium text-teal-600 hover:underline"
          >
            Methodology
          </Link>{' '}
          page with change dates noted.
        </p>
        <p>
          If you identify an error or have a correction to suggest, please
          contact us through our{' '}
          <Link
            href="/contact"
            className="font-medium text-teal-600 hover:underline"
          >
            Contact
          </Link>{' '}
          page.
        </p>
      </ContentBlock>

      <ContentBlock heading="What independence means in practice">
        <ul className="space-y-2 text-sm">
          <li><strong>No affiliate links.</strong> We do not earn referral fees from lenders, brokerages, or insurance providers. There are no links on this site that generate income based on whether you buy or rent.</li>
          <li><strong>No sponsored content.</strong> No section of this site is paid placement. The guides, FAQ clusters, and city pages are editorially independent.</li>
          <li><strong>Assumptions favor neither outcome.</strong> The calculator&apos;s default assumptions — 7% investment return, 3.5% appreciation — are central-case estimates drawn from long-run public data. They are not tuned to make buying or renting look better.</li>
          <li><strong>Limitations are disclosed.</strong> We explicitly document what the tool cannot model. We do not suppress the short list of limitations to make the tool appear more capable than it is.</li>
        </ul>
      </ContentBlock>

      <InternalLinks
        heading="Trust and transparency pages"
        links={[
          { label: 'About', href: '/about', description: 'Our mission and independence statement.' },
          { label: 'Methodology', href: '/methodology', description: 'Every formula and assumption documented.' },
          { label: 'Assumptions', href: '/assumptions', description: 'All defaults with plain-English rationale.' },
          { label: 'Data sources', href: '/data-sources', description: 'Where state and city figures come from.' },
          { label: 'Update policy', href: '/update-policy', description: 'When and how data is reviewed.' },
          { label: 'Disclaimer', href: '/disclaimer', description: 'Legal limitations of tool use.' },
          { label: 'Contact', href: '/contact', description: 'Report an error or ask a question.' },
        ]}
      />
    </div>
  );
}
