import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal
} from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

import {
  DropdownComponent,
  PaginationComponent,
  TransactionListComponent
} from '@shared';
import { SearchComponent } from './components/search.component';
import { TransactionItem } from '../../models/transaction.type';
import { TransactionService } from '../../services/transaction.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatMenuModule,
    PaginationComponent,
    TransactionListComponent,
    SearchComponent,
    DropdownComponent
  ],
  template: `
    <section
      aria-labelledby="transaction-title"
      class="flex flex-col gap-8 pt-4"
    >
      <h1 id="transaction-title" class="text-preset-1">Transactions</h1>

      <div class="bg-white rounded-2xl p-5 py-6 flex flex-col gap-2">
        <div class="flex justify-between">
          <tx-search
            label="Search transaction"
            (searched)="search.set($event)"
          />

          <tx-dropdown
            class="self-end"
            dropdownId="sort"
            [items]="sorts"
            [selectedItem]="sort()"
            imagePath="/assets/images/icon-sort-mobile.svg"
            (select)="onSort($event)"
          />

          <tx-dropdown
            class="self-end"
            dropdownId="filter"
            [items]="filters"
            [selectedItem]="filter()"
            imagePath="/assets/images/icon-filter-mobile.svg"
            (select)="onFilter($event)"
          />
        </div>
        <!-- List Items -->
        <tx-transaction-list [items]="paginatedItems()" />
        <!-- Pagination  -->
        @if (activeTransactions().length > 10) {
          <tx-pagination
            [currentPage]="currentPage()"
            [totalPages]="totalPages()"
            (previous)="onPrevious()"
            (goTo)="onGoTo($event)"
            (next)="onNext()"
          />
        }
      </div>
    </section>
  `
})
export class TransactionPage {
  private readonly transactionService = inject(TransactionService);
  private readonly transactions: TransactionItem[] =
    this.transactionService.transactions;

  readonly sorts = availableSorts;
  readonly filters = availableFilters;
  readonly activeTransactions = computed(() => {
    const query = this.search().toLowerCase();
    const activeFilter = this.filter();
    const activeSort = this.sort();

    return this.transactions
      .filter((tx) => {
        const matchSearch =
          tx.label.toLowerCase().includes(query) ||
          tx.description.toLowerCase().includes(query);

        const matchFilter =
          activeFilter === 'All Transactions' ||
          tx.description === activeFilter;

        return matchSearch && matchFilter;
      })
      .sort((a, b) => {
        switch (activeSort) {
          case 'Latest':
            return b.date.getTime() - a.date.getTime();
          case 'Oldest':
            return a.date.getTime() - b.date.getTime();
          case 'A to Z':
            return a.label.localeCompare(b.label);
          case 'Z to A':
            return b.label.localeCompare(a.label);
          case 'Highest':
            return b.price - a.price;
          case 'Lowest':
            return a.price - b.price;
          default:
            return 0;
        }
      });
  });
  currentPage = signal<number>(1);
  readonly paginatedItems = computed(() => {
    const start = (this.currentPage() - 1) * 10;
    const end = this.currentPage() * 10;
    return this.activeTransactions().slice(start, end);
  });
  readonly totalPages = computed(() =>
    Math.ceil(this.activeTransactions().length / 10)
  );
  search = signal('');
  sort = signal<string>('Latest');
  filter = signal<string>('All Transactions');

  onSort(value: string) {
    this.sort.set(value);
    this.currentPage.set(1);
  }

  onFilter(value: string) {
    this.filter.set(value);
    this.currentPage.set(1);
  }

  onPrevious() {
    if (this.currentPage() > 1) {
      this.currentPage.set(this.currentPage() - 1);
    }
  }

  onGoTo(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages()) {
      this.currentPage.set(pageNumber);
    }
  }

  onNext() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.set(this.currentPage() + 1);
    }
  }
}

export const availableSorts = [
  'Latest',
  'Oldest',
  'A to Z',
  'Z to A',
  'Highest',
  'Lowest'
];

export const availableFilters = [
  'All Transactions',
  'Entertainment',
  'Bills',
  'Groceries',
  'Dinning Out',
  'Transporation',
  'Personal Care'
];
