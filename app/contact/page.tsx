import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ContentBlock } from '@/components/content/ContentBlock';
import { InternalLinks } from '@/components/content/InternalLinks';
import { siteConfig } from '@/config/siteConfig';
import { Mail } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact',
  description:
    'Contact the BuyOrRent editorial team. Report errors, suggest improvements, or ask questions about our buy vs. rent calculator.',
  path: '/contact',
  noindex: true,
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Contact Us
      </h1>

      <ContentBlock heading="Get in Touch">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-teal-600" />
            <p className="font-medium text-foreground">
              editorial@buyorrent.com
            </p>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            We welcome corrections, questions about our methodology, and
            suggestions for improvement. We typically respond within 2 business
            days.
          </p>
        </div>
      </ContentBlock>

      <ContentBlock heading="What We Can Help With">
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Reporting data errors or outdated information</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Questions about our calculator methodology</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Suggestions for additional cities or features</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Press inquiries</span>
          </li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="What We Cannot Help With">
        <p className="text-sm text-muted-foreground">
          We are not financial advisors and cannot provide personalized financial
          advice. For guidance specific to your situation, please consult a
          licensed financial advisor or housing counselor. HUD-approved housing
          counseling agencies can be found at{' '}
          <span className="font-medium text-foreground">
            consumerfinance.gov
          </span>
          .
        </p>
      </ContentBlock>

      <InternalLinks
        heading="Related Pages"
        links={[
          { label: 'About', href: '/about', description: 'Learn about our team and mission.' },
          { label: 'FAQ', href: '/faq', description: 'Common questions answered.' },
          { label: 'Disclaimer', href: '/disclaimer', description: 'Legal information.' },
        ]}
      />
    </div>
  );
}
