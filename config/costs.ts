import { GuideData } from './pageTypes';

const mk = (
  slug: string,
  title: string,
  bluf: string,
  tldr: string[],
  sections: [string, string][],
  key: string[],
  faq: [string, string][],
  desc: string
): GuideData => ({
  slug,
  title,
  bluf,
  tldr,
  sections: sections.map(([heading, body]) => ({ heading, body })),
  keyTakeaways: key,
  faq: faq.map(([question, answer]) => ({ question, answer })),
  meta: { title: `${title} | Cost Guide`, description: desc },
});

export const costs: GuideData[] = [
  mk('moving-costs', 'Moving costs: what to budget',
    'Local moves cost $800-$3,000; long-distance moves cost $3,000-$12,000+ depending on size and distance.',
    ['DIY truck rental: cheapest', 'Full-service movers: most expensive', 'PODs: middle ground'],
    [
      ['Categories', 'Labor, truck/transport, supplies, insurance, tips.'],
      ['Factors', 'Distance, weight, timing, season.'],
    ],
    ['Get 3+ quotes; avoid peak summer rates.'],
    [['Should I buy moving insurance?', 'Yes for long-distance or valuable items.']],
    'Moving costs explained.'
  ),
  mk('closing-costs-detailed', 'Closing costs: detailed breakdown',
    'Closing costs range from 2-5% of purchase price. This detailed breakdown shows each component.',
    ['Lender fees: origination, underwriting', 'Third-party: title, appraisal, inspection', 'Prepaid: taxes, insurance, interest'],
    [
      ['Lender fees', 'Origination 0.5-1%, underwriting $500-$1,500.'],
      ['Third-party', 'Title $1,000-$2,500, appraisal $500-$800.'],
      ['Prepaid', 'Tax escrow and insurance premium.'],
    ],
    ['Shop title insurance if your state allows.'],
    [['Can I negotiate?', 'Origination and some third-party fees are negotiable.']],
    'Detailed closing cost breakdown.'
  ),
  mk('property-tax-cost', 'Property tax: annual cost by state',
    'Property tax ranges from 0.3% (Hawaii) to 2.5%+ (NJ, IL) of home value annually.',
    ['Low: HI, AL, LA, CO', 'High: NJ, IL, NH, CT, TX'],
    [['Effective rates', 'Pay attention to effective rate, not nominal rate.']],
    ['Look up county-level rates for accuracy.'],
    [['Do rates change yearly?', 'Slightly — assessments and mill rates drift.']],
    'Annual property tax cost by state.'
  ),
  mk('home-insurance-cost', 'Home insurance annual cost',
    'Average home insurance premiums range from $800-$3,500+ annually, with coastal and wildfire zones paying more.',
    ['FL, LA, TX: highest premiums', 'OR, UT, WA: lowest premiums'],
    [['What drives cost', 'Location, replacement cost, claims history, credit.']],
    ['Shop annually — premium inflation is significant.'],
    [['Can I raise deductibles to save?', 'Yes, but only if you have cash reserves to cover them.']],
    'Home insurance cost guide.'
  ),
  mk('maintenance-annual-cost', 'Annual home maintenance cost',
    'Budget 1-2% of home value per year for maintenance — closer to 2% for older homes.',
    ['Roof, HVAC, water heater top the list.'],
    [['By category', 'Structural, systems, exterior, interior, landscaping.']],
    ['Maintain a home reserve fund.'],
    [['What is a deferred maintenance trap?', 'Skipping upkeep that compounds into expensive repairs.']],
    'Annual home maintenance cost.'
  ),
  mk('hoa-cost-ranges', 'HOA cost ranges',
    'HOA fees range from $50 to over $2,500 per month depending on amenities and building type.',
    ['Condo buildings: highest fees', 'Single-family HOAs: lowest fees'],
    [['What fees cover', 'Common areas, amenities, insurance, reserves.']],
    ['Reserve-funded HOAs are healthier.'],
    [['Can HOAs go bankrupt?', 'Rarely, but financially stressed HOAs can impose large assessments.']],
    'HOA cost ranges explained.'
  ),
  mk('pmi-cost', 'PMI cost guide',
    'PMI typically costs 0.3-1.5% of loan balance annually.',
    ['Lower with higher credit scores', 'Drops at 20% equity on conventional'],
    [['Impact', 'Can add $100-$300+ to monthly payment.']],
    ['Plan to remove PMI as equity grows.'],
    [['Is single-premium PMI worth it?', 'Sometimes — if you plan to stay past break-even.']],
    'PMI cost guide.'
  ),
  mk('mortgage-interest-cost', 'Mortgage interest: true lifetime cost',
    'On a $400,000, 30-year mortgage at 7%, lifetime interest exceeds $550,000.',
    ['Early years pay mostly interest', 'Extra principal payments shorten the schedule'],
    [['Amortization reality', 'First 5 years are interest-heavy.']],
    ['Understand amortization before prepaying.'],
    [['Should I prepay?', 'Compare after-tax return to alternative investments.']],
    'True lifetime mortgage interest cost.'
  ),
  mk('rent-increase-cost', 'Rent increase cost over time',
    'Long-term rent growth averages 3-4% annually, compounding significantly over a decade.',
    ['$2,000 rent becomes $2,687 in 10 years at 3%'],
    [['Compounding effect', 'Rent increases compound — small rates, big totals.']],
    ['Model rent growth into renter analysis.'],
    [['Can rent freeze?', 'Rent control districts do cap increases.']],
    'Rent increase cost over time.'
  ),
  mk('selling-a-home-cost', 'Cost of selling a home',
    'Selling costs typically total 5-7% of sale price: commission, transfer tax, prep, concessions.',
    ['Agent commission is the largest line', 'Transfer tax varies by state'],
    [['Categories', 'Commission, transfer tax, prep, concessions.']],
    ['Model selling costs in break-even analysis.'],
    [['Can I reduce commission?', 'Yes — negotiate or use discount brokers.']],
    'Cost of selling a home.'
  ),
];

export const getCost = (slug: string) => costs.find((g) => g.slug === slug);
