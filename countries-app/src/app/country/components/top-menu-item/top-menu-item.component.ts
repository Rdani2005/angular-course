import { Component, input, InputSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'country-top-menu-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './top-menu-item.component.html',
  styleUrl: './top-menu-item.component.css',
})
export class TopMenuItemComponent {
  label: InputSignal<string> = input.required<string>();
  url: InputSignal<string> = input.required<string>();
}
