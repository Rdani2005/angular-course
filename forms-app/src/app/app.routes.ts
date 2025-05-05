import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () => import(`./reactive`).then((m) => m.reactiveRoutes),
  },
  {
    path: 'auth',
    loadChildren: () => import(`./auth`).then((m) => m.authRoutes),
  },
  {
    path: 'country',
    loadChildren: () => import(`./country`).then((m) => m.countryRoutes),
  },
];
