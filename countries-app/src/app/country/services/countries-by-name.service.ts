import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { Country } from '../models';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CountryResponse } from '../models/response';
import { environment } from '@country-env/environment';
import { CountryMapper } from '../mappers';
import { CountriesCacheService } from './countries-cache.service';

export interface CountriesByNameService {
  search(query: string): Observable<Country[]>;
}

export class CountriesByNameServiceImpl
  extends CountriesCacheService
  implements CountriesByNameService
{
  private httpClient: HttpClient = inject(HttpClient);

  search(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    if (this.hasCache(query)) {
      return of(this.getFromCache(query) ?? []);
    }

    return this.httpClient
      .get<CountryResponse[]>(`${environment.countriesUrl}/name/${query}`)
      .pipe(
        map((response) => response.map(CountryMapper.countryResponseToCountry)),
        tap((countries) => this.setToCache(query, countries)),
        catchError(() => {
          return throwError(
            () => new Error('Could not find country with this name.'),
          );
        }),
      );
  }
}
