import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '@country-env/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { type Country } from '../models';
import { type CountryResponse } from '../models/response';
import { CountryMapper } from '../mappers/';

export abstract class CountriesByCapitalService {
  abstract search(query: string): Observable<Country[]>;
}

export class CountriesByCapitalServiceImpl
  implements CountriesByCapitalService
{
  private httpClient: HttpClient = inject(HttpClient);

  search(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    return this.httpClient
      .get<CountryResponse[]>(`${environment.countriesUrl}/capital/${query}`)
      .pipe(
        map((response) => response.map(CountryMapper.countryResponseToCountry)),
        catchError(() => {
          return throwError(
            () => new Error('Could not find country with this query.'),
          );
        }),
      );
  }
}
