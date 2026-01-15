import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import {toSignal} from "@angular/core/rxjs-interop";

import { filter, map } from 'rxjs';

import { routes } from '../../../app.routes';

interface Route {
  path: string | undefined;
  title: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

  router: Router = inject(Router);

  routes: Array<Route> = routes
    .map((route) => ({
      path: route.path,
      title: `${route.title ?? "Angular Maps"}`,
    }))
    .filter((route) => route.path !== "**");

  pageTitle$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event) => event.url),
    map(
      (url) =>
        routes.find((route) => `/${route.path}` === url)?.title ?? 'Mapas'
    )
  );

  pageTitle = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => event.url),
      map(
        (url) =>
          routes.find((route) => `/${route.path}` === url)?.title ?? 'Mapas'
      )
    )
  );
}
