import { Route, Routes } from '@angular/router';
import { type MenuItem } from '../models';

export class RoutesMapper {
  private constructor() {}

  static mapRouteToReactiveMenuItem(route: Route): MenuItem {
    return {
      route: `/reactive/${route.path}`,
      title: `${route.title}`,
    };
  }

  static mapRoutesToReactiveMenu(routes: Routes): MenuItem[] {
    return routes
      .filter((route) => route.path !== '**')
      .map(this.mapRouteToReactiveMenuItem);
  }

  static mapRouteToAuthMenuItem(route: Route): MenuItem {
    return {
      route: `/auth/${route.path}`,
      title: `${route.title}`,
    };
  }

  static mapRoutesToAuthMenu(routes: Routes): MenuItem[] {
    return routes
      .filter((route) => route.path !== '**')
      .map(this.mapRouteToAuthMenuItem);
  }

  static mapRouteToCountryMenuItem(route: Route): MenuItem {
    return {
      route: `/country/${route.path}`,
      title: `${route.title}`,
    };
  }

  static mapRoutesToCountryMenu(routes: Routes): MenuItem[] {
    return routes
      .filter((route) => route.path !== '**')
      .map(this.mapRouteToCountryMenuItem);
  }
}
