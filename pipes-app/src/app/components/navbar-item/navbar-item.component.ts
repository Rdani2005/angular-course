import { Component, input, InputSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavBarItem } from '@pipes-app/models';

@Component({
  selector: 'navbar-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-item.component.html',
  styles: ``,
})
export class NavbarItemComponent {
  item: InputSignal<NavBarItem> = input.required<NavBarItem>();
}
