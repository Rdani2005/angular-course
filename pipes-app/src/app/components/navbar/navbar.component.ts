import { Component } from '@angular/core';
import { NavbarMapper } from '@pipes-app/mappers';
import { NavBarItem } from '@pipes-app/models';
import { routes } from '@pipes-app/app.routes';
import { NavbarRoutesListComponent } from '../navbar-routes-list';

@Component({
  selector: 'app-navbar',
  imports: [NavbarRoutesListComponent],
  templateUrl: './navbar.component.html',
  styles: ``,
})
export class NavbarComponent {
  routes: NavBarItem[] = routes.map(NavbarMapper.routeToNavBarItem);
}
