import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Basic Pipes',
    loadComponent: () => import('./pages').then((m) => m.BasicPageComponent),
  },
  {
    path: 'numbers',
    title: 'Numbers Pipes',
    loadComponent: () => import('./pages').then((m) => m.NumbersPageComponent),
  },
  {
    path: 'uncommon',
    title: 'Uncommon Pipes',
    loadComponent: () => import('./pages').then((m) => m.UncommonPageComponent),
  },
  {
    path: 'custom',
    title: 'Custom Pipes',
    loadComponent: () => import('./pages').then((m) => m.NumbersPageComponent),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
