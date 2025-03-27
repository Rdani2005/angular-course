import { Component } from '@angular/core';
import { TopMenuItemComponent } from '../top-menu-item';

@Component({
  selector: 'country-top-menu-item-list',
  imports: [TopMenuItemComponent],
  templateUrl: './top-menu-item-list.component.html',
  styleUrl: './top-menu-item-list.component.css',
})
export class TopMenuItemListComponent {}
