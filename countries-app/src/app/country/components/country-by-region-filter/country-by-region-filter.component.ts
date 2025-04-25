import {
  Component,
  computed,
  effect,
  EffectRef,
  output,
  OutputEmitterRef,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { Region, regions } from '@country-app/country/models';

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

  selectedRegion: WritableSignal<Region> = signal<Region>(
    this.currentRegions()[0],
  );

  selectedRegionEffect: EffectRef = effect(() => {
    const region = this.selectedRegion();
    if (region) {
      this.onSearch.emit(region);
    }
  });
}
