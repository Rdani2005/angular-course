import {
  Component,
  effect,
  EffectRef,
  output,
  OutputEmitterRef,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
})
export class SearchInputComponent {
  onSearch: OutputEmitterRef<string> = output<string>();

  inputValue: WritableSignal<string> = signal<string>('');

  debounceEffect: EffectRef = effect((onCleanup) => {
    const value = this.inputValue();
    const timeout = setTimeout(() => {
      this.onSearch.emit(value);
    }, 500);

    onCleanup(() => {
      clearTimeout(timeout);
    });
  });
}
