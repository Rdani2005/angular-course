import { Routes } from '@angular/router';
import {
  BasicPageComponent,
  DynamicPageComponent,
  SwitchesPageComponent,
} from './pages';

export const reactiveRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        component: BasicPageComponent,
        title: 'Basic Form',
      },
      {
        path: 'dynamic',
        component: DynamicPageComponent,
        title: 'Dynamic Form',
      },
      {
        path: 'switch',
        component: SwitchesPageComponent,
        title: 'Switch Form',
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];
