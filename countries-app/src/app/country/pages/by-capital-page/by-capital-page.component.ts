import { Component, inject, signal, WritableSignal } from '@angular/core';
import {
  CountryTableComponent,
  SearchInputComponent,
} from '@country-app/country/components';
import { Country } from '@country-app/country/models';
import { CountriesService } from '@country-app/country/services';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountryTableComponent, SearchInputComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent {
  countryService: CountriesService = inject(CountriesService);
  countries: WritableSignal<Country[]> = signal<Country[]>([]);

  onSearch(value: string) {
    this.countryService.byCapital
      .search(value)
      .subscribe((response) => this.countries.set(response));
  }
}
