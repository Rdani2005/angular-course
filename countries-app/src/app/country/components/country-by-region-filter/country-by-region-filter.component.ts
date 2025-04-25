import {
  Component,
  computed,
  effect,
  EffectRef,
  inject,
  linkedSignal,
  output,
  OutputEmitterRef,
  Signal,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Region, regions } from '@country-app/country/models';

function validateQueryParam(param: string): Region {
  param = param.toLowerCase();
  const region = regions.find((region) => region.toLowerCase() === param);
  return region ?? regions[0];
}

@Component({
  selector: 'country-by-region-filters',
  imports: [],
  templateUrl: './country-by-region-filter.component.html',
  styleUrl: './country-by-region-filter.component.css',
})
export class CountryByRegionFilterComponent {
  onSearch: OutputEmitterRef<Region> = output<Region>();

  currentRegions: Signal<Region[]> = computed<Region[]>(() => {
    return regions;
  });

  activeRoute = inject(ActivatedRoute);
  router = inject(Router);
  queryParam = this.activeRoute.snapshot.queryParamMap.get('region') ?? '';

  selectedRegion: WritableSignal<Region> = linkedSignal<Region>(() => {
    return validateQueryParam(this.queryParam ?? '');
  });

  selectedRegionEffect: EffectRef = effect(() => {
    const region = this.selectedRegion();
    if (region) {
      this.onSearch.emit(region);
      this.router.navigate([], {
        relativeTo: this.activeRoute,
        queryParams: { region },
        queryParamsHandling: 'merge',
      });
    }
  });
}
