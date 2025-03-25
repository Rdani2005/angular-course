import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages';
import { CountryLayoutComponent } from './layout';

const routes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];

export default routes;
