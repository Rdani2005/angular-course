import { Component, input, InputSignal } from '@angular/core';
import { type MenuItem } from '@forms-app/shared/models';
import { SideMenuItemComponent } from '../side-menu-item';

@Component({
  selector: 'side-menu-item-group',
  imports: [SideMenuItemComponent],
  templateUrl: './side-menu-item-group.component.html',
  styles: ``,
})
export class SideMenuItemGroupComponent {
  title: InputSignal<string> = input.required<string>();
  menuItems: InputSignal<MenuItem[]> = input.required<MenuItem[]>();
}
