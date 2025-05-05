import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { SideMenuItemGroupComponent } from '../side-menu-item-group';
import { authRoutes } from '@forms-app/auth';
import { countryRoutes } from '@forms-app/country';
import { reactiveRoutes } from '@forms-app/reactive';
import { type MenuItem } from '@forms-app/shared/models';
import { RoutesMapper } from '@forms-app/shared/mappers';

const reactiveItems: Routes = reactiveRoutes[0].children ?? [];
const authItems: Routes = authRoutes[0].children ?? [];
const countryItems: Routes = countryRoutes[0].children ?? [];

@Component({
  selector: 'side-menu-routes-group',
  imports: [SideMenuItemGroupComponent],
  templateUrl: './side-menu-routes-group.component.html',
  styles: ``,
})
export class SideMenuRoutesGroupComponent {
  reactiveMenu: MenuItem[] =
    RoutesMapper.mapRoutesToReactiveMenu(reactiveItems);
  authMenu: MenuItem[] = RoutesMapper.mapRoutesToAuthMenu(authItems);
  countryMenu: MenuItem[] = RoutesMapper.mapRoutesToCountryMenu(countryItems);
}
