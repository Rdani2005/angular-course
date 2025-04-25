import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { type Country, Region } from '../models';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CountryResponse } from '../models/response';
import { environment } from '@country-env/environment';
import { CountryMapper } from '../mappers';
import { CountriesCacheService } from './countries-cache.service';

export interface CountriesByRegionService {
  search(query: Region): Observable<Country[]>;
}

export class CountriesByRegionServiceImpl
  extends CountriesCacheService
  implements CountriesByRegionService
{
  private httpClient: HttpClient = inject(HttpClient);

  search(query: Region): Observable<Country[]> {
    if (this.hasCache(query)) {
      return of(this.getFromCache(query) ?? []);
    }

    return this.httpClient
      .get<CountryResponse[]>(`${environment.countriesUrl}/region/${query}`)
      .pipe(
        map((response) => response.map(CountryMapper.countryResponseToCountry)),
        tap((countries) => this.setToCache(query, countries)),
        catchError((error) => {
          console.log(error);

          return throwError(
            () => new Error('Could not find countries with this region.'),
          );
        }),
      );
  }
}
