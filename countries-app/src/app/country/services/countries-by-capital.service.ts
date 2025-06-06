import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '@country-env/environment';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { type Country } from '../models';
import { type CountryResponse } from '../models/response';
import { CountryMapper } from '../mappers/';
import { CountriesCacheService } from './countries-cache.service';

export interface CountriesByCapitalService {
  search(query: string): Observable<Country[]>;
}

export class CountriesByCapitalServiceImpl
  extends CountriesCacheService
  implements CountriesByCapitalService
{
  private httpClient: HttpClient = inject(HttpClient);

  search(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    if (this.hasCache(query)) {
      return of(this.getFromCache(query) ?? []);
    }

    return this.httpClient
      .get<CountryResponse[]>(`${environment.countriesUrl}/capital/${query}`)
      .pipe(
        map((response) => response.map(CountryMapper.countryResponseToCountry)),
        tap((countries) => this.setToCache(query, countries)),
        catchError(() => {
          return throwError(
            () => new Error('Could not find country with this query.'),
          );
        }),
      );
  }
}
