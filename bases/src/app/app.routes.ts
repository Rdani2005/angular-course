import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page/dragonball-super-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'heroes',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent,
  },
];
