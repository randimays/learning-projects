// data:
// initial amount
// annual contribution
// expected return
// duration

type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};

type InvestmentResult = {
  year: string;
  totalAmount: number;
  totalContributions: number;
  totalInterestEarned: number;
};

type CalculationResult = InvestmentResult[] | string;

const getErrorMessage = (invalidValue: string): string => {
  if (invalidValue) {
    return `${invalidValue} amount must be at least zero.`;
  }

  return 'Invalid input';
};

const calculateInvestment = (data: InvestmentData): CalculationResult => {
  const {
    annualContribution,
    duration,
    expectedReturn,
    initialAmount
  } = data;

  if (initialAmount < 0) {
    return getErrorMessage('Initial investment');
  }

  if (duration <= 0) {
    return 'Invalid duration provided.';
  }

  if (expectedReturn < 0) {
    return getErrorMessage('Expected return');
  }

  if (annualContribution < 0) {
    return getErrorMessage('Annual contribution');
  }

  let total = initialAmount;
  let totalContributions = 0;
  let totalInterestEarned = 0;

  const annualResults: InvestmentResult[] = [];

  for (let i = 0; i < duration; i++) {
    total = total * (1 + expectedReturn);
    totalInterestEarned = total - totalContributions - initialAmount;
    totalContributions = totalContributions + annualContribution;
    total = total + annualContribution;

    annualResults.push({
      year: `Year: ${i + 1}`,
      totalAmount: total,
      totalContributions,
      totalInterestEarned
    });
  }

  return annualResults;
};

const printResults = (results: CalculationResult): void => {
  if (typeof results === 'string') {
    console.log(results);
    return;
  }

  for (const yearEndResult of results) {
    console.log(yearEndResult.year);
    console.log(`Total amount: ${yearEndResult.totalAmount.toFixed(0)}`);
    console.log(`Total contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
    console.log(`Total interest earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
    console.log('----------------');
  }
};

const investmentData = {
  initialAmount: 5000,
  annualContribution: 500,
  expectedReturn: 0.08,
  duration: 10
};

const results = calculateInvestment(investmentData);

printResults(results);