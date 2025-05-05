import { Routes } from '@angular/router';
import { RegisterPageComponent } from './pages';

export const authRoutes: Routes = [
  {
    path: '',
    children: [
      {
        title: 'Sign Up',
        path: 'sign-up',
        component: RegisterPageComponent,
      },
      {
        path: '**',
        redirectTo: 'sign-up',
      },
    ],
  },
];
