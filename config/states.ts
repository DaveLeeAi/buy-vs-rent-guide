import { StateConfig } from './types';

export const states: StateConfig[] = [
  {
    slug: 'alabama',
    name: 'Alabama',
    abbreviation: 'AL',
    medianHomePrice: 216000,
    medianMonthlyRent: 1050,
    priceToRentRatio: 17.1,
    avgAnnualAppreciation: 3.8,
    propertyTaxRate: 0.41,
    cities: [],
    blufVerdict:
      'Buying is often more affordable than renting in Alabama due to low home prices and property taxes, especially for stays of 4+ years.',
    keyFacts: [
      'Alabama has one of the lowest property tax rates in the U.S. at roughly 0.41%.',
      'Median home prices sit well below the national average.',
      'Monthly mortgage payments for a median-priced home typically run below median rent.',
    ],
    faqItems: [
      {
        question: 'Is it cheaper to buy or rent in Alabama?',
        answer:
          'For most Alabama markets, buying becomes cheaper than renting within 3-4 years due to low property taxes and affordable home prices. However, this depends on your specific location, income stability, and how long you plan to stay.',
      },
      {
        question: 'What is the average property tax rate in Alabama?',
        answer:
          'Alabama has one of the lowest effective property tax rates in the nation at approximately 0.41%, which significantly reduces the ongoing cost of homeownership.',
      },
    ],
  },
  {
    slug: 'alaska',
    name: 'Alaska',
    abbreviation: 'AK',
    medianHomePrice: 332000,
    medianMonthlyRent: 1350,
    priceToRentRatio: 20.5,
    avgAnnualAppreciation: 2.1,
    propertyTaxRate: 1.19,
    cities: [],
    blufVerdict:
      'Renting may be more practical in Alaska for short stays due to higher home prices and slower appreciation, but buying can pay off after 6+ years.',
    keyFacts: [
      'Alaska has no state income tax, which improves overall affordability for homeowners.',
      'Home appreciation has been slower than the national average in recent years.',
      'Heating and maintenance costs are higher than in most other states.',
    ],
    faqItems: [
      {
        question: 'Is buying a home in Alaska a good investment?',
        answer:
          'Alaska home values have appreciated more slowly than the national average. Buying makes sense if you plan to stay long-term (6+ years) and can manage higher maintenance and heating costs.',
      },
      {
        question: 'What extra costs should I consider when buying in Alaska?',
        answer:
          'Alaska homeowners face higher heating bills, potential well/septic maintenance in rural areas, and insurance costs related to extreme weather. Budget 1.5-2% of home value annually for maintenance.',
      },
    ],
  },
  {
    slug: 'arizona',
    name: 'Arizona',
    abbreviation: 'AZ',
    medianHomePrice: 395000,
    medianMonthlyRent: 1550,
    priceToRentRatio: 21.2,
    avgAnnualAppreciation: 5.2,
    propertyTaxRate: 0.62,
    cities: ['phoenix'],
    blufVerdict:
      'Arizona has seen strong price appreciation, making buying attractive for long-term residents, but elevated prices mean renters may fare better for stays under 5 years.',
    keyFacts: [
      'Arizona home values have risen sharply since 2020, driven by population growth.',
      'Property taxes remain below the national average at about 0.62%.',
      'Phoenix metro dominates the state housing market.',
    ],
    faqItems: [
      {
        question: 'Is the Arizona housing market overvalued?',
        answer:
          'Arizona experienced rapid price growth in recent years. The price-to-rent ratio suggests prices are moderately elevated, but strong population inflows continue to support demand.',
      },
      {
        question: 'How does Arizona property tax compare to other states?',
        answer:
          'Arizona property tax rates average about 0.62%, which is below the national median of roughly 1.1%. This keeps the ongoing cost of ownership relatively low.',
      },
    ],
  },
  {
    slug: 'arkansas',
    name: 'Arkansas',
    abbreviation: 'AR',
    medianHomePrice: 195000,
    medianMonthlyRent: 920,
    priceToRentRatio: 17.7,
    avgAnnualAppreciation: 4.1,
    propertyTaxRate: 0.62,
    cities: [],
    blufVerdict:
      'Buying is frequently the better financial choice in Arkansas, where low home prices and reasonable taxes make homeownership accessible.',
    keyFacts: [
      'Arkansas has some of the most affordable housing in the U.S.',
      'Median home prices are roughly 55% below the national median.',
      'The rental market is less competitive than in major metro states.',
    ],
    faqItems: [
      {
        question: 'Why is housing so affordable in Arkansas?',
        answer:
          'Arkansas benefits from lower land costs, modest population density, and a lower cost of living overall. These factors keep both purchase prices and rents well below national averages.',
      },
    ],
  },
  {
    slug: 'california',
    name: 'California',
    abbreviation: 'CA',
    medianHomePrice: 785000,
    medianMonthlyRent: 2650,
    priceToRentRatio: 24.7,
    avgAnnualAppreciation: 5.8,
    propertyTaxRate: 0.76,
    cities: ['los-angeles', 'san-diego'],
    blufVerdict:
      'Renting is often more cost-effective than buying in California for stays under 7 years due to very high home prices, despite strong appreciation.',
    keyFacts: [
      'California has the highest median home price of any state.',
      'Proposition 13 caps property tax increases, benefiting long-term owners.',
      'High home prices mean larger down payments and bigger opportunity cost.',
    ],
    faqItems: [
      {
        question: 'Is it worth buying a home in California?',
        answer:
          'California homes have historically appreciated well, but the high entry cost means the break-even point versus renting is often 6-8 years. If you plan to stay long-term and can afford the down payment, buying can build substantial equity.',
      },
      {
        question: 'How does Proposition 13 affect California homeowners?',
        answer:
          'Prop 13 limits property tax to 1% of the purchase price and caps annual increases at 2%. This means long-term homeowners pay significantly less in property taxes than recent buyers.',
      },
    ],
  },
  {
    slug: 'colorado',
    name: 'Colorado',
    abbreviation: 'CO',
    medianHomePrice: 535000,
    medianMonthlyRent: 1850,
    priceToRentRatio: 24.1,
    avgAnnualAppreciation: 5.4,
    propertyTaxRate: 0.51,
    cities: ['denver'],
    blufVerdict:
      'Colorado home prices are above average, but low property taxes and strong appreciation make buying worthwhile for residents staying 5+ years.',
    keyFacts: [
      'Colorado has very low property tax rates at roughly 0.51%.',
      'The Denver metro area drives much of the state housing demand.',
      'Mountain communities carry significantly different cost profiles than the Front Range.',
    ],
    faqItems: [
      {
        question: 'Is Denver driving up Colorado home prices?',
        answer:
          'The Denver metro area accounts for a large share of Colorado housing demand and has higher prices than the statewide median. Rural and mountain areas vary significantly.',
      },
    ],
  },
  {
    slug: 'connecticut',
    name: 'Connecticut',
    abbreviation: 'CT',
    medianHomePrice: 385000,
    medianMonthlyRent: 1600,
    priceToRentRatio: 20.1,
    avgAnnualAppreciation: 4.0,
    propertyTaxRate: 2.15,
    cities: [],
    blufVerdict:
      'High property taxes in Connecticut increase the ongoing cost of ownership, making the buy-vs-rent decision closer than in other Northeast states.',
    keyFacts: [
      'Connecticut has one of the highest effective property tax rates in the U.S.',
      'Home prices vary dramatically between Fairfield County and the rest of the state.',
      'High taxes offset moderate home prices in many markets.',
    ],
    faqItems: [
      {
        question: 'Why are Connecticut property taxes so high?',
        answer:
          'Connecticut relies heavily on local property taxes to fund public services, especially education. Municipal rates vary widely, with some towns exceeding 3% effective rates.',
      },
    ],
  },
  {
    slug: 'delaware',
    name: 'Delaware',
    abbreviation: 'DE',
    medianHomePrice: 350000,
    medianMonthlyRent: 1400,
    priceToRentRatio: 20.8,
    avgAnnualAppreciation: 4.5,
    propertyTaxRate: 0.57,
    cities: [],
    blufVerdict:
      'Delaware offers a moderate housing market with low property taxes and no sales tax, making buying attractive for stays of 4+ years.',
    keyFacts: [
      'Delaware has no sales tax, improving overall cost of living for residents.',
      'Property tax rates are well below the national average.',
      'Beach communities carry premium pricing compared to inland areas.',
    ],
    faqItems: [
      {
        question: 'Is Delaware a tax-friendly state for homeowners?',
        answer:
          'Delaware is considered one of the most tax-friendly states: no sales tax, low property taxes, and moderate income tax rates. These factors lower the total cost of homeownership.',
      },
    ],
  },
  {
    slug: 'florida',
    name: 'Florida',
    abbreviation: 'FL',
    medianHomePrice: 405000,
    medianMonthlyRent: 1750,
    priceToRentRatio: 19.3,
    avgAnnualAppreciation: 5.5,
    propertyTaxRate: 0.89,
    cities: ['jacksonville', 'miami'],
    blufVerdict:
      'Florida has no state income tax, which boosts homeowner savings, but insurance costs and hurricane risk must be factored into the true cost of buying.',
    keyFacts: [
      'Florida has no state income tax, directly benefiting homeowners.',
      'Homeowners insurance costs have risen sharply in recent years.',
      'The homestead exemption can reduce property tax obligations significantly.',
    ],
    faqItems: [
      {
        question: 'How does Florida homeowners insurance affect the buy decision?',
        answer:
          'Florida insurance premiums have risen substantially due to hurricane risk and insurer exits from the market. Annual insurance can exceed $3,000-$5,000 for many homes, which materially increases the cost of ownership.',
      },
      {
        question: 'What is the Florida homestead exemption?',
        answer:
          'The homestead exemption reduces the assessed value of a primary residence by up to $50,000 for property tax purposes and caps annual assessment increases at 3%.',
      },
    ],
  },
  {
    slug: 'georgia',
    name: 'Georgia',
    abbreviation: 'GA',
    medianHomePrice: 340000,
    medianMonthlyRent: 1500,
    priceToRentRatio: 18.9,
    avgAnnualAppreciation: 5.0,
    propertyTaxRate: 0.92,
    cities: ['atlanta'],
    blufVerdict:
      'Georgia offers a balanced housing market. Buying beats renting in most areas after 4-5 years, with Atlanta commanding a premium over the state average.',
    keyFacts: [
      'Atlanta metro accounts for over half the state housing market activity.',
      'Property taxes are near the national average.',
      'Home values have appreciated steadily, supported by job growth.',
    ],
    faqItems: [
      {
        question: 'Is Atlanta an affordable place to buy a home?',
        answer:
          'Atlanta home prices are above the Georgia statewide median but remain below coastal cities like Miami or Los Angeles. The metro area offers a range of price points across its many suburbs.',
      },
    ],
  },
  {
    slug: 'hawaii',
    name: 'Hawaii',
    abbreviation: 'HI',
    medianHomePrice: 835000,
    medianMonthlyRent: 2500,
    priceToRentRatio: 27.8,
    avgAnnualAppreciation: 4.2,
    propertyTaxRate: 0.28,
    cities: [],
    blufVerdict:
      'Hawaii has the highest price-to-rent ratio in the nation. Renting is often more cost-effective unless you plan to stay 8+ years and can afford the large down payment.',
    keyFacts: [
      'Hawaii has the lowest effective property tax rate in the U.S. at roughly 0.28%.',
      'Limited land supply drives persistently high prices.',
      'The gap between mainland and Hawaii housing costs is substantial.',
    ],
    faqItems: [
      {
        question: 'Why is Hawaiian real estate so expensive?',
        answer:
          'Limited buildable land, high demand from both residents and out-of-state buyers, geographic isolation driving up construction costs, and strict zoning regulations all contribute to Hawaii\'s elevated home prices.',
      },
    ],
  },
  {
    slug: 'idaho',
    name: 'Idaho',
    abbreviation: 'ID',
    medianHomePrice: 430000,
    medianMonthlyRent: 1350,
    priceToRentRatio: 26.5,
    avgAnnualAppreciation: 5.8,
    propertyTaxRate: 0.69,
    cities: [],
    blufVerdict:
      'Idaho home prices have risen rapidly due to migration from higher-cost states. Buying still makes sense for long-term residents, but the price-to-rent ratio suggests caution for short stays.',
    keyFacts: [
      'Idaho was one of the fastest-growing states by population in recent years.',
      'Boise metro has seen some of the sharpest price increases in the nation.',
      'Rural Idaho remains significantly more affordable than the Boise area.',
    ],
    faqItems: [
      {
        question: 'Are Idaho home prices still rising?',
        answer:
          'Idaho saw rapid appreciation through 2022, with some correction since. Long-term fundamentals remain supported by population growth, but short-term volatility has increased.',
      },
    ],
  },
  {
    slug: 'illinois',
    name: 'Illinois',
    abbreviation: 'IL',
    medianHomePrice: 265000,
    medianMonthlyRent: 1350,
    priceToRentRatio: 16.4,
    avgAnnualAppreciation: 3.2,
    propertyTaxRate: 2.27,
    cities: ['chicago'],
    blufVerdict:
      'Illinois home prices are moderate but high property taxes significantly increase the ongoing cost of ownership. The buy-vs-rent math is tighter here than in low-tax states.',
    keyFacts: [
      'Illinois has the second-highest effective property tax rate in the nation.',
      'Chicago and the collar counties dominate the state housing market.',
      'Downstate Illinois has much more affordable housing but slower appreciation.',
    ],
    faqItems: [
      {
        question: 'How do Illinois property taxes affect the cost of buying?',
        answer:
          'At an average effective rate of about 2.27%, Illinois property taxes add substantially to monthly housing costs. On a $265,000 home, expect roughly $500/month in property taxes alone.',
      },
    ],
  },
  {
    slug: 'indiana',
    name: 'Indiana',
    abbreviation: 'IN',
    medianHomePrice: 232000,
    medianMonthlyRent: 1050,
    priceToRentRatio: 18.4,
    avgAnnualAppreciation: 4.5,
    propertyTaxRate: 0.85,
    cities: [],
    blufVerdict:
      'Indiana is one of the more affordable states for homebuyers, with moderate taxes and prices well below the national median.',
    keyFacts: [
      'Indiana caps property tax assessments, protecting homeowners from sharp increases.',
      'Indianapolis metro is the primary driver of housing demand.',
      'Rural markets remain very affordable with slower appreciation.',
    ],
    faqItems: [
      {
        question: 'Is Indiana a good state for first-time homebuyers?',
        answer:
          'Indiana is frequently ranked among the top states for first-time buyers due to affordable prices, moderate property taxes, and state-level caps on property tax increases.',
      },
    ],
  },
  {
    slug: 'iowa',
    name: 'Iowa',
    abbreviation: 'IA',
    medianHomePrice: 210000,
    medianMonthlyRent: 950,
    priceToRentRatio: 18.4,
    avgAnnualAppreciation: 3.6,
    propertyTaxRate: 1.57,
    cities: [],
    blufVerdict:
      'Iowa home prices are very affordable, but above-average property taxes narrow the gap between buying and renting. Buying still wins for stays of 4+ years.',
    keyFacts: [
      'Iowa home prices are among the lowest in the nation.',
      'Property tax rates are above the national average at about 1.57%.',
      'Des Moines and Cedar Rapids are the primary urban markets.',
    ],
    faqItems: [
      {
        question: 'Are Iowa property taxes high?',
        answer:
          'Iowa effective property tax rates average about 1.57%, which is above the national median. However, the state offers homestead credits and rollback provisions that can reduce the effective burden.',
      },
    ],
  },
  {
    slug: 'kansas',
    name: 'Kansas',
    abbreviation: 'KS',
    medianHomePrice: 220000,
    medianMonthlyRent: 1000,
    priceToRentRatio: 18.3,
    avgAnnualAppreciation: 3.9,
    propertyTaxRate: 1.41,
    cities: [],
    blufVerdict:
      'Kansas offers affordable housing, though property taxes are above average. Buying is typically favorable for residents planning to stay 4+ years.',
    keyFacts: [
      'Kansas City metro straddles both Kansas and Missouri, creating a competitive cross-state market.',
      'Property tax rates are above the national average.',
      'Overall cost of living is well below the national median.',
    ],
    faqItems: [
      {
        question: 'How does the Kansas City metro market compare across the state line?',
        answer:
          'Kansas and Missouri sides of the KC metro have different tax structures. Kansas generally has higher property taxes but no earnings tax, while Missouri (Kansas City) levies an earnings tax but has lower property rates.',
      },
    ],
  },
  {
    slug: 'kentucky',
    name: 'Kentucky',
    abbreviation: 'KY',
    medianHomePrice: 205000,
    medianMonthlyRent: 950,
    priceToRentRatio: 18.0,
    avgAnnualAppreciation: 4.0,
    propertyTaxRate: 0.86,
    cities: [],
    blufVerdict:
      'Kentucky is one of the most affordable states for homeownership, with moderate taxes and low entry costs making buying favorable in most markets.',
    keyFacts: [
      'Kentucky median home prices are well below the national average.',
      'Louisville and Lexington are the primary housing markets.',
      'Property taxes are near the national average.',
    ],
    faqItems: [
      {
        question: 'Is Kentucky affordable for homebuyers?',
        answer:
          'Kentucky ranks among the most affordable states for homebuyers with median prices roughly 50% below the national median and moderate property tax rates.',
      },
    ],
  },
  {
    slug: 'louisiana',
    name: 'Louisiana',
    abbreviation: 'LA',
    medianHomePrice: 205000,
    medianMonthlyRent: 1050,
    priceToRentRatio: 16.3,
    avgAnnualAppreciation: 3.0,
    propertyTaxRate: 0.55,
    cities: [],
    blufVerdict:
      'Louisiana has low home prices and very low property taxes, making buying attractive on paper. However, high insurance costs due to hurricane and flood risk must be factored in.',
    keyFacts: [
      'Louisiana has one of the lowest property tax rates in the country.',
      'Flood and hurricane insurance can add $2,000-$5,000+ per year.',
      'New Orleans and Baton Rouge are the major metros.',
    ],
    faqItems: [
      {
        question: 'How much does flood insurance cost in Louisiana?',
        answer:
          'Flood insurance varies dramatically by location and elevation. In high-risk zones, annual premiums can range from $1,500 to $5,000+. This cost is critical to factor into any buy-vs-rent analysis.',
      },
    ],
  },
  {
    slug: 'maine',
    name: 'Maine',
    abbreviation: 'ME',
    medianHomePrice: 370000,
    medianMonthlyRent: 1400,
    priceToRentRatio: 22.0,
    avgAnnualAppreciation: 5.1,
    propertyTaxRate: 1.36,
    cities: [],
    blufVerdict:
      'Maine home prices have risen faster than incomes in recent years. Above-average property taxes add cost, but strong appreciation has rewarded long-term buyers.',
    keyFacts: [
      'Maine saw significant price increases driven by remote-work migration.',
      'Property taxes are above the national average.',
      'Coastal properties carry significant premiums over inland areas.',
    ],
    faqItems: [
      {
        question: 'Has remote work affected Maine home prices?',
        answer:
          'Remote work migration during and after 2020 drove substantial demand for Maine properties, particularly in southern coastal areas. Prices rose 30-50% in some markets between 2020 and 2024.',
      },
    ],
  },
  {
    slug: 'maryland',
    name: 'Maryland',
    abbreviation: 'MD',
    medianHomePrice: 405000,
    medianMonthlyRent: 1750,
    priceToRentRatio: 19.3,
    avgAnnualAppreciation: 4.3,
    propertyTaxRate: 1.09,
    cities: [],
    blufVerdict:
      'Maryland housing costs are above the national average, driven by the D.C. metro area. Buying is favorable for long-term stays of 5+ years, particularly further from D.C.',
    keyFacts: [
      'Proximity to D.C. significantly influences prices across the state.',
      'Property tax rates are near the national average.',
      'Western Maryland is substantially more affordable than the D.C. corridor.',
    ],
    faqItems: [
      {
        question: 'How does D.C. proximity affect Maryland home prices?',
        answer:
          'Maryland counties closest to Washington D.C., especially Montgomery and Prince George\'s, have median prices well above the statewide figure. Western Maryland and the Eastern Shore are much more affordable.',
      },
    ],
  },
  {
    slug: 'massachusetts',
    name: 'Massachusetts',
    abbreviation: 'MA',
    medianHomePrice: 595000,
    medianMonthlyRent: 2350,
    priceToRentRatio: 21.1,
    avgAnnualAppreciation: 5.2,
    propertyTaxRate: 1.23,
    cities: [],
    blufVerdict:
      'Massachusetts has high home prices and above-average property taxes, making renting more practical for short stays. Buying becomes favorable after 5-7 years due to strong appreciation.',
    keyFacts: [
      'Boston metro drives the majority of housing demand.',
      'Property taxes are above the national average.',
      'Strong job market in tech and healthcare supports sustained demand.',
    ],
    faqItems: [
      {
        question: 'Is buying in Massachusetts worth the high price?',
        answer:
          'Massachusetts homes have appreciated consistently due to limited supply and strong employment. For buyers who can afford the entry cost and plan to stay 5+ years, the investment has historically been sound.',
      },
    ],
  },
  {
    slug: 'michigan',
    name: 'Michigan',
    abbreviation: 'MI',
    medianHomePrice: 235000,
    medianMonthlyRent: 1100,
    priceToRentRatio: 17.8,
    avgAnnualAppreciation: 4.2,
    propertyTaxRate: 1.54,
    cities: [],
    blufVerdict:
      'Michigan offers affordable home prices, but high property taxes narrow the cost advantage of buying. The math still favors buying for stays of 4+ years in most markets.',
    keyFacts: [
      'Michigan property taxes are above the national average.',
      'Detroit-area home values vary enormously by suburb.',
      'Grand Rapids and Ann Arbor have seen some of the state\'s strongest appreciation.',
    ],
    faqItems: [
      {
        question: 'Are Michigan property taxes high?',
        answer:
          'Michigan effective property tax rates average about 1.54%, which is above the national median. Rates vary significantly by municipality due to local millage rates.',
      },
    ],
  },
  {
    slug: 'minnesota',
    name: 'Minnesota',
    abbreviation: 'MN',
    medianHomePrice: 330000,
    medianMonthlyRent: 1350,
    priceToRentRatio: 20.4,
    avgAnnualAppreciation: 4.1,
    propertyTaxRate: 1.12,
    cities: [],
    blufVerdict:
      'Minnesota has a balanced housing market with moderate prices and taxes. Buying is typically favorable for stays of 4-5 years or more, especially in the Twin Cities suburbs.',
    keyFacts: [
      'Minneapolis-St. Paul metro dominates the state housing market.',
      'Property taxes are slightly above the national average.',
      'Minnesota offers a mortgage interest credit for first-time buyers.',
    ],
    faqItems: [
      {
        question: 'Does Minnesota offer homebuyer assistance?',
        answer:
          'Minnesota has several programs including the mortgage interest credit, first-time homebuyer programs through Minnesota Housing, and various down payment assistance options.',
      },
    ],
  },
  {
    slug: 'mississippi',
    name: 'Mississippi',
    abbreviation: 'MS',
    medianHomePrice: 175000,
    medianMonthlyRent: 900,
    priceToRentRatio: 16.2,
    avgAnnualAppreciation: 3.5,
    propertyTaxRate: 0.81,
    cities: [],
    blufVerdict:
      'Mississippi has the lowest median home price in the nation, making buying accessible for most income levels. Low taxes further favor homeownership.',
    keyFacts: [
      'Mississippi has the most affordable housing of any state.',
      'Property taxes are below the national average.',
      'Home appreciation has been slower than the national rate.',
    ],
    faqItems: [
      {
        question: 'Why are Mississippi home prices so low?',
        answer:
          'Lower average incomes, population stagnation in many areas, and abundant land keep Mississippi home prices well below national averages. This makes homeownership accessible but also limits appreciation potential.',
      },
    ],
  },
  {
    slug: 'missouri',
    name: 'Missouri',
    abbreviation: 'MO',
    medianHomePrice: 240000,
    medianMonthlyRent: 1100,
    priceToRentRatio: 18.2,
    avgAnnualAppreciation: 4.0,
    propertyTaxRate: 0.97,
    cities: [],
    blufVerdict:
      'Missouri offers affordable housing with property taxes near the national average. Buying generally outperforms renting after 3-4 years.',
    keyFacts: [
      'St. Louis and Kansas City are the two dominant metros.',
      'Property taxes are near the national average.',
      'The state offers diverse markets from urban to rural.',
    ],
    faqItems: [
      {
        question: 'Is it cheaper to live in St. Louis or Kansas City?',
        answer:
          'Both metros offer affordable housing compared to national averages. Kansas City has seen slightly faster appreciation recently, while St. Louis has lower entry prices in many neighborhoods.',
      },
    ],
  },
  {
    slug: 'montana',
    name: 'Montana',
    abbreviation: 'MT',
    medianHomePrice: 450000,
    medianMonthlyRent: 1350,
    priceToRentRatio: 27.8,
    avgAnnualAppreciation: 5.5,
    propertyTaxRate: 0.84,
    cities: [],
    blufVerdict:
      'Montana has seen rapid price appreciation driven by out-of-state migration. The high price-to-rent ratio suggests renting may be more practical for short stays.',
    keyFacts: [
      'Montana has no sales tax, improving overall cost of living.',
      'Bozeman and Missoula have seen dramatic price increases.',
      'Rural Montana remains significantly more affordable.',
    ],
    faqItems: [
      {
        question: 'Why have Montana home prices risen so quickly?',
        answer:
          'Remote work migration, limited housing supply in popular mountain towns, and Montana\'s natural amenities have driven rapid price increases. Bozeman and Missoula prices have more than doubled since 2018 in many neighborhoods.',
      },
    ],
  },
  {
    slug: 'nebraska',
    name: 'Nebraska',
    abbreviation: 'NE',
    medianHomePrice: 245000,
    medianMonthlyRent: 1050,
    priceToRentRatio: 19.4,
    avgAnnualAppreciation: 4.0,
    propertyTaxRate: 1.73,
    cities: [],
    blufVerdict:
      'Nebraska has affordable home prices but above-average property taxes. Buying is still favorable for most buyers planning to stay 4+ years.',
    keyFacts: [
      'Nebraska has high property tax rates relative to home values.',
      'Omaha and Lincoln are the primary housing markets.',
      'The state offers several property tax relief programs.',
    ],
    faqItems: [
      {
        question: 'Are Nebraska property taxes a concern for buyers?',
        answer:
          'Nebraska property tax rates average about 1.73%, well above the national median. However, the state has implemented property tax credit programs to offset some of this burden.',
      },
    ],
  },
  {
    slug: 'nevada',
    name: 'Nevada',
    abbreviation: 'NV',
    medianHomePrice: 425000,
    medianMonthlyRent: 1600,
    priceToRentRatio: 22.1,
    avgAnnualAppreciation: 5.0,
    propertyTaxRate: 0.60,
    cities: [],
    blufVerdict:
      'Nevada has no state income tax and low property taxes, making homeownership tax-efficient. However, Las Vegas prices have been volatile historically.',
    keyFacts: [
      'Nevada has no state income tax.',
      'Property taxes are among the lowest in the nation.',
      'Las Vegas metro experienced one of the sharpest downturns in 2008-2011.',
    ],
    faqItems: [
      {
        question: 'Is Las Vegas real estate volatile?',
        answer:
          'Las Vegas experienced extreme price swings during the 2008 housing crisis, with values dropping over 60%. While the market has recovered, this history illustrates the risk of speculative buying in the area.',
      },
    ],
  },
  {
    slug: 'new-hampshire',
    name: 'New Hampshire',
    abbreviation: 'NH',
    medianHomePrice: 450000,
    medianMonthlyRent: 1700,
    priceToRentRatio: 22.1,
    avgAnnualAppreciation: 5.0,
    propertyTaxRate: 2.18,
    cities: [],
    blufVerdict:
      'New Hampshire has no income or sales tax but compensates with very high property taxes. This significantly increases the ongoing cost of homeownership.',
    keyFacts: [
      'New Hampshire has the third-highest property tax rate in the nation.',
      'No state income tax or sales tax.',
      'Southern NH benefits from Boston metro commuter demand.',
    ],
    faqItems: [
      {
        question: 'How do high property taxes affect buying in New Hampshire?',
        answer:
          'At an average rate of about 2.18%, property taxes on a $450,000 home would be roughly $9,810/year or $817/month. This adds substantially to the monthly cost of ownership and must be weighed against the absence of income and sales taxes.',
      },
    ],
  },
  {
    slug: 'new-jersey',
    name: 'New Jersey',
    abbreviation: 'NJ',
    medianHomePrice: 480000,
    medianMonthlyRent: 1850,
    priceToRentRatio: 21.6,
    avgAnnualAppreciation: 4.8,
    propertyTaxRate: 2.49,
    cities: [],
    blufVerdict:
      'New Jersey has the highest property taxes in the nation, which significantly increases the cost of homeownership. Buying is still favorable long-term but requires careful cost analysis.',
    keyFacts: [
      'New Jersey has the highest effective property tax rate of any state.',
      'Proximity to New York City and Philadelphia drives demand.',
      'Tax burden varies significantly by municipality.',
    ],
    faqItems: [
      {
        question: 'Why does New Jersey have such high property taxes?',
        answer:
          'New Jersey relies heavily on local property taxes to fund municipal services and school districts. The state has over 500 municipalities, each setting its own rates, leading to an average effective rate of about 2.49%.',
      },
    ],
  },
  {
    slug: 'new-mexico',
    name: 'New Mexico',
    abbreviation: 'NM',
    medianHomePrice: 290000,
    medianMonthlyRent: 1150,
    priceToRentRatio: 21.0,
    avgAnnualAppreciation: 4.5,
    propertyTaxRate: 0.80,
    cities: [],
    blufVerdict:
      'New Mexico offers moderate prices and low property taxes, making buying practical for stays of 4+ years. Albuquerque and Santa Fe markets differ significantly.',
    keyFacts: [
      'New Mexico has low property tax rates.',
      'Santa Fe commands significant premiums over the state median.',
      'The state has a mix of very affordable and resort-priced markets.',
    ],
    faqItems: [
      {
        question: 'Is Santa Fe representative of New Mexico home prices?',
        answer:
          'Santa Fe is a luxury-leaning market with prices well above the state median. Albuquerque and Las Cruces are more representative of typical New Mexico housing costs.',
      },
    ],
  },
  {
    slug: 'new-york',
    name: 'New York',
    abbreviation: 'NY',
    medianHomePrice: 420000,
    medianMonthlyRent: 1750,
    priceToRentRatio: 20.0,
    avgAnnualAppreciation: 4.0,
    propertyTaxRate: 1.72,
    cities: ['new-york'],
    blufVerdict:
      'New York State has a wide range of markets. New York City is rent-heavy, while upstate markets are much more affordable. High property taxes are a statewide concern.',
    keyFacts: [
      'NYC and the rest of New York State are essentially different housing markets.',
      'Property taxes are above the national average across the state.',
      'The STAR program provides property tax relief for eligible homeowners.',
    ],
    faqItems: [
      {
        question: 'Is it better to buy or rent in New York City specifically?',
        answer:
          'In Manhattan and most of NYC, renting is financially favorable for stays under 7-10 years due to extreme prices, coop fees, and high transaction costs. Outer boroughs and suburbs shift the math toward buying sooner.',
      },
    ],
  },
  {
    slug: 'north-carolina',
    name: 'North Carolina',
    abbreviation: 'NC',
    medianHomePrice: 340000,
    medianMonthlyRent: 1400,
    priceToRentRatio: 20.2,
    avgAnnualAppreciation: 5.1,
    propertyTaxRate: 0.84,
    cities: ['charlotte'],
    blufVerdict:
      'North Carolina has moderate prices, below-average property taxes, and strong appreciation in growth markets like Charlotte and Raleigh. Buying is favorable for stays of 4+ years.',
    keyFacts: [
      'Charlotte and Raleigh-Durham are the fastest-growing metros.',
      'Property taxes are below the national average.',
      'The state has attracted significant corporate relocations.',
    ],
    faqItems: [
      {
        question: 'Is North Carolina a good state for homebuyers?',
        answer:
          'North Carolina combines moderate prices, low property taxes, no estate tax, and strong job growth in its major metros. It consistently ranks among the top states for housing affordability relative to opportunity.',
      },
    ],
  },
  {
    slug: 'north-dakota',
    name: 'North Dakota',
    abbreviation: 'ND',
    medianHomePrice: 250000,
    medianMonthlyRent: 950,
    priceToRentRatio: 21.9,
    avgAnnualAppreciation: 2.5,
    propertyTaxRate: 0.98,
    cities: [],
    blufVerdict:
      'North Dakota has affordable housing with moderate taxes. Appreciation has been slower, tied closely to energy industry cycles.',
    keyFacts: [
      'Home prices are closely correlated with oil industry activity.',
      'Fargo is the most stable and active housing market.',
      'Rural markets can be very slow to sell.',
    ],
    faqItems: [
      {
        question: 'How does the oil industry affect North Dakota home prices?',
        answer:
          'Western North Dakota (Williston Basin) saw dramatic price spikes during oil booms and corresponding drops during busts. Fargo and Bismarck are more stable markets with diversified economies.',
      },
    ],
  },
  {
    slug: 'ohio',
    name: 'Ohio',
    abbreviation: 'OH',
    medianHomePrice: 215000,
    medianMonthlyRent: 1050,
    priceToRentRatio: 17.1,
    avgAnnualAppreciation: 3.8,
    propertyTaxRate: 1.56,
    cities: [],
    blufVerdict:
      'Ohio has very affordable home prices but above-average property taxes. Buying is favorable for most long-term residents despite the higher tax burden.',
    keyFacts: [
      'Ohio has multiple mid-size metros: Columbus, Cleveland, Cincinnati.',
      'Property taxes are above the national average.',
      'Columbus has been the strongest-performing metro in the state.',
    ],
    faqItems: [
      {
        question: 'Which Ohio city has the best housing market?',
        answer:
          'Columbus has shown the strongest appreciation and economic growth among Ohio metros. Cleveland and Cincinnati offer lower entry prices but with more modest appreciation.',
      },
    ],
  },
  {
    slug: 'oklahoma',
    name: 'Oklahoma',
    abbreviation: 'OK',
    medianHomePrice: 200000,
    medianMonthlyRent: 1000,
    priceToRentRatio: 16.7,
    avgAnnualAppreciation: 3.5,
    propertyTaxRate: 0.90,
    cities: [],
    blufVerdict:
      'Oklahoma offers some of the most affordable homeownership in the nation with moderate property taxes. Buying favors renters in most markets after just 3 years.',
    keyFacts: [
      'Oklahoma City and Tulsa are the major housing markets.',
      'Home prices are well below the national median.',
      'Property taxes are near the national average.',
    ],
    faqItems: [
      {
        question: 'Is Oklahoma City or Tulsa more affordable?',
        answer:
          'Both metros are very affordable by national standards. Tulsa tends to have slightly lower median prices, while Oklahoma City has seen marginally faster appreciation in recent years.',
      },
    ],
  },
  {
    slug: 'oregon',
    name: 'Oregon',
    abbreviation: 'OR',
    medianHomePrice: 480000,
    medianMonthlyRent: 1650,
    priceToRentRatio: 24.2,
    avgAnnualAppreciation: 4.8,
    propertyTaxRate: 0.97,
    cities: [],
    blufVerdict:
      'Oregon has above-average prices, especially in the Portland metro. No sales tax helps overall affordability, but the high price-to-rent ratio means renting can be smarter for shorter stays.',
    keyFacts: [
      'Oregon has no sales tax.',
      'Portland metro dominates the state housing market.',
      'The state has a rent control law capping annual increases.',
    ],
    faqItems: [
      {
        question: 'Does Oregon rent control affect the buy-vs-rent decision?',
        answer:
          'Oregon caps annual rent increases at 7% plus inflation for most properties. This provides more predictability for renters, potentially making the rent option more attractive compared to states with no rent control.',
      },
    ],
  },
  {
    slug: 'pennsylvania',
    name: 'Pennsylvania',
    abbreviation: 'PA',
    medianHomePrice: 275000,
    medianMonthlyRent: 1300,
    priceToRentRatio: 17.6,
    avgAnnualAppreciation: 4.0,
    propertyTaxRate: 1.58,
    cities: ['philadelphia'],
    blufVerdict:
      'Pennsylvania has moderate home prices but above-average property taxes. Philadelphia and Pittsburgh offer different value propositions within the state.',
    keyFacts: [
      'Property taxes are above the national average.',
      'Philadelphia and Pittsburgh are the major metros with very different markets.',
      'Rural Pennsylvania is very affordable but with slower appreciation.',
    ],
    faqItems: [
      {
        question: 'Is Philadelphia or Pittsburgh more affordable for homebuyers?',
        answer:
          'Pittsburgh generally has lower median home prices than Philadelphia, though both are affordable by major city standards. Pittsburgh has also seen stronger appreciation in recent years.',
      },
    ],
  },
  {
    slug: 'rhode-island',
    name: 'Rhode Island',
    abbreviation: 'RI',
    medianHomePrice: 420000,
    medianMonthlyRent: 1600,
    priceToRentRatio: 21.9,
    avgAnnualAppreciation: 5.0,
    propertyTaxRate: 1.63,
    cities: [],
    blufVerdict:
      'Rhode Island has above-average prices and high property taxes for its size. Buying is favorable for long-term stays of 5+ years, especially given strong recent appreciation.',
    keyFacts: [
      'Rhode Island is geographically small with a single metro market.',
      'Property taxes are above the national average.',
      'Proximity to Boston supports demand in northern areas.',
    ],
    faqItems: [
      {
        question: 'How does Rhode Island compare to nearby Massachusetts?',
        answer:
          'Rhode Island offers lower home prices than Massachusetts while still providing access to the broader Boston economic area. Property taxes are higher in RI, but overall entry costs are lower.',
      },
    ],
  },
  {
    slug: 'south-carolina',
    name: 'South Carolina',
    abbreviation: 'SC',
    medianHomePrice: 310000,
    medianMonthlyRent: 1350,
    priceToRentRatio: 19.1,
    avgAnnualAppreciation: 5.3,
    propertyTaxRate: 0.57,
    cities: [],
    blufVerdict:
      'South Carolina has low property taxes and moderate home prices, making buying attractive. Charleston and Greenville metros have seen strong growth.',
    keyFacts: [
      'South Carolina has one of the lowest property tax rates in the nation.',
      'Charleston and Greenville are the fastest-growing metros.',
      'Coastal properties carry flood insurance requirements.',
    ],
    faqItems: [
      {
        question: 'Is South Carolina a good state for homebuyers?',
        answer:
          'Low property taxes, moderate prices, and strong appreciation in growth metros make South Carolina attractive for buyers. The main caution is flood insurance costs in coastal areas.',
      },
    ],
  },
  {
    slug: 'south-dakota',
    name: 'South Dakota',
    abbreviation: 'SD',
    medianHomePrice: 290000,
    medianMonthlyRent: 1050,
    priceToRentRatio: 23.0,
    avgAnnualAppreciation: 4.5,
    propertyTaxRate: 1.28,
    cities: [],
    blufVerdict:
      'South Dakota has no state income tax and moderate home prices, though property taxes are above average. Buying is favorable for stays of 5+ years.',
    keyFacts: [
      'South Dakota has no state income tax.',
      'Sioux Falls is the dominant housing market.',
      'Property taxes are above the national average.',
    ],
    faqItems: [
      {
        question: 'Does the lack of state income tax help homebuyers in South Dakota?',
        answer:
          'No state income tax means more take-home pay, which can improve mortgage qualification and monthly cash flow. However, property taxes partially offset this advantage.',
      },
    ],
  },
  {
    slug: 'tennessee',
    name: 'Tennessee',
    abbreviation: 'TN',
    medianHomePrice: 340000,
    medianMonthlyRent: 1400,
    priceToRentRatio: 20.2,
    avgAnnualAppreciation: 5.2,
    propertyTaxRate: 0.71,
    cities: [],
    blufVerdict:
      'Tennessee has no state income tax and low property taxes, making homeownership tax-efficient. Nashville metro has seen rapid appreciation.',
    keyFacts: [
      'Tennessee has no state income tax.',
      'Nashville has been one of the fastest-growing U.S. metros.',
      'Property taxes are well below the national average.',
    ],
    faqItems: [
      {
        question: 'Is Nashville still affordable for homebuyers?',
        answer:
          'Nashville median prices have risen significantly but remain below coastal city levels. Surrounding suburbs and Middle Tennessee cities offer more affordable options while maintaining access to the Nashville job market.',
      },
    ],
  },
  {
    slug: 'texas',
    name: 'Texas',
    abbreviation: 'TX',
    medianHomePrice: 310000,
    medianMonthlyRent: 1450,
    priceToRentRatio: 17.8,
    avgAnnualAppreciation: 4.5,
    propertyTaxRate: 1.80,
    cities: ['houston', 'san-antonio', 'dallas', 'austin'],
    blufVerdict:
      'Texas has no state income tax but compensates with high property taxes. The buy-vs-rent math varies significantly between Austin, Dallas, Houston, and San Antonio.',
    keyFacts: [
      'Texas has no state income tax but some of the highest property taxes in the nation.',
      'The state has four major metros with distinct market conditions.',
      'Property tax rates average about 1.80% but can exceed 2.5% in some districts.',
    ],
    faqItems: [
      {
        question: 'How do Texas property taxes affect the cost of buying?',
        answer:
          'Texas property taxes average about 1.80%, which is well above the national median. On a $310,000 home, that is roughly $5,580/year or $465/month added to your housing costs. This must be factored into any buy-vs-rent comparison.',
      },
      {
        question: 'Which Texas city is most affordable for homebuyers?',
        answer:
          'San Antonio and Houston generally offer the most affordable entry points among the four major Texas metros. Austin has the highest median prices, while Dallas falls in between.',
      },
    ],
  },
  {
    slug: 'utah',
    name: 'Utah',
    abbreviation: 'UT',
    medianHomePrice: 475000,
    medianMonthlyRent: 1550,
    priceToRentRatio: 25.5,
    avgAnnualAppreciation: 5.5,
    propertyTaxRate: 0.63,
    cities: [],
    blufVerdict:
      'Utah home prices have risen sharply due to population growth and limited supply. Low property taxes help, but high prices mean a longer break-even timeline.',
    keyFacts: [
      'Utah has one of the fastest-growing populations in the U.S.',
      'Salt Lake City metro dominates the state market.',
      'Property taxes are well below the national average.',
    ],
    faqItems: [
      {
        question: 'Are Utah home prices sustainable?',
        answer:
          'Utah\'s price growth is supported by strong population growth, a young demographic, and a diversified economy. However, affordability constraints are pushing some buyers to surrounding states.',
      },
    ],
  },
  {
    slug: 'vermont',
    name: 'Vermont',
    abbreviation: 'VT',
    medianHomePrice: 380000,
    medianMonthlyRent: 1450,
    priceToRentRatio: 21.8,
    avgAnnualAppreciation: 5.0,
    propertyTaxRate: 1.90,
    cities: [],
    blufVerdict:
      'Vermont has high property taxes and limited inventory, which keeps prices elevated. Buying is a long-term play best suited for stays of 6+ years.',
    keyFacts: [
      'Vermont has very high property tax rates.',
      'Housing inventory is extremely tight statewide.',
      'Remote work migration has driven recent price increases.',
    ],
    faqItems: [
      {
        question: 'Why is Vermont housing inventory so low?',
        answer:
          'Vermont\'s small population, limited new construction, strict land-use regulations, and increased demand from remote workers have combined to create a persistent inventory shortage.',
      },
    ],
  },
  {
    slug: 'virginia',
    name: 'Virginia',
    abbreviation: 'VA',
    medianHomePrice: 395000,
    medianMonthlyRent: 1650,
    priceToRentRatio: 20.0,
    avgAnnualAppreciation: 4.5,
    propertyTaxRate: 0.82,
    cities: [],
    blufVerdict:
      'Virginia offers a diverse housing market anchored by Northern Virginia\'s proximity to D.C. Buying is favorable for stays of 4-5 years, with lower prices available further from the D.C. corridor.',
    keyFacts: [
      'Northern Virginia (NoVA) prices are significantly above the statewide median.',
      'Property taxes are below the national average.',
      'Virginia Beach, Richmond, and Charlottesville offer different value profiles.',
    ],
    faqItems: [
      {
        question: 'How does Northern Virginia compare to the rest of the state?',
        answer:
          'Northern Virginia home prices are typically 50-100% above the statewide median due to proximity to D.C. and a strong tech/government job market. Richmond, Hampton Roads, and western Virginia are considerably more affordable.',
      },
    ],
  },
  {
    slug: 'washington',
    name: 'Washington',
    abbreviation: 'WA',
    medianHomePrice: 575000,
    medianMonthlyRent: 1900,
    priceToRentRatio: 25.2,
    avgAnnualAppreciation: 5.3,
    propertyTaxRate: 1.03,
    cities: [],
    blufVerdict:
      'Washington has no state income tax but high home prices, especially in the Seattle metro. Buying is favorable after 5-6 years for those who can afford the entry cost.',
    keyFacts: [
      'Washington has no state income tax.',
      'Seattle metro dominates the state housing market.',
      'Eastern Washington is significantly more affordable.',
    ],
    faqItems: [
      {
        question: 'Is it worth buying in the Seattle area?',
        answer:
          'Seattle-area homes are expensive but have appreciated strongly over time. The combination of no state income tax, a strong tech job market, and limited buildable land supports long-term value. The break-even versus renting is typically 5-6 years.',
      },
    ],
  },
  {
    slug: 'west-virginia',
    name: 'West Virginia',
    abbreviation: 'WV',
    medianHomePrice: 155000,
    medianMonthlyRent: 850,
    priceToRentRatio: 15.2,
    avgAnnualAppreciation: 2.8,
    propertyTaxRate: 0.58,
    cities: [],
    blufVerdict:
      'West Virginia has the second-lowest home prices in the nation with low property taxes. Buying is almost always favorable, though appreciation is slower.',
    keyFacts: [
      'West Virginia has some of the most affordable housing in the country.',
      'Property taxes are well below the national average.',
      'Population decline in many areas limits appreciation potential.',
    ],
    faqItems: [
      {
        question: 'Why are West Virginia home prices so low?',
        answer:
          'Population decline, limited job market growth in many areas, and lower incomes keep West Virginia home prices well below national averages. The Eastern Panhandle near D.C. is the notable exception.',
      },
    ],
  },
  {
    slug: 'wisconsin',
    name: 'Wisconsin',
    abbreviation: 'WI',
    medianHomePrice: 275000,
    medianMonthlyRent: 1150,
    priceToRentRatio: 19.9,
    avgAnnualAppreciation: 4.2,
    propertyTaxRate: 1.85,
    cities: [],
    blufVerdict:
      'Wisconsin has moderate home prices but high property taxes, which increase the ongoing cost of ownership. Buying is still favorable for stays of 5+ years.',
    keyFacts: [
      'Wisconsin has high property tax rates relative to home values.',
      'Milwaukee and Madison are the primary housing markets.',
      'Madison has the highest prices and strongest appreciation in the state.',
    ],
    faqItems: [
      {
        question: 'How do Wisconsin property taxes compare nationally?',
        answer:
          'Wisconsin effective property tax rates average about 1.85%, placing it among the top 10 highest-tax states. On a $275,000 home, that is roughly $5,088/year or $424/month.',
      },
    ],
  },
  {
    slug: 'wyoming',
    name: 'Wyoming',
    abbreviation: 'WY',
    medianHomePrice: 310000,
    medianMonthlyRent: 1100,
    priceToRentRatio: 23.5,
    avgAnnualAppreciation: 3.0,
    propertyTaxRate: 0.61,
    cities: [],
    blufVerdict:
      'Wyoming has no state income tax and low property taxes, making homeownership tax-efficient. Slower appreciation and limited inventory characterize most markets.',
    keyFacts: [
      'Wyoming has no state income tax.',
      'Property taxes are well below the national average.',
      'Cheyenne and Jackson Hole represent opposite ends of the price spectrum.',
    ],
    faqItems: [
      {
        question: 'Is Jackson Hole representative of Wyoming housing costs?',
        answer:
          'Jackson Hole is an extreme outlier with median prices exceeding $1.5 million. Most Wyoming markets, including Cheyenne, Casper, and Laramie, are far more affordable and closer to the statewide median.',
      },
    ],
  },
];

export function getStateBySlug(slug: string): StateConfig | undefined {
  return states.find((s) => s.slug === slug);
}

export function getAllStateSlugs(): string[] {
  return states.map((s) => s.slug);
}
