import { Component, inject, OnInit } from '@angular/core';
import { CardSectionComponent } from './components/card-link.component';
import { DonutComponent, ColoredItem, ColoredItemComponent } from '@shared';
import { TransactionListComponent } from '../transaction/components/list.component';
import { TransactionService } from '../../services/transaction.service';
import { TransactionItem } from '../../models/transaction.type';

@Component({
  imports: [
    CardSectionComponent,
    ColoredItemComponent,
    DonutComponent,
    TransactionListComponent
  ],
  template: `
    <section aria-labelledby="overview-title" class="flex flex-col gap-8 pt-4">
      <h1 id="overview-title" class="text-preset-1">Overview</h1>

      <section aria-labelledby="summary-title">
        <h2 id="summary-title" class="sr-only">Summary</h2>

        <ul class="flex flex-col gap-4">
          <!-- Current Balance -->
          <li class="bg-grey-900 text-white rounded-2xl p-5">
            <h3 class="text-preset-4 mb-3">Current Balance</h3>
            <p class="text-preset-1">$4,836.00</p>
          </li>

          <!-- Income -->
          <li class="bg-white rounded-2xl p-5">
            <h3 class="text-preset-4 text-grey-500 mb-3">Income</h3>
            <p class="text-preset-1">$3,814.25</p>
          </li>

          <!-- Expenses -->
          <li class="bg-white rounded-2xl p-5">
            <h3 class="text-preset-4 text-grey-500 mb-1">Expenses</h3>
            <p class="text-preset-1">$1,700.50</p>
          </li>
        </ul>
      </section>

      <div class="flex flex-col gap-4">
        <!-- Pot Section -->
        <section aria-labelledby="pots-title">
          <tx-card-section
            [section]="{
              title: 'Pots',
              link: { label: 'See Details', url: '/pot' }
            }"
          >
            <!-- Total Saved -->
            <div
              class="bg-beige-100 rounded-xl p-4 flex items-center gap-4 mb-6"
            >
              <img src="/assets/images/icon-pot.svg" alt="" />
              <div class="flex flex-col gap-2">
                <h3 class="text-preset-4 text-grey-500">Total Saved</h3>
                <p class="text-preset-1">$850</p>
              </div>
            </div>

            <!-- Pots breakdown -->
            <ul class="grid grid-cols-2 gap-4 text-preset-5">
              @for(item of potItems; track item) {
              <tx-colored-item [item]="item" />
              }
            </ul>
          </tx-card-section>
        </section>

        <!-- Transaction Section -->
        <section aria-labelledby="transactions-title">
          <tx-card-section
            [section]="{
              title: 'Transactions',
              link: { label: 'View All', url: '/transaction' }
            }"
          >
            <tx-transaction-list [items]="transactions" />
          </tx-card-section>
        </section>

        <!-- Budget Section -->
        <section aria-labelledby="budgets-title">
          <tx-card-section
            [section]="{
              title: 'Budgets',
              link: { label: 'See Details', url: '/budget' }
            }"
          >
            <tx-donut [values]="budgetItems" [used]="338" [total]="975" />

            <ul class="grid grid-cols-2 gap-4 text-preset-5 pt-2">
              @for(item of budgetItems; track item) {
              <tx-colored-item [item]="item" />
              }
            </ul>
          </tx-card-section>
        </section>

        <!-- Bill Section -->
        <section aria-labelledby="bills-title">
          <tx-card-section
            [section]="{
              title: 'Bills',
              link: { label: 'See Details', url: '/bill' }
            }"
          >
            <ul class="flex flex-col gap-2">
              <li class="relative bg-beige-100 rounded-r-2xl px-4 py-6">
                <span
                  class="absolute top-0 left-0 h-full w-[6px] bg-green-500 rounded-l-2xl z-10"
                ></span>
                <span
                  class="absolute top-0 left-[4px] h-full w-[10px] bg-beige-100 rounded z-20"
                ></span>
                <div class="flex justify-between">
                  <span class="text-preset-4 text-grey-500">Paid Bills</span>
                  <span class="text-preset-4 font-bold">$190.00</span>
                </div>
              </li>
              <li class="relative bg-beige-100 rounded-r-2xl px-4 py-6">
                <span
                  class="absolute top-0 left-0 h-full w-[6px] bg-yellow rounded-l-2xl z-10"
                ></span>
                <span
                  class="absolute top-0 left-[4px] h-full w-[10px] bg-beige-100 rounded z-20"
                ></span>
                <div class="flex justify-between">
                  <span class="text-preset-4 text-grey-500">Paid Bills</span>
                  <span class="text-preset-4 font-bold">$190.00</span>
                </div>
              </li>
              <li class="relative bg-beige-100 rounded-r-2xl px-4 py-6">
                <span
                  class="absolute top-0 left-0 h-full w-[6px] bg-cyan rounded-l-2xl z-10"
                ></span>
                <span
                  class="absolute top-0 left-[4px] h-full w-[10px] bg-beige-100 rounded z-20"
                ></span>
                <div class="flex justify-between">
                  <span class="text-preset-4 text-grey-500">Paid Bills</span>
                  <span class="text-preset-4 font-bold">$190.00</span>
                </div>
              </li>
            </ul>
          </tx-card-section>
        </section>
      </div>
    </section>
  `
})
export class OverviewPage implements OnInit {
  readonly potItems: ColoredItem[] = [
    { label: 'Savings', value: 159, color: 'green' },
    { label: 'Gift', value: 40, color: '#82c9d7' },
    { label: 'Concert Ticket', value: 110, color: '#696868' },
    { label: 'New Laptop', value: 10, color: '#f2cdac' }
  ];

  readonly budgetItems: ColoredItem[] = [
    { label: 'Entertainment', value: 50, color: '#387d7a' },
    { label: 'Bills', value: 750, color: '#8bd2e4' },
    { label: 'Dining Out', value: 75, color: '#f4d4a5' },
    { label: 'Personal Care', value: 100, color: '#696868' }
  ];

  private readonly transactionService = inject(TransactionService);
  transactions: TransactionItem[] = this.transactionService.transactions;

  ngOnInit(): void {}
}
