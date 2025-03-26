import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="flex h-screen bg-[#f6f4f0]">
      <!-- Sidebar -->
      <aside class="w-[250px] bg-[#1e1e1e] text-white hidden lg:block"></aside>

      <!-- Main content -->
      <div class="flex-1 flex flex-col overflow-hidden bg-beige-100">
        <main class="flex-1 overflow-y-auto p-4 text-grey-900">
          <router-outlet />
        </main>

        <footer
          class="p-4 h-[52px] bg-[#1e1e1e] text-center text-gray-500 text-sm"
        >
          <ul class="flex justify-around">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </footer>
      </div>
    </div>
  `,
  styles: ``
})
export class AppComponent {
  title = 'personal-finance';
}
