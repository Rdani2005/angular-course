import { Signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { type Gif } from '../models';

export abstract class GifsService {
  abstract trendingGifs: WritableSignal<Gif[]>;
  abstract searchHistoryKeys: Signal<string[]>;
  abstract searchHistory: WritableSignal<Record<string, Gif[]>>;
  abstract loadingTrendingGifs: WritableSignal<boolean>;
  abstract loadTrendingGifs(): void;
  abstract searchGifs(query: string): Observable<Gif[]>;
  abstract getHistoryGifs(query: string): Gif[];
}
