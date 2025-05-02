import { Component } from '@angular/core';
import { routes } from '@pipes-app/app.routes';
import { NavbarMapper } from '@pipes-app/mappers';
import { NavBarItem } from '@pipes-app/models';
import { NavbarItemComponent } from '../navbar-item';

@Component({
  selector: 'navbar-routes-list',
  imports: [NavbarItemComponent],
  templateUrl: './navbar-routes-list.component.html',
  styles: ``,
})
export class NavbarRoutesListComponent {
  routes: NavBarItem[] = routes.map(NavbarMapper.routeToNavBarItem);
}
