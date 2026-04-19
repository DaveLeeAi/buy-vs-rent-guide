import { FaqClusterData } from './pageTypes';

const mk = (
  slug: string,
  title: string,
  intro: string,
  topicsInput: { heading: string; items: [string, string][] }[],
  desc: string
): FaqClusterData => ({
  slug,
  title,
  intro,
  topics: topicsInput.map((t) => ({
    heading: t.heading,
    items: t.items.map(([question, answer]) => ({ question, answer })),
  })),
  meta: { title: `${title} | Buy vs. Rent FAQ`, description: desc },
});

export const faqClusters: FaqClusterData[] = [
  mk('buy-vs-rent-faq', 'Buy vs. Rent FAQ',
    'Core questions buyers and renters ask when deciding between homeownership and renting. Read decision basics, finance fundamentals, and common edge cases.',
    [
      {
        heading: 'Decision basics',
        items: [
          ['Is it always better to buy?', 'No. Buying tends to beat renting for households with stable income and a 5+ year horizon in markets with a price-to-rent ratio under about 20. In high-ratio coastal and supply-constrained metros, renting can remain cheaper on a total-cost basis for a decade or more.'],
          ['Does renting mean throwing money away?', 'No. Rent pays for housing, flexibility, and the landlord\'s risk — all real services. Owners pay property tax, interest, maintenance, insurance, and opportunity cost on their down payment, most of which also build no equity.'],
          ['How long do I need to plan to stay to justify buying?', 'Typically 4-7 years to cross break-even, though coastal metros often require 8-12. Transaction costs (2-3% buying, 5-7% selling) mean short stays usually favor renting.'],
          ['What if I don\'t know how long I\'ll stay?', 'Default to renting. Unknown tenure is one of the strongest cases for keeping flexibility. Revisit the decision once you have 3+ years of clarity.'],
        ],
      },
      {
        heading: 'Finance questions',
        items: [
          ['What if rates drop after I buy?', 'You can refinance. Typical refi closing costs are 2-3% of the loan. The common rule is that a 0.75-1% rate reduction with a 3-5 year remaining horizon justifies refinancing.'],
          ['Can I buy with 5% down?', 'Yes. Conventional, FHA, and VA loans allow low down payments, but PMI applies on conventional loans below 20% down. PMI typically runs 0.3-1.5% of the loan annually.'],
          ['Should I wait for prices to drop?', 'Timing markets is hard. What matters more is your local ratio, rate, and tenure — not whether national prices dip 5% next year. Run the calculator with conservative assumptions before waiting.'],
          ['What if I have other debts?', 'High-interest debt (credit cards, personal loans) typically beats the math on buying. Pay those down first, then reconsider.'],
        ],
      },
      {
        heading: 'Edge cases',
        items: [
          ['What if my partner and I disagree?', 'The financial math is only one input. If one partner strongly prefers stability or flexibility, that is a real input, not a side issue.'],
          ['Does marriage change the math?', 'Dual-income households have more stability and can usually handle ownership risk earlier. Single-income households need a larger reserve buffer.'],
        ],
      },
    ],
    'Buy vs. rent FAQ: the full set of decision, finance, and edge-case questions.'
  ),
  mk('mortgage-rate-faq', 'Mortgage rate FAQ',
    'How mortgage rates are set, what actually moves them, and how to get the best terms when you shop. Practical answers with concrete numbers.',
    [
      {
        heading: 'How rates work',
        items: [
          ['What drives mortgage rates?', 'Primarily the 10-year Treasury yield plus a lender spread (typically 1.5-2.5 percentage points). The spread widens when markets are stressed and narrows when they are calm.'],
          ['Why are mortgage rates higher than the Fed Funds rate?', 'Mortgages are long-dated assets priced off long-term rates, not overnight rates. Changes in Fed policy affect mortgages only through their signal about the long end of the curve.'],
          ['Are points worth buying?', 'Each point typically costs 1% of the loan and reduces rate by ~0.25%. Break-even is usually 5-7 years. If you will stay longer, points often pencil.'],
          ['What is an APR vs a rate?', 'The rate is the interest on the loan. APR includes rate plus certain fees amortized over the loan term. For a direct lender comparison, APR is the better metric.'],
        ],
      },
      {
        heading: 'Shopping lenders',
        items: [
          ['Does shopping hurt my credit?', 'Multiple mortgage inquiries within a 14-45 day window count as one hard inquiry under FICO models. Shop aggressively within that window.'],
          ['What is the Loan Estimate?', 'A standardized 3-page form that lists rate, fees, monthly payment, and cash-to-close. Lenders must issue it within 3 business days of your application.'],
          ['How many lenders should I shop?', 'At least 3-5. Studies show typical savings of 0.25-0.5% on rate and hundreds to thousands on fees.'],
          ['Is a broker better than a bank?', 'Sometimes. Brokers can often access better rates for borrowers with non-standard situations (self-employed, thin credit file). Banks may win for vanilla borrowers.'],
        ],
      },
      {
        heading: 'Rate strategy',
        items: [
          ['Fixed or ARM?', 'For most buyers with 5+ year horizons, fixed is safer. ARMs can win for buyers confident about short ownership or expecting significant rate drops.'],
          ['Should I lock my rate?', 'Once you have a signed contract and a closing date, a lock protects you from rate moves. Locks typically run 30-60 days.'],
          ['What if rates drop after my lock?', 'Some lenders offer a one-time float-down for a fee. Ask before locking.'],
        ],
      },
    ],
    'Mortgage rate FAQ: drivers, shopping, and strategy explained.'
  ),
  mk('down-payment-faq', 'Down payment FAQ',
    'How much to put down, what programs allow, and when a smaller down payment is smarter than you think.',
    [
      {
        heading: 'Sizing it right',
        items: [
          ['Is 20% required?', 'No. Conventional loans allow 3-5% down with PMI; FHA allows 3.5% down; VA and USDA allow 0% for eligible buyers.'],
          ['Is 20% always smarter if I can afford it?', 'Not always. If the invested difference could earn 6-8% annually versus 3-5% saved on PMI, the smaller down payment can be rational for long-tenure buyers.'],
          ['Should I drain my emergency fund?', 'No. Keep 3-6 months of expenses liquid. Lenders will scrutinize reserves anyway.'],
          ['Can I use gift money?', 'Yes. Most conventional loans allow gifts from family with a gift letter. Document the source clearly.'],
        ],
      },
      {
        heading: 'Sources and programs',
        items: [
          ['Can I use retirement funds?', 'First-time buyers can withdraw up to $10,000 from an IRA penalty-free (taxes still apply). 401(k) loans are possible but come with job-change risk.'],
          ['What are down payment assistance programs?', 'State and local programs offering grants or soft second loans, often tied to income or first-time buyer status. Many cover 3-10% of purchase price.'],
          ['Are assistance programs worth it?', 'Yes for qualified buyers who would otherwise rent. Read fine print on equity recapture and occupancy requirements.'],
        ],
      },
      {
        heading: 'Timing and math',
        items: [
          ['How long should I save?', 'Most buyers benefit from saving until they have 5-10% down plus closing plus 3-6 months reserves. Beyond that, opportunity cost grows.'],
          ['Does a bigger down payment lower my rate?', 'Modestly. The biggest cliff is at 20% (no PMI). Within programs, the difference between 5% and 10% down is usually small.'],
          ['Should I put the down payment in cash or wait for a rate drop?', 'If you have a clear 5+ year plan and solid local fundamentals, buying now and refinancing later often beats waiting.'],
        ],
      },
    ],
    'Down payment FAQ: sizing, sources, programs, and timing answered.'
  ),
  mk('property-tax-faq', 'Property tax FAQ',
    'How property tax works, how assessments are made, how to appeal them, and what exemptions might reduce your bill.',
    [
      {
        heading: 'Assessment basics',
        items: [
          ['How is my home assessed?', 'County or municipal assessors estimate market value using comparable recent sales. Your assessed value may differ from market value depending on jurisdiction rules.'],
          ['How is my tax bill calculated?', 'Assessed value × total mill rate (city + county + schools + special districts) = annual tax. Effective rate is tax / market value.'],
          ['Why is my bill different from my neighbor\'s?', 'Assessment date differences, homestead exemptions, and senior or veteran discounts can create large neighbor-to-neighbor gaps.'],
          ['How often does my assessment change?', 'Varies: annually in many states, on a 3-5 year cycle in others, or only on sale in California (Prop 13).'],
        ],
      },
      {
        heading: 'Appeals and exemptions',
        items: [
          ['Can I appeal?', 'Yes. Most jurisdictions allow annual appeals. Success rates vary from 30-60% when backed by comparable-sales evidence.'],
          ['What is a homestead exemption?', 'A primary-residence discount that reduces taxable value. Details vary by state; some also cap annual assessment growth.'],
          ['Do seniors get special treatment?', 'Many states offer senior freezes or discounts starting at age 62-65. Income limits may apply.'],
          ['Are veterans eligible for exemptions?', 'Yes in most states, with rules ranging from flat reductions to full exemption for disabled veterans.'],
        ],
      },
      {
        heading: 'Planning and surprises',
        items: [
          ['Can taxes go up after I buy?', 'Yes. In many states, your assessment resets to sale price, which can sharply increase the bill. Model the post-sale bill, not the seller\'s bill.'],
          ['What are special assessments?', 'One-time or multi-year charges for specific infrastructure (sewer, road, school bond). Ask for a history before buying.'],
          ['Do property taxes rise with appreciation?', 'Yes in most states. Cap states (California, New York, some others) limit annual increases for primary residences.'],
        ],
      },
    ],
    'Property tax FAQ: assessments, appeals, exemptions, and surprises answered.'
  ),
  mk('hoa-faq', 'HOA FAQ',
    'Homeowners associations: fees, rules, risk, and what to investigate before buying in an HOA-governed community.',
    [
      {
        heading: 'HOA basics',
        items: [
          ['Is HOA membership mandatory?', 'In HOA-governed communities, yes. Membership comes with the property and cannot be opted out of.'],
          ['What do HOA fees cover?', 'Common areas, exterior maintenance (in condos and townhomes), amenities, management, and reserves for future capital needs.'],
          ['What are special assessments?', 'One-time charges to cover major repairs or underfunded reserves. They can range from hundreds to tens of thousands of dollars.'],
          ['Can HOA fees increase?', 'Yes. Increases are typical; multi-percent annual growth is common. Read minutes for recent increases and upcoming capital projects.'],
        ],
      },
      {
        heading: 'Due diligence',
        items: [
          ['What documents should I review?', 'CC&Rs, bylaws, 2 years of minutes, current budget, reserve study, current financials, and insurance policy. Your lender will require many of these.'],
          ['What is a reserve study?', 'A professional assessment of future capital needs. Percent funded is the key metric — below 70% signals likely special assessments.'],
          ['Are HOA financials public to buyers?', 'Sellers must typically disclose in most states. Many HOAs provide a resale certificate with financials, rules, and pending litigation.'],
          ['What about pending litigation?', 'A major red flag. Lenders may decline loans in associations with certain active lawsuits.'],
        ],
      },
      {
        heading: 'Rules and risk',
        items: [
          ['Can an HOA restrict rentals?', 'Yes. Many HOAs cap the share of rental units, require minimum lease lengths, or ban short-term rentals.'],
          ['Can an HOA foreclose?', 'Yes in most states for unpaid fees. The threshold is typically low — a few months of missed dues can start the process.'],
          ['How do I evaluate HOA risk before buying?', 'Combine the reserve study, minutes (last 24 months), budget trend, and legal status. Low-funded reserves plus rising dues plus open litigation = caution.'],
        ],
      },
    ],
    'HOA FAQ: fees, due diligence, rules, and risk explained.'
  ),
  mk('maintenance-faq', 'Home maintenance FAQ',
    'What maintenance really costs, how to budget for it, and how to avoid surprise repair bills as a homeowner.',
    [
      {
        heading: 'Budgeting basics',
        items: [
          ['What should I budget for maintenance?', 'A common rule is 1-2% of home value annually. Older homes and harsher climates push toward 2%; newer homes may be closer to 1%.'],
          ['Is maintenance the same everywhere?', 'No. Cold climates add heating, ice dam, and roof wear. Hot/humid climates add HVAC, mold, and pest load. Coastal climates add corrosion. Dry areas add UV and fire prep.'],
          ['How do I build a maintenance reserve?', 'Set aside 1/12 of your annual maintenance budget monthly into a dedicated account. Replenish after each project.'],
          ['What is the most expensive recurring maintenance?', 'Roof replacement ($10-30k every 20-30 years), HVAC replacement ($5-15k every 15-20 years), and exterior paint ($5-15k every 7-10 years) are the big rotating items.'],
        ],
      },
      {
        heading: 'Planning and inspection',
        items: [
          ['What should I expect after the first year of ownership?', 'Even with a clean inspection, expect $2-5k of first-year work on a typical home: minor plumbing, small electrical fixes, paint touch-ups, landscaping.'],
          ['How often should I service major systems?', 'HVAC twice yearly, water heater flushing annually, chimney inspection annually, roof check every 2 years, gutters twice yearly.'],
          ['When is a pre-sale inspection worth it?', 'For older homes (30+ years) or homes with visible wear. A $400-700 inspection can prevent $5-50k of surprise issues.'],
        ],
      },
      {
        heading: 'Common mistakes',
        items: [
          ['Can I defer maintenance?', 'Short-term yes, but deferred work compounds. A $200 gutter cleaning delayed for 3 years can turn into $5k of water damage.'],
          ['Do HOAs replace maintenance budgeting?', 'Only for exterior and common areas in condos and some townhomes. Interior maintenance is still your responsibility.'],
          ['What do I save by renting?', 'Renters do not pay directly for maintenance, though landlords price it into rent. Renters trade cost certainty for higher total cost.'],
        ],
      },
    ],
    'Home maintenance FAQ: real costs, budgeting, and planning answered.'
  ),
  mk('closing-cost-faq', 'Closing cost FAQ',
    'What closing costs actually include, how to reduce them, and what first-time buyers typically miss.',
    [
      {
        heading: 'Cost components',
        items: [
          ['What are the biggest closing cost line items?', 'Title insurance (lender and owner policies), loan origination, prepaid property taxes, prepaid insurance, escrow setup, and recording fees. Transfer taxes apply in many states.'],
          ['What is title insurance?', 'Protection against defects in title — unpaid liens, forged documents, inheritance disputes. Two policies: lender (required) and owner (optional but recommended).'],
          ['What is escrow setup?', 'An account the lender holds to pay your future property taxes and insurance. Setup typically requires 2-6 months of prepayments.'],
          ['Why are taxes prepaid at closing?', 'The seller owes taxes up to the closing date; the buyer owes from closing forward. The buyer also prepays to seed the escrow account.'],
        ],
      },
      {
        heading: 'Reducing costs',
        items: [
          ['Can the seller pay closing costs?', 'Yes — often negotiated as seller concessions. Conventional loans cap concessions based on down payment; FHA and VA have their own rules.'],
          ['Are lender credits worth it?', 'Lenders will sometimes offer a higher rate in exchange for credits that cover closing costs. Math depends on how long you keep the loan.'],
          ['Can I shop title insurance?', 'Yes in most states. Comparing 2-3 title companies can save 20-40% on title fees.'],
          ['Are origination fees negotiable?', 'Sometimes, especially when comparing multiple lenders. Ask directly for a flat or reduced origination.'],
        ],
      },
      {
        heading: 'What buyers miss',
        items: [
          ['What is the typical total?', 'Typically 2-5% of purchase price, but transfer tax states (New York, Illinois) can push higher. Get an itemized Loan Estimate early.'],
          ['What is not in closing costs?', 'Moving costs, utility setup, immediate repairs, new furniture, and first-mortgage payments. Budget separately.'],
        ],
      },
    ],
    'Closing cost FAQ: line items, reductions, and what buyers commonly miss.'
  ),
  mk('relocation-faq', 'Relocation FAQ',
    'Common questions about moving to a new city and deciding whether to rent first or buy immediately.',
    [
      {
        heading: 'Timing the move',
        items: [
          ['Should I buy before I move?', 'Usually no. Renting 6-12 months first gives you time to learn the neighborhoods, schools, and commutes without committing.'],
          ['What if my employer pays relocation costs?', 'Use that benefit for your initial rental. Buying during a relocation window is high-risk if you might leave the company within 2 years.'],
          ['What if my commute is unknown?', 'Rent first. Commute fatigue is a leading cause of regret on rushed relocations.'],
          ['Is it smart to buy in the same neighborhood I rent in first?', 'Often yes. You gain conviction on the area and often have relationships with local agents.'],
        ],
      },
      {
        heading: 'Financial considerations',
        items: [
          ['Will I qualify for a mortgage right after moving?', 'Yes if employed, but lenders often require a full pay stub cycle plus verification. Self-employed movers may need 1-2 years of local tax returns.'],
          ['What if my new job has a probation period?', 'Lenders can still qualify you, but rate and approval may be tighter. Renting through probation is common.'],
          ['How do I compare cost of living between two metros?', 'Don\'t just compare home prices — compare state income tax, property tax, insurance, and commute costs too. A "cheaper" metro sometimes nets similar total cost.'],
        ],
      },
      {
        heading: 'Practical moves',
        items: [
          ['How long should my first lease be?', '12 months typically. Month-to-month premiums are usually 20-40%. Some buyers take a 6-month lease to keep options open.'],
          ['Should I buy sight unseen?', 'Rarely recommended. If you must, add inspection contingencies and a larger repair reserve.'],
          ['What about remote work relocation?', 'Verify your employer\'s long-term remote policy before buying. Forced return-to-office can strand a recent home purchase.'],
        ],
      },
    ],
    'Relocation FAQ: timing, financial planning, and practical moves answered.'
  ),
  mk('first-time-buyer-faq', 'First-time buyer FAQ',
    'Concrete answers to the questions first-time buyers most often ask — saving, credit, programs, and what actually happens during the purchase.',
    [
      {
        heading: 'Getting started',
        items: [
          ['How much do I need to save?', 'Down payment (3-20%) plus 2-5% closing costs plus 3-6 months of expenses in reserve. For a $300k home, that is roughly $20-40k depending on down payment size.'],
          ['What credit score do I need?', 'FHA accepts 580 (or 500 with 10% down). Conventional typically starts at 620. The best rates require 740+.'],
          ['How long does the process take?', 'Pre-approval: 1-3 days. Shopping: weeks to months. Contract to close: 30-45 days typically.'],
          ['What is pre-approval?', 'A lender review of your income, credit, and assets producing a conditional loan commitment up to a specific amount. Strong pre-approval is effectively required in competitive markets.'],
        ],
      },
      {
        heading: 'Programs and help',
        items: [
          ['What first-time programs exist?', 'FHA (3.5% down, flexible credit), Fannie HomeReady / Freddie Home Possible (3% down), VA (0% down for eligible veterans), USDA (0% down rural), and state/local down-payment assistance.'],
          ['Am I a first-time buyer if I bought years ago?', 'Most programs define first-time as no ownership in the past 3 years. Check each program\'s exact definition.'],
          ['Is buyer counseling required?', 'For many assistance programs and some loan types. HUD-approved counseling is free and genuinely useful.'],
        ],
      },
      {
        heading: 'What actually happens',
        items: [
          ['What happens at closing?', 'You sign 50-100 pages of loan and title documents, wire the cash to close, and receive the keys. Most closings take 60-90 minutes.'],
          ['What surprises should I expect?', 'Post-closing: property tax reassessment, higher utility bills than expected, minor repairs, and the first few mortgage payments feeling bigger than expected.'],
          ['Should I waive contingencies to compete?', 'Usually no for first-time buyers. Inspection and financing contingencies protect against large losses.'],
        ],
      },
    ],
    'First-time buyer FAQ: saving, credit, programs, and the purchase process answered.'
  ),
  mk('break-even-faq', 'Break-even FAQ',
    'How the break-even point between buying and renting is calculated, what moves it, and how to use it in your decision.',
    [
      {
        heading: 'What break-even means',
        items: [
          ['What is the break-even year?', 'The year in which your cumulative cost of buying (mortgage, tax, insurance, maintenance, opportunity cost) equals your cumulative cost of renting (rent, renter\'s insurance, annual increases).'],
          ['Why is break-even so important?', 'Because almost all transaction costs of buying (closing and selling) are paid in year 0 or year N. If you leave before break-even, renters usually win.'],
          ['Is break-even the same as when my equity equals rent paid?', 'No. Break-even includes opportunity cost on your down payment and maintenance. Pure equity-vs-rent comparisons overstate the buy case.'],
        ],
      },
      {
        heading: 'What moves break-even',
        items: [
          ['How does the price-to-rent ratio affect break-even?', 'Directly. Ratios under 15 often produce 3-4 year break-even; ratios above 22 often push break-even to 8-10+ years.'],
          ['How does rate affect break-even?', 'Significantly. A 1% rate change can shift break-even by 1-2 years in most markets.'],
          ['How does appreciation affect break-even?', 'Each 1% of annual appreciation typically shortens break-even by 6-12 months, though assuming high appreciation is risky.'],
          ['Does rent growth matter?', 'Yes. High-rent-growth markets favor buying earlier because the rent side compounds against the renter each year.'],
          ['Does down payment size affect break-even?', 'Modestly. Larger down payments reduce interest and PMI but also increase opportunity cost. Net effect varies with investment returns.'],
        ],
      },
      {
        heading: 'Using break-even',
        items: [
          ['If I plan to stay past break-even, should I always buy?', 'Not always. Consider income stability, non-housing financial goals, local market volatility, and whether you actually want to own.'],
          ['If my horizon is uncertain, what should I assume?', 'Use the shorter end of your plausible range. If you might stay 4-7 years, run the model with 4.'],
          ['Can I trust the break-even number?', 'Use it as directional. The output is only as good as your inputs for rate, appreciation, rent growth, and tenure.'],
        ],
      },
    ],
    'Break-even FAQ: how it is calculated, what moves it, and how to use it.'
  ),
  mk('renting-faq', 'Renting FAQ', 'Questions from renters about leases, rights, rent increases, and when renting is the better financial move.',
    [
      {
        heading: 'Lease basics',
        items: [
          ['Can my rent be raised mid-lease?', 'Usually no, unless the lease specifies escalation. At renewal, landlords can typically propose any increase unless rent control applies.'],
          ['Can I break my lease?', 'Often with a fee or sublet arrangement. Local laws vary; active-duty military have specific protections under the SCRA.'],
          ['What are normal lease lengths?', '12 months is most common. Shorter leases usually carry 10-30% premiums.'],
        ],
      },
      {
        heading: 'Tenant rights',
        items: [
          ['What repairs is my landlord responsible for?', 'Habitability items: plumbing, heat, hot water, major electrical, structural. Cosmetic issues are usually negotiable.'],
          ['Can a landlord enter my unit?', 'Typically only with reasonable notice (often 24 hours) and for specific reasons. Check your state\'s laws.'],
          ['What happens if I\'m late on rent?', 'Grace periods vary by state and lease. Repeated lateness can lead to non-renewal or eviction.'],
        ],
      },
      {
        heading: 'Financial strategy',
        items: [
          ['When is renting actually cheaper long-term?', 'When the local ratio is above 20, your horizon is short, or you can invest the buy-side opportunity cost at strong returns.'],
          ['Should I always negotiate at renewal?', 'Yes. Many renewal increases can be negotiated down, especially in soft markets.'],
          ['Does renter\'s insurance matter?', 'Yes. For $15-25/month it protects your belongings and liability. Most landlords require it.'],
        ],
      },
    ],
    'Renting FAQ: leases, rights, and financial strategy answered.'
  ),
  mk('refinancing-faq', 'Refinancing FAQ', 'When refinancing pencils, how to evaluate offers, and what traps to avoid.',
    [
      {
        heading: 'When to refinance',
        items: [
          ['What rate drop justifies refinancing?', 'Generally 0.75-1% with a 3-5+ year remaining horizon. Divide closing costs by monthly savings to find break-even in months.'],
          ['Is a cash-out refi a good idea?', 'Only for durable-value purposes (debt consolidation at lower rate, significant home improvement). Cash-out for consumption or vacations is usually a trap.'],
          ['What is a rate-and-term refi?', 'Replacing your existing loan with a new one at different rate, term, or both. No cash extracted beyond closing adjustments.'],
        ],
      },
      {
        heading: 'Mechanics',
        items: [
          ['What are typical refinance closing costs?', '2-3% of loan amount, though lender credits can reduce it to near zero in exchange for higher rate.'],
          ['Can I refinance into a shorter term?', 'Yes. Moving from a 30-year to a 15-year often saves significant interest and builds equity faster.'],
          ['Will I need an appraisal?', 'Usually yes, though some streamline programs skip it.'],
        ],
      },
      {
        heading: 'Cautions',
        items: [
          ['Does refinancing reset my amortization?', 'Yes. A new 30-year loan resets the interest-heavy early years. Consider a shorter term if you\'re 5+ years in.'],
          ['Are "no-cost" refis really free?', 'No. Costs are either rolled into the loan balance or compensated via a higher rate.'],
        ],
      },
    ],
    'Refinancing FAQ answered.'
  ),
  mk('insurance-faq', 'Homeowners insurance FAQ', 'Coverage basics, rising premiums, flood and wildfire exposure, and how to shop.',
    [
      {
        heading: 'Coverage',
        items: [
          ['Does insurance cover floods?', 'No. Flood is a separate policy, typically through NFIP or a private carrier. Standard policies exclude flood.'],
          ['Does insurance cover earthquakes?', 'No. Earthquake is a separate policy, relevant mainly on the West Coast and along certain fault zones.'],
          ['How is replacement cost determined?', 'By a cost estimator based on square footage, build quality, materials, and local labor. Update your dwelling coverage every few years.'],
          ['What is an HO-3 policy?', 'The standard homeowner policy covering dwelling, contents, liability, and loss of use. Most U.S. homeowners carry HO-3.'],
        ],
      },
      {
        heading: 'Premiums and markets',
        items: [
          ['Why have premiums risen so fast?', 'Reinsurance costs, climate-related claims, and construction inflation have driven a repricing. Coastal Florida, Louisiana, California, and Colorado have seen the steepest increases.'],
          ['Can I shop insurance like I shop mortgages?', 'Yes. Quotes from 3-5 carriers can save 20-40%. Independent agents can often access carriers direct-to-consumer channels miss.'],
          ['What is a FAIR plan?', 'A state-backed insurer of last resort used where private carriers have pulled back (notably California, Florida). Premiums are high and coverage is often limited.'],
        ],
      },
      {
        heading: 'Risk management',
        items: [
          ['How do I lower my premium?', 'Higher deductibles, bundling auto and home, adding monitored alarms, replacing roofs and wiring, and pruning vegetation near the house.'],
          ['Should I worry about being non-renewed?', 'In high-risk areas, yes. Carriers can non-renew at policy anniversary. Have a plan for alternate carriers ready.'],
        ],
      },
    ],
    'Homeowners insurance FAQ: coverage, premiums, and risk management answered.'
  ),
  mk('credit-score-faq', 'Credit score FAQ', 'How credit scores shape the buy decision — rate pricing, loan program thresholds, and realistic ways to improve a score before applying.',
    [
      { heading: 'Impact on cost', items: [
        ['How much does credit score matter?', 'Substantially. Moving from 680 to 740 can lower your rate by 0.5% or more and reduce or eliminate PMI. Over a 30-year loan, that gap is often $30,000-$70,000 in interest.'],
        ['Why does the rate jump at specific scores?', 'Lenders and mortgage insurers use tiered pricing grids. Common breakpoints are 620, 640, 680, 720, 740, and 760. Crossing a tier matters; gaining 5 points within a tier usually does not.'],
        ['Does credit score affect PMI as much as rate?', 'Yes. PMI pricing is tier-based too. A 720 borrower can pay roughly 40-60% less PMI than a 680 borrower on the same loan.'],
        ['Is the score used for mortgages the same as my consumer score?', 'No. Mortgage lenders use older FICO 2/4/5 models, not FICO 8 or VantageScore. Expect your pulled score to differ from app-based scores by 10-30 points in either direction.'],
      ] },
      { heading: 'Program thresholds', items: [
        ['What is the minimum credit score to buy?', 'FHA: 500 with 10% down or 580 with 3.5% down. Conventional: typically 620. VA: no federal minimum, but most lenders require 580-620. USDA: typically 640+.'],
        ['Can I get a mortgage with a thin file?', 'Sometimes. Manual underwriting (common on FHA and VA) allows alternative credit documentation — rent, utilities, insurance — if you lack traditional tradelines.'],
        ['Do all lenders apply the same minimums?', 'No. Lender overlays add rules on top of program minimums. Shopping 3-5 lenders often surfaces one that accepts a borderline file.'],
      ] },
      { heading: 'Improving your score', items: [
        ['How fast can I improve my score?', '30-90 days for paying down revolving balances; 3-12 months for meaningful changes from disputes and new account age. Hard inquiries fade after ~12 months.'],
        ['What moves the score most?', 'Utilization (amount owed vs limit) and on-time payment history dominate. Keep utilization under 30% — under 10% if you want to maximize your score before applying.'],
        ['Should I close old cards before buying?', 'No. Closing old accounts shortens credit age and raises utilization on remaining cards. Leave them open until after closing.'],
        ['Does mortgage shopping hurt my score?', 'Multiple mortgage inquiries within 14-45 days count as one under FICO mortgage models. Shop aggressively within that window.'],
      ] },
    ],
    'Credit score FAQ: how score tiers, program thresholds, and realistic score improvement shape your rate.'
  ),
  mk('pmi-faq', 'PMI FAQ', 'Private mortgage insurance: when it applies, how it is priced, how to remove it, and the tradeoffs between avoiding it and paying it.',
    [
      { heading: 'PMI basics', items: [
        ['What is PMI?', 'Private mortgage insurance protects the lender, not you, when you put down less than 20% on a conventional loan. It is built into your monthly payment.'],
        ['What does PMI cost?', '0.3-1.5% of loan annually depending on credit score, LTV, and loan program. A 720-score borrower with 5% down often pays 0.6-0.9%.'],
        ['Is PMI the same on FHA loans?', 'No. FHA has its own MIP with an upfront premium (1.75% of loan) and monthly premium. FHA MIP generally cannot be removed without refinancing out of FHA.'],
        ['Does PMI build any equity for me?', 'No. PMI is pure insurance for the lender. Treat it as a premium you pay for low-down-payment access.'],
      ] },
      { heading: 'Removing PMI', items: [
        ['When is PMI removed automatically?', 'Automatically at 78% LTV based on original amortization for conventional loans, as long as you are current on payments.'],
        ['Can I request early removal?', 'Yes, at 80% LTV with a good payment history. The lender will usually require a current appraisal (buyer-paid, $400-600).'],
        ['Can appreciation trigger PMI removal?', 'Yes. If your home value has risen enough to push LTV under 80%, you can request removal via a new appraisal, often earlier than the original schedule.'],
        ['Can PMI be refinanced away?', 'Yes once you have 20% equity. Compare refinance closing costs against remaining PMI to decide if it pencils.'],
      ] },
      { heading: 'Alternatives and tradeoffs', items: [
        ['Is there a way to avoid PMI with low down payment?', 'Lender-paid PMI (higher rate), piggyback loans (80/10/10), and VA/USDA loans all avoid traditional monthly PMI.'],
        ['Is avoiding PMI always smart?', 'Not always. Saving longer to hit 20% can mean years of lost appreciation in rising markets. Model buying sooner with PMI vs buying later without.'],
        ['Is lender-paid PMI a good deal?', 'Usually not for long-tenure owners — the higher rate outlasts the PMI would have. It can win for short-tenure buyers who refinance or sell within 4-5 years.'],
      ] },
    ],
    'PMI FAQ: costs, removal, and smart alternatives.'
  ),
  mk('condo-faq', 'Condo FAQ', 'What to know before buying a condominium: appreciation, HOA risk, warrantability, and the due-diligence steps most buyers skip.',
    [
      { heading: 'Condo basics', items: [
        ['How is a condo different from a house?', 'You own the interior of your unit and share ownership of common elements (roof, lobby, hallways). The HOA governs shared elements and collects dues to maintain them.'],
        ['Do condos appreciate like houses?', 'Generally slower, with higher HOA fee risk. Urban condos in strong markets can match houses; suburban condos rarely do.'],
        ['Why are condo mortgage rates often higher?', 'Lenders treat condos as slightly riskier. Expect 0.125-0.25% higher rates, and tighter rules when LTV is over 75%.'],
        ['Do condos have property taxes?', 'Yes, assessed on your unit. HOA dues are separate and not tax-deductible (except the portion sometimes allocable to taxes in co-ops).'],
      ] },
      { heading: 'Warrantability and financing', items: [
        ['What is warrantability?', 'A condo complex that meets Fannie/Freddie standards for financing. Non-warrantable condos have limited lender options and often resell at a discount.'],
        ['What makes a condo non-warrantable?', 'Too many rentals (over 50%), ongoing litigation, one owner holding too many units, high HOA delinquency, or inadequate reserves.'],
        ['Can I still buy a non-warrantable condo?', 'Yes, with portfolio lenders or larger down payments (often 25%+). Expect higher rates and a smaller future buyer pool at resale.'],
      ] },
      { heading: 'Due diligence', items: [
        ['What should I review before buying a condo?', 'HOA financials, reserve study, 24 months of meeting minutes, house rules, master insurance policy, and litigation history.'],
        ['Are condo special assessments common?', 'In older or underfunded buildings, yes. A building with sub-70% reserve funding is at elevated risk of assessments.'],
        ['Should I worry about post-Surfside requirements?', 'Yes, especially in Florida and other coastal states. New structural inspection and reserve-funding rules have triggered large catch-up assessments in older buildings.'],
        ['Can the HOA block me from renting my unit?', 'Often yes. Many HOAs cap the rental share, require minimum lease lengths, or ban short-term rentals outright.'],
      ] },
    ],
    'Condo FAQ: buying a condo without being surprised by HOA risk, warrantability, or assessments.'
  ),
  mk('coop-faq', 'Co-op FAQ', 'Cooperative apartment purchases — how ownership works, why the approval process is heavier, and how to compare a co-op financially to a condo.',
    [
      { heading: 'Co-op basics', items: [
        ['What is a co-op?', 'You buy shares in a corporation that owns the building. You receive a proprietary lease to your unit, not a deed. Most concentrated in NYC, with smaller pockets in DC, Chicago, and parts of New Jersey.'],
        ['What is a maintenance fee?', 'Monthly fee covering building operations, property taxes, and the building\'s underlying mortgage. Part is tax-deductible to each shareholder if attributable to taxes and interest.'],
        ['Are co-ops cheaper than condos?', 'Often yes on purchase price per square foot, but maintenance fees can be higher and financing caps can limit leverage.'],
        ['Do co-ops appreciate?', 'Yes, but typically slower than condos in the same market. Heavy board control and financing restrictions narrow the buyer pool at resale.'],
      ] },
      { heading: 'Board approval', items: [
        ['Why are co-ops harder to buy?', 'Board approval, income requirements, debt-to-income scrutiny, and post-closing liquidity standards. Expect intensive document review — tax returns, bank statements, reference letters.'],
        ['What income multiples do boards want?', 'Common standard: 25-30% of gross income for housing cost, with 1-2 years of post-closing liquidity. Some prewar buildings are stricter.'],
        ['Can a board reject me?', 'Yes, with broad discretion. They do not need to state reasons in most cases. Federal and local fair housing laws still apply.'],
        ['What is a flip tax?', 'A transfer fee paid to the building at sale, typically 1-3% of price. It funds reserves. Confirm whether buyer or seller pays before offering.'],
      ] },
      { heading: 'Financial math', items: [
        ['How does the underlying building mortgage affect me?', 'Your share of it is reflected in maintenance and can be refinanced by the board. Refinancings can create temporary increases or decreases — read recent minutes.'],
        ['Can I sublet my co-op?', 'Usually restricted. Many boards cap subletting at 1-2 years over a decade of ownership, some prohibit it entirely.'],
        ['Is a co-op more like renting or owning financially?', 'Economically closer to owning — you build equity in your shares and deduct your share of interest and taxes — but closer to renting in terms of board control and resale flexibility.'],
      ] },
    ],
    'Co-op FAQ: ownership structure, board approval, and financial math.'
  ),
  mk('investment-property-faq', 'Investment property FAQ', 'Buying property to rent out: yield metrics, financing differences, tax treatment, and where the amateur-investor math usually breaks down.',
    [
      { heading: 'Investor basics', items: [
        ['What is a cap rate?', 'Net operating income (rent minus operating expenses excluding financing) divided by purchase price. A rough yield metric comparing properties.'],
        ['What cap rate is good?', 'Varies by market. 5-8% is common in secondary markets; premium metros often trade at 3-5% on stabilized income. Low caps imply buyer expectations of appreciation.'],
        ['What is the 1% rule?', 'A rough screen: monthly rent should be at least 1% of purchase price. Rarely achievable in high-ratio markets — use it as a filter, not a target.'],
        ['What does "cash-on-cash return" mean?', 'First-year cash flow divided by cash invested (down payment + closing). It reflects your leveraged return, not the property\'s yield.'],
      ] },
      { heading: 'Financing and tax', items: [
        ['Do I need 20% down for an investment property?', 'Typically 20-25%. Investor mortgage rates are 0.5-0.75% higher than primary residence. Some lenders offer 15% down with additional PMI.'],
        ['What tax benefits come with investment property?', 'Depreciation on the structure (27.5 years), expense deductions, and 1031 exchange eligibility. Depreciation recapture applies on sale.'],
        ['Is house-hacking a real strategy?', 'Yes. Buying a 2-4 unit property, living in one, renting the others, qualifies for owner-occupied financing (3.5-5% down) and can build a rental portfolio.'],
      ] },
      { heading: 'Where the math breaks', items: [
        ['What costs do amateur investors miss?', 'Vacancy (5-10%), property management (8-10%), capex reserves (5-10%), turnover costs, and legal/eviction expenses. Pro-forma spreadsheets that skip these overstate cash flow.'],
        ['Is appreciation enough to make a deal work?', 'Risky. Leveraged appreciation can drive huge returns but also large losses. Prefer deals that pencil on cash flow today, with appreciation as upside.'],
        ['Should I manage it myself?', 'Costs less but takes real time. Most investors overestimate their willingness to handle 2am calls, turnover, and legal issues.'],
      ] },
    ],
    'Investment property FAQ: yield metrics, financing, tax treatment, and where amateur math breaks down.'
  ),
  mk('appraisal-faq', 'Appraisal FAQ', 'How the appraisal fits into a home purchase, what to do when values come in low, and how to minimize appraisal risk before you offer.',
    [
      { heading: 'Appraisal basics', items: [
        ['Who pays for the appraisal?', 'The buyer typically, via the lender. $400-800 is common. Some lenders credit the cost at closing in competitive markets.'],
        ['Who does the appraiser work for?', 'The lender — independent of buyer and seller. Direct contact between agents and appraisers is restricted under federal law.'],
        ['How long is an appraisal valid?', 'Usually 120 days for conventional, 180 for FHA. After that, a new or updated report may be needed.'],
        ['What methods do appraisers use?', 'Primarily the sales comparison approach using 3-6 recent comparable sales within a mile. Cost and income approaches play supporting roles.'],
      ] },
      { heading: 'When values come in low', items: [
        ['What if the appraisal comes in low?', 'Options: renegotiate price with seller, increase down payment to cover the gap, contest the appraisal with better comps, or walk via appraisal contingency.'],
        ['Can appraisals be challenged?', 'Yes, with comparable sales evidence — "reconsideration of value." Success rates are modest (20-30%) but real, especially with fresh comps the appraiser missed.'],
        ['Do low appraisals block the sale?', 'Not always. Cash buyers can ignore them; some sellers will reduce price; some buyers bring extra cash. Only contingent financing truly depends on the number.'],
        ['Who is most exposed to low appraisals?', 'Low-down-payment buyers in rising markets. A 3% gap on a 3.5% FHA loan often exceeds available cash reserves.'],
      ] },
      { heading: 'Reducing appraisal risk', items: [
        ['Can I waive the appraisal contingency?', 'Yes in competitive markets, but only with substantial reserves to bridge a low value. Waiving without cash cushion is the most common source of failed closings.'],
        ['Can a seller do a pre-listing appraisal?', 'Yes. A pre-listing appraisal anchors negotiations but does not bind the buyer\'s lender, who will order their own.'],
        ['How do appraisal gaps in offers work?', 'A buyer agrees to cover up to $X over the appraised value. Common in hot markets. Only viable with liquid reserves above down payment.'],
      ] },
    ],
    'Appraisal FAQ: how it works, what to do with a low value, and how to reduce appraisal risk.'
  ),
  mk('inspection-faq', 'Home inspection FAQ', 'What a home inspection does and does not cover, when to pay for specialized inspections, and how to negotiate from the report.',
    [
      { heading: 'Inspection basics', items: [
        ['What does an inspector check?', 'Structure, roof, electrical, plumbing, HVAC, insulation, visible drainage, and safety issues. General inspections are visual and non-invasive, not code-compliant.'],
        ['How much does an inspection cost?', '$400-700 typical for a single-family home; higher for larger homes, multi-units, or specialty inspections.'],
        ['How long does an inspection take?', '2-4 hours for a typical home. Ask to attend — the walkthrough is more valuable than the written report.'],
        ['What does an inspection not cover?', 'Anything behind walls or under floors, pools, septic, pests, mold, radon, sewer lines, and code compliance. These require separate specialists.'],
      ] },
      { heading: 'Specialized inspections', items: [
        ['What specialized inspections should I consider?', 'Radon (in many regions), sewer scope (older homes), pest/termite, mold, pool, chimney, and foundation in high-clay-soil areas.'],
        ['Is a sewer scope worth it?', 'Yes for homes 30+ years old, especially with mature trees. Replacing a main line runs $5-20k and is a common post-close surprise.'],
        ['What about a mold inspection?', 'Only if general inspection shows water staining, musty smell, or known plumbing leaks. Otherwise the cost usually outweighs the value.'],
      ] },
      { heading: 'Using the report', items: [
        ['What do I do with the report?', 'Ask for credits or repairs on major safety/systems issues. Cosmetic items are typically the buyer\'s to address.'],
        ['Should I waive inspection?', 'Rarely — even in competitive markets. An "informational-only" inspection preserves the walkthrough while keeping your offer strong.'],
        ['What counts as a major issue worth negotiating?', 'Active leaks, roof end of life, electrical panel defects, foundation movement, HVAC failure, and environmental hazards. Aim for credits, not seller repairs.'],
        ['Can I walk away after inspection?', 'Yes, if you have an inspection contingency. Retain a copy of the report in case future buyers want it — many sellers disclose prior inspection findings.'],
      ] },
    ],
    'Home inspection FAQ: scope, specialist inspections, and how to negotiate from the report.'
  ),
  mk('rent-control-faq', 'Rent control FAQ', 'How rent control works, where it applies, and what it means for long-tenure renters weighing whether to stay or buy.',
    [
      { heading: 'Rent control basics', items: [
        ['Which cities have rent control?', 'NYC, SF, LA, Berkeley, Oakland, Newark, DC, and several others. Statewide rent-cap laws exist in California and Oregon. Rules vary substantially.'],
        ['How is rent control different from rent stabilization?', 'Rent control caps rent levels (very rare). Rent stabilization caps annual increases — the common form in NYC and California. Most "rent control" in public conversation is really stabilization.'],
        ['Does rent control apply to new buildings?', 'Usually no. Most jurisdictions exempt buildings built after a certain year (often 1978-1995 cutoffs). Single-family rentals are often exempt too.'],
        ['How large are typical increases?', 'Commonly tied to CPI with a floor and ceiling. Real-world caps often land 2-8% annually, versus free-market increases that can spike much higher.'],
      ] },
      { heading: 'Impact on the buy decision', items: [
        ['How does rent control affect the buy-vs-rent decision?', 'For long-tenure tenants in controlled units, rent grows slower than market, widening the rent-wins gap. Leaving a controlled unit is often a significant economic loss.'],
        ['Should I stay in a rent-controlled unit forever?', 'The math often says yes if the gap to market rent is 30%+ and the building is stable. Track building maintenance and ownership changes.'],
        ['What happens if I move within the same city?', 'You lose the controlled rent. New leases reset to market except in a handful of vacancy-control jurisdictions.'],
      ] },
      { heading: 'Protections and risk', items: [
        ['Can a landlord end a rent-controlled tenancy?', 'Only for specific causes (just-cause eviction). Buyouts and owner-move-in rules apply differently by city; some require multi-month relocation payments.'],
        ['What is an Ellis Act eviction?', 'California mechanism allowing landlords to remove all units from the rental market. It imposes long re-rental restrictions and relocation payments but can be used in condo conversions.'],
        ['What is a buyout offer?', 'A landlord offering you cash to vacate a controlled unit. Values vary widely (10-60x monthly rent). Negotiate slowly and consult a tenant attorney.'],
      ] },
    ],
    'Rent control FAQ: mechanics, impact on the buy decision, and tenant protections.'
  ),
  mk('lease-faq', 'Lease FAQ', 'How to read, negotiate, and exit a lease — the clauses that matter, the ones that rarely do, and your rights as a tenant.',
    [
      { heading: 'Lease basics', items: [
        ['What should I look for in a lease?', 'Rent increase clauses, pet rules, subletting, maintenance responsibilities, early-termination fees, and renewal terms. These five clauses drive the majority of future disputes.'],
        ['Can I negotiate rent?', 'Yes, especially at renewal or in soft markets. Request comparable listings to anchor your counter. In-person negotiations succeed more often than email.'],
        ['What is joint and several liability?', 'In most multi-tenant leases, each tenant is individually responsible for the full rent. If a roommate leaves, others can owe the difference unless the lease is restructured.'],
        ['Are verbal modifications to a lease valid?', 'Usually no. Most leases require written changes signed by both parties. Email confirmation is better than text for paper-trail purposes.'],
      ] },
      { heading: 'Deposits and fees', items: [
        ['Is a security deposit refundable?', 'Generally yes, minus documented damages beyond normal wear. Many states require itemized statements within 14-30 days of move-out.'],
        ['Can my landlord charge any fees?', 'State-dependent. Some states cap deposits (1-2 months rent), ban non-refundable move-in fees, or require deposit interest. Read your state law before signing.'],
        ['What counts as "normal wear"?', 'Small scuffs, minor paint wear, carpet traffic patterns. Nail holes, pet damage, broken fixtures, and heavy staining typically are chargeable.'],
        ['Should I document the unit at move-in?', 'Absolutely. Photos and videos with timestamps, sent to the landlord, protect you against disputed deposit deductions.'],
      ] },
      { heading: 'Exiting a lease', items: [
        ['Can I break my lease?', 'Often with a fee or sublet arrangement. Active-duty military have specific protections under the SCRA. Some states allow breakage for health, safety, or domestic-violence reasons.'],
        ['What is the typical early-termination fee?', 'Commonly 1-2 months rent, sometimes forfeiture of the security deposit. Read the clause carefully — some require re-letting effort by the landlord before charging.'],
        ['Can I sublet?', 'Depends on the lease. Many require landlord approval. Some cities (NYC) restrict landlord denial to "reasonable grounds."'],
        ['What if my landlord refuses to renew?', 'Most states allow non-renewal at the end of a lease without cause, unless the property is under rent stabilization or just-cause eviction rules.'],
      ] },
    ],
    'Lease FAQ: reading, negotiating, and exiting a lease with your rights intact.'
  ),
];

export const getFaqCluster = (slug: string) =>
  faqClusters.find((f) => f.slug === slug);
