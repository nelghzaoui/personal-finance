import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/overview/overview.routes').then((m) => m.routes)
  },
  {
    path: 'transaction',
    loadChildren: () =>
      import('./pages/transaction/transaction.routes').then((m) => m.routes)
  },
  {
    path: 'budget',
    loadChildren: () =>
      import('./pages/budget/budget.routes').then((m) => m.routes)
  },
  {
    path: 'pot',
    loadChildren: () => import('./pages/pot/pot.routes').then((m) => m.routes)
  },
  {
    path: 'bill',
    loadChildren: () => import('./pages/bill/bill.routes').then((m) => m.routes)
  }
];
