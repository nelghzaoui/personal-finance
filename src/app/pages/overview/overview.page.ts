import { Component, OnInit } from '@angular/core';
import { CardSectionComponent } from './components/card-link.component';

@Component({
  imports: [CardSectionComponent],
  template: `
    <section aria-labelledby="overview-title" class="flex flex-col gap-8">
      <h1 id="overview-title" class="text-preset-1">Overview</h1>

      <section aria-labelledby="summary-title">
        <h2 id="summary-title" class="sr-only">Summary</h2>

        <ul class="flex flex-col gap-4">
          <!-- Current Balance -->
          <li class="bg-grey-900 text-white rounded-2xl p-5">
            <h3 class="text-preset-4 mb-3">Current Balance</h3>
            <p class="text-preset-1">$4,836.00</p>
          </li>

          <!-- Income -->
          <li class="bg-white rounded-2xl p-5">
            <h3 class="text-preset-4 text-grey-500 mb-3">Income</h3>
            <p class="text-preset-1">$3,814.25</p>
          </li>

          <!-- Expenses -->
          <li class="bg-white rounded-2xl p-5">
            <h3 class="text-preset-4 text-grey-500 mb-1">Expenses</h3>
            <p class="text-preset-1">$1,700.50</p>
          </li>
        </ul>
      </section>

      <div class="flex flex-col gap-4">
        <!-- Pot Section -->
        <section aria-labelledby="pots-title">
          <tx-card-section
            [section]="{
              title: 'Pots',
              link: { label: 'See Details', url: '/pot' }
            }"
          >
            <!-- Total Saved -->
            <div
              class="bg-beige-100 rounded-xl p-4 flex items-center gap-4 mb-6"
            >
              <img src="/assets/images/icon-pot.svg" alt="" />
              <div class="flex flex-col gap-2">
                <h3 class="text-preset-4 text-grey-500">Total Saved</h3>
                <p class="text-preset-1">$850</p>
              </div>
            </div>

            <!-- Pots breakdown -->
            <ul class="grid grid-cols-2 gap-4 text-preset-5">
              <li class="flex items-start gap-2">
                <span class="w-1 h-full  bg-turquoise rounded"></span>
                <div class="flex flex-col gap-2">
                  <p class="text-grey-500 font-light">Savings</p>
                  <p class="text-preset-4 font-bold">$159</p>
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1 h-full bg-cyan rounded"></span>
                <div class="flex flex-col gap-2">
                  <p class="text-grey-500">Gift</p>
                  <p class="text-preset-4 font-bold">$40</p>
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1 h-full bg-grey-500 rounded"></span>
                <div class="flex flex-col gap-2">
                  <p class="text-grey-500">Concert Ticket</p>
                  <p class="text-preset-4 font-bold">$110</p>
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1 h-full bg-yellow rounded"></span>
                <div class="flex flex-col gap-2">
                  <p class="text-grey-500">New Laptop</p>
                  <p class="text-preset-4 font-bold">$10</p>
                </div>
              </li>
            </ul>
          </tx-card-section>
        </section>

        <!-- Transaction Section -->
        <section aria-labelledby="transactions-title">
          <tx-card-section
            [section]="{
              title: 'Transactions',
              link: { label: 'View All', url: '/transaction' }
            }"
          >
            <ul class="flex flex-col gap-4 pt-4">
              <li class="flex justify-between items-center">
                <img
                  src="/assets/images/avatars/emma-richardson.jpg"
                  alt=""
                  class="w-[32px] rounded-full"
                />
                <span class="text-preset-4 font-bold">Emma Richardson</span>
                <div class="flex flex-col gap-2 items-end">
                  <span class="text-preset-4 font-bold text-green-500">
                    +$75.50
                  </span>
                  <span class="text-preset-5 text-grey-500">19 Aug 2024</span>
                </div>
              </li>
              <div class="border border-grey-100"></div>
              <li class="flex justify-between items-center">
                <img
                  src="/assets/images/avatars/emma-richardson.jpg"
                  alt=""
                  class="w-[32px] rounded-full"
                />
                <span class="text-preset-4 font-bold">Emma Richardson</span>
                <div class="flex flex-col gap-2 items-end">
                  <span class="text-preset-4 font-bold text-green-500">
                    +$75.50
                  </span>
                  <span class="text-preset-5 text-grey-500">19 Aug 2024</span>
                </div>
              </li>
              <div class="border border-grey-100"></div>
              <li class="flex justify-between items-center">
                <img
                  src="/assets/images/avatars/emma-richardson.jpg"
                  alt=""
                  class="w-[32px] rounded-full"
                />
                <span class="text-preset-4 font-bold">Emma Richardson</span>
                <div class="flex flex-col gap-2 items-end">
                  <span class="text-preset-4 font-bold text-green-500">
                    +$75.50
                  </span>
                  <span class="text-preset-5 text-grey-500">19 Aug 2024</span>
                </div>
              </li>
              <div class="border border-grey-100"></div>
              <li class="flex justify-between items-center">
                <img
                  src="/assets/images/avatars/emma-richardson.jpg"
                  alt=""
                  class="w-[32px] rounded-full"
                />
                <span class="text-preset-4 font-bold">Emma Richardson</span>
                <div class="flex flex-col gap-2 items-end">
                  <span class="text-preset-4 font-bold text-green-500">
                    +$75.50
                  </span>
                  <span class="text-preset-5 text-grey-500">19 Aug 2024</span>
                </div>
              </li>
              <div class="border border-grey-100"></div>
              <li class="flex justify-between items-center">
                <img
                  src="/assets/images/avatars/emma-richardson.jpg"
                  alt=""
                  class="w-[32px] rounded-full"
                />
                <span class="text-preset-4 font-bold">Emma Richardson</span>
                <div class="flex flex-col gap-2 items-end">
                  <span class="text-preset-4 font-bold text-green-500">
                    +$75.50
                  </span>
                  <span class="text-preset-5 text-grey-500">19 Aug 2024</span>
                </div>
              </li>
            </ul>
          </tx-card-section>
        </section>

        <!-- Budget Section -->
        <section aria-labelledby="budgets-title">
          <tx-card-section
            [section]="{
              title: 'Budgets',
              link: { label: 'See Details', url: '/budget' }
            }"
          >
          </tx-card-section>
        </section>

        <!-- Bill Section -->
        <section aria-labelledby="bills-title">
          <tx-card-section
            [section]="{
              title: 'Bills',
              link: { label: 'See Details', url: '/bill' }
            }"
          >
          </tx-card-section>
        </section>
      </div>
    </section>
  `
})
export class OverviewPage implements OnInit {
  ngOnInit() {}
}
