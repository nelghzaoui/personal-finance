export type BudgetSummary = {
  label: string;
  value: number;
  total: number;
  categories: BudgetCategory[];
};

export type BudgetCategory = {
  label: string;
  value: number;
  total: number;
  color: string;
};
