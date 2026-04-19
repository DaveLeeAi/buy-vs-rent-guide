import { StateConfig, CityConfig, FaqItem } from '@/config/types';
import { comparisons } from '@/config/comparisons';
import { scenarios } from '@/config/scenarios';
import { guides } from '@/config/guides';
import { stateNarratives } from '@/config/stateNarratives';
import { cityNarratives } from '@/config/cityNarratives';

export type MarketCharacter =
  | 'low-ratio-low-tax'
  | 'low-ratio-high-tax'
  | 'balanced'
  | 'high-ratio-coastal'
  | 'high-ratio-supply-constrained'
  | 'high-tax-midwest'
  | 'sunbelt-growth'
  | 'pacific-northwest'
  | 'rust-belt-affordable'
  | 'mountain-west'
  | 'no-income-tax';

const NO_INCOME_TAX_STATES = new Set([
  'texas', 'florida', 'tennessee', 'nevada', 'washington', 'wyoming', 'south-dakota', 'alaska', 'new-hampshire',
]);

const SUNBELT = new Set([
  'arizona', 'nevada', 'texas', 'florida', 'georgia', 'north-carolina', 'south-carolina', 'tennessee',
]);

const PNW = new Set(['washington', 'oregon', 'idaho']);
const RUST_BELT = new Set(['ohio', 'michigan', 'pennsylvania', 'west-virginia', 'indiana', 'illinois']);
const MOUNTAIN = new Set(['colorado', 'utah', 'montana', 'wyoming', 'idaho']);
const MIDWEST = new Set(['ohio', 'indiana', 'illinois', 'michigan', 'wisconsin', 'minnesota', 'iowa', 'missouri', 'kansas', 'nebraska', 'north-dakota', 'south-dakota']);
const COASTAL_INSURANCE = new Set(['florida', 'louisiana', 'texas', 'mississippi', 'alabama', 'south-carolina', 'north-carolina']);
const SUPPLY_CONSTRAINED_COASTAL = new Set(['california', 'new-york', 'massachusetts', 'hawaii', 'new-jersey', 'washington']);

export function classifyState(state: StateConfig): MarketCharacter {
  const { slug, priceToRentRatio, propertyTaxRate } = state;
  if (SUPPLY_CONSTRAINED_COASTAL.has(slug) && priceToRentRatio >= 20) return 'high-ratio-coastal';
  if (priceToRentRatio >= 22) return 'high-ratio-supply-constrained';
  if (PNW.has(slug)) return 'pacific-northwest';
  if (MOUNTAIN.has(slug)) return 'mountain-west';
  if (MIDWEST.has(slug) && propertyTaxRate >= 1.8) return 'high-tax-midwest';
  if (RUST_BELT.has(slug) && priceToRentRatio <= 15) return 'rust-belt-affordable';
  if (SUNBELT.has(slug)) return 'sunbelt-growth';
  if (NO_INCOME_TAX_STATES.has(slug)) return 'no-income-tax';
  if (priceToRentRatio <= 15 && propertyTaxRate <= 1.0) return 'low-ratio-low-tax';
  if (priceToRentRatio <= 16 && propertyTaxRate >= 1.6) return 'low-ratio-high-tax';
  return 'balanced';
}

export function classifyCity(city: CityConfig): MarketCharacter {
  const { stateSlug, priceToRentRatio, propertyTaxRate } = city;
  if (SUPPLY_CONSTRAINED_COASTAL.has(stateSlug) && priceToRentRatio >= 20) return 'high-ratio-coastal';
  if (priceToRentRatio >= 22) return 'high-ratio-supply-constrained';
  if (PNW.has(stateSlug)) return 'pacific-northwest';
  if (MOUNTAIN.has(stateSlug)) return 'mountain-west';
  if (MIDWEST.has(stateSlug) && propertyTaxRate >= 1.8) return 'high-tax-midwest';
  if (RUST_BELT.has(stateSlug) && priceToRentRatio <= 15) return 'rust-belt-affordable';
  if (SUNBELT.has(stateSlug)) return 'sunbelt-growth';
  if (NO_INCOME_TAX_STATES.has(stateSlug)) return 'no-income-tax';
  return 'balanced';
}

