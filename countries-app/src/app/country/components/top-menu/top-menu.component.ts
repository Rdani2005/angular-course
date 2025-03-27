import { Component } from '@angular/core';
import { TopMenuItemListComponent } from '../top-menu-item-list';

@Component({
  selector: 'country-top-menu',
  imports: [TopMenuItemListComponent],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css',
})
export class TopMenuComponent {}
