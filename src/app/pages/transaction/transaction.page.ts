import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { TransactionListComponent } from '../../shared/components/transaction-list.component';
import { TransactionItem } from '../../models/transaction.type';
import { TransactionService } from '../../services/transaction.service';
import { PaginationComponent } from '../../shared/components/pagination.component';

@Component({
  selector: '',
  imports: [TransactionListComponent, PaginationComponent],
  template: `
    <section
      aria-labelledby="transaction-title"
      class="flex flex-col gap-8 pt-4"
    >
      <h1 id="transaction-title" class="text-preset-1">Transactions</h1>

      <div class="bg-white rounded-2xl p-5 py-6 flex flex-col gap-2">
        <div class="flex justify-between">
          <label for="Search">
            <div class="relative">
              <input
                type="text"
                id="Search"
                placeholder="Search transaction"
                class="mt-0.5 w-full rounded-lg border border-grey-300 py-2 ps-5 text-preset-4"
              />

              <span
                class="absolute inset-y-0 right-2 grid w-8 place-content-center"
              >
                <button
                  type="button"
                  aria-label="Submit"
                  class="rounded-full p-1.5 transition-color"
                >
                  <img src="/assets/images/icon-search.svg" alt="search" />
                </button>
              </span>
            </div>
          </label>

          <button type="button" aria-label="Sort" class="rounded-full">
            <img
              src="/assets/images/icon-sort-mobile.svg"
              alt=""
              class="w-5 h-5"
            />
          </button>

          <button type="button" aria-label="Filter" class="rounded-full ">
            <img
              src="/assets/images/icon-filter-mobile.svg"
              alt=""
              class="w-5 h-5"
            />
          </button>
        </div>
        <tx-transaction-list [items]="paginatedItems()" />
        <!-- Pagination  -->
        @if (transactions.length > 10) {
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
  readonly transactions: TransactionItem[] =
    this.transactionService.transactions;

  filteredTransactions = signal(this.transactions);
  currentPage = signal<number>(1);
  readonly paginatedItems = computed(() => {
    const start = (this.currentPage() - 1) * 10;
    const end = this.currentPage() * 10;
    return this.filteredTransactions().slice(start, end);
  });
  readonly totalPages = computed(() =>
    Math.ceil(this.filteredTransactions().length / 10)
  );

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
