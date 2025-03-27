import { Component } from '@angular/core';
import {
  CountryTableComponent,
  SearchInputComponent,
} from '@country-app/country/components';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountryTableComponent, SearchInputComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent {
  onSearch(value: string) {
    console.log({ value });
  }
}
