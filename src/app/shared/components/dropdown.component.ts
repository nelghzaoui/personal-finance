import {
  ChangeDetectionStrategy,
  Component,
  input,
  output
} from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'tx-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatMenuModule, MatIconModule, NgClass],
  template: `
    <button
      [matMenuTriggerFor]="menu"
      type="button"
      [attr.aria-label]="dropdownId()"
      class="rounded-full"
    >
      <img [src]="imagePath()" alt="" class="w-5 h-5" />
    </button>

    <mat-menu [id]="dropdownId()" #menu="matMenu">
      <ul>
        @for (item of items(); track item) {
          <li>
            <button
              (click)="select.emit(item)"
              mat-menu-item
              [ngClass]="{
                '!bg-grey-900 !text-white': item === selectedItem()
              }"
            >
              <span>{{ item }}</span>
            </button>
          </li>
        }
      </ul>
    </mat-menu>
  `,
  styles: ``
})
export class DropdownComponent {
  dropdownId = input<string>();
  imagePath = input<string>();
  items = input<string[]>();
  selectedItem = input<string>();
  select = output<string>();
}
