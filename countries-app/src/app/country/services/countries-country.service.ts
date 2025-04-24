import { catchError, map, Observable, throwError } from 'rxjs';
import { Country } from '../models';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CountryResponse } from '../models/response';
import { environment } from '@country-env/environment';
import { CountryMapper } from '../mappers';

export interface CountryService {
  searchByCode(code: string): Observable<Country | undefined>;
}

export class CountryServiceImpl implements CountryService {
  private httpClient: HttpClient = inject(HttpClient);

  searchByCode(code: string): Observable<Country | undefined> {
    code = code.toLowerCase();
    return this.httpClient
      .get<CountryResponse[]>(`${environment.countriesUrl}/alpha/${code}`)
      .pipe(
        map((response) => response.map(CountryMapper.countryResponseToCountry)),
        map((response) => response.at(0)),
        catchError(() => {
          return throwError(
            () => new Error('Could not find country with this code.'),
          );
        }),
      );
  }
}
