import {
  Component,
  inject,
  ResourceRef,
  signal,
  WritableSignal,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryTableComponent } from '@country-app/country/components';
import { CountryByRegionFilterComponent } from '@country-app/country/components/country-by-region-filter';
import { Country, Region } from '@country-app/country/models';
import { CountriesService } from '@country-app/country/services';
import { of } from 'rxjs';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryByRegionFilterComponent, CountryTableComponent],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent {
  countryService: CountriesService = inject(CountriesService);
  region: WritableSignal<Region> = signal<Region>('Americas');

  countryRxs: ResourceRef<Country[] | undefined> = rxResource<
    Country[],
    { query: Region }
  >({
    request: () => ({ query: this.region() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);
      return this.countryService.byRegion.search(request.query);
    },
  });
}
