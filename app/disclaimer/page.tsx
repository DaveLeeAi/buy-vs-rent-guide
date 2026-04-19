import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ContentBlock } from '@/components/content/ContentBlock';
import { InternalLinks } from '@/components/content/InternalLinks';
import { siteConfig } from '@/config/siteConfig';

export const metadata: Metadata = generatePageMetadata({
  title: 'Disclaimer',
  description:
    'Legal disclaimer for BuyOrRent. This tool provides educational estimates, not financial advice. Read our full terms and limitations.',
  path: '/disclaimer',
});

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Disclaimer', href: '/disclaimer' },
        ]}
      />

      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Disclaimer
      </h1>

      <ContentBlock heading="Not Financial Advice">
        <p className="mb-3">
          The information provided by {siteConfig.name}, including all calculator
          results, market data, and editorial content, is for educational and
          informational purposes only. It does not constitute financial advice,
          investment advice, tax advice, or legal advice.
        </p>
        <p>
          You should not rely on this tool as the sole basis for any financial
          decision. Always consult with qualified professionals, including a
          licensed financial advisor, tax professional, and real estate attorney,
          before making housing or investment decisions.
        </p>
      </ContentBlock>

      <ContentBlock heading="No Guarantee of Accuracy">
        <p className="mb-3">
          While we strive to provide accurate and up-to-date information, we
          make no representations or warranties about the completeness, accuracy,
          reliability, or suitability of any information on this site.
        </p>
        <p>
          Market data, median prices, tax rates, and other figures are
          approximate and may not reflect current conditions in your specific
          location. Calculator results are based on simplified models that cannot
          capture every variable in a real-world housing decision.
        </p>
      </ContentBlock>

      <ContentBlock heading="Limitation of Liability">
        <p>
          {siteConfig.name} and its editorial team shall not be liable for any
          loss or damage arising from your use of or reliance on information
          provided by this tool. This includes, without limitation, any direct,
          indirect, incidental, consequential, or punitive damages resulting from
          financial decisions made based on calculator results or site content.
        </p>
      </ContentBlock>

      <ContentBlock heading="No Professional Relationship">
        <p>
          Use of this website does not create a client-advisor, client-attorney,
          or any other professional relationship between you and{' '}
          {siteConfig.name} or its editorial team.
        </p>
      </ContentBlock>

      <ContentBlock heading="Third-Party Links">
        <p>
          This site may contain references to third-party resources for
          informational purposes. We do not endorse and are not responsible for
          the content, accuracy, or practices of any third-party websites or
          services.
        </p>
      </ContentBlock>

      <ContentBlock heading="Changes to This Disclaimer">
        <p>
          We may update this disclaimer from time to time. Changes will be posted
          on this page with the revision date. Continued use of the site after
          changes constitutes acceptance of the updated terms.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {siteConfig.lastUpdated}
        </p>
      </ContentBlock>

      <InternalLinks
        heading="Related Pages"
        links={[
          { label: 'About', href: '/about', description: 'Our mission and team.' },
          { label: 'Editorial Policy', href: '/editorial-policy', description: 'Our independence standards.' },
          { label: 'Methodology', href: '/methodology', description: 'How calculations work.' },
          { label: 'Contact', href: '/contact', description: 'Reach our editorial team.' },
        ]}
      />
    </div>
  );
}
