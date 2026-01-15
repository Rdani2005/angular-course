import { Routes } from '@angular/router';
import { FullscreenMapPageComponent, HousesPageComponent, MarkersPageComponent } from './pages';

export const routes: Routes = [
  {
    path: "fullscreen",
    component: FullscreenMapPageComponent,
    title: "FullScreen Map",
  },
  {
    path: "markers",
    component: MarkersPageComponent,
    title: "Markers",
  },
  {
    path: "houses",
    component: HousesPageComponent,
    title: "Casas - Propiedades disponibles",
  },
  {
    path: "**",
    redirectTo: "/fullscreen"
  },
];