export interface DerivedNarrative {
  character: MarketCharacter;
  interpretation: string;
  buyerProfile: string[];
  renterProfile: string[];
  caveats: string[];
  breakEvenNarrative: string;
  tags: string[];
}

const fmtPrice = (n: number) => `$${n.toLocaleString()}`;

function ratioBand(r: number): 'low' | 'mid' | 'high' | 'very-high' {
  if (r < 15) return 'low';
  if (r < 18) return 'mid';
  if (r < 22) return 'high';
  return 'very-high';
}

function taxBand(t: number): 'very-low' | 'low' | 'mid' | 'high' | 'very-high' {
  if (t < 0.6) return 'very-low';
  if (t < 1.0) return 'low';
  if (t < 1.5) return 'mid';
  if (t < 2.0) return 'high';
  return 'very-high';
}

function interpretationFor(state: { name: string; priceToRentRatio: number; propertyTaxRate: number; medianHomePrice: number }, character: MarketCharacter): string {
  const band = ratioBand(state.priceToRentRatio);
  const tax = taxBand(state.propertyTaxRate);
  switch (character) {
    case 'low-ratio-low-tax':
      return `${state.name}'s ${state.priceToRentRatio.toFixed(1)} price-to-rent ratio combined with a low ${state.propertyTaxRate}% effective property tax rate makes it one of the friendliest buyer markets in the country. With a median home near ${fmtPrice(state.medianHomePrice)}, total cost of ownership typically sits below market rent within 3-4 years for stable households.`;
    case 'low-ratio-high-tax':
      return `Home prices in ${state.name} look attractive relative to rent, but the ${state.propertyTaxRate}% effective property tax rate partially offsets that advantage. Buyers should model effective rate and homestead exemptions carefully before assuming the low sticker price translates to low carrying cost.`;
    case 'high-ratio-coastal':
      return `Coastal and supply-constrained markets in ${state.name} have pushed the price-to-rent ratio to ${state.priceToRentRatio.toFixed(1)}. That means renting is usually cheaper per month than owning the equivalent home, and break-even typically requires 7-10+ years of tenure plus stable appreciation to beat renting and investing the difference.`;
    case 'high-ratio-supply-constrained':
      return `${state.name}'s high ${state.priceToRentRatio.toFixed(1)} ratio reflects supply constraints and premium pricing. Unless you have a clear long-term horizon, renting and investing the capital you would have used as a down payment tends to be competitive with owning.`;
    case 'high-tax-midwest':
      return `${state.name} has a moderate entry price but a ${state.propertyTaxRate}% effective property tax rate that is among the highest in the U.S. The property tax line compounds into tens of thousands of dollars over a decade and should be modeled explicitly.`;
    case 'sunbelt-growth':
      return `${state.name} sits in the Sunbelt growth corridor. Population and job inflows support steady rent growth and appreciation but also make markets more volatile. Buying can favor longer-term residents; shorter stays may benefit from the flexibility of renting during the next rate cycle.`;
    case 'pacific-northwest':
      return `${state.name} has a Pacific Northwest profile: strong historical appreciation, premium urban prices, and stricter condo rules than much of the country. Buyers benefit most with 6+ year horizons; short-stay professionals often win by renting near job hubs.`;
    case 'mountain-west':
      return `${state.name} has seen rapid in-migration and meaningful appreciation variance. Wildfire insurance is an increasingly material input. Break-even math is favorable over 5-7 year horizons for stable households.`;
    case 'rust-belt-affordable':
      return `${state.name}'s affordable entry prices and ${state.priceToRentRatio.toFixed(1)} ratio make ownership financially accessible. Appreciation has been slower than the national average, so the decision should center on cash-flow savings vs. rent rather than equity growth.`;
    case 'no-income-tax':
      return `${state.name} has no state income tax, which effectively adds to your housing budget. Modeling should still center on property tax, insurance, and break-even — not just the tax-savings headline.`;
    default:
      return `${state.name} sits in a balanced band: a ${state.priceToRentRatio.toFixed(1)} price-to-rent ratio (${band}) and a ${tax} property-tax load. Buying typically breaks even in the 4-7 year range depending on the metro.`;
  }
}

