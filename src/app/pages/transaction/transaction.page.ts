import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal
} from '@angular/core';
import { TransactionListComponent } from '../../shared/components/transaction-list.component';
import { TransactionItem } from '../../models/transaction.type';
import { TransactionService } from '../../services/transaction.service';
import { PaginationComponent } from '../../shared/components/pagination.component';
import { SearchComponent } from './components/search.component';
import { SearchPipe } from '../../shared/pipes/search.pipe';

@Component({
  selector: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PaginationComponent,
    TransactionListComponent,
    SearchComponent,
    SearchPipe
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
        <!-- List Items -->
        <tx-transaction-list
          [items]="
            paginatedItems() | search: search() : 'label' : 'description'
          "
        />
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
  search = signal('');

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
