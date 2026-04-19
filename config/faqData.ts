import { FaqItem } from './types';

export const nationalFaq: FaqItem[] = [
  {
    question: 'Should I buy or rent a home?',
    answer:
      'There is no universal answer. Buying is typically better if you plan to stay in one place for 5+ years, have a stable income, and can afford the down payment and ongoing costs. Renting offers flexibility, lower upfront costs, and freedom from maintenance responsibilities. The right choice depends on your personal finances, local market conditions, and how long you plan to stay.',
  },
  {
    question: 'How does the buy vs. rent calculator work?',
    answer:
      'The calculator compares the total cost of buying (mortgage payments, property taxes, insurance, maintenance, and opportunity cost of the down payment) against the total cost of renting (monthly rent plus renter\'s insurance, with assumed annual rent increases) over your chosen time horizon. It factors in home appreciation, tax implications, and investment returns on savings to determine which option builds more wealth.',
  },
  {
    question: 'What is the price-to-rent ratio?',
    answer:
      'The price-to-rent ratio divides the median home price by the annual rent for a comparable property. A ratio below 15 strongly favors buying, 15-20 is moderate, and above 20 suggests renting may be more cost-effective. This is a quick screening tool, not a definitive answer.',
  },
  {
    question: 'What costs does this calculator include?',
    answer:
      'The calculator accounts for mortgage principal and interest, property taxes, homeowners insurance (estimated), maintenance costs, HOA fees if applicable, and the opportunity cost of the down payment. On the rent side, it includes monthly rent, renter\'s insurance, and assumed annual rent increases.',
  },
  {
    question: 'What costs does this calculator NOT include?',
    answer:
      'This tool does not account for your specific tax situation, local tax deductions, closing costs on purchase or sale, moving costs, renovation expenses, specific insurance quotes, or emotional factors. It uses approximate averages and should be supplemented with professional financial advice.',
  },
  {
    question: 'How accurate is this calculator?',
    answer:
      'This calculator provides directional guidance using reasonable assumptions and publicly available data. It is not a substitute for professional financial advice. Actual costs will vary based on your specific circumstances, exact location, credit score, and market conditions at the time of purchase.',
  },
  {
    question: 'What is the break-even point?',
    answer:
      'The break-even point is the number of years after which buying becomes cheaper than renting on a total cost basis. Before this point, you would have spent less money renting. After this point, the accumulated equity and appreciation from buying outweigh the ongoing costs.',
  },
  {
    question: 'Should I consider buying even if the calculator says renting is cheaper?',
    answer:
      'Possibly. The calculator measures financial cost, but homeownership provides non-financial benefits: stability, the ability to modify your home, potential school district access, and a sense of community. Some people rationally choose to buy even when renting is slightly cheaper financially.',
  },
  {
    question: 'How do mortgage rates affect the decision?',
    answer:
      'Rates move break-even by roughly 1-2 years per 1 percentage point change. At higher rates, the rent side wins for longer because monthly carrying cost on a mortgage is dominated by interest. At lower rates, buying crosses break-even faster and the long-run equity math improves.',
  },
  {
    question: 'Does homeowner tax deduction matter as much as it used to?',
    answer:
      'Less than before. The 2017 standard deduction increase means most households no longer itemize, especially in low-tax states. The mortgage interest and property tax deductions still matter for high earners in high-tax states but should not be assumed by default.',
  },
  {
    question: 'What if I put down 20% but lose my job?',
    answer:
      'That is a real risk. Lenders expect 3-6 months of liquid reserves after closing specifically for this scenario. Do not drain your emergency fund for a down payment — a large down payment combined with no cushion is one of the most common sources of ownership stress.',
  },
  {
    question: 'How do I think about property taxes when comparing metros?',
    answer:
      'Look at effective rate (tax divided by market value), not headline mill rate. A metro with a 2% effective rate and $300k homes costs the same in tax dollars as one with 1% and $600k homes. Model effective rate times your actual purchase price, not the state average.',
  },
  {
    question: 'Is appreciation a reliable part of the buy case?',
    answer:
      'Inconsistently. Long-run national appreciation roughly tracks inflation plus 1-2%, but variance by metro is large and many markets have had 5-10 year flat stretches. Do not build your decision on aggressive appreciation assumptions — model a conservative number and treat anything higher as upside.',
  },
  {
    question: 'What is the opportunity cost of the down payment?',
    answer:
      'The return you forgo by not investing that money elsewhere. A $60k down payment not invested at 7% annually gives up about $4,200 of growth in year one. Over a decade that compounds meaningfully. The calculator includes this on the rent side to keep the comparison fair.',
  },
  {
    question: 'Should I buy a condo versus a single-family home?',
    answer:
      'Condos are usually cheaper to enter but carry HOA fee risk, special assessment exposure, and slower appreciation. Review HOA financials, reserve studies, and minutes before buying any condo. For buyers in dense urban markets, condos are often the only practical option.',
  },
  {
    question: 'How does renting protect me from risks owners face?',
    answer:
      'Renters do not bear roof failure, HVAC replacement, foundation issues, special assessments, insurance non-renewal, property tax spikes, or forced sale timing. Renters pay a premium for this risk transfer, but in unstable markets or personal circumstances, the protection is real.',
  },
  {
    question: 'What role does insurance play in the buy decision?',
    answer:
      'Rising insurance premiums in coastal Florida, Louisiana, California, and Colorado have shifted the buy math meaningfully. Model insurance at 2-3x the national average in high-risk areas, and verify insurability for a specific address before committing to a purchase.',
  },
  {
    question: 'What closing and selling costs should I actually plan for?',
    answer:
      'Budget 2-5% of purchase price at close (title insurance, origination, escrow, prepaids, transfer tax in some states) and 5-7% at sale (agent commissions, transfer tax, prep, concessions). These costs frame the break-even window more than any monthly number.',
  },
  {
    question: 'Is buying still smart with a 7% mortgage rate?',
    answer:
      'In many markets, yes, but only with realistic assumptions. A 7% rate pushes break-even out by 1-2 years versus a 5% rate. If your tenure, local ratio, and reserves still support ownership at the higher rate, buying can remain rational. Do not stretch on price to make the math work.',
  },
  {
    question: 'What separates a good rental from a bad one financially?',
    answer:
      'Stable landlord ownership, recent maintenance, reasonable deposit and fee structure, renewal cap clauses, and a clear sublet policy. A "cheap" rental with unresponsive management or rent spikes often costs more than a professionally managed unit at 5-10% higher rent.',
  },
  {
    question: 'Should I factor climate risk into the buy decision?',
    answer:
      'Yes. Flood, wildfire, and hurricane exposure increasingly shape insurance availability, premium growth, and future resale values. Check FEMA flood maps, state fire-risk maps, and recent premium changes on the address before offering.',
  },
  {
    question: 'What does a fair comparison actually look like?',
    answer:
      'Match tenure (same years for both sides), include opportunity cost on your down payment, use effective property tax for your purchase price, model maintenance honestly, assume realistic rent growth, and avoid aggressive appreciation assumptions. Any shortcut on those inputs will bias the result.',
  },
  {
    question: 'What is the biggest mistake buyers make?',
    answer:
      'Overbuying on monthly payment while underestimating maintenance, furnishing, repairs, and tax resets. Most financial stress in the first 3 years of ownership comes from underfunded reserves, not the mortgage itself.',
  },
  {
    question: 'What is the biggest mistake renters make?',
    answer:
      'Treating the rent-save gap as guaranteed savings without actually investing it. Renting can easily beat buying on paper while losing in practice if the household spends the difference instead of saving it.',
  },
  {
    question: 'Is this calculator right for investment properties or second homes?',
    answer:
      'No. This tool models a primary residence decision. Investment properties involve different tax rules, financing terms, vacancy assumptions, and return expectations. Use a dedicated rental pro-forma for those.',
  },
];

