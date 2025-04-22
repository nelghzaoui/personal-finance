import { CurrencyPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'tx-colored-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe],
  template: `
    @if (item(); as item) {
      <li class="flex items-start h-full gap-2">
        <span
          [style.backgroundColor]="item.color"
          class="w-1 h-full rounded"
        ></span>
        <div class="flex flex-col gap-2">
          <span class="text-grey-500">{{ item.label }}</span>
          <div>
            <span class="text-preset-3 font-bold">
              {{ item.value | currency: 'USD' : 'symbol' : '1.0-0' }}
            </span>
            <span class="text-grey-500">
              of
              {{ item.total | currency: 'USD' : 'symbol' : '1.0-0' }}
            </span>
          </div>
        </div>
      </li>
    }
  `
})
export class ColoredItemComponent {
  item = input<ColoredItem>();
}

export type ColoredItem = {
  label: string;
  value: number;
  color: string;
  total?: number;
};
