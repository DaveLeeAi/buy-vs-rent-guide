import { StateNarrativeOverride } from './stateNarratives';

export const cityNarratives: Record<string, StateNarrativeOverride> = {
  'new-york': {
    character: 'high-ratio-coastal',
    interpretation:
      'NYC is a co-op-dominated market with high transfer taxes and dense rental supply. Outer-borough entry is 40-60% below Manhattan, but total ownership cost still favors renters for the first 7-10 years of tenure. Rent stabilization meaningfully lengthens the rent-wins horizon for long-tenure renters.',
    buyerProfile: [
      'Cash-heavy buyers committed to 10+ years in a specific neighborhood',
      'Families needing stability in specific school zones',
      'High-income earners benefiting from tax treatment on large mortgages',
    ],
    renterProfile: [
      'The vast majority of NYC residents under 10 years of tenure',
      'Rent-stabilized tenants with strong tenure discounts',
      'Mobile professionals and newcomers',
      'Households prioritizing liquidity and flexibility',
    ],
    caveats: [
      'Co-op boards can reject buyers for non-financial reasons.',
      'Mortgage recording tax (~1.925%) and mansion tax (1%+) inflate closing costs.',
      'Co-op maintenance often includes the building\'s underlying mortgage.',
      'Flip taxes on resale reduce effective equity on exit.',
    ],
    breakEvenNarrative:
      'Break-even for NYC buyers commonly sits at 8-12 years when closing, transfer, and flip taxes are included. Manhattan and Brooklyn co-ops cluster toward the top of that range.',
  },
  'los-angeles': {
    character: 'high-ratio-coastal',
    interpretation:
      'Los Angeles combines premium entry prices with Prop 13 property-tax protection for long-tenure owners. The result: long-horizon owners accumulate a growing effective discount against similar renters, but short-tenure buyers often underperform.',
    caveats: [
      'Prop 13 benefits only apply after purchase — new buyers pay on assessed value.',
      'Fire insurance availability has tightened in many hillside ZIPs.',
      'Earthquake coverage is separate.',
    ],
  },
  'san-diego': {
    character: 'high-ratio-coastal',
  },
  chicago: {
    character: 'high-tax-midwest',
    interpretation:
      'Chicago pairs moderate entry prices with Cook County\'s high effective property tax. Condo HOA exposure in high-rises is significant and must be modeled. Neighborhood pricing variance is among the widest in the U.S.',
  },
  miami: {
    character: 'sunbelt-growth',
    interpretation:
      'Miami\'s condo market has been reshaped by post-Surfside reserve reform. Insurance cost, assessment risk, and short-term rental rules vary sharply by building and neighborhood.',
    caveats: [
      'Special assessments on older condo buildings have been significant.',
      'Flood zone exposure affects both insurance and resale.',
      'HOA reserves and structural inspections are now more rigorous.',
    ],
  },
  atlanta: {
    character: 'sunbelt-growth',
  },
  houston: {
    character: 'no-income-tax',
    interpretation:
      'Houston has no zoning in the traditional sense, which creates neighborhood variance in ownership experience. Property tax is high; flood exposure is meaningful in parts of the metro.',
  },
  dallas: {
    character: 'no-income-tax',
  },
  'san-antonio': {
    character: 'no-income-tax',
  },
  austin: {
    character: 'sunbelt-growth',
    interpretation:
      'Austin saw among the largest U.S. price swings in the last cycle — up sharply then cooling. Buyers should stress-test appreciation assumptions and account for Texas property-tax load.',
  },
  phoenix: {
    character: 'sunbelt-growth',
    caveats: [
      'Summer cooling costs are a meaningful ongoing cost.',
      'Water regulation changes may affect new development and outlying ZIPs.',
      'HOA fees are common in Valley subdivisions.',
    ],
  },
  denver: {
    character: 'mountain-west',
  },
  philadelphia: {
    character: 'rust-belt-affordable',
    interpretation:
      'Philadelphia offers diverse, older housing stock with moderate prices. Maintenance reserves and roof/HVAC replacements should be budgeted carefully. Neighborhood variance is large.',
  },
  charlotte: {
    character: 'sunbelt-growth',
  },
  jacksonville: {
    character: 'sunbelt-growth',
  },
  'fort-worth': {
    character: 'no-income-tax',
    interpretation:
      'Fort Worth typically prices 10-15% under Dallas for comparable homes, which shortens break-even meaningfully. Tarrant County property tax is the main drag on the math.',
    caveats: [
      'Tarrant County effective property tax runs near 2.05% after ISD and MUD levies.',
      'Commute time to Dallas job centers can add real cost if only one partner works in DFW proper.',
      'Hail exposure raises insurance premiums vs. non-Texas peers.',
    ],
  },
  columbus: {
    character: 'balanced',
    interpretation:
      'Columbus is one of the Midwest\'s strongest quiet growth stories. Moderate pricing, solid appreciation, and steady employment create a durable buy case. Intel\'s planned facilities skew future demand east of the metro.',
  },
  indianapolis: {
    character: 'low-ratio-low-tax',
    interpretation:
      'Indianapolis is a standout among large U.S. cities: sub-15 price-to-rent ratio combined with Indiana\'s 1% residential tax cap. Carrying cost competes with rent quickly and property tax stays predictable.',
  },
  'san-francisco': {
    character: 'high-ratio-coastal',
    interpretation:
      'San Francisco is one of the most extreme rent-favoring markets in the country. At a near-30 price-to-rent ratio, ownership only pencils with very long horizons, substantial cash, and favorable appreciation.',
    caveats: [
      'TIC structures are common, with limited lender options and resale discount.',
      'Transfer tax scales sharply at high price points.',
      'Rent-controlled units create asymmetric rent-vs-buy math for long-tenure tenants.',
      'Condo HOA fees in high-rise buildings are a major ongoing cost.',
    ],
    breakEvenNarrative:
      'San Francisco break-even is commonly 10-14 years when transaction costs, HOA exposure, and opportunity cost are included. Few markets require more tenure to justify purchase.',
  },
  seattle: {
    character: 'pacific-northwest',
    interpretation:
      'Seattle is a high-ratio market with no state income tax. The combined profile rewards long-horizon tech employees and penalizes short stays. Condo supply has been artificially constrained by Washington\'s construction defect statutes.',
    caveats: [
      'Condo supply is limited by Washington state construction defect law.',
      'Seattle B&O and city-level levies affect small-business owner math.',
      'Bellevue and the Eastside often exceed Seattle per-foot pricing.',
    ],
  },
  nashville: {
    character: 'sunbelt-growth',
    interpretation:
      'Nashville has seen rapid growth with no state income tax on wages and moderate property taxes. The risk is price momentum reversing — buyers should not extrapolate recent double-digit appreciation.',
    caveats: [
      'Short-term rental permits are capped in many ZIPs.',
      'Corporate relocations drive demand but can be clustered geographically.',
      'Insurance premiums have risen post tornado cycles.',
    ],
  },
  'oklahoma-city': {
    character: 'low-ratio-low-tax',
    interpretation:
      'OKC pairs a sub-15 ratio with modest property taxes, producing one of the fastest break-even profiles of any major U.S. city. Energy exposure adds cyclicality.',
  },
  'el-paso': {
    character: 'no-income-tax',
    interpretation:
      'El Paso combines some of the lowest Texas home prices with above-average Texas property tax. Fort Bliss demand stabilizes the rental market and supports investor interest.',
  },
  boston: {
    character: 'high-ratio-coastal',
    interpretation:
      'Boston\'s high price-to-rent ratio, old housing stock, and student-influenced rental cycles make the market more complex than its numbers suggest. Long-tenure condo buyers in the urban core have historically done well.',
    caveats: [
      'Older housing stock (80-150 years) requires meaningful maintenance reserves.',
      'Massachusetts income tax plus millionaires\' surtax affect high earners.',
      'Condo HOA fees in premium buildings can be significant.',
      'University-driven rent seasonality shapes investor demand.',
    ],
  },
  portland: {
    character: 'pacific-northwest',
    interpretation:
      'Portland combines Oregon\'s 9.9% top income tax with constrained supply from the urban growth boundary. The market has cooled faster than West Coast peers.',
    caveats: [
      'Oregon top income tax reduces effective housing budget.',
      'Multnomah County levies additional business and preschool taxes.',
      'Tree preservation ordinances add renovation complexity.',
    ],
  },
  'las-vegas': {
    character: 'no-income-tax',
    interpretation:
      'Las Vegas combines no income tax with very low property taxes, offsetting a moderately high price-to-rent ratio. Service-sector cyclicality is the biggest risk variable.',
    caveats: [
      'Hospitality and gaming employment cycles more sharply than other metros.',
      'HOA fees are nearly universal in Valley master-planned communities.',
      'Summer cooling costs are a real ongoing expense.',
    ],
  },
  detroit: {
    character: 'rust-belt-affordable',
    interpretation:
      'Detroit\'s headline price-to-rent ratio is deceptive. Property condition, tax burden, and insurance availability drive most of the real economics. Careful neighborhood- and property-level diligence is non-negotiable.',
    caveats: [
      'Effective property tax rate is among the highest in the U.S.',
      'Tax lien and code violation history must be verified pre-purchase.',
      'Insurance availability varies sharply by ZIP.',
      'Rehabilitation costs on older housing stock are often underestimated.',
    ],
  },
  memphis: {
    character: 'rust-belt-affordable',
    interpretation:
      'Memphis has one of the lowest ratios of any major metro, supported by logistics employment. Institutional investor activity has been heavy, which has lifted rents but also compressed resale inventory.',
  },
  louisville: {
    character: 'balanced',
    interpretation:
      'Louisville pairs moderate prices with below-average property tax and stable logistics/healthcare employment. Older housing stock requires reserve discipline, but the ratio supports buying within 3-4 years.',
  },
  baltimore: {
    character: 'high-tax-midwest',
    interpretation:
      'Baltimore has an extremely low price-to-rent ratio on paper, but city property tax above 2% and meaningful condition variance mean the real economics hinge on neighborhood and property-specific diligence.',
    caveats: [
      'Baltimore City property tax is above 2% — among the highest for major U.S. cities.',
      'Property condition variance by ZIP is exceptionally wide.',
      'Maryland layers county and city income taxes.',
      'Row-home housing stock typically requires significant maintenance investment.',
    ],
  },
  milwaukee: {
    character: 'high-tax-midwest',
    interpretation:
      'Milwaukee\'s low sticker price is offset by one of the highest effective property tax rates in the country. The cost of carry is closer to peer metros than the price would suggest.',
  },
  albuquerque: {
    character: 'balanced',
    interpretation:
      'Albuquerque offers a distinct high-desert market with low property taxes and steady but modest appreciation. Sandia Labs and Kirtland anchor a stable professional workforce.',
    caveats: [
      'Stucco and adobe homes require specialized maintenance knowledge.',
      'Water availability is a long-term regional variable.',
      'UV exposure accelerates exterior wear vs. northern climates.',
    ],
  },
  tucson: {
    character: 'sunbelt-growth',
    interpretation:
      'Tucson prices 20-30% below Phoenix with a similar low-tax profile. The market has slower appreciation but better cash-flow characteristics — a buy-for-savings rather than buy-for-capital-gains story.',
  },
  fresno: {
    character: 'high-ratio-coastal',
    interpretation:
      'Fresno is California\'s most accessible major-city entry. Prop 13 protections apply; water and air-quality considerations are distinct to the Central Valley.',
    caveats: [
      'Air quality concerns drive HVAC and filtration upgrades owners pay for.',
      'Central Valley water policy is a long-term variable.',
      'Appreciation has been slower than coastal California.',
    ],
  },
  sacramento: {
    character: 'high-ratio-coastal',
    interpretation:
      'Sacramento has become the Bay Area\'s primary affordability relief valve. Prop 13 protection begins immediately, and prices still run 40-50% below the Bay Area. Mello-Roos on newer construction must be verified.',
    caveats: [
      'Mello-Roos special assessments add 0.3-1.0% to effective property tax in many new developments.',
      'Bay Area remote-worker demand has compressed entry-level inventory.',
      'Summer heat is a real ongoing cooling cost.',
    ],
  },
  'kansas-city': {
    character: 'balanced',
    interpretation:
      'Kansas City spans two states with different tax regimes. The Missouri side has broader price variation and the strongest urban neighborhoods; the Kansas side offers top-ranked Johnson County schools at premium prices.',
  },
  mesa: {
    character: 'sunbelt-growth',
    interpretation:
      'Mesa is the most accessible Phoenix-metro entry with very low property taxes. HOA prevalence and 55+ community restrictions are distinctive features buyers must verify.',
  },
  omaha: {
    character: 'high-tax-midwest',
    interpretation:
      'Omaha pairs moderate home prices with among the highest Plains-state property taxes. Stable insurance and finance employment support consistent long-tenure demand.',
  },
  'colorado-springs': {
    character: 'mountain-west',
    interpretation:
      'Colorado Springs combines exceptionally low property taxes with rising prices from military relocation and aerospace/cybersecurity growth. Wildfire insurance in western ZIPs is the key ongoing variable.',
    caveats: [
      'Wildfire insurance has tightened in wildland-urban interface ZIPs.',
      'Military duty cycles create 2-3 year relocation churn.',
      'TABOR restrictions shape state-level tax dynamics.',
    ],
  },
  raleigh: {
    character: 'sunbelt-growth',
    interpretation:
      'Raleigh anchors the Research Triangle, supporting strong tech and biotech employment. The price-to-rent ratio above 21 means buying best fits 5+ year horizons despite low property tax.',
  },
  'long-beach': {
    character: 'high-ratio-coastal',
    interpretation:
      'Long Beach offers a cheaper coastal LA County entry point than Westside LA. Rent control on older buildings creates asymmetric rent-vs-buy math for long-tenure renters.',
    caveats: [
      'Rent-controlled buildings anchor rents for long-tenure tenants.',
      'Port-area industrial exposure shapes air quality in certain ZIPs.',
      'Prop 13 benefits begin at purchase for new owners.',
    ],
  },
  'virginia-beach': {
    character: 'balanced',
    interpretation:
      'Virginia Beach\'s military-anchored rental demand stabilizes the market across cycles. Flood zone exposure and rising coastal insurance are the main variables to model.',
    caveats: [
      'Coastal flood zones require NFIP or private flood coverage.',
      'Military duty rotations produce renter churn but not price volatility.',
      'Tourism-driven short-term rental market has its own rules by ZIP.',
    ],
  },
  oakland: {
    character: 'high-ratio-coastal',
    interpretation:
      'Oakland is the Bay Area\'s most affordable urban entry — typically 30-40% below San Francisco. Hillside fire insurance and neighborhood condition variance are decisive variables.',
    caveats: [
      'Hillside fire insurance has tightened significantly in recent years.',
      'Oakland rent control shapes long-tenure renter economics.',
      'Neighborhood condition and safety vary meaningfully across the city.',
    ],
  },
  minneapolis: {
    character: 'balanced',
    interpretation:
      'Minneapolis offers a balanced market with multiple Fortune 500 employers. Minnesota\'s 9.85% top income tax compresses effective budgets for high earners; winter maintenance is a real ongoing cost.',
    caveats: [
      'Minnesota top income tax reduces effective housing budget.',
      'Winter heating, roof ice dams, and snow removal are recurring costs.',
      'Twin Cities suburbs vary sharply by school district.',
    ],
  },
  tulsa: {
    character: 'low-ratio-low-tax',
    interpretation:
      'Tulsa is one of the most affordable mid-size markets in the U.S. The Tulsa Remote program has added modest inflows of remote professionals. Expect cash-flow savings rather than rapid appreciation.',
  },
  arlington: {
    character: 'no-income-tax',
    interpretation:
      'Arlington\'s between-the-anchors location makes it attractive for two-income DFW households where partners work in Dallas and Fort Worth respectively. Texas property tax is the main drag.',
  },
  'new-orleans': {
    character: 'sunbelt-growth',
    interpretation:
      'New Orleans pairs a favorable ratio and low property tax with some of the country\'s most challenging insurance and flood dynamics. The buy case depends heavily on property-level flood and wind exposure.',
    caveats: [
      'Homeowners insurance has risen 50-100% in many ZIPs post-storm cycles.',
      'Flood insurance is frequently required and expensive.',
      'Historic district rules constrain renovation options.',
      'Orleans Parish property taxes are low, but other surcharges apply.',
    ],
  },
  wichita: {
    character: 'low-ratio-low-tax',
    interpretation:
      'Wichita offers one of the fastest break-even profiles among major U.S. cities. Aerospace concentration creates cyclicality, so non-aerospace households have the most market stability.',
  },
  cleveland: {
    character: 'rust-belt-affordable',
    interpretation:
      'Cleveland\'s ultra-low sticker prices are partly offset by some of the highest Ohio property taxes and older housing stock requiring meaningful maintenance reserves. Healthcare employment anchors the economy.',
    caveats: [
      'Cuyahoga County effective property tax is among the highest in Ohio.',
      'Housing stock is typically 60-100+ years old and needs inspection discipline.',
      'Neighborhood condition variance is extreme.',
    ],
  },
  tampa: {
    character: 'sunbelt-growth',
    interpretation:
      'Tampa has been one of the fastest-growing metros in the U.S., supported by Florida\'s no-income-tax status and corporate relocations. Insurance premiums are the principal variable to model.',
    caveats: [
      'Homeowners insurance has risen sharply post-hurricane cycles.',
      'Flood zone designation drives large cost differences by address.',
      'Rapid appreciation through 2022 has flattened or reversed in some submarkets.',
    ],
  },
};
