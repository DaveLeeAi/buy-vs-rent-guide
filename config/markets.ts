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
  meta: { title: `${title} | Market Brief`, description: desc },
});

export const markets: GuideData[] = [
  mk('high-price-to-rent-markets', 'High price-to-rent markets',
    'Markets with ratios above 22 generally favor renting. Examples include San Francisco, San Jose, Honolulu, and NYC Manhattan.',
    ['High ratios signal buyer caution', 'Renting preserves capital in these markets'],
    [
      ['Top examples', 'SF, SJC, NYC Manhattan, Honolulu, San Diego.'],
      ['Why the ratio is high', 'Supply constraints and high demand.'],
    ],
    ['Use long horizons or rent in high-ratio markets.'],
    [['Will these markets correct?', 'Not reliably — some have been elevated for decades.']],
    'High price-to-rent markets overview.'
  ),
  mk('low-price-to-rent-markets', 'Low price-to-rent markets',
    'Markets with ratios below 13 heavily favor buying — Cleveland, Detroit, Memphis, Pittsburgh.',
    ['Low ratios signal buyer-favorable math', 'Buying can break even within 3-4 years'],
    [['Examples', 'Cleveland, Detroit, Memphis, Pittsburgh, Indianapolis.']],
    ['Low-ratio markets reward early buyers.'],
    [['Are these markets risky?', 'They have lower appreciation but stable ownership economics.']],
    'Low price-to-rent markets overview.'
  ),
  mk('fastest-appreciating-markets', 'Fastest-appreciating markets',
    'Markets with strong recent appreciation include Austin, Tampa, Phoenix, Boise, and Raleigh.',
    ['Past is not future — these markets have cooled recently'],
    [['Drivers', 'Population growth, tech jobs, migration.']],
    ['Buy appreciation expectations cautiously.'],
    [['Can I still profit?', 'Maybe — but extrapolation risk is real.']],
    'Fastest-appreciating markets overview.'
  ),
  mk('most-stable-markets', 'Most stable markets',
    'Markets with low volatility include Pittsburgh, Omaha, and much of the Midwest.',
    ['Stable markets reduce downside risk'],
    [['Why stability matters', 'Smaller drawdowns make ownership safer.']],
    ['Stable markets suit conservative buyers.'],
    [['Do stable markets appreciate?', 'Modestly, with less variance.']],
    'Most stable U.S. housing markets.'
  ),
  mk('high-property-tax-markets', 'High property tax markets',
    'NJ, IL, NH, CT, and TX lead in effective property tax rates.',
    ['Property tax compounds over decades', 'Can offset entry-price advantages'],
    [['Why so high', 'Local school funding and service structure.']],
    ['Property tax can dominate ongoing ownership cost.'],
    [['Can taxes be appealed?', 'Yes — assessment appeals are often successful.']],
    'High property tax markets overview.'
  ),
  mk('no-income-tax-states', 'No state income tax states for housing decisions',
    'Nine states have no income tax: TX, FL, TN, NV, WA, WY, SD, AK, and NH (wages only).',
    ['Higher disposable income but often higher property tax'],
    [['Tradeoffs', 'Lower income tax often means higher property or sales taxes.']],
    ['Model total tax exposure, not just income tax.'],
    [['Is Florida really tax-free?', 'Effectively no state income tax, but insurance and property tax can be substantial.']],
    'No income tax states overview.'
  ),
  mk('climate-risk-markets', 'Climate-risk housing markets',
    'Coastal and wildfire-exposed markets face rising insurance costs and potential resale discounts.',
    ['Florida coasts, California wildfire zones, Gulf coast'],
    [['Insurance trends', 'Premiums have risen sharply in exposed markets.']],
    ['Factor climate risk into long-term models.'],
    [['Is this already priced in?', 'Increasingly, yes — and growing.']],
    'Climate-risk housing markets.'
  ),
  mk('rent-control-markets', 'Rent control markets',
    'NYC, SF, LA, Berkeley, Newark, and several NJ cities have rent control. Rent control shifts the buy vs. rent math.',
    ['Long-tenure renters benefit most', 'Buying urgency is lower'],
    [['How rent control works', 'Caps annual increases; may exempt new construction.']],
    ['Rent control extends rent-wins horizons.'],
    [['Is vacancy decontrol common?', 'Yes — when tenants move out, rent resets.']],
    'Rent control markets overview.'
  ),
  mk('college-town-markets', 'College town housing markets',
    'College towns have unique rental demand tied to enrollment cycles. Examples: Ann Arbor, Madison, Boulder.',
    ['Summer vacancies are common', 'Student leases dominate'],
    [['Patterns', 'Seasonal and cyclical rental demand.']],
    ['College towns suit investor and long-tenure owners.'],
    [['Are college town condos a good investment?', 'Sometimes — but turnover and wear are high.']],
    'College town housing markets.'
  ),
  mk('tech-hub-markets', 'Tech hub housing markets',
    'SF Bay Area, Seattle, Austin, Boston, NYC tech corridors have unique demand patterns tied to tech employment cycles.',
    ['High compensation, high prices', 'Cycles tied to tech funding'],
    [['Volatility', 'Tech layoffs can shift local demand quickly.']],
    ['Plan for tech cycle variance in these markets.'],
    [['Is remote work changing this?', 'Somewhat — some demand has dispersed to secondary markets.']],
    'Tech hub housing markets.'
  ),
];

export const getMarket = (slug: string) => markets.find((m) => m.slug === slug);
