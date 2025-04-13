import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output
} from '@angular/core';

@Component({
  selector: 'tx-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
  template: `
    <ul class="flex justify-center gap-2">
      @if (currentPage() !== 1) {
        <li>
          <button
            class="w-12 h-10 border border-grey-300 rounded-lg flex items-center justify-center text-preset-"
            aria-label="Previous page"
            (click)="previous.emit()"
          >
            <img src="/assets/images/icon-caret-left.svg" alt="" />
          </button>
        </li>
      }

      @if (totalPages(); as totalPages) {
        @for (page of pageRange(); track page; let i = $index) {
          <li>
            <button
              [ngClass]="{
                'bg-grey-900 text-white border-grey-900': i + 1 == currentPage()
              }"
              class="w-11 h-10 border rounded-lg flex items-center justify-center text-preset-"
              [attr.aria-label]="'Current page ' + currentPage()"
              (click)="goTo.emit(i + 1)"
            >
              {{ i + 1 }}
            </button>
          </li>
        }

        @if (currentPage() < totalPages) {
          <li>
            <button
              class="w-12 h-10 border border-grey-300 rounded-lg flex items-center justify-center text-preset-"
              aria-label="Previous page"
              (click)="next.emit()"
            >
              <img src="/assets/images/icon-caret-right.svg" alt="" />
            </button>
          </li>
        }
      }
    </ul>
  `
})
export class PaginationComponent {
  /* Inputs */
  currentPage = input<number>(1);
  totalPages = input<number>();
  readonly pageRange = computed(() =>
    Array.from({ length: this.totalPages()! }, (_, i) => i + 1)
  );

  /* Outputs*/
  previous = output();
  goTo = output<number>();
  next = output();
}
