export interface Budget {
    id: number;
    userID: number;
    budgetName: string;
    budgetAmount: number;
    budgetAmountRemaining: number;
    budgetCategory: string;
    budgetStartDate: string;
    budgetEndDate: string;
    budgetTimePeriod: string;
  }