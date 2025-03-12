import { Component, input, type InputSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { type MenuOption } from '@gifs-app/shared/models';

@Component({
  selector: 'app-sidebar-menu-item',
  templateUrl: './menu-item.component.html',
  imports: [RouterLink, RouterLinkActive],
  styleUrl: './menu-item.component.css',
})
export class SidebarMenuItemComponent {
  information: InputSignal<MenuOption> = input.required<MenuOption>();
}