function buyerProfileFor(character: MarketCharacter): string[] {
  switch (character) {
    case 'low-ratio-low-tax':
      return [
        'Households planning to stay at least 3-4 years',
        'Buyers prioritizing cash-flow savings over appreciation',
        'First-time buyers with modest down payments',
      ];
    case 'low-ratio-high-tax':
      return [
        'Long-tenure owners who will benefit from homestead caps',
        'Buyers paying mostly with cash to avoid interest load',
        'Families anchored to specific school districts',
      ];
    case 'high-ratio-coastal':
      return [
        'Professionals with 8+ year horizons and stable income',
        'Families committed to specific neighborhoods',
        'Buyers with significant down payment and no debt pressure',
      ];
    case 'high-ratio-supply-constrained':
      return [
        'Long-horizon buyers comfortable with slow equity ramp',
        'Owners who value stability over flexibility',
        'High-income households maxing mortgage deduction benefit',
      ];
    case 'high-tax-midwest':
      return [
        'Buyers who have verified the county effective rate',
        'Long-tenure families sending kids through local schools',
        'Homesteaders eligible for tax caps or exemptions',
      ];
    case 'sunbelt-growth':
      return [
        'Households planning to stay 5+ years',
        'Buyers comfortable modeling insurance cost growth',
        'Remote workers anchored to a specific metro',
      ];
    case 'pacific-northwest':
      return [
        'Long-horizon buyers who tolerate slower cash-flow breakeven',
        'Buyers prioritizing walkable urban neighborhoods',
        'Tech-employed households with stable tenure expectations',
      ];
    case 'mountain-west':
      return [
        'Residents planning 5-7 years of tenure',
        'Buyers accepting wildfire insurance volatility',
        'Families relocating for jobs in growth corridors',
      ];
    case 'rust-belt-affordable':
      return [
        'Buyers focused on cash-flow savings vs rent',
        'Investor-minded owners accepting slow appreciation',
        'Residents with long-term local ties',
      ];
    case 'no-income-tax':
      return [
        'Households who will hold 5+ years',
        'High earners redirecting income-tax savings into ownership',
        'Retirees seeking favorable tax domiciles',
      ];
    default:
      return [
        'Households with 4-7 year planning horizons',
        'Buyers who have modeled total cost including maintenance',
        'Families prioritizing school and neighborhood stability',
      ];
  }
}

function renterProfileFor(character: MarketCharacter): string[] {
  switch (character) {
    case 'low-ratio-low-tax':
      return [
        'Professionals in job rotations or contract roles',
        'New arrivals unsure of long-term neighborhood fit',
        'Households still paying down other high-interest debt',
      ];
    case 'low-ratio-high-tax':
      return [
        'Renters who want to avoid property-tax exposure',
        'Short-stay professionals (under 3 years)',
        'Households waiting on credit or savings improvement',
      ];
    case 'high-ratio-coastal':
      return [
        'Most short- and mid-term residents',
        'Career-mobile professionals',
        'Households reluctant to commit a large down payment',
        'Renters with investment accounts outperforming local appreciation',
      ];
    case 'high-ratio-supply-constrained':
      return [
        'Renters under 7-year horizons',
        'Flexible professionals with high earning upside',
        'Households prioritizing liquidity over equity',
      ];
    case 'high-tax-midwest':
      return [
        'Short-term residents avoiding large property-tax bills',
        'Renters who expect to relocate within 3 years',
        'Households with unstable employment',
      ];
    case 'sunbelt-growth':
      return [
        'Newcomers testing neighborhoods for 6-12 months',
        'Renters waiting out high interest-rate cycles',
        'Professionals avoiding coastal insurance exposure',
      ];
    case 'pacific-northwest':
      return [
        'Urban professionals at 2-4 year horizons',
        'Tech employees with uncertain tenure',
        'Renters prioritizing walkable neighborhoods',
      ];
    case 'mountain-west':
      return [
        'Remote workers testing a new metro',
        'Short-term residents (under 4 years)',
        'Renters unwilling to underwrite wildfire insurance',
      ];
    case 'rust-belt-affordable':
      return [
        'Young professionals saving for a larger down payment',
        'Short-stay residents awaiting career clarity',
        'Households with variable income',
      ];
    case 'no-income-tax':
      return [
        'New arrivals within their first 12 months',
        'Renters hedging on insurance or climate exposure',
        'Career-mobile professionals',
      ];
    default:
      return [
        'Residents uncertain about a 4+ year commitment',
        'Professionals in probationary roles',
        'Households prioritizing flexibility',
      ];
  }
}

