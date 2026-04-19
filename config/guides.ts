import { GuideData } from './pageTypes';

const mk = (
  slug: string,
  title: string,
  bluf: string,
  tldr: string[],
  sections: [string, string][],
  keyTakeaways: string[],
  faq: [string, string][],
  desc: string
): GuideData => ({
  slug,
  title,
  bluf,
  tldr,
  sections: sections.map(([heading, body]) => ({ heading, body })),
  keyTakeaways,
  faq: faq.map(([question, answer]) => ({ question, answer })),
  meta: { title: `${title} | BuyOrRent Guide`, description: desc },
});

export const guides: GuideData[] = [
  mk('what-price-to-rent-ratio-means', 'What the price-to-rent ratio means',
    'Price-to-rent ratio divides a home\'s price by its annual rent, indicating whether buying or renting tends to be cheaper in a given market.',
    ['Ratio under 15: buying usually wins on total cost.', 'Ratio 15-20: mixed — other factors determine the outcome.', 'Ratio over 20: renting is often cheaper for 7+ year horizons.'],
    [
      ['Definition and calculation', 'The price-to-rent ratio is the median home price in an area divided by the annual rent for a comparable property. For example, a $400,000 home with $1,500 monthly rent has a ratio of 22 ($400,000 ÷ $18,000 annual rent). The ratio is a quick screening signal, not a final answer.'],
      ['How to interpret the number', 'Ratios below 15 typically mean monthly ownership costs are competitive with rent, and buyers reach break-even relatively quickly — often in 3-5 years. Ratios between 15 and 20 are ambiguous; the outcome depends on your time horizon, rate, and local appreciation. Ratios above 20 mean buyers pay a significant premium over renters in the early years, and break-even often stretches to 8-12 years in high-ratio coastal markets.'],
      ['Limitations of the ratio', 'The ratio ignores financing costs, property tax, insurance, maintenance, opportunity cost of the down payment, and rent growth over time. It is useful for comparing markets and setting expectations, but use the full calculator before making any actual decision.'],
    ],
    ['Use ratio as a screening tool, not a final answer.', 'Combine with break-even analysis and local appreciation data.', 'The calculator links below let you apply real numbers to your situation.'],
    [
      ['Where do I get local ratio data?', 'Zillow, Redfin, and the Census Bureau American Community Survey all publish median home prices and rents by metro. Divide median price by (median rent × 12) to compute the local ratio. Our state and city pages pre-compute this for you.'],
      ['Can a high-ratio market still favor buying?', 'Yes — if you have a very long time horizon (12+ years), strong local appreciation, and significant rent growth. The ratio signals difficulty, not impossibility. Use the calculator with your specific assumptions.'],
    ],
    'Learn what price-to-rent ratio means and how to use it in your buy-vs-rent decision.'
  ),
  mk('how-much-house-can-you-afford-vs-rent', 'How much house can you afford vs. rent?',
    'Affordability is not a single number — it depends on your income, savings, debt load, rate, and how much financial risk you can absorb.',
    ['Target 25-30% of net income on all housing costs including taxes and insurance.', 'Cap total debt-to-income (DTI) at 36% including all debt payments.', 'Keep 3-6 months of expenses in reserve after closing — not before.'],
    [
      ['Standard rule-of-thumb tests', 'The 28/36 rule says housing costs should not exceed 28% of gross income, and total debt payments should not exceed 36%. The 25% net income rule is more conservative and applies to take-home pay. These are guidelines, not ceilings — lenders can and do approve higher ratios, but borrowers who stretch often feel stressed within two years of purchase.'],
      ['The rent-equivalent test', 'Compare the full monthly cost of ownership — mortgage principal and interest, property tax, insurance, maintenance, and HOA — against comparable rent in the same area. If ownership costs more than 30-40% above comparable rent, you are likely buying into a high-ratio market where the rent path offers better near-term value.'],
      ['Stress-testing your budget', 'Run the numbers assuming a 20% income reduction or a one-income scenario. If the monthly payment becomes unmanageable, you are overextended. Most financial advisors recommend keeping total housing costs under 35% of gross income even in expensive markets, and maintain at least 6 months of total expenses as a liquid reserve.'],
    ],
    ['Affordability is personal — lender approval is not the same as financial comfort.', 'Stress-test every scenario against income loss before committing.', 'The right payment is the one that leaves room for retirement savings, car payments, and emergencies.'],
    [
      ['Is the 28/36 rule still valid?', 'Yes as a conservative guideline. In practice, many buyers carry 33-40% of gross income on housing, especially in high-cost metros. The rule is a healthy target, not a hard cap — but stretching well beyond it significantly increases financial risk.'],
      ['How much do I need saved before buying?', 'Down payment (3-20%) plus closing costs (2-5%) plus 3-6 months of reserves. On a $400,000 home with 5% down, that is roughly $20,000 down, $10,000-20,000 in closing, and $15,000-30,000 in reserves — a total of $45,000-70,000 before you even think about furnishings.'],
    ],
    'How much house can you afford versus renting, and how to know if you are overextending.'
  ),
  mk('hidden-costs-of-buying', 'Hidden costs of buying a home',
    'Most buyers focus on the mortgage payment and miss the 4-6 other cost streams that make homeownership substantially more expensive than it appears.',
    ['Maintenance: 1-2% of home value annually — more for older homes.', 'Closing costs: 2-5% at purchase, paid mostly at signing.', 'Selling costs: 5-7% of sale price, paid on exit — and often forgotten at purchase.'],
    [
      ['Ongoing ownership costs', 'Beyond the mortgage, owners pay property tax (often 1-2% of purchase price annually), homeowners insurance (0.4-1.5% annually depending on location and risk), and HOA dues if applicable ($100-2,500/month in many communities). These three costs alone frequently add $400-1,500 per month on top of the mortgage payment.'],
      ['Maintenance and capital expenditures', 'The 1% rule (budget 1% of home value for annual maintenance) is a starting point — older homes, harsh climates, and deferred work push this toward 2%. Roofs run $10-30k every 20-30 years. HVAC systems cost $5-15k every 15-20 years. Water heaters fail every 10-15 years at $1-3k. These are not if scenarios; they are when scenarios.'],
      ['Transaction costs at purchase and sale', 'Closing costs at purchase run 2-5% of the purchase price — title insurance, lender origination, prepaid taxes and insurance, and escrow fees. At sale, expect another 5-7% for agent commissions, transfer taxes, preparation costs, and concessions. On a $400,000 home, that is $8,000-20,000 at purchase and $20,000-28,000 at sale — a combined $28,000-48,000 in transaction friction that must be offset by appreciation and equity before you break even.'],
      ['Opportunity cost of the down payment', 'Every dollar in a down payment is not invested elsewhere. A $60,000 down payment invested at 7% annually would grow by $4,200 in year one and compound to over $118,000 in 20 years. This is a real cost of homeownership that the mortgage payment does not show, and the calculator explicitly models it on the renter side.'],
    ],
    ['Budget maintenance, taxes, insurance, and transaction costs before deciding.', 'Selling costs are a major hidden cost that buyers ignore at purchase time.', 'Opportunity cost of the down payment is a legitimate rent-side advantage.'],
    [
      ['Can I skip maintenance?', 'Short-term yes, but deferred maintenance compounds. A $200 gutter cleaning deferred for 3 years can cause $5,000 of water damage. The cost does not disappear — it grows, and it often becomes visible only at the worst moment, like when you need to sell.'],
      ['How do I model all these costs?', 'The calculator includes property tax, insurance, maintenance, and opportunity cost. Closing and selling costs are excluded from the tool (they are hard to model precisely) but should be estimated separately. Add 2-5% at purchase and 5-7% at sale to your break-even estimate.'],
    ],
    'The hidden costs of buying a home: maintenance, transaction costs, taxes, and opportunity cost explained.'
  ),
  mk('hidden-costs-of-renting', 'Hidden costs of renting',
    'Renting has costs beyond the monthly payment — upfront deposits, fees, annual rent increases, and the long-run compounding effect of having no equity.',
    ['Rent typically rises 3-5% per year over time, compounding against you.', 'Broker fees in NYC can reach 12-15% of annual rent, paid upfront.', 'Moving costs add up across years if you relocate frequently.'],
    [
      ['Upfront costs renters often underestimate', 'First and last month\'s rent plus a security deposit (usually one month) means moving into a $2,000/month apartment can require $6,000+ upfront before you unpack. Broker fees are standard in New York City (typically 12-15% of annual rent, paid by the tenant) and common in other tight markets. Application fees, pet deposits, and move-in fees pile on.'],
      ['Annual rent growth and its compounding effect', 'A $2,000/month rent growing at just 3% annually becomes $2,687/month in 10 years and $3,612/month in 20 years. Over 20 years, total rent paid at 3% growth is roughly $644,000 versus $480,000 at 0% growth — a $164,000 difference from a seemingly small growth rate. This compounding effect is why break-even analysis over long horizons often favors buying even in high-ratio markets.'],
      ['Costs renters do not pay — and what that actually means', 'Renters avoid maintenance, major system replacement, and insurance on the structure. These are real savings. However, landlords price most of these costs into rent — you pay them indirectly. Renters also avoid property tax increases, insurance premium spikes (increasingly meaningful in coastal markets), and HOA assessments. This risk transfer is genuinely valuable in volatile markets.'],
    ],
    ['Model rent growth — even modest rates compound significantly over 10-20 years.', 'Upfront costs in competitive rental markets can equal several months of payment.', 'The absence of equity is a real cost — but so is the absence of maintenance risk.'],
    [
      ['Does renter\'s insurance matter?', 'Yes — for $15-25/month it protects your belongings and personal liability. Many landlords require it. The protection is real and inexpensive; skipping it is not a meaningful saving.'],
      ['If renting is cheaper monthly, am I ahead financially?', 'Only if you invest the difference. A renter who saves $400/month versus a comparable buyer, invested at 7% annually, builds significant wealth over 10-20 years. Renters who spend the difference are not ahead.'],
    ],
    'Hidden costs of renting: upfront fees, rent growth, and the long-run compounding math.'
  ),
  mk('when-buying-breaks-even', 'When does buying break even against renting?',
    'Break-even is the year at which the total cost of buying equals the total cost of renting. It typically falls between 4-8 years nationally, but ranges from 3 to 12+ years depending on market and conditions.',
    ['Transaction costs push break-even out — usually at least 3 years before buying covers its own costs.', 'Break-even shortens with faster appreciation, slow rent growth, and low rates.', 'Break-even lengthens with high property tax, high HOA, high rates, and slow appreciation.'],
    [
      ['What the break-even calculation actually measures', 'Break-even compares cumulative total cost of buying (mortgage payments, tax, insurance, maintenance, opportunity cost on the down payment) against cumulative total cost of renting (rent plus insurance, with annual rent increases). It is not simply the year your equity equals rent paid — that comparison ignores the down payment opportunity cost and ongoing maintenance.'],
      ['What drives break-even length most', 'The price-to-rent ratio is the biggest driver. In low-ratio markets (under 15), break-even often arrives in 3-5 years. In mid-ratio markets (15-20), typically 5-7 years. In high-ratio coastal markets (over 22), often 8-12 years or more. Mortgage rate adds roughly 1-2 years per 1% rate increase. Appreciation shaves time; slow appreciation extends it.'],
      ['How to use break-even in your decision', 'Compare break-even to your likely tenure. If you plan to stay 7 years and break-even is year 6, buying is a close call — run the calculator with conservative assumptions before deciding. If break-even is year 10 and your horizon is 5 years, renting almost certainly wins financially. If your horizon is uncertain, default to the shorter end when comparing.'],
    ],
    ['Your personal break-even depends on your exact inputs, not a generic formula.', 'Run the calculator with conservative appreciation and your actual rate before trusting the output.', 'Uncertain tenure is the strongest argument for renting.'],
    [
      ['Can break-even be under 3 years?', 'Rarely — transaction costs at purchase alone typically represent 2-3 years of cost advantage. The only path to very short break-even is buying well below market, having minimal closing costs (VA loans, for example), or entering a sharply appreciating market.'],
      ['How does rent growth affect break-even?', 'Significantly. Every 1% of annual rent growth makes the rent path more expensive over time, which shortens break-even for buyers. In markets with strong rent growth, buyers cross break-even noticeably earlier than in rent-controlled or supply-heavy markets.'],
    ],
    'When buying breaks even against renting: inputs, ranges, and how to use the number.'
  ),
  mk('why-renting-can-be-smarter', 'Why renting can be smarter',
    'Renting is not inferior to buying — flexibility, optionality, and transferred risk are real economic benefits that the break-even math does not fully capture.',
    ['Flexibility has measurable value for households with uncertain tenure or income.', 'Maintenance risk and major system replacement stay with the landlord, not you.', 'Invested capital can grow without the illiquidity and concentration of real estate.'],
    [
      ['The value of optionality', 'A renter can relocate for a better job, a relationship change, or a lower-cost city with 30 days notice and minimal transaction cost. A homeowner faces 5-7% selling costs, potential capital gains tax, and a market that may or may not cooperate. In careers with frequent moves, volatile income, or uncertain future geography, this optionality is worth real money.'],
      ['Risk transfer from owner to tenant', 'Renters do not absorb roof failure, HVAC replacement, foundation issues, HOA special assessments, insurance non-renewal, or property tax spikes. In markets where insurance premiums have doubled (coastal Florida, California wildfire zones), or where property tax reassessment creates large post-purchase increases, the renter\'s insulation from these risks is a genuine financial protection — not just a convenience.'],
      ['Liquidity and investment flexibility', 'A $100,000 down payment parked in a home is illiquid, concentrated in a single asset, and subject to local market conditions. The same $100,000 invested in a diversified portfolio remains accessible and grows across many assets. Whether this is better depends on local appreciation versus investment returns — but the comparison is legitimate and the calculator models it honestly.'],
    ],
    ['Renting is a valid long-term strategy in high-ratio, high-risk, or high-mobility situations.', 'The financial outcome depends on whether renters actually invest the savings.', 'Disciplined renter-investors can match or exceed homeowner wealth outcomes.'],
    [
      ['Are renters poorer in retirement?', 'Not inherently. Studies show that renter-investors who consistently invest the difference between their rent and comparable ownership costs can match homeowner net worth. The challenge is behavioral — most renters spend the difference rather than investing it.'],
      ['What markets favor renting most strongly?', 'Coastal California, much of the Pacific Northwest, NYC, and other high-ratio metros where ownership costs exceed renting by a wide margin for the first 8-12 years. Also markets with volatile employment, high insurance risk, or supply-driven rent control.'],
    ],
    'Why renting can be smarter than buying: flexibility, risk transfer, and disciplined investing.'
  ),
  mk('mortgage-rate-impact-on-decision', 'How mortgage rates affect the buy-vs-rent decision',
    'Mortgage rate is one of the most powerful single inputs in the buy-vs-rent calculation — a 1% rate change can shift break-even by 1-2 years and meaningfully change the monthly cost comparison.',
    ['Every 1% rate increase raises the monthly payment on a $400k loan by roughly $230.', 'Higher rates extend break-even and favor renting for longer periods.', 'Lower rates shorten break-even and make the equity-building argument stronger.'],
    [
      ['The mechanics of rate on monthly cost', 'A 30-year fixed mortgage on a $400,000 loan at 6% has a principal-and-interest payment of $2,398. At 7%, that payment rises to $2,661 — a $263 monthly increase, or $3,156 annually. At 8%, it rises to $2,935 — a $537 monthly premium over 6%. These differences compound over the life of the loan: $7,560 more annually at 7% versus 6% represents a real and persistent ownership cost disadvantage.'],
      ['How rate affects break-even', 'In a market where the break-even was year 6 at 6%, a rate increase to 7% often pushes that to year 7-8, and 8% to year 9-10. The direction depends on the local price-to-rent ratio. In low-ratio markets, the rate sensitivity is lower — buying still wins even at higher rates, just with a slightly longer break-even. In high-ratio markets, rate hikes can push break-even out of the practical range for many buyers.'],
      ['Refinancing as the rate safety valve', 'Buying at a high rate with an intent to refinance when rates fall is a legitimate strategy — but it requires financial cushion for the higher payment in the interim, and there is no guarantee rates will fall. The traditional rule is: a 0.75-1% rate reduction with a 3-5 year remaining horizon justifies refinancing, assuming closing costs of 2-3% of loan amount.'],
    ],
    ['Model your actual quoted rate, not the average rate you see in the news.', 'Rate sensitivity is highest in high-ratio, high-price markets.', 'Refinancing works, but it has costs and is not guaranteed.'],
    [
      ['Should I wait for rates to drop before buying?', 'Only if you can accept that prices may rise, fall, or stay flat while you wait. Timing rates requires also timing prices. In most markets, it is more productive to model the buy decision at current rates and ask whether it still makes sense — if it does, buy and refinance later if rates fall.'],
      ['How do ARMs compare to fixed rates in this environment?', 'ARMs can make sense for buyers confident they will sell or refinance within the ARM\'s fixed period (typically 5-7 years). They carry real risk if rates rise further or the horizon extends. For most buyers with 7+ year plans, fixed rates provide safer planning certainty.'],
    ],
    'How mortgage rates shift break-even and change the buy-vs-rent decision.'
  ),
  mk('property-tax-basics', 'Property tax basics for buyers',
    'Property tax is a major, ongoing ownership cost that many buyers underestimate at purchase — and it can change meaningfully after you close.',
    ['Effective property tax rates range from under 0.3% (Hawaii) to over 2.2% (New Jersey, Illinois) annually on home value.', 'Many states reset your assessment to purchase price at sale, raising the bill above the seller\'s current tax.', 'Exemptions (homestead, senior, veteran) can meaningfully reduce the bill in many states.'],
    [
      ['How property tax is calculated', 'Tax equals assessed value multiplied by the total mill rate (the sum of city, county, school, and special district rates). Assessed value may equal market value or may be a fixed percentage of it, depending on state law. Effective rate — annual tax divided by market value — is the most useful metric for comparing markets, because it normalizes for different assessment ratios.'],
      ['The post-sale assessment trap', 'In many states, your tax bill resets to your purchase price when you buy. A seller who bought 20 years ago may pay tax on an assessment far below current market — and their tax bill will not reflect what you will pay. Always request the county assessor\'s current assessed value and calculate the expected tax on your purchase price, not on the prior owner\'s basis.'],
      ['Exemptions and appeals', 'Homestead exemptions reduce taxable value for primary residences — amounts vary from small (a few thousand dollars off assessed value) to large (full exemption for some qualifying veterans). Senior exemptions and income-based freezes exist in many states. Appeals are possible in most jurisdictions and have a 30-60% success rate when backed by recent comparable sales data.'],
    ],
    ['Always calculate property tax based on your purchase price, not the seller\'s bill.', 'Effective rate is the only meaningful comparison across markets.', 'Request comparable assessed values from the county assessor before closing.'],
    [
      ['Can property taxes be appealed?', 'Yes — most jurisdictions allow annual appeal filings. The window is typically 30-90 days after assessment notices are mailed. Bring recent comparable sales within a mile as evidence. Third-party property tax appeal firms charge 25-40% of the reduction in year one savings as a contingency fee.'],
      ['How much does property tax vary by state?', 'New Jersey averages 2.2% effective rate; Illinois averages 2.1%; Texas 1.7%. At the low end, Hawaii averages 0.3%, and Alabama averages 0.4%. On a $400,000 home, that is a $1,200 annual tax in Hawaii versus $8,800 in New Jersey — a $7,600 annual difference from the same home in different states.'],
    ],
    'Property tax basics for buyers: how it is calculated, what changes at sale, and how to reduce it.'
  ),
  mk('understanding-hoa-fees', 'Understanding HOA fees',
    'HOA fees are a mandatory, recurring ownership cost in millions of U.S. communities — and the real risk is not the base fee but the reserve funding shortfall and special assessment exposure that accompanies it.',
    ['Always request the reserve study and percent-funded figure before buying into any HOA.', 'Below 70% reserve funding signals elevated special assessment risk.', 'HOA fees can legally foreclose on your property in most states.'],
    [
      ['What HOA fees actually cover', 'Monthly dues in a condominium or townhome community typically cover exterior maintenance, common area upkeep, landscaping, shared insurance (on the structure in condos), amenities (pool, gym, security), professional management, and reserve contributions. In single-family HOAs, fees are lower and typically cover only common areas, management, and reserves for shared infrastructure.'],
      ['Reserve funds and special assessments', 'The reserve fund is the HOA\'s savings account for future capital needs: roof replacement, paving, elevator service, pool resurfacing, and similar large-scale repairs. A reserve study projects these needs over 20-30 years. Percent funded is the ratio of current reserves to what the study says is needed. Below 70% is underfunded; below 50% is seriously underfunded and likely to produce a special assessment in the next 5-10 years. Special assessments can range from hundreds to tens of thousands of dollars per unit.'],
      ['Due diligence before buying into an HOA', 'Review at minimum: the reserve study (look at percent funded and line items coming due in the next 5 years), 24 months of meeting minutes (surface disputes, pending litigation, and major decisions), the current budget vs prior years (look for fee trends), and the insurance master policy. Ask if there is pending litigation — lenders may decline to finance in associations with certain active suits, and litigation signals systemic conflict.'],
    ],
    ['Model HOA dues as a permanent monthly cost, not a temporary one.', 'Review reserves and minutes before making any offer in an HOA community.', 'A special assessment of $10,000-40,000 is not unusual in underfunded buildings.'],
    [
      ['Can HOA fees rise?', 'Yes. Multi-percent annual increases are common, and boards can raise fees without owner vote (within certain legal limits). Well-funded associations with stable dues histories are far preferable to associations with flat dues and deteriorating common areas — the latter often signals deferred maintenance and a coming assessment or dramatic fee increase.'],
      ['Can an HOA foreclose on my home?', 'Yes in most states, for unpaid assessments. The threshold is low — sometimes just a few months of missed dues. HOA foreclosures can proceed even with a paid mortgage. Never let HOA dues fall delinquent.'],
    ],
    'Understanding HOA fees: what they cover, reserve risk, special assessments, and due diligence.'
  ),
  mk('pmi-explained', 'Private mortgage insurance (PMI) explained',
    'PMI protects lenders — not you — when down payments are below 20% on conventional loans. It adds real cost, but it is often the price of accessing homeownership sooner.',
    ['PMI costs 0.3-1.5% of the loan annually, depending on credit score and LTV.', 'PMI on conventional loans can be removed at 20% equity — it is not permanent.', 'FHA MIP is structured differently and usually requires refinancing to remove.'],
    [
      ['When PMI applies and what it costs', 'PMI is required on conventional loans with less than 20% down. The annual cost ranges from roughly 0.3% (strong credit, 15% down) to 1.5% (lower credit, 3% down) of the original loan balance. On a $360,000 loan (5% down on $380,000), PMI at 0.8% adds $240 per month — $2,880 per year. This is real money, but it is not permanent, and for many buyers it is a rational trade for getting into a home sooner.'],
      ['How to remove PMI', 'Conventional PMI is automatically cancelled when the loan amortizes to 78% of original value, per HOPA law. You can request cancellation at 80% LTV — typically requiring a written request and sometimes an appraisal. If your home has appreciated significantly, an appraisal showing 80% LTV based on current value can trigger removal ahead of schedule. FHA MIP (mortgage insurance premium) is structured differently: upfront MIP plus annual MIP, and for loans originated after 2013 with less than 10% down, annual MIP runs for the life of the loan, making refinancing out of FHA the only way to remove it.'],
      ['PMI vs waiting to hit 20% down', 'The math of waiting to save 20% versus buying now with PMI depends on local price trajectory, rent costs during the waiting period, and where you would put the not-yet-saved funds. In rising markets, buyers who wait often find themselves priced out or priced up to a similar down payment relative to the new price. In flat or declining markets, waiting can genuinely save money. The calculator on this site allows you to model this tradeoff.'],
    ],
    ['PMI is a cost of lower-down-payment access, not a permanent sentence.', 'Model how long PMI will last and add it to your total ownership cost projection.', 'Consider whether the appreciation trajectory rewards buying sooner despite PMI.'],
    [
      ['Is PMI always bad?', 'No — it can be the gateway to ownership at acceptable cost. If rents are rising faster than PMI costs, or if local appreciation will push you to 20% equity quickly, PMI is a reasonable price to pay. Run the calculator with PMI modeled as an additional monthly cost to understand its total impact on your break-even.'],
      ['Are there ways to avoid PMI with less than 20% down?', 'Yes: lender-paid PMI (you take a higher rate instead), piggyback loans (80/10/10 structure with a second lien), or VA and USDA loans for eligible buyers. Each has tradeoffs — lender-paid PMI is often more expensive long-term; piggyback loans add a second payment; VA and USDA have eligibility requirements and funding fees.'],
    ],
    'PMI explained: when it applies, what it costs, how to remove it, and whether to wait for 20% down.'
  ),
  mk('down-payment-strategies', 'Down payment strategies',
    'The down payment decision is not just about size — it involves tradeoffs between liquidity, monthly cost, PMI, opportunity cost, and reserve requirements.',
    ['20% down eliminates PMI and provides immediate equity — but locks capital.', '3-10% down preserves liquidity and lets you enter the market sooner, with PMI as the cost.', 'Down payment assistance programs exist in most states and are underused by eligible buyers.'],
    [
      ['The case for 20% down', 'Putting 20% down eliminates PMI, often qualifies you for better rate tiers, and provides immediate equity cushion against a price decline. For buyers in stable, long-tenure situations with strong reserves, this is often the right path. The main risk is locking too much capital into an illiquid asset at the expense of the emergency fund — do not drain your reserves to hit 20%.'],
      ['The case for lower down payments', 'Getting into the market with 3-5% down preserves capital for investment, emergency reserves, and renovation. In markets with strong appreciation, buyers who entered with 5% down often reach 20% equity in 3-5 years through appreciation alone — effectively removing PMI without having waited. Lenders\'s pricing differences between 5% and 10% down on rate are typically small (under 0.25%), so the reserve preservation benefit of 5% down is often worth it.'],
      ['Down payment assistance programs', 'Most states have programs offering grants or soft second loans to cover some or all of the down payment for eligible buyers. Fannie HomeReady, Freddie Home Possible, and many state housing finance agency programs allow 3% down with income-based eligibility. These are legitimate, well-administered programs and are dramatically underused — many buyers assume they will not qualify when they actually do.'],
    ],
    ['Liquidity after closing matters more than the size of the down payment.', 'Model the opportunity cost of locking capital versus paying PMI.', 'Check state down payment assistance eligibility before assuming you need 20%.'],
    [
      ['Should I use retirement funds for a down payment?', 'First-time buyers can withdraw up to $10,000 from a traditional IRA penalty-free (taxes still apply). 401(k) loans allow borrowing against your balance but create job-change risk — if you leave your employer, the loan becomes due immediately. These are last-resort options. The compounding loss of retirement funds withdrawn early typically outweighs the benefit of a larger down payment.'],
      ['Can gift funds be used?', 'Yes on most conventional, FHA, and VA loans from family members. The donor must sign a gift letter confirming no repayment is expected. Document the transfer clearly — sudden large deposits trigger scrutiny.'],
    ],
    'Down payment strategies: sizing, tradeoffs, PMI math, and assistance programs.'
  ),
  mk('closing-costs-guide', 'Closing costs guide',
    'Closing costs on a home purchase typically run 2-5% of the purchase price — but the amount varies significantly by state, loan type, and how aggressively you shop.',
    ['Transfer tax states (New York, Maryland, Illinois) can push total closing costs above 5%.', 'Lender fees (origination, underwriting) are the most negotiable line items.', 'A Loan Estimate from your lender must arrive within 3 days of application — compare it across lenders before choosing.'],
    [
      ['What closing costs actually include', 'Lender fees (origination, underwriting, application) typically run $1,000-3,000. Title insurance has two policies — lender (required) and owner (strongly recommended) — often totaling $1,500-3,500 on a $400,000 home. Prepaid items include homeowners insurance for the first year, property tax escrow seed (often 2-6 months), and prepaid interest from closing to the end of the month. Recording fees, transfer taxes (highly variable by state), and escrow/attorney fees make up the rest.'],
      ['How to reduce closing costs', 'Negotiate seller concessions in the purchase contract — conventional loans allow up to 3-9% of purchase price in seller-paid closing costs depending on down payment. Shop title insurance independently (allowed in most states; can save $300-700). Compare Loan Estimates from 3-5 lenders on origination and underwriting. Consider lender credits (taking a slightly higher rate in exchange for credits covering closing costs) if you plan to refinance or move within 5 years.'],
      ['What buyers miss at closing', 'Moving costs, utility deposits, and immediate repairs are not in the closing cost estimate. Many buyers show up at closing with the exact closing-cost amount in their account — and immediately face $3,000-10,000 in post-closing expenses they did not budget for. Cash to close should include a buffer of at least $3,000-5,000 above the estimate.'],
    ],
    ['Get and compare Loan Estimates from at least 3 lenders — differences in fees are real.', 'Model closing costs plus a post-closing buffer when calculating how much cash you need.', 'Seller concessions on closing costs are negotiable and often available.'],
    [
      ['Can closing costs be financed?', 'Sometimes — via a higher rate (lender credits) or by rolling them into the loan on refinances. On purchase transactions, most loan programs do not allow direct financing of closing costs into the base loan, but lender credits and seller concessions achieve a similar result.'],
      ['What is a Loan Estimate?', 'A standardized 3-page form that lenders must issue within 3 business days of your application. It itemizes rate, fees, monthly payment, and cash to close. Use it as the apples-to-apples comparison tool when shopping lenders — not the informal quote they give before application.'],
    ],
    'Closing costs guide: what they include, what to negotiate, and how to prepare.'
  ),
  mk('selling-costs-explained', 'Selling costs explained',
    'Selling a home typically costs 5-7% of the sale price in commissions, transfer tax, preparation, and concessions — a figure that erodes equity and extends break-even.',
    ['Agent commission is typically 4-6% of sale price (split between buyer\'s and seller\'s agents).', 'Transfer taxes vary by state — some charge nothing, others charge 1-2% of price.', 'Prep costs, staging, and concessions add another 0.5-2% in most transactions.'],
    [
      ['Commission and the evolving fee landscape', 'Traditional agent commission has been 5-6% of sale price, split between buyer\'s and seller\'s agents. Recent legal settlements have begun to separate these negotiations. Buyers may now be responsible for negotiating their own agent\'s fee independently. Flat-fee and discount brokerages have grown and typically charge $500-3,000 as a listing fee plus a buyer\'s agent commission, potentially reducing total cost by 1-2%.'],
      ['Transfer taxes and location-specific fees', 'Transfer taxes range from zero (in many Sunbelt states) to 1-2% of purchase price in states like New York, Maryland, and Washington DC. NYC adds a mansion tax of 1-3.9% on sales over $1 million. These taxes are a straight subtraction from your net proceeds and must be included in your break-even calculation when you buy — because they are certain at sale.'],
      ['Preparation, staging, and concessions', 'Most sellers spend $2,000-8,000 preparing a home for sale: paint, cleaning, landscaping, minor repairs. In buyer\'s markets, sellers also offer concessions — closing cost credits, rate buydowns, or repair allowances — that further reduce net proceeds. Staging professionally costs $1,000-3,000 and is standard in many markets. Budget 1-2% of sale price for these costs on top of commission and taxes.'],
    ],
    ['Always subtract selling costs from projected equity when modeling the buy decision.', 'A home bought at $400k needs to appreciate to roughly $430-450k just to break even on transaction costs.', 'Discount brokers are a real option and can save $8,000-15,000 on a $400k sale.'],
    [
      ['Can I sell without an agent?', 'Yes — FSBO (For Sale by Owner) is legal in all states. It saves the seller\'s commission (typically 2.5-3%) but requires marketing, open houses, contract management, and negotiation. Most FSBO sellers still offer a buyer\'s agent commission to attract agent-represented buyers. Buyers who used FSBO sellers have reported fewer issues than expected; the main challenge is marketing reach.'],
      ['How do selling costs affect break-even?', 'Significantly. If you pay $8,000 to buy and $24,000 to sell on a $400,000 home, you need $32,000 of net equity gain above maintenance and ongoing costs before you break even versus renting. This is why short tenures almost always favor renting — the transaction cost clock starts ticking at purchase and only clears when you have been there long enough for equity accumulation to overcome it.'],
    ],
    'Selling costs explained: commissions, transfer taxes, prep costs, and how they affect break-even.'
  ),
  mk('appreciation-vs-inflation', 'Home appreciation vs. inflation',
    'Long-run real home appreciation is modest nationally — roughly 1-2% above inflation — though short-term periods and local markets diverge sharply from this baseline.',
    ['The 100-year nominal U.S. appreciation average is roughly 3-4%, close to inflation.', 'Short-term windows (2020-2023) can diverge sharply and are not predictive.', 'Local markets vary enormously — Detroit and Cleveland have underperformed; coastal metros have outperformed.'],
    [
      ['The long historical record', 'Robert Shiller\'s century-long data series on U.S. home prices, adjusted for inflation, shows roughly 0.5-1% annual real appreciation. Nominal appreciation (not inflation-adjusted) has averaged approximately 3-4% since the 1970s — roughly tracking the CPI. The implication is that homes are not high-growth assets in the long run; they are inflation-preserving stores of value with high leverage and illiquidity.'],
      ['Why perception differs from data', 'Most homeowners anchor to their purchase price and compare it to their current market value, ignoring inflation. A home bought in 1990 for $150,000 selling in 2020 for $450,000 feels like a tripling — but inflation of 2.5% annually turns that $150,000 into $305,000 in 2020 dollars. Real appreciation was much smaller. The 2020-2023 period was exceptional, producing 30-40% price gains in many markets — but exceptional periods are not the baseline for planning.'],
      ['Regional divergence', 'National averages mask extreme local variation. Coastal California, Austin, Denver, and Seattle have dramatically outperformed inflation over 20 years. Cleveland, Detroit, St. Louis, and many Midwest markets have roughly tracked or underperformed inflation. When modeling your specific market, use a 20-30 year local data series rather than national averages, and use the conservative end of that range.'],
    ],
    ['Model appreciation conservatively — 3-4% nominal is a reasonable central case for most markets.', 'Assume exceptional recent appreciation reverts toward the long-run mean for planning purposes.', 'If appreciation is the primary justification for buying, that is a speculative, not investment, thesis.'],
    [
      ['Will homes always appreciate?', 'Not guaranteed. Regional declines of 10-30% are common in economic downturns, policy changes, or supply shocks. Detroit home prices have never returned to their 1950s inflation-adjusted peak. Miami condos sold for 40-50% below peak during the 2010-2012 correction. Model at least a flat-appreciation scenario when making any long-term buy decision.'],
      ['How does appreciation affect break-even?', 'Each 1% of additional annual appreciation typically shortens break-even by 6-12 months. This is why conservative appreciation assumptions are important — they prevent you from buying on an optimistic scenario that may not materialize.'],
    ],
    'Home appreciation vs. inflation: what the data actually shows and how to model it honestly.'
  ),
  mk('opportunity-cost-of-down-payment', 'Opportunity cost of a down payment',
    'Every dollar used for a down payment is not available for investment elsewhere. Comparing expected real estate returns against investment alternatives honestly often changes the buy-vs-rent calculus.',
    ['Historical stock market returns: ~7% nominal, ~4-5% real, annually over long periods.', 'Home appreciation: ~3-4% nominal, ~0.5-1% real, nationally over long periods.', 'The difference compounds — a $60k down payment grows to $230k at 7% over 20 years; home prices may grow it to $120k.'],
    [
      ['What opportunity cost means in practice', 'When you put $60,000 into a down payment, that $60,000 is not available to invest in a diversified stock portfolio. At 7% annual return, $60,000 grows to $115,000 in 10 years and $230,000 in 20 years. If the home appreciates at 4% annually, the home value increases too — but only on the total home value, not just the down payment portion. The leveraged nature of real estate can amplify returns, but it also amplifies losses, and the opportunity cost on the equity portion is real.'],
      ['How the calculator models this', 'The calculator adds the foregone investment return on the down payment to the renter\'s wealth accumulation side. This is not a penalty on buying — it is a legitimate cost of deploying capital into an illiquid asset. The buyer\'s side is credited with equity accumulation (appreciation minus loan balance) over the same period. A fair comparison requires both sides to model capital deployment.'],
      ['When opportunity cost favors renting more clearly', 'In high-ratio markets with modest local appreciation expectations, the opportunity cost of the down payment often exceeds the equity benefit of buying for many years. This is the core financial case for renting in expensive coastal cities — not that the home will not appreciate, but that the capital locked in the down payment would likely grow faster in investments than in the home equity over typical decision horizons.'],
    ],
    ['A fair buy vs. rent analysis must include opportunity cost on both sides.', 'Leveraged real estate can outperform when appreciation is strong and rates are low.', 'In high-ratio markets with modest appreciation, invested capital often builds more wealth than home equity over 7-10 years.'],
    [
      ['Does opportunity cost change the answer?', 'Frequently. Including opportunity cost in a $500,000 home purchase with a $100,000 down payment adds roughly $7,000 in foregone annual investment return — which the renter side captures. This often moves the break-even year out by 2-4 years compared to a naive mortgage-vs-rent comparison that ignores it.'],
      ['Should I compare to a risk-free rate?', 'Use whatever expected return your alternative investment actually produces. If you would invest in Treasury bonds at 4%, use 4%. If you would invest in a stock index, use 7%. If you would spend the money, the opportunity cost is zero — but so is your wealth accumulation.'],
    ],
    'Opportunity cost of a down payment: how foregone investment returns affect the buy-vs-rent outcome.'
  ),
  mk('mortgage-interest-deduction', 'Mortgage interest deduction explained',
    'After 2017 tax reform, most U.S. households no longer itemize deductions — making the mortgage interest deduction less relevant than popular perception suggests.',
    ['The standard deduction is now $27,700 for married couples (2023) — most borrowers do not exceed it.', 'Deduction caps at $750,000 of mortgage debt for loans originated after December 15, 2017.', 'The $10,000 SALT cap limits the combined property tax and state income tax deduction.'],
    [
      ['What changed in 2017', 'The Tax Cuts and Jobs Act roughly doubled the standard deduction ($27,700 married, $13,850 single in 2023) while capping the State and Local Tax (SALT) deduction at $10,000 and lowering the mortgage interest cap to $750,000 (from $1 million). The practical effect: only households with very large mortgages, high state income taxes, and significant charitable giving tend to itemize. For most middle-income buyers in low-to-moderate-tax states, the standard deduction is larger than any itemized amount they can muster.'],
      ['Who the deduction still helps', 'High earners with jumbo mortgages ($750k+) in high-tax states (California, New York, Massachusetts) where property tax and state income tax alone are near or at the $10,000 SALT cap. For these buyers, the mortgage interest deduction on a $1 million mortgage can save $10,000-20,000 annually in federal taxes. For everyone else, it is largely irrelevant — a fact that caught many buyers off guard after 2018.'],
      ['How to model it correctly', 'Do not model the full mortgage interest deduction unless you are confident you will itemize. Check: add your mortgage interest (first year of a 30-year $400k mortgage at 7% ≈ $27,000), property taxes, and any state income tax (subject to $10k SALT cap). If the total exceeds your standard deduction, you itemize and gain the difference. In most cases, the marginal benefit of the deduction is modest.'],
    ],
    ['Default to no mortgage interest deduction in your planning unless you verify you will itemize.', 'The SALT cap makes the deduction particularly limited for high-property-tax state residents.', 'High-income, high-mortgage, high-tax-state buyers are the main remaining beneficiaries.'],
    [
      ['Is the deduction worth chasing?', 'Usually no as a primary motivation. It is a secondary consideration that may modestly reduce after-tax cost for some buyers. Never buy more home than you can afford just to maximize a deduction — the cost always exceeds the benefit.'],
      ['Will the deduction change?', 'The 2017 caps are currently scheduled to expire after 2025, potentially reverting to pre-2018 rules. This is uncertain. For long-term planning, use current rules and treat any future restoration of the full deduction as upside.'],
    ],
    'Mortgage interest deduction explained: who it helps, what changed in 2017, and how to model it.'
  ),
  mk('insurance-for-homeowners', 'Home insurance essentials',
    'Homeowners insurance has become a meaningful cost variable — and in some markets, a binary availability problem — that must be modeled honestly before buying.',
    ['Average national premium is roughly $1,500-2,000 annually; high-risk areas pay $3,000-8,000+.', 'Flood and earthquake coverage are separate policies not included in standard HO-3 coverage.', 'Carrier non-renewal is a growing problem in coastal Florida, California wildfire zones, and parts of Colorado.'],
    [
      ['What a standard policy covers', 'The HO-3 (the most common homeowners policy) covers the dwelling structure against most perils except specifically excluded ones (flood, earthquake, wear and tear), personal property against named perils, personal liability, and additional living expenses if the home becomes uninhabitable. Coverage limits need to reflect replacement cost (what it costs to rebuild at current labor and material prices), not market value — undercovering to save on premium is a common and costly mistake.'],
      ['What it does not cover — and why that matters', 'Flood is excluded from all standard policies and requires a separate NFIP or private flood policy. Only properties in FEMA-designated flood zones are required to carry it, but many properties that flood are not in designated zones. Earthquake is excluded and requires a separate policy — relevant primarily on the West Coast and along certain fault lines. Sewer backup, mold, and certain water damage types may be excluded or sub-limited. Read the exclusions page carefully.'],
      ['Rising premiums and carrier pullback', 'Homeowners insurance in coastal Florida, Louisiana, California (wildfire zones), and parts of Colorado has seen premiums double or triple in 3-5 years. Multiple major carriers have stopped writing new policies or non-renewed existing ones in these markets. State FAIR Plans (insurer of last resort) often provide coverage at high premiums with limited coverage. Before buying in any climate-exposed area, verify insurance availability at the specific address — not just the general market — and get quotes before making an offer.'],
    ],
    ['Model insurance at actual quoted cost for the address — not a national average.', 'Verify insurance availability in climate-exposed markets before making an offer.', 'Update dwelling coverage every few years to reflect current construction costs.'],
    [
      ['Do I need flood insurance?', 'If the property is in a FEMA Special Flood Hazard Area, lenders will require it. If it is not, it is optional but worth considering for any property near water, storm drains, or in a basin. NFIP policies are standardized and often cheaper than private flood; private policies may offer higher limits and more coverage options.'],
      ['How do I get a lower premium?', 'Higher deductibles, bundling auto and home with the same carrier, adding monitored alarms, new or recently replaced roof, masonry construction, and removing vegetation near the structure. In wildfire zones, defensible space (cleared vegetation around the home) is often required and reduces premium. Shop annually — carriers price risk differently and switching can save 20-40%.'],
    ],
    'Home insurance essentials: what is covered, what is not, and how to navigate rising premiums and carrier pullback.'
  ),
  mk('rent-growth-assumptions', 'Realistic rent growth assumptions',
    'Rent growth is one of the most important inputs in the buy-vs-rent calculation — and most people use a number that is either too optimistic or does not reflect their specific market.',
    ['Long-run national rent growth has averaged 3-4% annually, roughly tracking CPI.', 'Rent control significantly changes this math for controlled units.', 'Supply surges (new construction cycles) can produce flat or negative rent periods.'],
    [
      ['The historical baseline', 'CPI rent-of-primary-residence has increased at roughly 3-4% annually since 1985 in the national aggregate. This is a reasonable long-run baseline for planning. However, it masks periods of much faster growth (2021-2023 saw 10-15% annual increases in many markets) and much slower growth (2009-2012 saw flat or falling rents in most markets). The CPI rent series is a better benchmark than listing-based aggregates, which overweight turnover units.'],
      ['What rent control does to this number', 'Tenants in rent-controlled or rent-stabilized units have seen effective rent growth of 1-3% annually in many jurisdictions — well below market. This dramatically changes the buy vs. rent calculus for long-tenure tenants: leaving a controlled unit at a 30% discount to market is a significant financial cost that the standard calculator does not model. If you are in a controlled unit and considering buying, model the actual rent you pay, not a market-rate alternative.'],
      ['Supply cycles and near-term expectations', 'Rent growth is highly cyclical and supply-sensitive. Markets that permitted heavily in 2021-2022 (Austin, Phoenix, Salt Lake City) have seen rent growth turn flat or negative. Supply-constrained markets (coastal California, NYC) have seen more persistent growth. For near-term assumptions (3-5 years), researching local supply pipelines is more informative than national averages.'],
    ],
    ['Use 3% as a conservative planning baseline for most markets.', 'If you are in a rent-controlled unit, your baseline is your actual annual increases, not market rate.', 'Check local permit activity and vacancy rates for near-term accuracy.'],
    [
      ['Can rent fall?', 'Yes — meaningfully, in oversupplied or economically stressed markets. Rents fell 10-20% in many tech-hub cities during 2020 and again moderated after 2022 supply surges. Negative rent growth in the near term does not change the long-run case for renting in high-ratio markets, but it does shift the near-term comparison further toward renting.'],
      ['What rent growth assumption should I use in the calculator?', 'A range of 2-4% covers most reasonable long-run planning scenarios in most markets. Run the calculator at 2%, 3%, and 4% to understand how sensitive the outcome is. If the decision changes significantly between 2% and 4%, the choice is closer than it appears and non-financial factors should carry more weight.'],
    ],
    'Realistic rent growth assumptions: historical baseline, rent control effects, and supply cycles.'
  ),
  mk('maintenance-budgeting', 'Maintenance budgeting for homeowners',
    'Maintenance is the most underestimated ongoing cost of homeownership — and the one that creates the most financial stress in the first 3-5 years of ownership.',
    ['Budget 1-2% of home value annually — more for older homes, harsher climates.', 'Roofs, HVAC, and water heaters have predictable replacement cycles; budget ahead.', 'Do not drain the maintenance reserve for non-emergency spending.'],
    [
      ['The 1-2% rule and what drives it', 'A commonly cited rule is to budget 1% of home value per year for maintenance. A more precise approach accounts for age, climate, and property type. Newer homes (under 10 years) may be closer to 0.5-0.7% annually. Older homes (30+ years) often run 2-3% in years when major systems reach end of life. The variability is the point: some years cost very little; others cost $15,000-30,000 when a roof and HVAC align. The reserve approach is to smooth that variability.'],
      ['Major systems and their lifecycles', 'Roof: 20-30 year lifespan for asphalt shingles, $12,000-30,000 to replace. HVAC: 15-20 year lifespan, $5,000-15,000 per unit. Water heater: 10-15 years, $800-3,000. Exterior paint: 7-10 years, $5,000-12,000. Windows: 20-30 years, $8,000-20,000 for full replacement. Knowing the age of each major system at purchase tells you approximately when these costs will hit.'],
      ['Building the reserve and avoiding the trap', 'Set aside 1/12 of your annual maintenance budget monthly into a dedicated savings account. Replenish immediately after each project. The common trap is spending this reserve on vacation or non-housing needs and then borrowing at high interest rates when a $12,000 roof replacement arrives. First-year buyers frequently underestimate the psychological cost of this transition — renters who have never written a $15,000 maintenance check sometimes find the first one genuinely shocking.'],
    ],
    ['Know the age and condition of every major system before closing.', 'Treat the maintenance reserve as sacred — do not spend it on other things.', 'The first year of ownership typically costs more than expected, even with a clean inspection.'],
    [
      ['What about newer construction?', 'Newer homes have lower maintenance in the early years — often $3,000-6,000 annually — but carry builder warranty risk and the possibility of construction defects emerging in years 3-8. Warranty coverage varies, and builder responsiveness can be difficult. Even new construction should carry a reserve.'],
      ['Does HOA maintenance replace my budgeting?', 'Only for the exterior and common areas it explicitly covers. In a condo, HOA handles the structure, roof, lobbies, and amenities — your interior is still your responsibility. In a townhome, confirm exactly what the HOA covers. In a single-family home with an HOA, typically only common areas are covered.'],
    ],
    'Maintenance budgeting for homeowners: the 1-2% rule, major system lifecycles, and reserve management.'
  ),
  mk('how-to-compare-offers-fairly', 'How to compare buy vs. rent offers fairly',
    'Most buy-vs-rent comparisons are unfair because they omit major costs from one side. A fair comparison requires matching time horizons, including all costs, and modeling opportunity cost on both sides.',
    ['Use the same time horizon for both scenarios — typically 5, 7, or 10 years.', 'Include transaction costs (2-5% buying, 5-7% selling) in the buy scenario.', 'Include foregone investment return on the down payment in the rent scenario.'],
    [
      ['The matched-horizon framework', 'A comparison that covers different time periods is meaningless. If you are evaluating a 7-year scenario, model 7 years of buying (mortgage payments, tax, insurance, maintenance, transaction costs) against 7 years of renting (rent with annual growth, renter\'s insurance) plus the investment return of the down payment over those 7 years. This produces a single, comparable total-cost figure for each path.'],
      ['Costs that are commonly omitted', 'Buy side: closing costs at purchase (2-5%), selling costs at exit (5-7%), maintenance (1-2% annually), property tax at actual effective rate, PMI if applicable, HOA if applicable. Rent side: broker fee at entry (in certain markets), annual rent growth applied year-over-year, foregone investment return on the down payment (at the rate you would actually invest). Omitting any of these biases the comparison in a predictable direction.'],
      ['Applying your own assumptions, not generic ones', 'National calculator defaults are starting points. Your situation requires your mortgage rate, your local property tax rate, your actual rent, your local appreciation expectation, your actual investment return assumption. The calculator on this site allows you to replace every default with your own input — and you should, before treating any output as reliable.'],
    ],
    ['A fair comparison reveals whether buying or renting is genuinely ahead — and by how much.', 'If the numbers are close (within 10%), let non-financial factors decide.', 'If one path is clearly and substantially cheaper, that is a meaningful signal worth acting on.'],
    [
      ['Is the calculator enough for a real decision?', 'It provides a structured, transparent framework. For a real decision, supplement it with a specific insurance quote for the address, actual comparable rent for your target unit, a local agent\'s assessment of the market, and consultation with a fee-only financial advisor on the tax implications.'],
      ['What if my partner and I get different answers?', 'Often the inputs differ (one is more optimistic on appreciation, one more pessimistic). Align on inputs together — the disagreement about assumptions is more useful to resolve than the disagreement about conclusions.'],
    ],
    'How to compare buy vs. rent offers fairly: the matched-horizon framework and all costs included.'
  ),
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
