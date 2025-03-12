import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarMenuComponent } from '@gifs-app/shared/components';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, SidebarMenuComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
})
export default class DashboardPageComponent {}
