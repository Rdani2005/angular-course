import { Injectable } from '@angular/core';
import {
  CountriesByCapitalService,
  CountriesByCapitalServiceImpl,
} from './countries-by-capital.service';
import {
  CountriesByNameService,
  CountriesByNameServiceImpl,
} from './countries-by-name.service';
import {
  CountryService,
  CountryServiceImpl,
} from './countries-country.service';
import {
  CountriesByRegionService,
  CountriesByRegionServiceImpl,
} from './countries-by-region.service';

export abstract class CountriesService {
  abstract byCapital: CountriesByCapitalService;
  abstract byName: CountriesByNameService;
  abstract byRegion: CountriesByRegionService;
  abstract country: CountryService;
}

@Injectable()
export class CountriesServiceImpl implements CountriesService {
  byCapital: CountriesByCapitalService = new CountriesByCapitalServiceImpl();
  byName: CountriesByNameService = new CountriesByNameServiceImpl();
  country: CountryService = new CountryServiceImpl();
  byRegion: CountriesByRegionService = new CountriesByRegionServiceImpl();
}
