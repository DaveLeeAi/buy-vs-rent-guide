import { MarketCharacter } from '@/lib/localNarrative';

export interface StateNarrativeOverride {
  character?: MarketCharacter;
  interpretation?: string;
  buyerProfile?: string[];
  renterProfile?: string[];
  caveats?: string[];
  breakEvenNarrative?: string;
  tags?: string[];
}

export const stateNarratives: Record<string, StateNarrativeOverride> = {
  california: {
    character: 'high-ratio-coastal',
    interpretation:
      'California has the defining supply-constrained market in the U.S. Prop 13 provides long-tenure owners meaningful property-tax protection, but entry prices in coastal metros mean the first 5-8 years of ownership often underperform renting-and-investing.',
    caveats: [
      'Prop 13 caps annual assessment growth at 2%, which favors long-tenure owners but penalizes mobility.',
      'Earthquake insurance is separate and not included in standard policies.',
      'Coastal fire insurance availability has tightened in recent cycles.',
    ],
    breakEvenNarrative:
      'California break-even varies wildly by metro. Coastal urban metros often require 8-12 years; inland Central Valley markets can cross at 4-6 years.',
  },
  texas: {
    character: 'no-income-tax',
    interpretation:
      'Texas has no state income tax but some of the highest property tax rates in the nation. The combination means sticker prices look affordable while carrying costs need careful modeling.',
    caveats: [
      'Effective property tax can exceed 2.2% in some counties.',
      'Homestead exemptions reduce taxable value but vary by district.',
      'Insurance in hail and hurricane zones has risen sharply.',
    ],
  },
  florida: {
    character: 'sunbelt-growth',
    interpretation:
      'Florida combines no state income tax with rising insurance exposure. Coastal and flood-zone properties face meaningful premium growth; inland Florida remains more predictable.',
    caveats: [
      'Hurricane and flood insurance are separate and significant.',
      'HOA fees in condo buildings have risen post-2022 reserve reforms.',
      'Short-term rental rules vary by city and condo association.',
    ],
  },
  'new-york': {
    character: 'high-ratio-coastal',
    interpretation:
      'New York has two very different housing economies. NYC favors renting for most residents under 8-10 years of tenure due to co-op structures and high transfer costs. Upstate favors buying within 3-5 years in many metros.',
    caveats: [
      'Mortgage recording tax and mansion tax add meaningfully to NYC closing costs.',
      'Long Island and Westchester property taxes are among the highest in the country.',
      'Rent stabilization in NYC extends the rent-wins horizon for long-tenure renters.',
    ],
  },
  illinois: {
    character: 'high-tax-midwest',
    interpretation:
      'Illinois has among the highest effective property tax rates in the country, largely due to pension and school funding. Entry prices are moderate, but carrying costs compound quickly.',
    caveats: [
      'Cook County property tax can exceed 2% effective.',
      'Assessment appeals are frequent and often successful.',
      'Pension-driven rate pressure is a material long-term risk.',
    ],
  },
  'new-jersey': {
    character: 'low-ratio-high-tax',
    interpretation:
      'New Jersey has the highest effective property tax in the country. Entry prices are moderate for a Northeast state, but total ownership cost is materially elevated by ongoing taxes.',
    caveats: [
      'Effective property tax often exceeds 2.2%.',
      'School funding via property tax creates wide district-level variance.',
      'Commuting costs to NYC or Philadelphia should be modeled with housing.',
    ],
  },
  washington: {
    character: 'pacific-northwest',
  },
  oregon: {
    character: 'pacific-northwest',
  },
  massachusetts: {
    character: 'high-ratio-coastal',
    interpretation:
      'Massachusetts is defined by Boston metro pricing, old housing stock, and strict condo rules. Rent control is limited, but Boston rents have grown faster than most U.S. metros.',
  },
  hawaii: {
    character: 'high-ratio-supply-constrained',
    interpretation:
      'Hawaii has among the highest price-to-rent ratios in the country. Ownership requires very long tenure to beat renting-and-investing. Local employment volatility and insurance costs are additional factors.',
  },
  alaska: {
    character: 'no-income-tax',
  },
  ohio: {
    character: 'rust-belt-affordable',
  },
  michigan: {
    character: 'rust-belt-affordable',
  },
  pennsylvania: {
    character: 'rust-belt-affordable',
  },
  colorado: {
    character: 'mountain-west',
  },
  utah: {
    character: 'mountain-west',
  },
  arizona: {
    character: 'sunbelt-growth',
  },
  nevada: {
    character: 'no-income-tax',
  },
};
