import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  output
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tx-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  template: `
    <label for="Search">
      <div class="relative">
        <input
          type="text"
          id="Search"
          [placeholder]="label()"
          [(ngModel)]="search"
          (ngModelChange)="searched.emit(search)"
          class="mt-0.5 w-full rounded-lg border border-grey-300 py-2 ps-5 text-preset-4"
        />

        <span class="absolute inset-y-0 right-2 grid w-8 place-content-center">
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
  `
})
export class SearchComponent implements OnInit {
  label = input<string>();
  searched = output<string>();
  search: string = '';

  constructor() {}

  ngOnInit() {}
}
