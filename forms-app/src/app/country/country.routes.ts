import { Routes } from '@angular/router';
import { CountryPageComponent } from './pages';

export const countryRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'country',
        component: CountryPageComponent,
        title: 'Country Page',
      },
      {
        path: '**',
        redirectTo: 'country',
      },
    ],
  },
];
