import { DecimalPipe } from '@angular/common';
import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { Country } from '@country-app/country/models';

@Component({
  selector: 'country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information.component.html',
  styleUrl: './country-information.component.css',
})
export class CountryInformationComponent {
  country: InputSignal<Country> = input.required<Country>();
  currentYear: Signal<number> = computed<number>(() =>
    new Date().getFullYear(),
  );
}
