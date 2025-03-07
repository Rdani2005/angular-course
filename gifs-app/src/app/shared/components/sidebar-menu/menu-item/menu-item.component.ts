import { Component, input, InputSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu-item',
  templateUrl: './menu-item.component.html',
  imports: [RouterLink, RouterLinkActive],
  styleUrl: './menu-item.component.css',
})
export class SidebarMenuItemComponent {
  title: InputSignal<string> = input.required<string>();
  description: InputSignal<string> = input.required<string>();
  to: InputSignal<string> = input.required<string>();
}
