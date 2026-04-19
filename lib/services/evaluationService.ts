import {
  CalculatorInput,
  CalculatorResult,
  runCalculation,
} from '@/lib/calculatorLogic';

export type { CalculatorInput, CalculatorResult };

/**
 * EVALUATION SERVICE WRAPPER
 *
 * This is the single interface between the UI and all calculation logic.
 * The UI must ONLY call this function — never import calculatorLogic directly.
 *
 * CURRENT MODE: Local (all math runs in the browser)
 *
 * TO SWAP IN A PYTHON BACKEND:
 * 1. Set NEXT_PUBLIC_EVALUATION_API_URL in your .env
 * 2. Uncomment the remote block below
 * 3. Comment out or remove the local block
 * 4. No UI changes required.
 *
 * Example FastAPI endpoint: POST /api/evaluate
 * Request body: CalculatorInput (JSON)
 * Response body: CalculatorResult (JSON)
 */

// const EVALUATION_API_URL = process.env.NEXT_PUBLIC_EVALUATION_API_URL;

export async function evaluate(
  input: CalculatorInput
): Promise<CalculatorResult> {
  // --- REMOTE MODE (uncomment to use FastAPI backend) ---
  // if (EVALUATION_API_URL) {
  //   const response = await fetch(`${EVALUATION_API_URL}/api/evaluate`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(input),
  //   });
  //   if (!response.ok) {
  //     throw new Error(`Evaluation service error: ${response.status}`);
  //   }
  //   return response.json();
  // }

  // --- LOCAL MODE (default) ---
  return runCalculation(input);
}

export function getDefaultInput(overrides?: Partial<CalculatorInput>): CalculatorInput {
  return {
    homePrice: 400000,
    downPaymentPercent: 20,
    mortgageRate: 6.75,
    loanTermYears: 30,
    monthlyRent: 2000,
    propertyTaxRate: 1.1,
    hoaMonthly: 0,
    maintenanceRate: 1.0,
    homeAppreciationRate: 3.5,
    rentIncreaseRate: 3.0,
    investmentReturnRate: 7.0,
    timeHorizonYears: 10,
    ...overrides,
  };
}
