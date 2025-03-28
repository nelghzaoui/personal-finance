import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tx-pagination',
  imports: [NgClass],
  template: `
    <ul class="flex justify-center gap-2">
      <li>
        <button
          class="w-12 h-10 border border-grey-300 rounded-lg flex items-center justify-center text-preset-"
          aria-label="Previous page"
        >
          <img src="/assets/images/icon-caret-left.svg" alt="" />
        </button>
      </li>

      <li>
        <button
          [ngClass]="{ 'bg-grey-900 text-white border-grey-900': true }"
          class="w-11 h-10 border rounded-lg flex items-center justify-center text-preset-"
          aria-label="Previous page"
        >
          1
        </button>
      </li>

      <li>
        <button
          class="w-11 h-10 border border-grey-300 rounded-lg flex items-center justify-center text-preset-"
          aria-label="Previous page"
        >
          2
        </button>
      </li>

      <li>
        <button
          class="w-11 h-10 border border-grey-300 rounded-lg flex items-center justify-center text-preset-"
          aria-label="Previous page"
        >
          3
        </button>
      </li>

      <li>
        <button
          class="w-12 h-10 border border-grey-300 rounded-lg flex items-center justify-center text-preset-"
          aria-label="Previous page"
        >
          <img src="/assets/images/icon-caret-right.svg" alt="" />
        </button>
      </li>
    </ul>
  `
})
export class PaginationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