function caveatsFor(name: string, character: MarketCharacter, propertyTaxRate: number): string[] {
  const base: Record<MarketCharacter, string[]> = {
    'low-ratio-low-tax': [
      `${name} has low property tax headline rates, but county-level differences can be material. Verify the effective rate for your specific address.`,
      'Insurance and maintenance are often underestimated in affordable markets — budget 1-2% of home value annually.',
      'Low appreciation expectations mean the decision should rest on rent savings, not capital gains.',
    ],
    'low-ratio-high-tax': [
      `The ${propertyTaxRate}% effective property tax rate in ${name} compounds into a meaningful ownership cost. Model it for every year of tenure.`,
      'Homestead exemptions and senior caps can reduce the effective bill — investigate eligibility early.',
      'Assessment appeals in high-tax states are common and often successful.',
    ],
    'high-ratio-coastal': [
      `${name} coastal markets often require 8+ years of tenure for buying to beat renting after all costs.`,
      'Insurance premiums for coastal properties have risen sharply and can shift the math year to year.',
      'Selling costs in these markets are typically 5-7% and must be modeled against projected equity.',
    ],
    'high-ratio-supply-constrained': [
      `Supply constraints in ${name} keep prices elevated; modest rate changes can shift break-even by 1-2 years.`,
      'Condo and co-op HOA exposure is common and should be modeled as an ongoing cost.',
      'Mansion, transfer, and recording taxes can add meaningfully to closing costs in premium markets.',
    ],
    'high-tax-midwest': [
      `${name}'s high property tax is partly driven by school funding — changing districts can change the effective rate significantly.`,
      'Pension and levy changes periodically push rates higher; budget a buffer.',
      'Assessment appeals are common and frequently successful in high-tax counties.',
    ],
    'sunbelt-growth': [
      `${name} has seen fast growth and cooling cycles. Do not extrapolate recent appreciation linearly.`,
      'Insurance costs — especially in hurricane-exposed zones — can rise faster than rent.',
      'HOA fees are common in new-construction Sunbelt neighborhoods.',
    ],
    'pacific-northwest': [
      `${name} has strict condo rules and longer inventory turnover than much of the U.S.`,
      'Long-term appreciation has been strong but cycle variance is meaningful.',
      'Short-term rental rules have tightened and affect investor math.',
    ],
    'mountain-west': [
      `Wildfire insurance requirements in ${name} have tightened; verify lender and insurer willingness for your target ZIP.`,
      'Altitude and climate raise maintenance costs on roofs and HVAC.',
      'Tourism-driven neighborhoods show different pricing behavior than resident-dominated ones.',
    ],
    'rust-belt-affordable': [
      `${name} offers affordable entry, but older housing stock means elevated maintenance reserves.`,
      'Flat or negative appreciation is possible — base the decision on cash-flow, not price gains.',
      'Home inspection is especially important given age of housing.',
    ],
    'no-income-tax': [
      `${name} uses property tax, sales tax, or other mechanisms to offset the lack of income tax. Model total effective tax load.`,
      'Insurance premiums can be meaningful in coastal or fire-exposed areas.',
      'Rapid in-migration can cause rent and price volatility.',
    ],
    balanced: [
      `${name} is a balanced market — neither strongly favoring buyers nor renters by default.`,
      'Metro-level differences are large; run the calculator with your specific ZIP.',
      'Rate environment matters more than statewide averages for your decision.',
    ],
  };
  return base[character];
}

