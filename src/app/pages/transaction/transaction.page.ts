import { Component, inject, OnInit } from '@angular/core';
import { TransactionListComponent } from './components/list.component';
import { TransactionItem } from '../../models/transaction.type';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: '',
  imports: [TransactionListComponent],
  template: `
    <section
      aria-labelledby="transaction-title"
      class="flex flex-col gap-8 pt-4"
    >
      <h1 id="transaction-title" class="text-preset-1">Transactions</h1>

      <div class="bg-white rounded-2xl p-5 py-6 flex flex-col gap-2">
        <tx-transaction-list [items]="transactions" />
      </div>
    </section>
  `
})
export class TransactionPage implements OnInit {
  private readonly transactionService = inject(TransactionService);
  transactions: TransactionItem[] = this.transactionService.transactions;
  ngOnInit() {}
}
