import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollStateService {
  trendingScrollState: WritableSignal<number> = signal(0);
}