function breakEvenNarrativeFor(name: string, character: MarketCharacter, priceToRent: number): string {
  switch (character) {
    case 'low-ratio-low-tax':
      return `In ${name}, the typical break-even on buying versus renting is 3-5 years. Low entry prices mean transaction costs represent a smaller share of total cost, and low carrying costs close the gap quickly.`;
    case 'low-ratio-high-tax':
      return `Break-even in ${name} usually lands at 4-6 years. The low price-to-rent ratio of ${priceToRent.toFixed(1)} helps, but high property tax adds ongoing cost that extends the crossover point.`;
    case 'high-ratio-coastal':
      return `Typical break-even in ${name} is 8-10+ years. Closing costs, selling costs, and high carrying cost mean short-tenure buyers often trail renters who invest the opportunity-cost capital.`;
    case 'high-ratio-supply-constrained':
      return `${name} markets often need 7-10 years to cross break-even. The math relies on continued appreciation, which is not guaranteed at a ${priceToRent.toFixed(1)} ratio.`;
    case 'high-tax-midwest':
      return `${name} break-even typically falls in the 5-7 year range. Property tax pulls the crossover out by about a year compared with lower-tax peer markets.`;
    case 'sunbelt-growth':
      return `Break-even in ${name} generally falls in the 4-6 year band, though insurance cost growth is a growing variable.`;
    case 'pacific-northwest':
      return `${name} break-even commonly sits at 6-8 years in major metros and 4-5 in secondary markets.`;
    case 'mountain-west':
      return `${name} break-even is typically 5-7 years with wildfire insurance assumptions explicit.`;
    case 'rust-belt-affordable':
      return `Break-even in ${name} is often 3-4 years, though appreciation gains are modest relative to coastal peers.`;
    case 'no-income-tax':
      return `Break-even in ${name} varies widely by metro but averages 4-6 years when income-tax savings are redirected to housing.`;
    default:
      return `Break-even in ${name} typically sits between 4 and 7 years depending on metro, rate, and your tenure assumptions.`;
  }
}

export function getStateNarrative(state: StateConfig): DerivedNarrative {
  const override = stateNarratives[state.slug];
  const character = override?.character ?? classifyState(state);
  return {
    character,
    interpretation: override?.interpretation ?? interpretationFor(state, character),
    buyerProfile: override?.buyerProfile ?? buyerProfileFor(character),
    renterProfile: override?.renterProfile ?? renterProfileFor(character),
    caveats: override?.caveats ?? caveatsFor(state.name, character, state.propertyTaxRate),
    breakEvenNarrative: override?.breakEvenNarrative ?? breakEvenNarrativeFor(state.name, character, state.priceToRentRatio),
    tags: override?.tags ?? [character],
  };
}

export function getCityNarrative(city: CityConfig): DerivedNarrative {
  const override = cityNarratives[city.slug];
  const character = override?.character ?? classifyCity(city);
  return {
    character,
    interpretation: override?.interpretation ?? interpretationFor(city, character),
    buyerProfile: override?.buyerProfile ?? buyerProfileFor(character),
    renterProfile: override?.renterProfile ?? renterProfileFor(character),
    caveats: override?.caveats ?? caveatsFor(city.name, character, city.propertyTaxRate),
    breakEvenNarrative: override?.breakEvenNarrative ?? breakEvenNarrativeFor(city.name, character, city.priceToRentRatio),
    tags: override?.tags ?? [character],
  };
}

