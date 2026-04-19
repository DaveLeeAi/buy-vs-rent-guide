import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { GuideSection } from '@/components/content/GuideSection';
import { InternalLinks } from '@/components/content/InternalLinks';

export const metadata: Metadata = generatePageMetadata({
  title: 'Renting Guide',
  description:
    'Complete guide to renting a home or apartment. Covers budgeting, lease terms, tenant rights, security deposits, and when renting makes more financial sense than buying.',
  path: '/renting-guide',
});

export default function RentingGuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Renting Guide', href: '/renting-guide' },
        ]}
      />

      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Renting Guide
      </h1>

      <BlufSummary
        verdict="Renting is not 'throwing money away.' It provides flexibility, lower upfront costs, and can be the smarter financial choice in many situations. This guide helps you rent wisely."
      />

      <GuideSection
        stepNumber={1}
        heading="When Renting Makes Financial Sense"
        callout="The price-to-rent ratio in your area is a quick indicator. Above 20, renting is often cheaper. Below 15, buying may save you money."
      >
        <p className="mb-3">
          Renting is often the better financial choice when you plan to stay
          fewer than 5 years, when local home prices are high relative to rents,
          when you have a small or no down payment saved, or when you value
          flexibility to move for career or personal reasons.
        </p>
        <p>
          Many financial experts note that renters who invest the difference
          between renting and buying costs can build comparable or greater wealth
          over time, especially in high-cost markets.
        </p>
      </GuideSection>

      <GuideSection stepNumber={2} heading="Budgeting for Rent">
        <p className="mb-3">
          A common guideline suggests spending no more than 30% of your gross
          income on rent. Beyond monthly rent, budget for renter{"'"}s insurance
          ($15-$30/month), utilities, and any parking or pet fees.
        </p>
        <p>
          Upfront costs typically include first month{"'"}s rent, a security deposit
          (usually one month{"'"}s rent), and possibly last month{"'"}s rent or a
          broker{"'"}s fee in some markets.
        </p>
      </GuideSection>

      <GuideSection stepNumber={3} heading="Understanding Your Lease">
        <p className="mb-3">
          Read the entire lease before signing. Key items to check: lease term
          and renewal terms, rent increase provisions, maintenance
          responsibilities, subletting rules, early termination penalties, and
          pet policies.
        </p>
        <p>
          Many states have specific tenant protection laws. Research your state
          and local rules regarding security deposit limits, required notice
          periods, and habitability standards.
        </p>
      </GuideSection>

      <GuideSection
        stepNumber={4}
        heading="Protecting Yourself as a Tenant"
        callout="Always get renter's insurance. It typically costs $15-$30/month and covers personal property, liability, and temporary living expenses."
      >
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Document the condition of the unit with dated photos at move-in.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Communicate maintenance requests in writing (email is fine).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Know your rights regarding entry notice (usually 24-48 hours required).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Keep copies of all lease documents and correspondence.</span>
          </li>
        </ul>
      </GuideSection>

      <GuideSection stepNumber={5} heading="Investing the Difference">
        <p>
          If renting costs less than buying in your market, consider investing
          what you would have spent on a down payment and the monthly cost
          difference. A diversified index fund portfolio earning 7% average
          annual returns can compound significantly over 10-20 years. This is the
          core comparison our calculator performs.
        </p>
      </GuideSection>

      <InternalLinks
        heading="Related Pages"
        links={[
          { label: 'Buy vs. Rent Calculator', href: '/buy-vs-rent', description: 'Compare buying and renting costs.' },
          { label: 'Buying Guide', href: '/buying-guide', description: 'What to know about buying.' },
          { label: 'Moving Costs Guide', href: '/moving-costs-guide', description: 'Budget for the move.' },
        ]}
      />
    </div>
  );
}
