import {
  Component,
  effect,
  EffectRef,
  inject,
  linkedSignal,
  output,
  OutputEmitterRef,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
})
export class SearchInputComponent {
  onSearch: OutputEmitterRef<string> = output<string>();

  activeRoute = inject(ActivatedRoute);
  router = inject(Router);
  queryParam = this.activeRoute.snapshot.queryParamMap.get('query') ?? '';

  inputValue: WritableSignal<string> = linkedSignal<string>(() => {
    return this.queryParam ?? '';
  });

  debounceEffect: EffectRef = effect((onCleanup) => {
    const value = this.inputValue();
    const timeout = setTimeout(() => {
      this.onSearch.emit(value);
      this.router.navigate([], {
        relativeTo: this.activeRoute,
        queryParams: { query: value },
        queryParamsHandling: 'merge',
      });
    }, 500);

    onCleanup(() => {
      clearTimeout(timeout);
    });
  });
}
