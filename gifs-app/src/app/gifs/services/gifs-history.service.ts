import { map, Observable, tap } from 'rxjs';
import { Gif, GifSearchHistory } from '../models';
import {
  computed,
  inject,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { safeParse } from 'valibot';
import { HttpClient } from '@angular/common/http';
import { GiphyResponse } from '../models/request';
import { environment } from '@gifs-env/environment';
import { GifMapper } from '../mappers/giph.mapper';

const HISTORY_LOCAL_STORAGE_KEY = 'searchHistory';

export abstract class SearchGifsService {
  abstract search(query: string): Observable<Gif[]>;
  abstract historyKeys: Signal<string[]>;
  abstract history: WritableSignal<GifSearchHistory>;
  abstract getGifsByKey(query: string): Gif[];
}

export class SearchGifsRemoteService implements SearchGifsService {
  private http: HttpClient = inject(HttpClient);
  history: WritableSignal<GifSearchHistory> = signal<GifSearchHistory>(
    loadHistoryFromLocalStorage(),
  );
  historyKeys: Signal<string[]> = computed(() => Object.keys(this.history()));

  search(query: string): Observable<Gif[]> {
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
        params: { api_key: environment.giphyApiKey, q: query, limit: 20 },
      })
      .pipe(
        map((resp) => GifMapper.mapGiphyItemsToGiftArray(resp.data)),
        tap((gifs) => {
          this.history.update((history) => ({
            ...history,
            [query]: gifs,
          }));
        }),
      );
  }

  getGifsByKey(query: string): Gif[] {
    return this.history()[query] ?? [];
  }
}

function loadHistoryFromLocalStorage(): GifSearchHistory {
  const historyJson = localStorage.getItem(HISTORY_LOCAL_STORAGE_KEY);
  if (!historyJson) return {};

  const parsedObj = JSON.parse(historyJson);
  const parsedHistory = safeParse(GifSearchHistory, parsedObj);
  return parsedHistory.success ? parsedHistory.output : {};
}
