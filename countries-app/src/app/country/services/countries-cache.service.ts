import { Country } from '../models';

export abstract class CountriesCacheService {
  private queryCacheName = new Map<string, Country[]>();

  protected getFromCache(query: string): Country[] | undefined {
    return this.queryCacheName.get(query);
  }

  protected hasCache(query: string): boolean {
    return this.queryCacheName.has(query);
  }

  protected setToCache(query: string, countries: Country[]): void {
    this.queryCacheName.set(query, countries);
  }
}
