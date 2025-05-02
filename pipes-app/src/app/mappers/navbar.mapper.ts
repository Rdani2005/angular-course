import { Route } from '@angular/router';
import { NavBarItem } from '@pipes-app/models';

export class NavbarMapper {
  private constructor() {}

  static routeToNavBarItem(route: Route): NavBarItem {
    let title = '';

    if (typeof route.title === 'string') {
      title = route.title;
    }

    return {
      title,
      path: route.path ?? '',
    };
  }
}
