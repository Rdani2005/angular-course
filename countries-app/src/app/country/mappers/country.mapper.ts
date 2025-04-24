import { type Country } from '../models';
import { type CountryResponse } from '../models/response';

export class CountryMapper {
  private constructor() {}

  static countryResponseToCountry(response: CountryResponse): Country {
    return {
      name: response.name.common,
      capital: response.capital[0],
      population: response.population,
      flag: response.flag,
      flagSvg: response.flags.svg,
      cca2: response.cca2,
      region: response.region,
      subRegion: response.subregion,
    };
  }
}
