import { Component, computed, inject, Signal } from '@angular/core';
import { SidebarMenuItemComponent } from '../menu-item/menu-item.component';
import { type MenuOption } from '@gifs-app/shared/models';
import { GifsService } from '@gifs-app/gifs/services';

@Component({
  selector: 'gifs-sidebar-options',
  imports: [SidebarMenuItemComponent],
  templateUrl: './sidebar-options.component.html',
  styleUrl: './sidebar-options.component.css',
})
export class SidebarOptionsComponent {
  items: Signal<MenuOption[]> = computed<MenuOption[]>(() => [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Popular Gifs',
      to: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      subLabel: 'Search Gifs',
      to: '/dashboard/search',
    },
  ]);

  gifsService: GifsService = inject(GifsService);

  history: Signal<MenuOption[]> = computed<MenuOption[]>(() => {
    const keys = this.gifsService.searchHistoryKeys();
    return keys.map((key) => ({
      icon: 'fa-solid fa-clock-rotate-left',
      label: key,
      subLabel: 'Search History',
      to: `/dashboard/search?q=${key}`,
    }));
  });
}
