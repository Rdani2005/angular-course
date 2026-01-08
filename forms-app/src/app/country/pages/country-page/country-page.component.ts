import { JsonPipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '@forms-app/country/services/country.service';
import { Country } from '../models/country.interface';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent {
  fb: FormBuilder = inject(FormBuilder);
  countryService = inject(CountryService);

  myForm = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });


  regions = signal(this.countryService.regions)

  countriesByRegion = signal<Country[]>([]);
  borders = signal<Country[]>([]);

  onFormChanged = effect((onCleanup) => {
    const regionSubscription = this.onRegionChanged();
    const countrySubscription = this.onCountryChanged();

    onCleanup(() => {
      regionSubscription.unsubscribe();
      countrySubscription.unsubscribe();
    });
  });

  onRegionChanged() {
    return this.myForm.get("region")!
      .valueChanges
      .pipe(
        tap(() => {
          this.myForm.get('country')!.setValue("");
          this.myForm.get('border')!.setValue("");
          this.borders.set([]);
          this.countriesByRegion.set([]);
        }),
        switchMap(
          region => this.countryService.getCountriesByRegion(region ?? "")
        ),
      )
      .subscribe((countries) => {
        this.countriesByRegion.set(countries);
      });
  }

  onCountryChanged() {
    return this.myForm.get("country")!
    .valueChanges
      .pipe(
        tap(() => {
          this.myForm.get("border")!.setValue("");
        }),
        filter((value) => value!.length > 0),
        switchMap(alphaCode => this.countryService.getCountryByAlphaCode(alphaCode ?? "")),
        switchMap(country => this.countryService.getCountryNamesByCodeArray(country.borders)),
      )
      .subscribe((borders) => {
        this.borders.set(borders);
      });
  }
}