export const toolFaq: FaqItem[] = [
  {
    question: 'How should I interpret the results?',
    answer:
      'Use the results as one input in your decision, not the final word. If the numbers are close (within 10%), non-financial factors should drive your decision. If one option is clearly cheaper over your time horizon, that is a strong signal worth considering.',
  },
  {
    question: 'What mortgage rate should I use?',
    answer:
      'Use the rate you have been quoted or pre-approved for. If you have not spoken with a lender yet, use the current average 30-year fixed rate as a starting point. Your actual rate will depend on your credit score, down payment, and loan type.',
  },
  {
    question: 'What investment return rate should I assume?',
    answer:
      'A reasonable long-term assumption for a diversified stock portfolio is 7-8% annual nominal return. More conservative investors might use 5-6%. The tool defaults to 7%, which represents a common benchmark for long-term equity returns before inflation.',
  },
  {
    question: 'Can I use this tool for investment properties?',
    answer:
      'This tool is designed for primary residence decisions. Investment property analysis involves different tax treatment, financing terms, and return expectations. Consult a financial advisor for investment property analysis.',
  },
];

export const aboutFaq: FaqItem[] = [
  {
    question: 'What does this site cover?',
    answer:
      'BuyOrRent is a full decision hub for the buy-vs-rent question. It includes a national calculator, 50 state pages, 50 city pages, 20+ in-depth guides, a scenario explorer with 30+ real-life situations, market comparisons, a full FAQ library with topic clusters on mortgages, taxes, HOAs, and more, and a complete transparency layer covering methodology, assumptions, data sources, formulas, and limitations.',
  },
  {
    question: 'Who created this tool?',
    answer:
      'This tool was created by an independent editorial team focused on transparent housing finance education. We have no financial relationships with lenders, real estate companies, or mortgage providers.',
  },
  {
    question: 'How is this site funded?',
    answer:
      'This site is currently an independent project. We do not accept payment from lenders or real estate companies, and our analysis is not influenced by any financial relationships.',
  },
  {
    question: 'How often is the data updated?',
    answer:
      'Market data is reviewed quarterly. The underlying calculation methodology is reviewed annually. See our update policy for the full review cadence.',
  },
  {
    question: 'Is the data and methodology open?',
    answer:
      'Yes. Every formula the calculator uses is documented in the methodology page. Every default assumption is explained in the assumptions page. All data sources are listed in the data sources page. Nothing is proprietary or hidden behind a paywall.',
  },
];
