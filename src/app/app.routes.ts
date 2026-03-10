import { Routes } from '@angular/router';
import { MainLayout } from './layout/main/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./features/home/home').then((m) => m.Home),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
