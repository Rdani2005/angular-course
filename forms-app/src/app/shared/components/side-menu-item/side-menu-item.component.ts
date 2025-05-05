import { Component, input, InputSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { type MenuItem } from '@forms-app/shared/models';

@Component({
  selector: 'side-menu-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-item.component.html',
  styles: ``,
})
export class SideMenuItemComponent {
  menuItem: InputSignal<MenuItem> = input.required<MenuItem>();
}
