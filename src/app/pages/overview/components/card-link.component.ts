import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tx-card-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    @if (section(); as section) {
      <div class="bg-white rounded-2xl p-5 py-6 flex flex-col gap-2">
        <div class="flex items-center justify-between mb-4">
          <h2 id="{{ sectionId() }}-title" class="text-preset-2">
            {{ section.title }}
          </h2>

          @if (section.link) {
            <a
              [routerLink]="section.link.url"
              class="text-preset-4 text-grey-500 cursor-pointer justify-between flex items-center gap-4 hover:text-grey-900"
            >
              {{ section.link.label }}
              <img src="/assets/images/icon-caret-right.svg" alt="" />
            </a>
          }
        </div>

        <!-- Main content of the card -->
        <ng-content />
      </div>
    }
  `
})
export class CardSectionComponent {
  section = input<CardSection>();
  sectionId = computed(() => this.section()?.title.toLowerCase());
}

export type CardSection = {
  title: string;
  link: { label: string; url: string };
};
