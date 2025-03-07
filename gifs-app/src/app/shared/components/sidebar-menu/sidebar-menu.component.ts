import { Component } from '@angular/core';
import { SidebarMenuItemComponent } from './menu-item/menu-item.component';

@Component({
  selector: 'app-sidebar-menu',
  imports: [SidebarMenuItemComponent],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css',
})
export class SidebarMenuComponent {}
