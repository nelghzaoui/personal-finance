import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit
} from '@angular/core';
import { ButtonComponent, ColoredItemComponent, DonutComponent } from '@shared';
import { BudgetService } from '../../services/budget.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, ColoredItemComponent, DonutComponent],
  template: `
    <section
      aria-labelledby="transaction-title"
      class="flex flex-col gap-8 pt-4"
    >
      <div class="flex justify-between">
        <h1 id="transaction-title" class="text-preset-1">Budgets</h1>
        <tx-button label="+ Add New Budget" [style]="'primary'" />
      </div>

      <div class="bg-white rounded-2xl p-5 py-6 flex flex-col gap-2">
        <tx-donut [values]="budget.categories" [used]="338" [total]="975" />

        <p class="text-preset-2 pt-4 pb-2">Spending Summary</p>

        <ul class="grid grid-cols-2 gap-4 text-preset-4">
          @for (category of budget.categories; track category) {
            <tx-colored-item [item]="category" />
          }
        </ul>
      </div>
    </section>
  `
})
export class BudgetPage implements OnInit {
  private readonly budgetService = inject(BudgetService);
  readonly budget = this.budgetService.summary;
  ngOnInit() {}
}
