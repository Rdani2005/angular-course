import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from '@country-app/country/components';

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './country-layout.component.html',
  styleUrl: './country-layout.component.css',
})
export class CountryLayoutComponent {}
