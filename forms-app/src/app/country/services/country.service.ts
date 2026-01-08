import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { combineLatest, Observable, of } from "rxjs";
import { Country } from "../pages/models/country.interface";

@Injectable({ providedIn: 'root' })
export class CountryService {
  private baseUrl = "https://restcountries.com/v3.1";
  httpClient: HttpClient = inject(HttpClient);

  private _regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regions(): string[] {
    return [...this._regions];
  }

  getCountriesByRegion( region: string ): Observable<Country[]> {
    if (!region) return of([]);

    const url = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;
    return this.httpClient.get<Country[]>(url);
  }


  getCountryByAlphaCode( code: string ): Observable<Country> {
    const url = `${this.baseUrl}/alpha/${code}?fields=cca3,name,borders`;
    return this.httpClient.get<Country>(url);
  }

  getCountryNamesByCodeArray(countryCodes: string[]): Observable<Country[]> {
    console.log({countryCodes});

    if (!countryCodes || countryCodes.length === 0) return of([]);

    const countriesRequests: Observable<Country>[] = [];

    countryCodes.forEach(code => {
      const request = this.getCountryByAlphaCode(code);
      countriesRequests.push(request);
    });

    return combineLatest(countriesRequests);
  }
}
