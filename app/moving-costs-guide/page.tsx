import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { GuideSection } from '@/components/content/GuideSection';
import { ContentBlock } from '@/components/content/ContentBlock';
import { InternalLinks } from '@/components/content/InternalLinks';

export const metadata: Metadata = generatePageMetadata({
  title: 'Moving Costs Guide',
  description:
    'Comprehensive guide to moving costs. Covers local and long-distance moves, DIY vs. professional movers, hidden costs, and a complete moving budget checklist.',
  path: '/moving-costs-guide',
});

export default function MovingCostsGuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Moving Costs Guide', href: '/moving-costs-guide' },
        ]}
      />

      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Moving Costs Guide
      </h1>

      <BlufSummary
        verdict="Moving costs are one of the most under-budgeted expenses in housing decisions. A local move typically costs $1,000-$3,000, while a long-distance move can run $3,000-$10,000+."
      />

      <GuideSection stepNumber={1} heading="Local Move Costs">
        <p className="mb-3">
          A local move (under 50 miles) with professional movers typically costs
          $800-$2,500 for a 2-bedroom home, depending on the amount of
          belongings, number of movers, and time required. Most local movers
          charge by the hour: expect $100-$200/hour for a crew of 2-3 movers.
        </p>
        <p>
          A DIY local move with a rental truck runs $50-$300 for the truck
          plus fuel, moving supplies ($50-$150), and food for anyone helping you.
        </p>
      </GuideSection>

      <GuideSection stepNumber={2} heading="Long-Distance Move Costs">
        <p className="mb-3">
          Long-distance moves (over 50 miles or interstate) are priced by weight
          and distance. A 2-bedroom household moved 1,000 miles typically costs
          $3,000-$6,000. Cross-country moves can exceed $8,000-$12,000.
        </p>
        <p>
          Get at least three in-home (or video) estimates. Be wary of
          significantly low bids — they often lead to upcharges on moving day.
        </p>
      </GuideSection>

      <GuideSection
        stepNumber={3}
        heading="Hidden and Forgotten Costs"
        callout="Add 15-20% to your estimated moving budget for unexpected costs. There are always surprises."
      >
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Security deposit and first/last month rent at the new place</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Utility connection and transfer fees</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Temporary storage if move-in/move-out dates do not align</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Cleaning costs for the old and new residence</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Pet transport or boarding</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Vehicle registration and driver license transfer for interstate moves</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Lost income from days off work</span>
          </li>
        </ul>
      </GuideSection>

      <ContentBlock heading="Moving Cost Estimates at a Glance">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="py-2 pr-4 font-semibold">Move Type</th>
                <th className="py-2 pr-4 font-semibold">DIY Cost</th>
                <th className="py-2 font-semibold">Professional Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-2 pr-4">Studio/1BR local</td>
                <td className="py-2 pr-4">$100-$500</td>
                <td className="py-2">$500-$1,500</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">2BR local</td>
                <td className="py-2 pr-4">$200-$800</td>
                <td className="py-2">$800-$2,500</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">3BR local</td>
                <td className="py-2 pr-4">$400-$1,200</td>
                <td className="py-2">$1,500-$4,000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">2BR long-distance</td>
                <td className="py-2 pr-4">$1,000-$3,000</td>
                <td className="py-2">$3,000-$6,000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">3BR long-distance</td>
                <td className="py-2 pr-4">$2,000-$5,000</td>
                <td className="py-2">$5,000-$10,000+</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Estimates are approximate ranges for the continental U.S. Actual costs
          vary by location, time of year, and specific circumstances.
        </p>
      </ContentBlock>

      <GuideSection stepNumber={4} heading="Tips to Reduce Moving Costs">
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Move during off-peak months (October-April) and mid-week</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Declutter before the move to reduce volume and weight</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Get free boxes from grocery stores, liquor stores, and online marketplaces</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Compare at least 3 quotes for professional movers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>Consider portable moving containers for long-distance moves</span>
          </li>
        </ul>
      </GuideSection>

      <InternalLinks
        heading="Related Pages"
        links={[
          { label: 'Buy vs. Rent Calculator', href: '/buy-vs-rent', description: 'Factor moving costs into your decision.' },
          { label: 'Buying Guide', href: '/buying-guide', description: 'Complete buying walkthrough.' },
          { label: 'Renting Guide', href: '/renting-guide', description: 'What to know about renting.' },
        ]}
      />
    </div>
  );
}
