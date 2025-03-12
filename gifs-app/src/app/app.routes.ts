import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('@gifs-app/gifs/pages/dashboard-page/dashboard-page.component'),
    children: [
      {
        path: 'trending',
        loadComponent: () =>
          import('@gifs-app/gifs/pages/trending-page/trending-page.component'),
      },

      {
        path: 'search',
        loadComponent: () =>
          import('@gifs-app/gifs/pages/search-page/search-page.component'),
      },
      {
        path: '**',
        redirectTo: 'trending',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
