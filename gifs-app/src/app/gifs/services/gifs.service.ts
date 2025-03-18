import { Signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { GifSearchHistory, type Gif } from '../models';

export abstract class GifsService {
  abstract trendingGifs: WritableSignal<Gif[]>;
  abstract searchHistoryKeys: Signal<string[]>;
  abstract searchHistory: WritableSignal<GifSearchHistory>;
  abstract loadingTrendingGifs: WritableSignal<boolean>;
  abstract loadTrendingGifs(): void;
  abstract searchGifs(query: string): Observable<Gif[]>;
  abstract getHistoryGifs(query: string): Gif[];
}
