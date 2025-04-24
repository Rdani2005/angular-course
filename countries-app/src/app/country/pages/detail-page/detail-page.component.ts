import { Component, inject, ResourceRef } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryInformationComponent } from '@country-app/country/components';
import { Country } from '@country-app/country/models';
import { CountriesService } from '@country-app/country/services';
import { NotFoundComponent } from '@country-app/shared/components';

@Component({
  selector: 'app-detail-page',
  imports: [NotFoundComponent, CountryInformationComponent],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css',
})
export class DetailPageComponent {
  countryCode = inject(ActivatedRoute).snapshot.paramMap.get('code') ?? '';
  countriesService = inject(CountriesService);
  countryRxs: ResourceRef<Country | undefined> = rxResource<
    Country | undefined,
    { code: string }
  >({
    request: () => ({ code: this.countryCode }),
    loader: ({ request }) =>
      this.countriesService.country.searchByCode(request.code),
  });
}
