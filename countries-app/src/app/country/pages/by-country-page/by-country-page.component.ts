import {
  Component,
  inject,
  ResourceRef,
  signal,
  WritableSignal,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import {
  CountryTableComponent,
  SearchInputComponent,
} from '@country-app/country/components';
import { Country } from '@country-app/country/models';
import { CountriesService } from '@country-app/country/services';
import { of } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  imports: [CountryTableComponent, SearchInputComponent],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent {
  countryService: CountriesService = inject(CountriesService);
  query: WritableSignal<string> = signal<string>('');

  countryRxs: ResourceRef<Country[] | undefined> = rxResource<
    Country[],
    { query: string }
  >({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);
      return this.countryService.byName.search(request.query);
    },
  });
}
