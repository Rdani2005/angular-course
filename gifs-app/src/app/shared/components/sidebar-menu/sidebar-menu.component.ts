import { Component } from '@angular/core';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarOptionsComponent } from './sidebar-options/sidebar-options.component';

@Component({
  selector: 'app-sidebar-menu',
  imports: [SidebarHeaderComponent, SidebarOptionsComponent],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css',
})
export class SidebarMenuComponent {}
