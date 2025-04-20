import {
  Component,
  inject,
  resource,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  CountryTableComponent,
  SearchInputComponent,
} from '@country-app/country/components';
import { Country } from '@country-app/country/models';
import { CountriesService } from '@country-app/country/services';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountryTableComponent, SearchInputComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent {
  countryService: CountriesService = inject(CountriesService);
  query: WritableSignal<string> = signal<string>('');

  countryRxs = resource<Country[], { query: string }>({
    request: () => ({ query: this.query() }),
    loader: async ({ request }) => {
      if (!request.query) return [];
      return await firstValueFrom(
        this.countryService.byCapital.search(request.query),
      );
    },
  });
}
