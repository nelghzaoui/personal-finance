import { Injectable } from '@angular/core';
import { BudgetSummary } from '../models/budget.type';

@Injectable({ providedIn: 'root' })
export class BudgetService {
  summary: BudgetSummary = {
    label: 'Budgets',
    value: 407,
    total: 975,
    categories: [
      { label: 'Entertainment', value: 25, total: 50, color: '#387d7a' },
      { label: 'Bills', value: 150, total: 700, color: '#8bd2e4' },
      { label: 'Dining Out', value: 133, total: 125, color: '#f4d4a5' },
      { label: 'Personal Care', value: 40, total: 100, color: '#696868' }
    ]
  };
}
