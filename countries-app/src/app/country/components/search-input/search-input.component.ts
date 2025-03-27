import { Component, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
})
export class SearchInputComponent {
  onSearch: OutputEmitterRef<string> = output<string>();
}
