import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TransactionItem } from '../../models/transaction.type';

@Component({
  selector: 'tx-transaction-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, DatePipe, CurrencyPipe],
  template: `
    <ul class="md:hidden flex flex-col">
      @for (item of items(); track item; let isLast = $last) {
        <li
          [ngClass]="{ 'border-b border-grey-100': !isLast }"
          class="flex justify-between items-center py-4"
        >
          <div class="flex gap-5 items-center">
            <img [src]="item.imagePath" alt="" class="w-[32px] rounded-full" />

            <div class="flex flex-col gap-2 items-start">
              <span class="text-preset-4 font-bold">{{ item.label }}</span>
              <span class="text-preset-5 font-light text-gray-500">{{
                item.description
              }}</span>
            </div>
          </div>

          <div class="flex flex-col gap-2 items-end">
            <span
              class="text-preset-4 font-bold"
              [ngClass]="{ 'text-green-500': item.price > 0 }"
            >
              {{ item.price | currency: 'USD' }}
            </span>
            <span class="text-preset-5 text-grey-500">
              {{ item.date | date: 'd MMM y' }}
            </span>
          </div>
        </li>
      }
    </ul>
  `
})
export class TransactionListComponent {
  items = input<TransactionItem[]>();
}
