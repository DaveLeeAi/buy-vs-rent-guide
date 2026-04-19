import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { ContentBlock } from '@/components/content/ContentBlock';
import { TrustNotice } from '@/components/content/TrustNotice';
import { InternalLinks } from '@/components/content/InternalLinks';

export const metadata: Metadata = generatePageMetadata({
  title: 'Data Sources',
  description:
    'Where our state and city data comes from, what we treat as authoritative, and what we consider approximate.',
  path: '/data-sources',
});

export default function DataSourcesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Data sources', href: '/data-sources' },
        ]}
      />

      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Data sources
      </h1>

      <BlufSummary verdict="All defaults and local figures are drawn from publicly available U.S. data sets. Nothing is proprietary, nothing is hidden, and every number should be treated as directional." />

      <TrustNotice />

      <ContentBlock heading="What we source and from where">
        <ul className="space-y-2 text-sm">
          <li><strong>Median home prices:</strong> Drawn from U.S. Census Bureau American Community Survey, FHFA House Price Index, and public real estate listing aggregates. We prefer multi-year medians to single-month snapshots.</li>
          <li><strong>Median rents:</strong> ACS rent data, HUD Fair Market Rent publications, and rental listing aggregates. We prefer metro-level data where available.</li>
          <li><strong>Property tax rates:</strong> State revenue department publications and Tax Foundation effective-rate summaries. We use effective rate (tax divided by market value), not headline mill rates.</li>
          <li><strong>Appreciation assumptions:</strong> Long-term FHFA and S&P CoreLogic Case-Shiller historical series. We use conservative central cases rather than recent trailing returns.</li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="What is authoritative vs approximate">
        <p className="mb-3">Any number we publish at the state or city level is a central-case approximation. Actual prices, rents, and tax bills vary meaningfully by ZIP, property type, and property age. We intentionally use round numbers rather than false precision.</p>
        <p>We consider authoritative:</p>
        <ul className="mt-2 space-y-1 text-sm">
          <li>- The formula implementation (open and readable in source)</li>
          <li>- The default assumption set (documented on the assumptions page)</li>
          <li>- The ratio and effective-rate calculations (direct math)</li>
        </ul>
        <p className="mt-3">We consider approximate:</p>
        <ul className="mt-2 space-y-1 text-sm">
          <li>- Specific state and city median prices and rents</li>
          <li>- Property tax rates at the metro level</li>
          <li>- Appreciation and rent growth expectations</li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="How often data is reviewed">
        <p>State and city figures are reviewed on a periodic basis and updated when central-case values shift meaningfully. We do not chase monthly fluctuations; the calculator is designed for multi-year decisions, and directional accuracy is more useful than monthly precision. See our <a className="text-teal-700 underline" href="/update-policy">update policy</a> for more detail.</p>
      </ContentBlock>

      <ContentBlock heading="How to verify for your situation">
        <ul className="space-y-2 text-sm">
          <li><strong>Home price:</strong> Check recent sold comps in your target neighborhood, not list prices. Listings are often 5-10% above final sale in soft markets.</li>
          <li><strong>Rent:</strong> Check actual signed leases, not asking rents. Rent concessions (free months) are common and reduce effective rent.</li>
          <li><strong>Property tax:</strong> Pull the specific parcel&apos;s current tax bill from the county assessor. Do not rely on the seller&apos;s bill if you will buy at a different price.</li>
          <li><strong>Insurance:</strong> Get at least 3 quotes for the specific address. Insurance variance by property is large, especially in climate-exposed regions.</li>
          <li><strong>Appreciation:</strong> Use the FHFA House Price Index for your metro division rather than national averages. Metro-level series go back 20+ years and are publicly available.</li>
        </ul>
      </ContentBlock>

      <ContentBlock heading="How we handle data uncertainty">
        <p className="mb-3">
          We prefer conservative, multi-year medians to any single-month snapshot. Housing markets move; a month of unusually high or low sales can swing a reported median by 5-10%. Our state and city figures represent a central-case view across recent public data, not a live market feed.
        </p>
        <p className="mb-3">
          Where multiple credible sources disagree, we typically use the more conservative figure and note the range in the relevant city or state narrative. For example, if ACS data and HUD Fair Market Rent data differ by more than 10%, we will note that range on the page rather than picking one number and presenting it as precise.
        </p>
        <p>
          If you find a figure that appears materially off from current conditions, use the <a className="text-teal-700 underline" href="/contact">contact page</a> to flag it. We treat reader corrections as high-priority and aim to review them within two weeks.
        </p>
      </ContentBlock>

      <InternalLinks
        heading="Related documentation"
        links={[
          { label: 'Assumptions', href: '/assumptions', description: 'Every default we use and why.' },
          { label: 'Limitations', href: '/limitations', description: 'What the tool cannot know or predict.' },
          { label: 'Update policy', href: '/update-policy', description: 'When and how data is reviewed.' },
          { label: 'Methodology', href: '/methodology', description: 'Formulas and includes/excludes.' },
          { label: 'Formula glossary', href: '/formula-glossary', description: 'Key terms defined plainly.' },
          { label: 'Calculator', href: '/buy-vs-rent', description: 'Run your numbers with local data.' },
        ]}
      />
    </div>
  );
}
