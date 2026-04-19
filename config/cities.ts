import { CityConfig } from './types';

export const cities: CityConfig[] = [
  {
    slug: 'new-york',
    name: 'New York City',
    stateSlug: 'new-york',
    stateName: 'New York',
    medianHomePrice: 750000,
    medianMonthlyRent: 3200,
    priceToRentRatio: 19.5,
    avgAnnualAppreciation: 3.8,
    propertyTaxRate: 0.88,
    neighborhoodContext:
      'The NYC market includes five boroughs with dramatically different price levels. Manhattan is the most expensive, while the outer boroughs offer more moderate entry points.',
    blufVerdict:
      'Renting is financially smarter than buying in most of NYC for stays under 7-10 years. High prices, co-op fees, and steep closing costs shift the break-even point further out than in most U.S. cities.',
    keyFacts: [
      'NYC closing costs for buyers can reach 4-6% of purchase price.',
      'Co-op maintenance fees often add $1,000-$2,500/month on top of the mortgage.',
      'Manhattan condos carry a median price above $1 million.',
      'Outer boroughs like Queens and the Bronx offer entry prices 40-60% below Manhattan.',
    ],
    faqItems: [
      {
        question: 'Should I buy or rent in New York City?',
        answer:
          'For most NYC residents, renting makes more financial sense unless you plan to stay at least 7-10 years. High purchase prices, co-op fees, and transaction costs push the break-even point further out. The outer boroughs have a shorter break-even timeline than Manhattan.',
      },
      {
        question: 'What are co-op fees and how do they affect buying costs?',
        answer:
          'Co-op maintenance fees cover building operations, property taxes, and sometimes underlying mortgage payments. They typically range from $800-$2,500/month and must be added to your mortgage payment when calculating the true cost of ownership.',
      },
      {
        question: 'Is it cheaper to buy in the outer boroughs?',
        answer:
          'Median prices in Brooklyn, Queens, the Bronx, and Staten Island are significantly lower than Manhattan. The break-even timeline versus renting can be 4-6 years in some outer-borough neighborhoods compared to 7-10+ years in Manhattan.',
      },
    ],
  },
  {
    slug: 'los-angeles',
    name: 'Los Angeles',
    stateSlug: 'california',
    stateName: 'California',
    medianHomePrice: 925000,
    medianMonthlyRent: 2800,
    priceToRentRatio: 27.5,
    avgAnnualAppreciation: 5.5,
    propertyTaxRate: 0.76,
    neighborhoodContext:
      'Los Angeles sprawls across a vast metro area with enormous price variation. Westside neighborhoods command premiums, while the Inland Empire offers more affordability.',
    blufVerdict:
      'Renting is typically more cost-effective than buying in Los Angeles for stays under 7 years. High prices and a steep price-to-rent ratio mean the opportunity cost of a down payment is significant.',
    keyFacts: [
      'LA median home prices are roughly double the national median.',
      'Prop 13 caps property tax increases at 2% per year for existing owners.',
      'The Inland Empire offers entry prices 40-50% below central LA.',
      'Earthquake insurance adds cost that many other cities do not have.',
    ],
    faqItems: [
      {
        question: 'Is it worth buying a home in Los Angeles?',
        answer:
          'LA has historically rewarded long-term homeowners with strong appreciation. However, the high entry cost means your down payment could earn competitive returns invested elsewhere. Buying makes sense for stays of 7+ years if you can manage the monthly costs comfortably.',
      },
      {
        question: 'How much does earthquake insurance cost in LA?',
        answer:
          'California Earthquake Authority premiums vary by location, construction type, and coverage. Typical costs range from $800-$3,000/year for a median-priced home. Standard homeowners insurance does not cover earthquake damage.',
      },
    ],
  },
  {
    slug: 'chicago',
    name: 'Chicago',
    stateSlug: 'illinois',
    stateName: 'Illinois',
    medianHomePrice: 320000,
    medianMonthlyRent: 1750,
    priceToRentRatio: 15.2,
    avgAnnualAppreciation: 3.5,
    propertyTaxRate: 2.27,
    neighborhoodContext:
      'Chicago offers a wide range of neighborhoods with dramatically different price points. North Side and Loop-adjacent areas command premiums, while South and West Side neighborhoods are much more affordable.',
    blufVerdict:
      'Chicago has relatively affordable purchase prices, but very high property taxes significantly increase the monthly cost of ownership. The buy-vs-rent decision hinges heavily on your specific neighborhood and tax district.',
    keyFacts: [
      'Chicago property taxes can exceed $6,000-$10,000/year on a median-priced home.',
      'North Side neighborhoods like Lincoln Park have median prices 2-3x the citywide median.',
      'The city has a transfer tax of $5.25 per $500 of sale price.',
      'Condo assessments in high-rise buildings add significant monthly cost.',
    ],
    faqItems: [
      {
        question: 'How do Chicago property taxes affect the buy decision?',
        answer:
          'At an effective rate of roughly 2.27%, property taxes on a $320,000 home total about $7,264/year or $605/month. In some suburban Cook County townships, rates are even higher. This is the single biggest factor tilting the Chicago buy-vs-rent equation.',
      },
      {
        question: 'Which Chicago neighborhoods are most affordable to buy?',
        answer:
          'South and Southwest Side neighborhoods, along with many near-west suburbs, offer entry prices well below the citywide median. However, appreciation rates have been slower in these areas compared to the North Side.',
      },
    ],
  },
  {
    slug: 'houston',
    name: 'Houston',
    stateSlug: 'texas',
    stateName: 'Texas',
    medianHomePrice: 295000,
    medianMonthlyRent: 1400,
    priceToRentRatio: 17.6,
    avgAnnualAppreciation: 4.0,
    propertyTaxRate: 2.03,
    neighborhoodContext:
      'Houston is a sprawling metro with no zoning laws, creating a diverse mix of housing types and price points. Energy industry cycles significantly influence the local economy.',
    blufVerdict:
      'Houston offers affordable home prices by major-city standards, but high property taxes and flood risk add to the true cost. Buying favors renters after about 4 years in most neighborhoods.',
    keyFacts: [
      'Houston has no zoning laws, leading to diverse housing stock.',
      'Property taxes in Harris County average over 2%.',
      'Flood insurance is critical in many Houston-area locations.',
      'No state income tax improves overall affordability.',
    ],
    faqItems: [
      {
        question: 'Do I need flood insurance in Houston?',
        answer:
          'Many Houston-area homes are in flood-prone zones. Even outside FEMA-designated flood zones, flooding risk exists due to the flat terrain and heavy rainfall. Flood insurance costs $500-$3,000+/year depending on location and elevation.',
      },
      {
        question: 'How do Houston property taxes compare to other Texas cities?',
        answer:
          'Houston (Harris County) property taxes average about 2.03%, slightly above the Texas statewide average of 1.80%. Rates vary by school district, MUD, and other special taxing districts.',
      },
    ],
  },
  {
    slug: 'phoenix',
    name: 'Phoenix',
    stateSlug: 'arizona',
    stateName: 'Arizona',
    medianHomePrice: 430000,
    medianMonthlyRent: 1600,
    priceToRentRatio: 22.4,
    avgAnnualAppreciation: 5.5,
    propertyTaxRate: 0.62,
    neighborhoodContext:
      'The Phoenix metro includes Scottsdale, Tempe, Mesa, Gilbert, and Chandler, each with different price profiles. Scottsdale is the premium submarket.',
    blufVerdict:
      'Phoenix has seen strong population-driven appreciation. Low property taxes help buyers, but rapid price increases have stretched affordability. Buying is favorable for stays of 5+ years.',
    keyFacts: [
      'Phoenix metro population growth has been among the fastest in the U.S.',
      'Property taxes are well below the national average.',
      'Scottsdale median prices are roughly double the metro average.',
      'Water availability is an emerging long-term consideration.',
    ],
    faqItems: [
      {
        question: 'Is the Phoenix housing market overheated?',
        answer:
          'Phoenix experienced rapid appreciation from 2020-2022 with some subsequent cooling. Strong population inflows continue to support demand, but affordability constraints and water supply questions are emerging factors.',
      },
      {
        question: 'How does water scarcity affect Phoenix home values?',
        answer:
          'Water availability is a growing concern for the Phoenix metro. While the city has invested in water infrastructure and conservation, long-term drought conditions in the Colorado River basin create uncertainty for future development.',
      },
    ],
  },
  {
    slug: 'philadelphia',
    name: 'Philadelphia',
    stateSlug: 'pennsylvania',
    stateName: 'Pennsylvania',
    medianHomePrice: 265000,
    medianMonthlyRent: 1500,
    priceToRentRatio: 14.7,
    avgAnnualAppreciation: 4.2,
    propertyTaxRate: 1.58,
    neighborhoodContext:
      'Philadelphia offers remarkable variety from Center City luxury to affordable row-home neighborhoods. The city wage tax is a unique cost factor for residents.',
    blufVerdict:
      'Philadelphia has one of the lowest price-to-rent ratios among major U.S. cities, making buying favorable relatively quickly. However, the city wage tax and property taxes add ongoing costs.',
    keyFacts: [
      'Philadelphia\'s price-to-rent ratio is among the lowest of major U.S. cities.',
      'The city levies a 3.75% wage tax on residents.',
      'Row homes dominate the housing stock in most neighborhoods.',
      'Gentrification patterns are reshaping neighborhood price maps.',
    ],
    faqItems: [
      {
        question: 'How does the Philadelphia wage tax affect housing decisions?',
        answer:
          'Philadelphia\'s 3.75% wage tax applies to all residents regardless of where they work. This adds significant cost to living in the city proper and is one reason many buyers consider nearby suburbs in Delaware County, Montgomery County, or New Jersey.',
      },
      {
        question: 'Why is Philadelphia relatively affordable among major East Coast cities?',
        answer:
          'Philadelphia benefits from a large existing housing stock (especially row homes), a population that only recently stabilized after decades of decline, and lower demand pressure compared to New York or Boston.',
      },
    ],
  },
  {
    slug: 'san-antonio',
    name: 'San Antonio',
    stateSlug: 'texas',
    stateName: 'Texas',
    medianHomePrice: 270000,
    medianMonthlyRent: 1300,
    priceToRentRatio: 17.3,
    avgAnnualAppreciation: 3.8,
    propertyTaxRate: 1.95,
    neighborhoodContext:
      'San Antonio is one of the most affordable major cities in Texas, with a strong military presence and a growing healthcare sector. The north side and Hill Country suburbs carry premiums.',
    blufVerdict:
      'San Antonio offers affordable homeownership for a major U.S. city. High property taxes are the main concern, but low prices keep the total monthly cost manageable. Buying is favorable after 3-4 years.',
    keyFacts: [
      'San Antonio is one of the most affordable top-15 U.S. cities.',
      'Military installations are a major economic driver.',
      'Property taxes in Bexar County average about 1.95%.',
      'No state income tax improves overall affordability.',
    ],
    faqItems: [
      {
        question: 'Is San Antonio a good city for first-time homebuyers?',
        answer:
          'San Antonio is frequently ranked among the best cities for first-time buyers due to affordable prices, steady job growth, and a low cost of living. The main caveat is high Texas property taxes.',
      },
    ],
  },
  {
    slug: 'san-diego',
    name: 'San Diego',
    stateSlug: 'california',
    stateName: 'California',
    medianHomePrice: 875000,
    medianMonthlyRent: 2700,
    priceToRentRatio: 27.0,
    avgAnnualAppreciation: 5.5,
    propertyTaxRate: 0.76,
    neighborhoodContext:
      'San Diego combines coastal lifestyle with a military and biotech-driven economy. Coastal neighborhoods command significant premiums over inland areas like Escondido and El Cajon.',
    blufVerdict:
      'San Diego has very high home prices that make renting more practical for stays under 7 years. Strong appreciation rewards long-term owners, but the entry cost is steep.',
    keyFacts: [
      'San Diego median prices are among the highest in the nation.',
      'Military and biotech sectors anchor the local economy.',
      'Coastal properties command 50-100% premiums over inland areas.',
      'Prop 13 limits property tax growth for long-term owners.',
    ],
    faqItems: [
      {
        question: 'Is renting smarter than buying in San Diego?',
        answer:
          'For stays under 7 years, renting is generally more cost-effective in San Diego due to the high price-to-rent ratio. Investing the down payment elsewhere often yields competitive returns. For stays of 7+ years, buying has historically built significant equity.',
      },
    ],
  },
  {
    slug: 'dallas',
    name: 'Dallas',
    stateSlug: 'texas',
    stateName: 'Texas',
    medianHomePrice: 350000,
    medianMonthlyRent: 1550,
    priceToRentRatio: 18.8,
    avgAnnualAppreciation: 4.5,
    propertyTaxRate: 1.93,
    neighborhoodContext:
      'The Dallas-Fort Worth metroplex is one of the largest and fastest-growing metro areas in the U.S. Corporate relocations have driven steady demand, especially in Frisco, Plano, and McKinney.',
    blufVerdict:
      'Dallas offers moderate home prices for a major metro, but high Texas property taxes add significant monthly cost. Buying is favorable after about 4 years if you can absorb the tax burden.',
    keyFacts: [
      'DFW is one of the largest and fastest-growing metros in the country.',
      'Corporate relocations have driven sustained housing demand.',
      'Property taxes in Dallas County average about 1.93%.',
      'Northern suburbs like Frisco and McKinney have seen the strongest appreciation.',
    ],
    faqItems: [
      {
        question: 'Is Dallas affordable compared to other major metros?',
        answer:
          'Dallas is more affordable than coastal metros like LA, NYC, or San Francisco, but prices have risen faster than the national average. When you factor in Texas property taxes, the monthly cost of ownership is higher than the price alone suggests.',
      },
    ],
  },
  {
    slug: 'austin',
    name: 'Austin',
    stateSlug: 'texas',
    stateName: 'Texas',
    medianHomePrice: 450000,
    medianMonthlyRent: 1700,
    priceToRentRatio: 22.1,
    avgAnnualAppreciation: 4.8,
    propertyTaxRate: 1.85,
    neighborhoodContext:
      'Austin has become one of the hottest housing markets in the country, driven by tech industry growth. Prices have cooled from 2022 peaks but remain well above pre-pandemic levels.',
    blufVerdict:
      'Austin is the most expensive major Texas city. High prices combined with high property taxes make renting more favorable for stays under 5 years. Long-term buyers benefit from strong fundamentals.',
    keyFacts: [
      'Austin experienced 40%+ price increases between 2020-2022 with subsequent correction.',
      'Tech industry expansion has been the primary demand driver.',
      'Property taxes in Travis County are among the highest in Texas.',
      'Surrounding suburbs like Round Rock and Cedar Park offer lower prices.',
    ],
    faqItems: [
      {
        question: 'Have Austin home prices come down from their peak?',
        answer:
          'Austin prices corrected 10-15% from the 2022 peak in many submarkets but remain 25-35% above pre-pandemic levels. The market has stabilized but is no longer seeing the rapid appreciation of 2020-2022.',
      },
      {
        question: 'Is it better to buy in Austin suburbs?',
        answer:
          'Suburbs like Round Rock, Cedar Park, and Pflugerville offer prices 20-30% below central Austin with good access to employment centers. Property taxes may still be high depending on the school district.',
      },
    ],
  },
  {
    slug: 'jacksonville',
    name: 'Jacksonville',
    stateSlug: 'florida',
    stateName: 'Florida',
    medianHomePrice: 340000,
    medianMonthlyRent: 1450,
    priceToRentRatio: 19.5,
    avgAnnualAppreciation: 5.0,
    propertyTaxRate: 0.89,
    neighborhoodContext:
      'Jacksonville is the largest city by land area in the continental U.S., offering a range of neighborhoods from beachside to urban core to rural suburban. It is one of the more affordable Florida metros.',
    blufVerdict:
      'Jacksonville is one of Florida\'s more affordable major cities. Buying is favorable after 4 years, especially with the homestead exemption. Insurance costs remain the key variable.',
    keyFacts: [
      'Jacksonville is the most affordable major Florida metro.',
      'The homestead exemption reduces property tax burdens for primary residents.',
      'Homeowners insurance has risen significantly in recent years.',
      'Naval Station Mayport and other military installations drive local demand.',
    ],
    faqItems: [
      {
        question: 'Is Jacksonville a good place to buy compared to other Florida cities?',
        answer:
          'Jacksonville offers lower entry prices than Miami, Tampa, or Orlando while still benefiting from Florida\'s no-income-tax environment. The tradeoff is less appreciation potential compared to South Florida.',
      },
    ],
  },
  {
    slug: 'miami',
    name: 'Miami',
    stateSlug: 'florida',
    stateName: 'Florida',
    medianHomePrice: 580000,
    medianMonthlyRent: 2400,
    priceToRentRatio: 20.1,
    avgAnnualAppreciation: 5.8,
    propertyTaxRate: 0.89,
    neighborhoodContext:
      'Miami is a global city with significant international buyer demand. Condo supply, insurance costs, and sea-level rise are unique factors in the buy-vs-rent analysis.',
    blufVerdict:
      'Miami home prices have risen sharply, driven by domestic migration and international demand. Insurance and condo fees are major ongoing costs. Buying is favorable after 5-6 years for those who can manage the total expense.',
    keyFacts: [
      'Miami has significant international buyer demand, especially from Latin America.',
      'Condo HOA fees in Miami often exceed $500-$1,000/month.',
      'Homeowners insurance premiums are among the highest in the nation.',
      'Sea-level rise is a long-term consideration for coastal properties.',
    ],
    faqItems: [
      {
        question: 'How do Miami condo fees affect the buy-vs-rent decision?',
        answer:
          'Miami condo HOA fees typically range from $400-$1,500/month and cover building maintenance, insurance, and amenities. These fees must be added to your mortgage payment when comparing to rent. They can make buying a condo comparable to or more expensive than renting.',
      },
      {
        question: 'Should I worry about sea-level rise when buying in Miami?',
        answer:
          'Sea-level rise is a documented concern for Miami-Dade County. Insurance costs are already reflecting this risk. Properties at higher elevations within the metro are commanding premiums. Consider flood risk, elevation, and long-term insurance trends when making a purchase decision.',
      },
    ],
  },
  {
    slug: 'atlanta',
    name: 'Atlanta',
    stateSlug: 'georgia',
    stateName: 'Georgia',
    medianHomePrice: 385000,
    medianMonthlyRent: 1650,
    priceToRentRatio: 19.4,
    avgAnnualAppreciation: 5.2,
    propertyTaxRate: 0.92,
    neighborhoodContext:
      'Atlanta is a sprawling metro with dramatic price variation between intown neighborhoods (Buckhead, Midtown) and suburban communities. The BeltLine project has significantly influenced neighborhood valuations.',
    blufVerdict:
      'Atlanta offers moderate prices for a major metro, with below-average property taxes. Buying is favorable after 4 years. Intown neighborhoods are pricier but appreciate faster.',
    keyFacts: [
      'Atlanta has attracted numerous corporate headquarters in recent years.',
      'The BeltLine trail project has driven appreciation in adjacent neighborhoods.',
      'Property taxes are near the national average.',
      'Northern suburbs like Alpharetta and Roswell offer strong schools with moderate prices.',
    ],
    faqItems: [
      {
        question: 'Is it better to buy intown Atlanta or in the suburbs?',
        answer:
          'Intown neighborhoods like Midtown and East Atlanta offer walkability and stronger appreciation but at higher prices. Suburbs like Marietta, Roswell, and Decatur offer more space and lower per-square-foot prices with good school access.',
      },
    ],
  },
  {
    slug: 'charlotte',
    name: 'Charlotte',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    medianHomePrice: 370000,
    medianMonthlyRent: 1550,
    priceToRentRatio: 19.9,
    avgAnnualAppreciation: 5.3,
    propertyTaxRate: 0.84,
    neighborhoodContext:
      'Charlotte is one of the fastest-growing metros in the Southeast, anchored by the banking and finance sector. SouthEnd and uptown areas command premiums, while outer suburbs remain affordable.',
    blufVerdict:
      'Charlotte combines moderate prices, low property taxes, and strong growth fundamentals. Buying is favorable after 3-4 years, making it one of the better buy-vs-rent markets among growing metros.',
    keyFacts: [
      'Charlotte is the second-largest banking center in the U.S.',
      'Property taxes in Mecklenburg County are below the national average.',
      'Population growth has consistently outpaced the national rate.',
      'Light rail expansion is influencing neighborhood appreciation patterns.',
    ],
    faqItems: [
      {
        question: 'Is Charlotte a good city for homebuyers in 2025?',
        answer:
          'Charlotte offers a combination of job growth, moderate prices, low taxes, and quality of life that makes it attractive for buyers. The main risk is that rapid growth could moderate if economic conditions shift, but long-term fundamentals remain strong.',
      },
    ],
  },
  {
    slug: 'denver',
    name: 'Denver',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    medianHomePrice: 565000,
    medianMonthlyRent: 1900,
    priceToRentRatio: 24.8,
    avgAnnualAppreciation: 5.0,
    propertyTaxRate: 0.51,
    neighborhoodContext:
      'Denver sits at the base of the Rocky Mountains and has been one of the top destinations for domestic migration. Extremely low property taxes are a distinct advantage, but high prices extend the break-even timeline.',
    blufVerdict:
      'Denver has high home prices but exceptionally low property taxes. Buying is favorable after 5-6 years. The combination of lifestyle appeal and job growth supports long-term value.',
    keyFacts: [
      'Denver has some of the lowest property tax rates among major U.S. metros.',
      'Tech sector growth has been a major demand driver.',
      'Home prices are well above the national median but below coastal cities.',
      'Suburban markets like Aurora and Lakewood offer lower entry points.',
    ],
    faqItems: [
      {
        question: 'How do Denver property taxes compare to other cities?',
        answer:
          'Denver property taxes average about 0.51%, far below cities like Chicago (2.27%), Houston (2.03%), or Philadelphia (1.58%). On a $565,000 home, that is only about $2,882/year or $240/month — a significant cost advantage.',
      },
      {
        question: 'Is the Denver housing market cooling off?',
        answer:
          'Denver has seen some price moderation after rapid appreciation through 2022. Inventory has increased from historic lows, giving buyers more negotiating power. Long-term demand drivers (population growth, outdoor lifestyle, tech employment) remain intact.',
      },
    ],
  },
  {
    slug: 'fort-worth',
    name: 'Fort Worth',
    stateSlug: 'texas',
    stateName: 'Texas',
    medianHomePrice: 310000,
    medianMonthlyRent: 1500,
    priceToRentRatio: 17.2,
    avgAnnualAppreciation: 4.3,
    propertyTaxRate: 2.05,
    neighborhoodContext:
      'Fort Worth combines a historic downtown and stockyards district with rapidly growing north and west suburbs like Keller, Alliance, and Aledo. It offers a lower cost basis than neighboring Dallas.',
    blufVerdict:
      'Fort Worth is one of the more affordable pockets in DFW. Buying is favorable after about 4 years, but Tarrant County property taxes are meaningful and must be built into the monthly cost.',
    keyFacts: [
      'Fort Worth prices typically run 10-15% below Dallas for comparable homes.',
      'Tarrant County effective property tax sits around 2.05%.',
      'Alliance and north Fort Worth have seen the fastest appreciation.',
      'Homestead exemption materially reduces primary-residence tax bills.',
    ],
    faqItems: [
      {
        question: 'Is Fort Worth cheaper to buy than Dallas?',
        answer:
          'Yes. Comparable homes in Fort Worth are typically 10-15% less than in Dallas, and property tax rates are similar but often slightly lower. For commuters willing to accept a 30-45 minute drive, the cost difference is significant.',
      },
      {
        question: 'How does the Fort Worth job market support homebuying?',
        answer:
          'Fort Worth has strong aerospace, logistics, and energy employment, with major employers including Lockheed Martin, American Airlines, and BNSF. Stable employment supports long-tenure homeowning.',
      },
    ],
  },
  {
    slug: 'columbus',
    name: 'Columbus',
    stateSlug: 'ohio',
    stateName: 'Ohio',
    medianHomePrice: 260000,
    medianMonthlyRent: 1350,
    priceToRentRatio: 16.0,
    avgAnnualAppreciation: 4.0,
    propertyTaxRate: 1.62,
    neighborhoodContext:
      'Columbus is Ohio\'s fastest-growing major city, anchored by Ohio State University, state government, and a growing Intel investment. The Short North, German Village, and suburbs like Dublin and Westerville have distinct price profiles.',
    blufVerdict:
      'Columbus is a quietly strong buyer market: moderate prices, steady appreciation, and below-average property taxes for the Midwest. Buying typically breaks even in 3-5 years.',
    keyFacts: [
      'Columbus population has grown faster than most Midwest peer cities.',
      'Intel\'s New Albany plant is reshaping demand east of the metro.',
      'Franklin County property taxes average about 1.62%.',
      'Entry-level housing under $250k is still available in many ZIPs.',
    ],
    faqItems: [
      {
        question: 'Is Columbus a good first-time buyer market?',
        answer:
          'Yes. Median prices remain accessible, the rental market is tight enough that ownership competes quickly, and appreciation has been steady. The main risk is that new semiconductor-related demand could outpace supply in the eastern suburbs.',
      },
      {
        question: 'How will the Intel plant affect Columbus home prices?',
        answer:
          'The Intel Ohio One campus is expected to drive substantial job growth in Licking County and east Columbus. Early demand has already lifted prices in New Albany, Johnstown, and Pataskala.',
      },
    ],
  },
  {
    slug: 'indianapolis',
    name: 'Indianapolis',
    stateSlug: 'indiana',
    stateName: 'Indiana',
    medianHomePrice: 225000,
    medianMonthlyRent: 1300,
    priceToRentRatio: 14.4,
    avgAnnualAppreciation: 3.6,
    propertyTaxRate: 0.84,
    neighborhoodContext:
      'Indianapolis is one of the most affordable major U.S. cities, with low property taxes thanks to Indiana\'s 1% residential cap. Broad Ripple, Carmel, and Fishers are the premium submarkets.',
    blufVerdict:
      'Indianapolis is a clear buyer-friendly market. Low prices, low taxes, and a price-to-rent ratio under 15 mean break-even often lands in 3 years for stable households.',
    keyFacts: [
      'Indiana\'s property tax cap limits primary residences to roughly 1% of assessed value.',
      'Carmel and Fishers rank among the most affluent Indy suburbs.',
      'Appreciation has been steady but modest compared to Sunbelt peers.',
      'Downtown condo stock has grown meaningfully in the last decade.',
    ],
    faqItems: [
      {
        question: 'Why does Indianapolis have such low property taxes?',
        answer:
          'Indiana constitutionally caps residential property tax at 1% of assessed value for primary residences. This makes Indianapolis one of the lowest-tax major metros in the U.S. and meaningfully supports the buy case.',
      },
      {
        question: 'Is Indianapolis a good remote-worker city?',
        answer:
          'Yes. The combination of affordable housing, low taxes, and solid amenities has attracted remote workers from higher-cost metros. The main caveat is modest appreciation — buy for lifestyle and cash-flow, not equity growth.',
      },
    ],
  },
  {
    slug: 'san-francisco',
    name: 'San Francisco',
    stateSlug: 'california',
    stateName: 'California',
    medianHomePrice: 1250000,
    medianMonthlyRent: 3500,
    priceToRentRatio: 29.8,
    avgAnnualAppreciation: 4.5,
    propertyTaxRate: 0.72,
    neighborhoodContext:
      'San Francisco has one of the highest price-to-rent ratios in the country. Co-ops are rare but TIC and condo complexity is common. Neighborhood pricing ranges from sub-$1M in outer Sunset to $3M+ in Pacific Heights.',
    blufVerdict:
      'San Francisco heavily favors renters for most tenure lengths. Prices versus rent are so extreme that break-even frequently requires 10+ years plus strong appreciation to justify purchase.',
    keyFacts: [
      'SF has one of the highest price-to-rent ratios among major U.S. cities.',
      'Prop 13 protects long-tenure owners but not new buyers.',
      'Tenancy-in-common (TIC) structures are common and reduce financing options.',
      'Transfer taxes on high-priced properties can be meaningful.',
    ],
    faqItems: [
      {
        question: 'Does buying in San Francisco ever beat renting?',
        answer:
          'Yes, but usually only for buyers with 10+ year horizons, substantial cash down, and appreciation assumptions that hold. For most renters under 7 years, investing the opportunity-cost capital elsewhere has historically been competitive.',
      },
      {
        question: 'What is a TIC and how does it affect buying?',
        answer:
          'A tenancy-in-common lets multiple buyers share ownership of a property, frequently used to subdivide SF multi-unit buildings. TICs have limited lender options (fractional loans), carry group-financing risk, and generally resell at a discount to true condos.',
      },
      {
        question: 'How does rent control affect the SF rent side?',
        answer:
          'San Francisco rent control meaningfully anchors rents for long-tenure renters in eligible buildings. This widens the rent-vs-buy gap further and is a major reason long-time SF renters often stay in rentals.',
      },
    ],
  },
  {
    slug: 'seattle',
    name: 'Seattle',
    stateSlug: 'washington',
    stateName: 'Washington',
    medianHomePrice: 825000,
    medianMonthlyRent: 2450,
    priceToRentRatio: 28.1,
    avgAnnualAppreciation: 5.1,
    propertyTaxRate: 0.93,
    neighborhoodContext:
      'Seattle combines high tech-driven demand with constrained supply. Neighborhoods like Queen Anne, Ballard, and Capitol Hill command premiums; the Eastside (Bellevue, Redmond) is often pricier than Seattle proper.',
    blufVerdict:
      'Seattle favors renters for stays under 6-7 years due to a high price-to-rent ratio. Long-horizon tech employees with stable tenure build strong equity, but short stays rarely pencil.',
    keyFacts: [
      'Washington has no state income tax, improving effective take-home.',
      'Amazon and Microsoft anchor a tech labor market that strongly influences pricing.',
      'Condo construction defect law has historically suppressed new condo supply.',
      'Property tax is moderate, but rates vary by levy district.',
    ],
    faqItems: [
      {
        question: 'Is it better to buy in Seattle or Bellevue?',
        answer:
          'Bellevue is typically more expensive than Seattle on a per-square-foot basis, driven by top school ratings and Microsoft proximity. Seattle offers more urban neighborhood variety at a slightly lower per-foot price. Schools often drive the decision more than price.',
      },
      {
        question: 'How does Seattle\'s no-income-tax environment affect buying?',
        answer:
          'Absence of state income tax adds to take-home pay and housing budget. But property and sales taxes, plus high sticker prices, mean the net advantage is smaller than the headline suggests.',
      },
    ],
  },
  {
    slug: 'nashville',
    name: 'Nashville',
    stateSlug: 'tennessee',
    stateName: 'Tennessee',
    medianHomePrice: 430000,
    medianMonthlyRent: 1800,
    priceToRentRatio: 19.9,
    avgAnnualAppreciation: 5.7,
    propertyTaxRate: 0.68,
    neighborhoodContext:
      'Nashville has been one of the fastest-growing U.S. metros, with healthcare, music, and corporate relocations driving demand. East Nashville, The Gulch, and Franklin carry premium prices; suburbs like Murfreesboro remain more accessible.',
    blufVerdict:
      'Nashville has seen rapid appreciation and has a mixed buy-vs-rent profile. Low property taxes help buyers; elevated prices extend break-even to 5-7 years.',
    keyFacts: [
      'Tennessee has no state income tax on wages.',
      'Davidson County property taxes are below the national average.',
      'Short-term rental regulations vary by neighborhood and affect investor math.',
      'Corporate relocations (Oracle, Amazon ops) have reshaped demand.',
    ],
    faqItems: [
      {
        question: 'Has Nashville price growth cooled?',
        answer:
          'Yes. After 2020-2022 surges, Nashville has stabilized with modest price declines in some submarkets. Long-term fundamentals remain strong, but buyers should not assume double-digit annual appreciation.',
      },
      {
        question: 'Are short-term rentals a good strategy in Nashville?',
        answer:
          'Rules have tightened, with permit caps and owner-occupancy requirements in many ZIPs. Buyers planning to offset cost via STR should verify permit availability for the specific property before purchase.',
      },
    ],
  },
  {
    slug: 'oklahoma-city',
    name: 'Oklahoma City',
    stateSlug: 'oklahoma',
    stateName: 'Oklahoma',
    medianHomePrice: 215000,
    medianMonthlyRent: 1200,
    priceToRentRatio: 14.9,
    avgAnnualAppreciation: 3.5,
    propertyTaxRate: 0.90,
    neighborhoodContext:
      'Oklahoma City has an affordable cost basis with a slow-but-steady growth pattern, driven by energy, aerospace, and state government. Edmond and Nichols Hills are the premium submarkets.',
    blufVerdict:
      'OKC is a strong buy-side market. Low entry prices, moderate taxes, and a sub-15 price-to-rent ratio mean break-even typically arrives within 3 years for stable households.',
    keyFacts: [
      'Median home price is among the lowest of the top 50 U.S. cities.',
      'Energy industry exposure makes local cycles modestly volatile.',
      'Property taxes are moderate and include homestead exemption availability.',
      'Tornado insurance considerations add a small ongoing cost.',
    ],
    faqItems: [
      {
        question: 'Does tornado risk affect OKC home insurance costs?',
        answer:
          'Storm coverage — particularly wind/hail — adds meaningfully to insurance premiums relative to less storm-exposed metros. Budget an extra 20-40% on insurance vs the national average for OKC.',
      },
      {
        question: 'Is OKC appreciation too slow to buy?',
        answer:
          'Appreciation is modest, but with rent at 14-15x price, cash-flow savings start quickly. The buy case is about monthly cost savings, not capital gains.',
      },
    ],
  },
  {
    slug: 'el-paso',
    name: 'El Paso',
    stateSlug: 'texas',
    stateName: 'Texas',
    medianHomePrice: 220000,
    medianMonthlyRent: 1150,
    priceToRentRatio: 15.9,
    avgAnnualAppreciation: 3.8,
    propertyTaxRate: 2.03,
    neighborhoodContext:
      'El Paso sits on the U.S.-Mexico border with a distinctive binational economy. Fort Bliss and a sizable logistics sector anchor employment. The West Side and Upper Valley carry premium pricing.',
    blufVerdict:
      'El Paso offers one of the lowest sticker prices in Texas, but high property taxes bring the monthly cost closer to peer cities. Buying is favorable after about 4 years for stable families.',
    keyFacts: [
      'Fort Bliss is one of the largest Army installations, driving military-family demand.',
      'Property taxes in El Paso County are above the Texas average.',
      'Cross-border commerce shapes employment in logistics and retail.',
      'No state income tax helps affordability.',
    ],
    faqItems: [
      {
        question: 'Does the military presence influence El Paso home values?',
        answer:
          'Yes. Fort Bliss brings consistent turnover and rental demand, which supports investor interest and steady rents in nearby neighborhoods. It also buffers the market during broader downturns.',
      },
      {
        question: 'Are El Paso property taxes really that high?',
        answer:
          'Yes. Combined city, county, ISD, and other levies often exceed 2.0% effective. On a $220,000 home, that is about $4,450/year — close to $370/month added to carrying cost.',
      },
    ],
  },
  {
    slug: 'boston',
    name: 'Boston',
    stateSlug: 'massachusetts',
    stateName: 'Massachusetts',
    medianHomePrice: 780000,
    medianMonthlyRent: 2900,
    priceToRentRatio: 22.4,
    avgAnnualAppreciation: 4.8,
    propertyTaxRate: 1.04,
    neighborhoodContext:
      'Boston combines limited housing supply, strong anchor employers (healthcare, higher ed, biotech), and dense rental markets. Back Bay and the South End are premium; Dorchester and parts of Cambridge/Somerville offer more accessible entry.',
    blufVerdict:
      'Boston favors renters for stays under 7 years. Transaction costs, a 22+ price-to-rent ratio, and older housing stock maintenance combine to push break-even out.',
    keyFacts: [
      'Massachusetts imposes a 5% state income tax plus a millionaires\' surtax above $1M.',
      'Condo and multifamily conversions dominate urban-core inventory.',
      'Property taxes are moderate, but assessments can step up after purchase.',
      'Student-heavy rental pockets show unusual seasonal demand patterns.',
    ],
    faqItems: [
      {
        question: 'Should I buy in Boston or a suburb like Newton or Brookline?',
        answer:
          'Suburbs like Newton, Brookline, and Lexington carry school-premium pricing that often exceeds Boston proper on a per-square-foot basis. If you do not have school-age children, Boston\'s downtown neighborhoods often offer better value.',
      },
      {
        question: 'How does older housing stock affect Boston ownership cost?',
        answer:
          'Much of Boston\'s housing stock is 80-150 years old. Inspection for lead paint, knob-and-tube wiring, aging roofs, and oil-heat systems is critical. Budget 1.5-2% of home value annually for maintenance on pre-war homes.',
      },
    ],
  },
  {
    slug: 'portland',
    name: 'Portland',
    stateSlug: 'oregon',
    stateName: 'Oregon',
    medianHomePrice: 540000,
    medianMonthlyRent: 1950,
    priceToRentRatio: 23.1,
    avgAnnualAppreciation: 4.2,
    propertyTaxRate: 1.02,
    neighborhoodContext:
      'Portland\'s urban growth boundary constrains supply and supports prices. Pearl District, Alphabet District, and Laurelhurst are premium; North and Southeast neighborhoods are often more accessible.',
    blufVerdict:
      'Portland leans toward renting for stays under 6 years. A 23+ price-to-rent ratio plus Oregon income tax mean the ownership cost is significant.',
    keyFacts: [
      'Oregon has a 9.9% top marginal income tax — one of the highest in the country.',
      'Portland\'s urban growth boundary limits outer expansion.',
      'Multnomah County levies additional business and preschool taxes.',
      'Tree preservation ordinances add cost and complexity to renovations.',
    ],
    faqItems: [
      {
        question: 'Does Oregon income tax affect my buy-vs-rent decision?',
        answer:
          'Indirectly. High state income tax reduces effective after-tax housing budget, which compresses affordability. It also increases the value of the mortgage interest deduction for itemizers at Oregon\'s top bracket.',
      },
      {
        question: 'Has Portland cooled off?',
        answer:
          'Yes. Portland saw softer demand than most Western cities after 2022, with some price declines in urban core neighborhoods. Long-term fundamentals remain, but buyers should not assume rapid appreciation.',
      },
    ],
  },
  {
    slug: 'las-vegas',
    name: 'Las Vegas',
    stateSlug: 'nevada',
    stateName: 'Nevada',
    medianHomePrice: 415000,
    medianMonthlyRent: 1700,
    priceToRentRatio: 20.3,
    avgAnnualAppreciation: 5.2,
    propertyTaxRate: 0.55,
    neighborhoodContext:
      'The Las Vegas metro includes Henderson, Summerlin, and North Las Vegas — each with distinctive pricing. Summerlin and MacDonald Highlands carry premiums; outer North Las Vegas is the most accessible entry point.',
    blufVerdict:
      'Las Vegas has moderate prices and exceptionally low property taxes. Buying is favorable after 4-5 years, though the local economy\'s service-sector concentration adds cyclical risk.',
    keyFacts: [
      'Nevada has no state income tax.',
      'Clark County property taxes are capped at 3% annual growth for primary residences.',
      'Service, hospitality, and gaming employment anchor the metro.',
      'HOA fees are common in Valley master-planned communities.',
    ],
    faqItems: [
      {
        question: 'Is Las Vegas a risky place to buy given tourism cycles?',
        answer:
          'Tourism-driven economies historically experience sharper downturns during recessions. Buyers should stress-test the decision against a 12-24 month income disruption, especially in hospitality and gaming roles.',
      },
      {
        question: 'Are HOA fees a big factor in Las Vegas?',
        answer:
          'Yes. Most master-planned communities have HOAs ranging from $40-$300+/month, with some gated communities higher. Factor HOA dues into the monthly cost before comparing to rent.',
      },
    ],
  },
  {
    slug: 'detroit',
    name: 'Detroit',
    stateSlug: 'michigan',
    stateName: 'Michigan',
    medianHomePrice: 85000,
    medianMonthlyRent: 1100,
    priceToRentRatio: 6.4,
    avgAnnualAppreciation: 3.0,
    propertyTaxRate: 2.10,
    neighborhoodContext:
      'Detroit proper has one of the lowest median home prices of any major U.S. city, but huge variance by neighborhood. Midtown and Corktown have seen significant investment; other neighborhoods remain distressed.',
    blufVerdict:
      'Detroit has an extremely low price-to-rent ratio on paper, but the buy decision is dominated by property condition, taxes, and neighborhood risk. Careful inspection and neighborhood analysis are essential.',
    keyFacts: [
      'Detroit\'s effective property tax rate is among the highest in the U.S.',
      'Many properties carry unpaid tax liens or code violations.',
      'Midtown, Corktown, and downtown have seen meaningful revitalization.',
      'Home insurance availability varies significantly by ZIP.',
    ],
    faqItems: [
      {
        question: 'Why is Detroit\'s price-to-rent ratio so low?',
        answer:
          'Median prices remain suppressed by decades of population loss and property abandonment, but rental demand has held up. The low ratio is real but reflects risk, not a pure bargain — tax bills, insurance, and rehabilitation costs frequently exceed expectations.',
      },
      {
        question: 'Is Detroit a good investment for first-time buyers?',
        answer:
          'Only with careful due diligence. A property inspection specialist familiar with Detroit\'s older housing stock is essential. Title issues, tax foreclosure history, and code compliance must be verified before purchase.',
      },
    ],
  },
  {
    slug: 'memphis',
    name: 'Memphis',
    stateSlug: 'tennessee',
    stateName: 'Tennessee',
    medianHomePrice: 170000,
    medianMonthlyRent: 1250,
    priceToRentRatio: 11.3,
    avgAnnualAppreciation: 3.2,
    propertyTaxRate: 1.21,
    neighborhoodContext:
      'Memphis has one of the lowest price-to-rent ratios among major U.S. cities, anchored by FedEx and healthcare employment. East Memphis and Germantown are premium submarkets.',
    blufVerdict:
      'Memphis strongly favors buying for stable residents. The low ratio means monthly carrying cost is often lower than rent, though appreciation is modest.',
    keyFacts: [
      'Memphis is a major logistics hub for FedEx and others.',
      'Tennessee has no state income tax on wages.',
      'Shelby County property taxes are above the state average.',
      'Investor activity has been heavy in many Memphis ZIPs.',
    ],
    faqItems: [
      {
        question: 'Why is Memphis a good city to buy in?',
        answer:
          'An 11-12 price-to-rent ratio means ownership monthly cost often beats comparable rent, especially after homestead exemption. Break-even usually arrives within 2-3 years for stable buyers.',
      },
      {
        question: 'Should I worry about investor concentration in Memphis?',
        answer:
          'Institutional investors have been active in many Memphis ZIPs, which has lifted rents and reduced resale inventory. It has less impact on primary-residence buyers but can affect neighborhood appreciation patterns.',
      },
    ],
  },
  {
    slug: 'louisville',
    name: 'Louisville',
    stateSlug: 'kentucky',
    stateName: 'Kentucky',
    medianHomePrice: 230000,
    medianMonthlyRent: 1200,
    priceToRentRatio: 16.0,
    avgAnnualAppreciation: 3.4,
    propertyTaxRate: 0.85,
    neighborhoodContext:
      'Louisville combines historic neighborhoods like Highlands and Crescent Hill with affordable eastern and southern suburbs. UPS Worldport and healthcare anchor employment.',
    blufVerdict:
      'Louisville is a solidly buyer-friendly market. Moderate prices, low taxes, and affordable carrying costs mean break-even arrives in 3-4 years.',
    keyFacts: [
      'Louisville hosts UPS\'s largest air package sorting facility.',
      'Jefferson County property taxes are near the national average but below most Ohio River peers.',
      'Kentucky has a flat 4% state income tax.',
      'Older housing stock requires maintenance budgeting discipline.',
    ],
    faqItems: [
      {
        question: 'Is Louisville good for first-time buyers?',
        answer:
          'Yes. Entry-level inventory under $200k is common in many neighborhoods, property taxes are moderate, and rent-versus-own math strongly favors buying for tenures over 3 years.',
      },
      {
        question: 'How does UPS affect the Louisville housing market?',
        answer:
          'UPS\'s Worldport supports stable logistics employment and indirectly drives demand in East End and South End ZIPs. It also creates shift-based renter demand, which keeps rents elevated enough to support ownership competitiveness.',
      },
    ],
  },
  {
    slug: 'baltimore',
    name: 'Baltimore',
    stateSlug: 'maryland',
    stateName: 'Maryland',
    medianHomePrice: 210000,
    medianMonthlyRent: 1600,
    priceToRentRatio: 10.9,
    avgAnnualAppreciation: 2.8,
    propertyTaxRate: 1.90,
    neighborhoodContext:
      'Baltimore has dramatic neighborhood variance, from premium Roland Park and Federal Hill to distressed East and West Baltimore ZIPs. Property condition drives most of the price dispersion.',
    blufVerdict:
      'Baltimore\'s very low price-to-rent ratio makes buying attractive on paper, but property condition and neighborhood risk make due diligence essential. Taxes and insurance are meaningful.',
    keyFacts: [
      'Baltimore City property tax is above 2% — among the highest of U.S. major cities.',
      'Price-to-rent ratio is one of the lowest of major U.S. metros.',
      'Row-home housing stock is typically 80-120 years old.',
      'Maryland has a 5.75% top state income tax plus county piggyback.',
    ],
    faqItems: [
      {
        question: 'Why is Baltimore so much cheaper than Washington, D.C.?',
        answer:
          'Decades of population loss, property condition concerns, and neighborhood instability have suppressed Baltimore prices relative to DC. For buyers willing to commute, Baltimore offers 40-60% price savings.',
      },
      {
        question: 'Does the Baltimore homestead cap help?',
        answer:
          'Yes. Maryland\'s homestead tax credit caps annual assessment growth at 4% in Baltimore City (lower in many counties), which protects long-tenure owners from rapid tax increases.',
      },
    ],
  },
  {
    slug: 'milwaukee',
    name: 'Milwaukee',
    stateSlug: 'wisconsin',
    stateName: 'Wisconsin',
    medianHomePrice: 185000,
    medianMonthlyRent: 1300,
    priceToRentRatio: 11.9,
    avgAnnualAppreciation: 3.6,
    propertyTaxRate: 2.17,
    neighborhoodContext:
      'Milwaukee combines affordable prices with some of the highest property tax rates in the country. East Side, Bay View, and suburbs like Wauwatosa and Shorewood are premium.',
    blufVerdict:
      'Milwaukee\'s low price-to-rent ratio is offset by high property taxes. Buying is favorable for stable long-tenure residents; short-stay renters may still benefit from the city\'s affordability.',
    keyFacts: [
      'Wisconsin property tax is among the highest effective rates in the U.S.',
      'Milwaukee County taxes often add 0.3-0.5% above city rates.',
      'Winter maintenance costs (roofs, heating, snow removal) are meaningful.',
      'Short-term rental rules have tightened in recent years.',
    ],
    faqItems: [
      {
        question: 'Are Milwaukee property taxes really that high?',
        answer:
          'Yes. Combined city, county, and MPS effective rates exceed 2.1% in most Milwaukee ZIPs. On a $200k home, that is $4,200/year — roughly 30% of a typical mortgage payment.',
      },
      {
        question: 'Should I buy in the city or a Milwaukee suburb?',
        answer:
          'Suburbs like Wauwatosa, Shorewood, and Brookfield often carry school-related price premiums but may have similar or slightly lower effective tax rates than the city. School priorities usually drive the decision more than price.',
      },
    ],
  },
  {
    slug: 'albuquerque',
    name: 'Albuquerque',
    stateSlug: 'new-mexico',
    stateName: 'New Mexico',
    medianHomePrice: 310000,
    medianMonthlyRent: 1300,
    priceToRentRatio: 19.9,
    avgAnnualAppreciation: 4.0,
    propertyTaxRate: 0.78,
    neighborhoodContext:
      'Albuquerque combines affordable prices with a distinctive high-desert climate. The Northeast Heights is a top residential area; Downtown and Nob Hill have seen revitalization.',
    blufVerdict:
      'Albuquerque is modestly buyer-friendly with low taxes but a rising price-to-rent ratio. Buying works best for stays of 5+ years.',
    keyFacts: [
      'Bernalillo County property taxes are below the U.S. average.',
      'Sandia National Labs anchors a sizable professional workforce.',
      'Water availability is a long-term regional consideration.',
      'Adobe and stucco homes require specific maintenance knowledge.',
    ],
    faqItems: [
      {
        question: 'How does the climate affect Albuquerque home costs?',
        answer:
          'Low humidity reduces some maintenance categories but UV exposure and wind-driven dust accelerate exterior wear. Stucco maintenance is a real line item that renters in ABQ do not pay directly.',
      },
      {
        question: 'Is Sandia Labs a factor in Albuquerque homebuying?',
        answer:
          'Yes. Sandia, Kirtland Air Force Base, and related defense-adjacent employers create a large stable professional base anchored in the Northeast Heights ZIPs, which supports steady demand there.',
      },
    ],
  },
  {
    slug: 'tucson',
    name: 'Tucson',
    stateSlug: 'arizona',
    stateName: 'Arizona',
    medianHomePrice: 320000,
    medianMonthlyRent: 1350,
    priceToRentRatio: 19.8,
    avgAnnualAppreciation: 4.2,
    propertyTaxRate: 0.72,
    neighborhoodContext:
      'Tucson is anchored by the University of Arizona, Davis-Monthan AFB, and a growing biotech and aerospace sector. The Foothills and Oro Valley are premium; central Tucson offers more value.',
    blufVerdict:
      'Tucson is friendlier to buyers than Phoenix on price but has a similar ratio profile. Low property taxes help; buying is favorable after 4-5 years.',
    keyFacts: [
      'Tucson home prices are typically 20-30% below Phoenix.',
      'Pima County property taxes are low by national standards.',
      'UArizona student housing demand affects specific ZIPs.',
      'Monsoon season creates roof and drainage maintenance needs.',
    ],
    faqItems: [
      {
        question: 'Is Tucson a better buy than Phoenix?',
        answer:
          'Tucson offers 20-30% lower prices than Phoenix for comparable homes, a shorter-term upside for buyers with similar carrying costs. Phoenix has faster appreciation historically; Tucson is a cash-flow play.',
      },
      {
        question: 'Does the university influence Tucson housing?',
        answer:
          'Yes. Student rental demand concentrates around UArizona and keeps rents elevated for 2-4 bedroom homes in adjacent neighborhoods. Investors compete for those properties.',
      },
    ],
  },
  {
    slug: 'fresno',
    name: 'Fresno',
    stateSlug: 'california',
    stateName: 'California',
    medianHomePrice: 395000,
    medianMonthlyRent: 1500,
    priceToRentRatio: 21.9,
    avgAnnualAppreciation: 4.5,
    propertyTaxRate: 0.80,
    neighborhoodContext:
      'Fresno is the largest Central Valley city and one of California\'s most affordable major metros. It is anchored by agriculture, healthcare, and regional government employment.',
    blufVerdict:
      'Fresno offers the most affordable entry in California\'s major cities. Buying favors long-tenure residents; the ratio sits just above 20, so renters under 5 years often come out ahead.',
    keyFacts: [
      'Fresno median prices are roughly half those of coastal California metros.',
      'Prop 13 protections apply as in the rest of California.',
      'Air quality concerns drive HVAC and filtration investment.',
      'Central Valley water policy is a long-term variable.',
    ],
    faqItems: [
      {
        question: 'Why are Fresno prices so much lower than coastal California?',
        answer:
          'Central Valley metros lack the coastal supply constraints and have more-moderate job growth than the Bay Area or LA. The tradeoff is slower appreciation and different lifestyle amenities.',
      },
      {
        question: 'Does air quality affect Fresno homes?',
        answer:
          'Yes. The San Joaquin Valley has persistent air quality challenges, leading many owners to invest in whole-home air filtration. This is a cost renters generally do not bear directly.',
      },
    ],
  },
  {
    slug: 'sacramento',
    name: 'Sacramento',
    stateSlug: 'california',
    stateName: 'California',
    medianHomePrice: 475000,
    medianMonthlyRent: 1900,
    priceToRentRatio: 20.8,
    avgAnnualAppreciation: 4.6,
    propertyTaxRate: 0.81,
    neighborhoodContext:
      'Sacramento serves as California\'s state capital and has become a Bay Area relocation target. East Sac, Land Park, and Folsom are premium; South Sac remains more affordable.',
    blufVerdict:
      'Sacramento sits in the middle of California\'s spectrum: more affordable than coastal metros, less affordable than the Central Valley. Buying favors 5+ year stays.',
    keyFacts: [
      'State government is the largest single employer.',
      'Bay Area remote-worker inflows lifted prices materially post-2020.',
      'Mello-Roos special assessments can add to new-construction property tax load.',
      'Sacramento has Prop 13 protection for long-tenure owners.',
    ],
    faqItems: [
      {
        question: 'What is Mello-Roos and does it affect Sacramento buyers?',
        answer:
          'Mello-Roos is a special tax district used to fund infrastructure in new California developments. It can add 0.3-1.0% to effective property tax. Common in Natomas and Folsom-area new construction — verify before purchase.',
      },
      {
        question: 'Is Sacramento a good Bay Area escape?',
        answer:
          'Yes for remote workers accepting a 1.5-2 hour drive to SF/Bay Area. Sacramento prices are typically 40-50% below the Bay, and Prop 13 protections begin accruing from purchase.',
      },
    ],
  },
  {
    slug: 'kansas-city',
    name: 'Kansas City',
    stateSlug: 'missouri',
    stateName: 'Missouri',
    medianHomePrice: 245000,
    medianMonthlyRent: 1300,
    priceToRentRatio: 15.7,
    avgAnnualAppreciation: 3.9,
    propertyTaxRate: 1.01,
    neighborhoodContext:
      'Kansas City spans the Missouri-Kansas state line. On the Missouri side, neighborhoods like Brookside and the Plaza are premium; the Northland is more accessible. Overland Park (KS) is among the top suburbs.',
    blufVerdict:
      'Kansas City is a solidly buyer-friendly market with a 15-16 price-to-rent ratio. Moderate taxes and stable employment make break-even easy to clear.',
    keyFacts: [
      'KC straddles two states with meaningfully different tax regimes.',
      'Cerner, Garmin, and logistics employment anchor the metro.',
      'Streetcar expansion has influenced downtown and Midtown pricing.',
      'Missouri property taxes are moderate; Kansas sides run similar.',
    ],
    faqItems: [
      {
        question: 'Should I buy in KCMO or KCK (or Overland Park)?',
        answer:
          'Overland Park and Johnson County, Kansas offer strong schools at premium prices. KCMO has broader price range and some of the best urban neighborhoods. Your school needs and commute pattern usually drive the choice.',
      },
      {
        question: 'How does the state line affect KC homeowners?',
        answer:
          'Missouri has a 4.95% top income tax; Kansas has a 5.7% top rate. Property tax rates are broadly similar. The state choice is often more about schools and services than pure tax.',
      },
    ],
  },
  {
    slug: 'mesa',
    name: 'Mesa',
    stateSlug: 'arizona',
    stateName: 'Arizona',
    medianHomePrice: 420000,
    medianMonthlyRent: 1650,
    priceToRentRatio: 21.2,
    avgAnnualAppreciation: 5.0,
    propertyTaxRate: 0.62,
    neighborhoodContext:
      'Mesa is the third-largest Phoenix-metro city, with a large retiree population and growing young-family presence in east Mesa and Gateway. Prices are typically below Phoenix proper and Scottsdale.',
    blufVerdict:
      'Mesa is a solid mid-tier Phoenix-metro buy. Low property taxes and accessible pricing support a 5-year break-even for stable households.',
    keyFacts: [
      'Mesa Gateway airport and ASU Polytechnic anchor east-side growth.',
      'Property taxes in Maricopa County are among the lowest of major metros.',
      'Retiree-focused communities add HOA complexity in some ZIPs.',
      'Summer cooling costs are a real ongoing expense.',
    ],
    faqItems: [
      {
        question: 'Is Mesa cheaper than Phoenix or Scottsdale?',
        answer:
          'Yes. Comparable homes in Mesa typically cost 10-20% less than Phoenix and 30-40% less than Scottsdale. The main tradeoff is commute distance to central employment hubs.',
      },
      {
        question: 'Are there active-adult restrictions I should know about?',
        answer:
          'Many Mesa HOAs are 55+ communities. Confirm community rules before purchase if you have children or plan on multi-generational living.',
      },
    ],
  },
  {
    slug: 'omaha',
    name: 'Omaha',
    stateSlug: 'nebraska',
    stateName: 'Nebraska',
    medianHomePrice: 265000,
    medianMonthlyRent: 1350,
    priceToRentRatio: 16.4,
    avgAnnualAppreciation: 3.5,
    propertyTaxRate: 1.73,
    neighborhoodContext:
      'Omaha is anchored by insurance, finance, and Berkshire Hathaway-related employment. West Omaha and Elkhorn are the premium suburbs; Midtown has seen urban revitalization.',
    blufVerdict:
      'Omaha is a stable buy-side market. Moderate prices offset somewhat by meaningful property taxes. Break-even is typically 4-5 years.',
    keyFacts: [
      'Nebraska property taxes are higher than most Plains states.',
      'Insurance and finance sectors provide stable long-tenure employment.',
      'West Omaha school districts drive premium pricing.',
      'Flood plain considerations apply to parts of the Missouri River corridor.',
    ],
    faqItems: [
      {
        question: 'Why are Nebraska property taxes relatively high?',
        answer:
          'Nebraska relies heavily on property tax to fund schools and local government because the state has no local-option sales tax in most places. Effective rates of 1.7-2.1% are typical in Douglas and Sarpy counties.',
      },
      {
        question: 'Is Omaha a recession-resilient market?',
        answer:
          'Omaha\'s insurance and financial services concentration has historically produced stable employment through recessions. The metro has been less volatile than coastal or Sunbelt peers.',
      },
    ],
  },
  {
    slug: 'colorado-springs',
    name: 'Colorado Springs',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    medianHomePrice: 450000,
    medianMonthlyRent: 1700,
    priceToRentRatio: 22.1,
    avgAnnualAppreciation: 5.0,
    propertyTaxRate: 0.49,
    neighborhoodContext:
      'Colorado Springs combines five major military installations with a growing aerospace and cybersecurity sector. Broadmoor and Briargate are premium; older central neighborhoods are more accessible.',
    blufVerdict:
      'Colorado Springs has seen rapid appreciation with very low property taxes. The high price-to-rent ratio means buying is best for 5+ year stays.',
    keyFacts: [
      'Colorado Springs hosts multiple military installations driving steady relocation demand.',
      'El Paso County has some of the lowest property tax rates in the country.',
      'Wildfire exposure has tightened insurance in western ZIPs.',
      'TABOR restrictions influence state-level tax dynamics.',
    ],
    faqItems: [
      {
        question: 'How does the military presence affect Colorado Springs housing?',
        answer:
          'Fort Carson, Peterson, and the Air Force Academy produce consistent 2-3 year relocation cycles, which create strong rental demand and support appreciation. This also keeps mid-range housing inventory tight.',
      },
      {
        question: 'Is wildfire insurance a concern in Colorado Springs?',
        answer:
          'Yes. Western ZIPs at the wildland-urban interface have seen insurance carriers pull back. Verify insurability with multiple carriers before committing to a purchase in foothills neighborhoods.',
      },
    ],
  },
  {
    slug: 'raleigh',
    name: 'Raleigh',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    medianHomePrice: 420000,
    medianMonthlyRent: 1650,
    priceToRentRatio: 21.2,
    avgAnnualAppreciation: 5.3,
    propertyTaxRate: 0.86,
    neighborhoodContext:
      'Raleigh anchors the Research Triangle with NC State, Duke (Durham), and UNC (Chapel Hill) nearby. North Raleigh, Cary, and Apex are premium; older inside-the-Beltline neighborhoods are increasingly pricey.',
    blufVerdict:
      'Raleigh has seen strong population-driven appreciation. Low taxes help, but the price-to-rent ratio above 21 means buying works best for 5+ year horizons.',
    keyFacts: [
      'The Research Triangle attracts strong biotech and tech employment.',
      'Wake County property taxes are below national averages.',
      'Apex, Cary, and Holly Springs rank among the fastest-growing U.S. suburbs.',
      'North Carolina has a 4.5% flat state income tax.',
    ],
    faqItems: [
      {
        question: 'Is Raleigh a better buy than Charlotte?',
        answer:
          'Both are strong Carolina growth markets. Raleigh has higher price-to-rent but stronger tech/biotech anchoring; Charlotte is slightly more affordable with banking anchoring. The choice often follows employer location.',
      },
      {
        question: 'Has Raleigh cooled after the 2022 surge?',
        answer:
          'Some moderation has occurred, but inventory remains tight relative to demand. Appreciation has slowed to mid-single-digits from the 15%+ annual gains seen during 2021-2022.',
      },
    ],
  },
  {
    slug: 'long-beach',
    name: 'Long Beach',
    stateSlug: 'california',
    stateName: 'California',
    medianHomePrice: 795000,
    medianMonthlyRent: 2400,
    priceToRentRatio: 27.6,
    avgAnnualAppreciation: 5.2,
    propertyTaxRate: 0.76,
    neighborhoodContext:
      'Long Beach has a distinct identity within LA County — coastal, slightly more affordable than Westside LA, and strongly anchored by the Port and Cal State Long Beach. Belmont Shore and Naples are premium.',
    blufVerdict:
      'Long Beach is cheaper than Westside LA but still expensive on a price-to-rent basis. Buying favors 7+ year stays for most households.',
    keyFacts: [
      'Long Beach is cheaper than Santa Monica, Manhattan Beach, or West LA for comparable coastal housing.',
      'Port of Long Beach is a major logistics employer.',
      'Rent control applies to many older Long Beach buildings.',
      'Prop 13 and LA County protections apply as in greater California.',
    ],
    faqItems: [
      {
        question: 'Is Long Beach a cheaper alternative to Westside LA?',
        answer:
          'Yes. Comparable coastal homes in Long Beach are typically 20-35% below Manhattan Beach or Santa Monica. The tradeoffs are different commute geography and a different neighborhood mix.',
      },
      {
        question: 'How does Long Beach rent control affect buy-vs-rent?',
        answer:
          'Long-tenure renters in rent-controlled buildings benefit from well-below-market rents, widening the rent-wins gap. For new arrivals paying current market rents, the math is closer to statewide California.',
      },
    ],
  },
  {
    slug: 'virginia-beach',
    name: 'Virginia Beach',
    stateSlug: 'virginia',
    stateName: 'Virginia',
    medianHomePrice: 355000,
    medianMonthlyRent: 1700,
    priceToRentRatio: 17.4,
    avgAnnualAppreciation: 3.8,
    propertyTaxRate: 0.87,
    neighborhoodContext:
      'Virginia Beach is the largest city in the Hampton Roads metro, anchored by Naval Station Norfolk-area military demand and tourism. Pungo and Sandbridge offer a semi-rural and coastal mix.',
    blufVerdict:
      'Virginia Beach is a steady buy-side market. Military cycling creates some churn, but moderate prices and moderate taxes keep break-even around 4-5 years.',
    keyFacts: [
      'Hampton Roads has one of the largest military concentrations in the U.S.',
      'Flood zones along the coast require specific insurance considerations.',
      'Virginia property taxes are near the national average.',
      'Tourism creates seasonal short-term rental demand.',
    ],
    faqItems: [
      {
        question: 'Do I need flood insurance in Virginia Beach?',
        answer:
          'Coastal and oceanfront areas typically require flood insurance under NFIP. Even outside mapped flood zones, storm surge and low elevation make supplemental coverage a common recommendation.',
      },
      {
        question: 'How does military cycling affect Virginia Beach housing?',
        answer:
          'Regular 2-3 year duty rotations produce consistent renter demand and moderate ownership turnover. It stabilizes the rental market but can dampen appreciation compared to non-military metros.',
      },
    ],
  },
  {
    slug: 'oakland',
    name: 'Oakland',
    stateSlug: 'california',
    stateName: 'California',
    medianHomePrice: 870000,
    medianMonthlyRent: 2700,
    priceToRentRatio: 26.9,
    avgAnnualAppreciation: 4.8,
    propertyTaxRate: 0.81,
    neighborhoodContext:
      'Oakland offers a cheaper entry into the Bay Area than San Francisco. Rockridge, Piedmont Avenue, and the hills command premiums; West and East Oakland remain more accessible.',
    blufVerdict:
      'Oakland is expensive but cheaper than San Francisco. Break-even typically requires 7-9 years for most buyers. Hills vs flatland pricing differences are large.',
    keyFacts: [
      'Oakland median prices are typically 30-40% below San Francisco.',
      'Prop 13 protects long-tenure owners.',
      'Oakland rent control applies to many older buildings.',
      'Fire insurance for hillside properties has tightened significantly.',
    ],
    faqItems: [
      {
        question: 'Is Oakland a smart Bay Area purchase?',
        answer:
          'For buyers working in SF or the East Bay tech corridor, Oakland often represents the best value in the urban Bay Area. Price is typically 30-40% below SF, with BART access and diverse neighborhoods.',
      },
      {
        question: 'How does Oakland fire insurance affect buying?',
        answer:
          'Hillside properties have faced carrier pullbacks and premium increases. Verify insurability with multiple carriers and the California FAIR plan before committing to a hillside purchase.',
      },
    ],
  },
  {
    slug: 'minneapolis',
    name: 'Minneapolis',
    stateSlug: 'minnesota',
    stateName: 'Minnesota',
    medianHomePrice: 335000,
    medianMonthlyRent: 1700,
    priceToRentRatio: 16.4,
    avgAnnualAppreciation: 3.8,
    propertyTaxRate: 1.28,
    neighborhoodContext:
      'Minneapolis and its Twin Cities counterpart Saint Paul offer a broad range of neighborhoods and suburbs. Linden Hills, Lowry Hill, and Kenwood are premium; north Minneapolis is more affordable.',
    blufVerdict:
      'Minneapolis is a balanced buy-side market. Moderate ratio and mid-range property taxes mean break-even typically sits at 4-5 years for stable households.',
    keyFacts: [
      'Multiple Fortune 500 headquarters (Target, UnitedHealth, 3M, US Bank) anchor employment.',
      'Minnesota has a progressive state income tax topping at 9.85%.',
      'Winter maintenance costs are meaningful (heating, roof ice dams, snow removal).',
      'The Twin Cities has one of the deeper walkable urban cores in the Midwest.',
    ],
    faqItems: [
      {
        question: 'Does Minnesota\'s high income tax affect buying decisions?',
        answer:
          'Yes. The 9.85% top rate reduces after-tax income and thus affordability. Homeowners at Minnesota\'s top bracket derive more value from mortgage interest deductibility than in low-tax states.',
      },
      {
        question: 'Should I buy in Minneapolis or a Twin Cities suburb?',
        answer:
          'Suburbs like Edina, Minnetonka, and Eden Prairie carry school premiums but often similar effective tax rates. Urban Minneapolis neighborhoods offer more diverse housing at generally lower per-foot prices.',
      },
    ],
  },
  {
    slug: 'tulsa',
    name: 'Tulsa',
    stateSlug: 'oklahoma',
    stateName: 'Oklahoma',
    medianHomePrice: 200000,
    medianMonthlyRent: 1150,
    priceToRentRatio: 14.5,
    avgAnnualAppreciation: 3.2,
    propertyTaxRate: 0.95,
    neighborhoodContext:
      'Tulsa is Oklahoma\'s second-largest city, anchored by energy, aerospace, and healthcare. Midtown and South Tulsa are premium; Tulsa\'s revitalized downtown and Brady Arts district have attracted younger buyers.',
    blufVerdict:
      'Tulsa is a clear buyer market. Low prices, a sub-15 ratio, and moderate taxes mean break-even is often under 3 years.',
    keyFacts: [
      'The Tulsa Remote program has attracted remote workers with $10,000 grants.',
      'Oklahoma property taxes are below the national average.',
      'Tornado insurance adds to annual premiums.',
      'Energy sector cycles affect the local economy.',
    ],
    faqItems: [
      {
        question: 'What is Tulsa Remote and does it affect the market?',
        answer:
          'Tulsa Remote pays $10,000 to eligible remote workers who relocate to Tulsa. It has driven modest inflows of tech workers, supporting demand in Midtown and downtown condo stock.',
      },
      {
        question: 'Is Tulsa\'s affordable pricing a long-term opportunity?',
        answer:
          'Tulsa has had stable but modest appreciation. Buy for cash-flow savings and lifestyle; do not expect Sunbelt-level capital gains.',
      },
    ],
  },
  {
    slug: 'arlington',
    name: 'Arlington',
    stateSlug: 'texas',
    stateName: 'Texas',
    medianHomePrice: 320000,
    medianMonthlyRent: 1550,
    priceToRentRatio: 17.2,
    avgAnnualAppreciation: 4.2,
    propertyTaxRate: 1.95,
    neighborhoodContext:
      'Arlington sits between Dallas and Fort Worth, home to the Cowboys, Rangers, and UT Arlington. It offers a middle ground on pricing relative to both DFW anchors.',
    blufVerdict:
      'Arlington is one of DFW\'s better buyer markets. Moderate prices and a sub-18 ratio mean 4-year break-even, but Tarrant County property taxes are meaningful.',
    keyFacts: [
      'Arlington serves both Dallas and Fort Worth employers with reasonable commutes.',
      'Texas property tax is high and must be modeled carefully.',
      'Professional sports venues anchor a significant entertainment district.',
      'UT Arlington adds student rental demand in adjacent ZIPs.',
    ],
    faqItems: [
      {
        question: 'Is Arlington a good commuter-city buy in DFW?',
        answer:
          'Yes. Its central location lets households access jobs in both Dallas and Fort Worth without committing to one side. For two-income households where partners work on opposite sides, it is often the optimal choice.',
      },
      {
        question: 'How do Arlington property taxes compare?',
        answer:
          'Tarrant County effective rates run around 1.95%. On a $320k home that is $6,240/year — material relative to other no-income-tax metros with lower property taxes.',
      },
    ],
  },
  {
    slug: 'new-orleans',
    name: 'New Orleans',
    stateSlug: 'louisiana',
    stateName: 'Louisiana',
    medianHomePrice: 295000,
    medianMonthlyRent: 1550,
    priceToRentRatio: 15.9,
    avgAnnualAppreciation: 3.0,
    propertyTaxRate: 0.55,
    neighborhoodContext:
      'New Orleans has a distinctive housing market with historic properties, variable flood exposure, and neighborhood pricing that swings widely. The French Quarter, Uptown, and Garden District command premiums.',
    blufVerdict:
      'New Orleans has a favorable price-to-rent ratio and low property taxes, but insurance and flood exposure are decisive variables. Buying favors informed long-tenure owners.',
    keyFacts: [
      'Homeowners insurance has risen dramatically post-2020 storm cycles.',
      'Flood insurance is frequently required and costly.',
      'Orleans Parish property taxes are low by national standards.',
      'Historic district rules constrain renovation options.',
    ],
    faqItems: [
      {
        question: 'Is insurance the biggest cost concern in New Orleans?',
        answer:
          'Yes. Homeowners insurance premiums have risen 50-100% in many ZIPs in recent years, and flood insurance adds thousands annually in mapped flood zones. This has become the single largest variable for New Orleans buyers.',
      },
      {
        question: 'How do historic district rules affect ownership?',
        answer:
          'Properties in designated historic districts (French Quarter, Garden District, others) face restrictions on exterior modifications, paint color, and windows. Renovation costs and timelines are typically higher than for non-historic homes.',
      },
    ],
  },
  {
    slug: 'wichita',
    name: 'Wichita',
    stateSlug: 'kansas',
    stateName: 'Kansas',
    medianHomePrice: 175000,
    medianMonthlyRent: 1050,
    priceToRentRatio: 13.9,
    avgAnnualAppreciation: 3.1,
    propertyTaxRate: 1.40,
    neighborhoodContext:
      'Wichita is the largest city in Kansas, anchored by aerospace manufacturing (Spirit AeroSystems, Textron). East and Northeast Wichita are premium; the east-side suburbs of Andover and Derby are rising.',
    blufVerdict:
      'Wichita is one of the more affordable top-50 U.S. cities. Sub-14 ratio and modest taxes mean buying is favorable within 3 years.',
    keyFacts: [
      'Aerospace manufacturing is the metro\'s economic anchor.',
      'Kansas property taxes are moderate.',
      'Tornado-prone climate affects insurance underwriting.',
      'Entry-level inventory below $175k is broadly available.',
    ],
    faqItems: [
      {
        question: 'Is Wichita dependent on aerospace employment?',
        answer:
          'Yes. Boeing, Spirit AeroSystems, Textron, and related suppliers employ a large share of the metro workforce. Aerospace cycles influence local demand, so buyers with non-aerospace jobs have the most stability.',
      },
      {
        question: 'What should I know about tornado risk and home insurance?',
        answer:
          'Wichita sits in Tornado Alley. Wind/hail coverage is material in any comprehensive policy and typically adds 20-30% to premiums vs low-risk metros.',
      },
    ],
  },
  {
    slug: 'cleveland',
    name: 'Cleveland',
    stateSlug: 'ohio',
    stateName: 'Ohio',
    medianHomePrice: 120000,
    medianMonthlyRent: 1150,
    priceToRentRatio: 8.7,
    avgAnnualAppreciation: 3.2,
    propertyTaxRate: 2.28,
    neighborhoodContext:
      'Cleveland has one of the lowest median home prices among top-50 U.S. cities. Neighborhood variation is enormous — from premium Tremont and Ohio City to distressed East Side ZIPs.',
    blufVerdict:
      'Cleveland has an extremely low price-to-rent ratio, but high property taxes and older housing stock mean the monthly cost is closer to peer cities than sticker prices suggest. Due diligence matters.',
    keyFacts: [
      'Cuyahoga County effective property tax rate is among the highest in Ohio.',
      'Cleveland Clinic anchors a strong healthcare employment base.',
      'Housing stock is typically 60-100+ years old.',
      'Lakefront neighborhoods have seen meaningful investment.',
    ],
    faqItems: [
      {
        question: 'Why is Cleveland so much cheaper than other major cities?',
        answer:
          'Decades of industrial decline and population loss produced a large housing oversupply relative to current demand. The result: low sticker prices, but high per-dollar property tax and real maintenance needs.',
      },
      {
        question: 'How does the high Cleveland property tax affect buy math?',
        answer:
          'At 2.28% effective, tax on a $150k home is $3,420/year — over $285/month. That pushes the monthly cost of ownership closer to peer cities with higher sticker prices, narrowing the apparent affordability gap.',
      },
    ],
  },
  {
    slug: 'tampa',
    name: 'Tampa',
    stateSlug: 'florida',
    stateName: 'Florida',
    medianHomePrice: 405000,
    medianMonthlyRent: 1850,
    priceToRentRatio: 18.2,
    avgAnnualAppreciation: 5.6,
    propertyTaxRate: 0.92,
    neighborhoodContext:
      'Tampa has boomed with corporate relocations, retirees, and remote workers. Hyde Park and South Tampa are premium; Seminole Heights and East Tampa offer more accessible entries.',
    blufVerdict:
      'Tampa is a steady buyer market. Moderate ratio, Florida\'s no-income-tax environment, and the homestead exemption support buying for 4+ year stays — insurance is the key variable.',
    keyFacts: [
      'Florida has no state income tax.',
      'Homestead exemption caps annual tax assessment growth at 3% for primary residences.',
      'Hillsborough County property taxes are moderate.',
      'Homeowners insurance has risen sharply post-hurricane cycles.',
    ],
    faqItems: [
      {
        question: 'Is Tampa still a hot market after the 2020-2022 surge?',
        answer:
          'Price growth has cooled substantially from 2022 peaks, with moderate declines in some submarkets and flat growth elsewhere. Long-term demand drivers (in-migration, business climate) remain intact.',
      },
      {
        question: 'How is Tampa insurance priced vs. other FL metros?',
        answer:
          'Tampa insurance is typically lower than Miami or the Keys but higher than inland Florida. Elevation, wind zone, and property age drive the most variation. Budget 1.5-3x the national average for homeowners premium.',
      },
    ],
  },
];

export function getCityBySlug(
  stateSlug: string,
  citySlug: string
): CityConfig | undefined {
  return cities.find(
    (c) => c.stateSlug === stateSlug && c.slug === citySlug
  );
}

export function getCitiesByState(stateSlug: string): CityConfig[] {
  return cities.filter((c) => c.stateSlug === stateSlug);
}

export function getAllCitySlugs(): { state: string; city: string }[] {
  return cities.map((c) => ({ state: c.stateSlug, city: c.slug }));
}
