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
  selector: 'app-by-capital-page',
  imports: [CountryTableComponent, SearchInputComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent {
  countryService: CountriesService = inject(CountriesService);
  query: WritableSignal<string> = signal<string>('');

  countryRxs: ResourceRef<Country[] | undefined> = rxResource<
    Country[],
    { query: string }
  >({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);
      return this.countryService.byCapital.search(request.query);
    },
  });
}