const SCENARIO_MAP: Record<MarketCharacter, string[]> = {
  'low-ratio-low-tax': ['first-time-buyer-low-down-payment', 'low-cost-of-living-city', 'young-couple-starter-home', 'single-professional-condo'],
  'low-ratio-high-tax': ['hoa-heavy-neighborhood', 'one-income-household', 'first-time-buyer-low-down-payment', 'unsure-how-long-youll-stay'],
  'high-ratio-coastal': ['high-cost-of-living-city', 'high-rent-city-vs-buying-suburb', 'short-stay-3-years', 'remote-worker-relocation'],
  'high-ratio-supply-constrained': ['high-cost-of-living-city', 'short-stay-3-years', 'remote-worker-relocation', 'cash-buyer-strategy'],
  'high-tax-midwest': ['family-of-4-buy-or-rent', 'relocating-for-school', 'two-income-household-optimizer', 'unsure-how-long-youll-stay'],
  'sunbelt-growth': ['climate-risk-move', 'remote-worker-relocation', 'growing-family-second-home', 'hoa-heavy-neighborhood'],
  'pacific-northwest': ['remote-worker-relocation', 'high-cost-of-living-city', 'young-couple-starter-home', 'single-professional-condo'],
  'mountain-west': ['climate-risk-move', 'remote-worker-relocation', 'growing-family-second-home', 'new-job-relocation'],
  'rust-belt-affordable': ['low-cost-of-living-city', 'first-time-buyer-low-down-payment', 'bridge-to-buy', 'one-income-household'],
  'no-income-tax': ['retiree-downsizing', 'climate-risk-move', 'new-job-relocation', 'high-cost-of-living-city'],
  balanced: ['family-of-4-buy-or-rent', 'first-time-buyer-low-down-payment', 'unsure-how-long-youll-stay', 'bridge-to-buy'],
};

const GUIDE_MAP: Record<MarketCharacter, string[]> = {
  'low-ratio-low-tax': ['when-buying-breaks-even', 'maintenance-budgeting', 'hidden-costs-of-buying', 'down-payment-strategies'],
  'low-ratio-high-tax': ['property-tax-basics', 'hidden-costs-of-buying', 'when-buying-breaks-even', 'pmi-explained'],
  'high-ratio-coastal': ['why-renting-can-be-smarter', 'opportunity-cost-of-down-payment', 'how-to-compare-offers-fairly', 'closing-costs-guide'],
  'high-ratio-supply-constrained': ['why-renting-can-be-smarter', 'opportunity-cost-of-down-payment', 'selling-costs-explained', 'mortgage-rate-impact-on-decision'],
  'high-tax-midwest': ['property-tax-basics', 'how-to-compare-offers-fairly', 'maintenance-budgeting', 'insurance-for-homeowners'],
  'sunbelt-growth': ['insurance-for-homeowners', 'rent-growth-assumptions', 'understanding-hoa-fees', 'appreciation-vs-inflation'],
  'pacific-northwest': ['mortgage-rate-impact-on-decision', 'understanding-hoa-fees', 'when-buying-breaks-even', 'rent-growth-assumptions'],
  'mountain-west': ['insurance-for-homeowners', 'appreciation-vs-inflation', 'maintenance-budgeting', 'when-buying-breaks-even'],
  'rust-belt-affordable': ['maintenance-budgeting', 'hidden-costs-of-buying', 'down-payment-strategies', 'when-buying-breaks-even'],
  'no-income-tax': ['property-tax-basics', 'insurance-for-homeowners', 'how-to-compare-offers-fairly', 'appreciation-vs-inflation'],
  balanced: ['what-price-to-rent-ratio-means', 'how-much-house-can-you-afford-vs-rent', 'when-buying-breaks-even', 'hidden-costs-of-buying'],
};

export function relatedScenariosForCharacter(character: MarketCharacter) {
  const slugs = SCENARIO_MAP[character];
  return slugs
    .map((slug) => scenarios.find((s) => s.slug === slug))
    .filter(Boolean)
    .map((s) => ({ label: s!.title, href: `/scenarios/${s!.slug}`, description: s!.persona }));
}

export function relatedGuidesForCharacter(character: MarketCharacter) {
  const slugs = GUIDE_MAP[character];
  return slugs
    .map((slug) => guides.find((g) => g.slug === slug))
    .filter(Boolean)
    .map((g) => ({ label: g!.title, href: `/guides/${g!.slug}`, description: g!.bluf.slice(0, 90) + '...' }));
}

