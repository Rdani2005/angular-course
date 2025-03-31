import { Injectable } from '@angular/core';
import {
  CountriesByCapitalService,
  CountriesByCapitalServiceImpl,
} from './countries-by-capital.service';

export abstract class CountriesService {
  abstract byCapital: CountriesByCapitalService;
}

@Injectable()
export class CountriesServiceImpl implements CountriesService {
  byCapital: CountriesByCapitalService = new CountriesByCapitalServiceImpl();
}
