import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'tx-donut',
  template: `
    <div
      class="relative w-50 h-50 rounded-full mx-auto"
      [style.background-image]="gradient()"
    >
      <div
        class="absolute inset-4 bg-white rounded-full flex flex-col items-center justify-center"
      >
        <p class="text-preset-1">$ {{ used() }}</p>
        <p class="text-preset-5 text-grey-500">of $ {{ total() }} limit</p>
      </div>
    </div>
  `
})
export class DonutComponent {
  values = input<Segment[]>([]);
  gradient = computed(() => {
    let current = 0;
    const segments = this.values().map((e) => {
      const start = (current / this.total()) * 100;
      const end = ((current + e.value) / this.total()) * 100;
      current += e.value;
      return `${e.color} ${start}% ${end}%`;
    });
    return `conic-gradient(${segments.join(',')})`;
  });
  total = input<number>(0);
  used = input<number>(0);
}

export type Segment = {
  label: string;
  value: number;
  color: string;
};
