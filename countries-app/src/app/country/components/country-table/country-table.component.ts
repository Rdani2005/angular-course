import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';
import { Country } from '@country-app/country/models';

@Component({
  selector: 'country-table',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css',
})
export class CountryTableComponent {
  countries: InputSignal<Country[]> = input.required<Country[]>();
}
