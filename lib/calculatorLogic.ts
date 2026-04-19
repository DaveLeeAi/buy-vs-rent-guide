export interface CalculatorInput {
  homePrice: number;
  downPaymentPercent: number;
  mortgageRate: number;
  loanTermYears: number;
  monthlyRent: number;
  propertyTaxRate: number;
  hoaMonthly: number;
  maintenanceRate: number;
  homeAppreciationRate: number;
  rentIncreaseRate: number;
  investmentReturnRate: number;
  timeHorizonYears: number;
}

export interface YearlySnapshot {
  year: number;
  cumulativeBuyCost: number;
  cumulativeRentCost: number;
  homeEquity: number;
  investmentBalance: number;
  buyNetWorth: number;
  rentNetWorth: number;
}

export interface CalculatorResult {
  monthlyMortgagePayment: number;
  totalMonthlyBuyCost: number;
  monthlyRentCost: number;
  breakEvenYear: number | null;
  yearlySnapshots: YearlySnapshot[];
  fiveYearDelta: number;
  tenYearDelta: number;
  twentyYearDelta: number;
  verdict: string;
  confidenceLabel: string;
}

function calculateMonthlyPayment(
  principal: number,
  annualRate: number,
  years: number
): number {
  const monthlyRate = annualRate / 100 / 12;
  const numPayments = years * 12;
  if (monthlyRate === 0) return principal / numPayments;
  return (
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
    (Math.pow(1 + monthlyRate, numPayments) - 1)
  );
}

function getRemainingBalance(
  principal: number,
  annualRate: number,
  years: number,
  paymentsMade: number
): number {
  const monthlyRate = annualRate / 100 / 12;
  const numPayments = years * 12;
  if (monthlyRate === 0) return principal - (principal / numPayments) * paymentsMade;
  return (
    principal *
    ((Math.pow(1 + monthlyRate, numPayments) -
      Math.pow(1 + monthlyRate, paymentsMade)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1))
  );
}

export function runCalculation(input: CalculatorInput): CalculatorResult {
  const downPayment = input.homePrice * (input.downPaymentPercent / 100);
  const loanAmount = input.homePrice - downPayment;
  const monthlyMortgage = calculateMonthlyPayment(
    loanAmount,
    input.mortgageRate,
    input.loanTermYears
  );
  const monthlyPropertyTax =
    (input.homePrice * (input.propertyTaxRate / 100)) / 12;
  const monthlyMaintenance =
    (input.homePrice * (input.maintenanceRate / 100)) / 12;
  const monthlyInsurance = (input.homePrice * 0.004) / 12;

  const totalMonthlyBuy =
    monthlyMortgage +
    monthlyPropertyTax +
    monthlyMaintenance +
    monthlyInsurance +
    input.hoaMonthly;

  const monthlyInvestmentReturn = input.investmentReturnRate / 100 / 12;

  const yearlySnapshots: YearlySnapshot[] = [];
  let cumulativeBuyCost = downPayment;
  let cumulativeRentCost = 0;
  let investmentBalance = downPayment;
  let currentRent = input.monthlyRent;
  let breakEvenYear: number | null = null;
  let buyAheadPrevious = false;

  for (let year = 1; year <= Math.min(input.timeHorizonYears, 30); year++) {
    const yearStartRent = currentRent;

    for (let month = 0; month < 12; month++) {
      cumulativeBuyCost += totalMonthlyBuy;

      const monthRent =
        yearStartRent * Math.pow(1 + input.rentIncreaseRate / 100 / 12, month);
      const renterInsurance = 15;
      cumulativeRentCost += monthRent + renterInsurance;

      const monthlySavings = monthRent + renterInsurance - totalMonthlyBuy;
      if (monthlySavings > 0) {
        investmentBalance += monthlySavings;
      }
      investmentBalance *= 1 + monthlyInvestmentReturn;
    }

    currentRent *= 1 + input.rentIncreaseRate / 100;

    const homeValue =
      input.homePrice * Math.pow(1 + input.homeAppreciationRate / 100, year);
    const remainingLoan = getRemainingBalance(
      loanAmount,
      input.mortgageRate,
      input.loanTermYears,
      year * 12
    );
    const homeEquity = homeValue - remainingLoan;
    const buyNetWorth = homeEquity;
    const rentNetWorth = investmentBalance;

    yearlySnapshots.push({
      year,
      cumulativeBuyCost: Math.round(cumulativeBuyCost),
      cumulativeRentCost: Math.round(cumulativeRentCost),
      homeEquity: Math.round(homeEquity),
      investmentBalance: Math.round(investmentBalance),
      buyNetWorth: Math.round(buyNetWorth),
      rentNetWorth: Math.round(rentNetWorth),
    });

    const buyAhead = buyNetWorth > rentNetWorth;
    if (buyAhead && !buyAheadPrevious && breakEvenYear === null) {
      breakEvenYear = year;
    }
    buyAheadPrevious = buyAhead;
  }

  const getDelta = (targetYear: number) => {
    const snap = yearlySnapshots.find((s) => s.year === targetYear);
    if (!snap) return 0;
    return snap.buyNetWorth - snap.rentNetWorth;
  };

  const fiveYearDelta = getDelta(5);
  const tenYearDelta = getDelta(10);
  const twentyYearDelta = getDelta(20);

  const finalSnap = yearlySnapshots[yearlySnapshots.length - 1];
  const finalDelta = finalSnap
    ? finalSnap.buyNetWorth - finalSnap.rentNetWorth
    : 0;

  let verdict: string;
  let confidenceLabel: string;

  if (Math.abs(finalDelta) < input.homePrice * 0.03) {
    verdict = `Over ${input.timeHorizonYears} years, buying and renting are roughly comparable in this scenario. Non-financial factors should drive your decision.`;
    confidenceLabel = 'Close call';
  } else if (finalDelta > 0) {
    verdict = `Over ${input.timeHorizonYears} years, buying is projected to build approximately $${Math.abs(Math.round(finalDelta)).toLocaleString()} more in net worth than renting in this scenario.`;
    confidenceLabel = breakEvenYear && breakEvenYear <= 3 ? 'Strong buy signal' : 'Favors buying';
  } else {
    verdict = `Over ${input.timeHorizonYears} years, renting and investing the difference is projected to build approximately $${Math.abs(Math.round(finalDelta)).toLocaleString()} more in net worth than buying in this scenario.`;
    confidenceLabel = 'Favors renting';
  }

  return {
    monthlyMortgagePayment: Math.round(monthlyMortgage),
    totalMonthlyBuyCost: Math.round(totalMonthlyBuy),
    monthlyRentCost: Math.round(input.monthlyRent),
    breakEvenYear,
    yearlySnapshots,
    fiveYearDelta: Math.round(fiveYearDelta),
    tenYearDelta: Math.round(tenYearDelta),
    twentyYearDelta: Math.round(twentyYearDelta),
    verdict,
    confidenceLabel,
  };
}