export function relatedComparisonsForState(stateSlug: string) {
  const list = comparisons.filter((c) =>
    c.slug.includes(stateSlug) || c.kind === 'state-vs-state'
  );
  const prioritized = [
    ...list.filter((c) => c.slug.includes(stateSlug)),
    ...list.filter((c) => !c.slug.includes(stateSlug)),
  ];
  return prioritized.slice(0, 4).map((c) => ({
    label: c.title.replace(': Buy or Rent?', ''),
    href: `/compare/${c.slug}`,
    description: c.subtitle,
  }));
}

export function relatedComparisonsForCity(citySlug: string, stateSlug: string) {
  const list = comparisons.filter((c) =>
    c.slug.includes(citySlug) || c.slug.includes(stateSlug)
  );
  const general = comparisons.filter((c) => c.kind === 'city-vs-city');
  const combined = [...list, ...general].filter(
    (v, i, arr) => arr.findIndex((x) => x.slug === v.slug) === i
  );
  return combined.slice(0, 4).map((c) => ({
    label: c.title.replace(': Buy or Rent?', ''),
    href: `/compare/${c.slug}`,
    description: c.subtitle,
  }));
}

export function deriveStateFaq(state: StateConfig, character: MarketCharacter): FaqItem[] {
  const existing = state.faqItems ?? [];
  const extras: FaqItem[] = [];
  if (character === 'low-ratio-low-tax') {
    extras.push({
      question: `Is buying in ${state.name} a good deal for newcomers?`,
      answer: `Yes for most buyers planning 3+ years of residence. Low property tax and entry prices make carrying cost competitive with rent quickly.`,
    });
  }
  if (character === 'high-ratio-coastal' || character === 'high-ratio-supply-constrained') {
    extras.push({
      question: `Why does ${state.name} favor renting?`,
      answer: `A price-to-rent ratio above 20 means monthly ownership costs materially exceed rent. Break-even requires long tenure and consistent appreciation.`,
    });
  }
  if (character === 'high-tax-midwest') {
    extras.push({
      question: `How much does property tax matter in ${state.name}?`,
      answer: `A lot. On a $300k home at a 2% effective rate, property tax alone is $6,000/year — roughly 30% of a typical mortgage payment. Model it explicitly.`,
    });
  }
  if (character === 'sunbelt-growth') {
    extras.push({
      question: `Is insurance a concern in ${state.name}?`,
      answer: `In coastal and storm-exposed areas, yes. Premiums have risen sharply and are a key variable for total cost of ownership.`,
    });
  }
  if (character === 'no-income-tax') {
    extras.push({
      question: `Does no state income tax make ${state.name} cheaper to own in?`,
      answer: `It increases disposable income, but other taxes (property, sales) and insurance often offset the benefit. Model total effective tax.`,
    });
  }
  return [...existing, ...extras];
}

export function deriveCityFaq(city: CityConfig, character: MarketCharacter): FaqItem[] {
  const existing = city.faqItems ?? [];
  const extras: FaqItem[] = [];
  if (character === 'high-ratio-coastal' || character === 'high-ratio-supply-constrained') {
    extras.push({
      question: `How long should I plan to stay in ${city.name} before buying?`,
      answer: `Plan on 7-10+ years for ownership to beat renting after all transaction costs, unless you are a cash buyer or have strong local tenure anchors.`,
    });
  }
  if (character === 'sunbelt-growth') {
    extras.push({
      question: `Are HOA fees common in ${city.name}?`,
      answer: `Yes — particularly in newer subdivisions. Factor HOA dues, reserves, and rules into your decision.`,
    });
  }
  if (character === 'rust-belt-affordable') {
    extras.push({
      question: `Should I expect meaningful appreciation in ${city.name}?`,
      answer: `Historically modest. Decide based on cash-flow vs rent rather than betting on price gains.`,
    });
  }
  if (character === 'mountain-west') {
    extras.push({
      question: `How does wildfire risk affect buying in ${city.name}?`,
      answer: `Insurance availability and cost have tightened in higher-risk ZIPs. Confirm insurability before committing to a purchase.`,
    });
  }
  return [...existing, ...extras];
}
