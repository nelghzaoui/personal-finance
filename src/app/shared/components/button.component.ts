import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'tx-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
  template: `
    <button
      type="button"
      class="text-preset-4 font-bold rounded-lg cursor-pointer text-white p-4 transition-colors duration-200"
      [ngClass]="{
        'bg-grey-900 hover:bg-grey-500': style() === 'primary',
        'bg-grey-100 text-grey-900 hover:bg-white hover:border hover:border-grey-500':
          style() === 'secondary',
        'flex justify-between p-0 gap-4 text-grey-500 font-normal hover:text-grey-900':
          style() === 'tertiary',
        'bg-red hover:bg-red-300': style() === 'destroy'
      }"
    >
      {{ label() }}

      @if (style() === 'tertiary') {
        <img src="/assets/images/icon-caret-right.svg" alt="" />
      }
    </button>
  `
})
export class ButtonComponent {
  label = input<string>();
  style = input<Style>();
}

type Style = 'primary' | 'secondary' | 'tertiary' | 'destroy';
