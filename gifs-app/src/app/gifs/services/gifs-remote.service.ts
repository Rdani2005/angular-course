import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import {
  computed,
  effect,
  inject,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { environment } from '@gifs-env/environment';
import { GifsService } from './gifs.service';
import { GifSearchHistory, type Gif } from '../models';
import { type GiphyResponse } from '../models/request';
import { GifMapper } from '../mappers/giph.mapper';
import { safeParse } from 'valibot';

const HISTORY_LOCAL_STORAGE_KEY = 'searchHistory';

function loadHistoryFromLocalStorage(): GifSearchHistory {
  const historyJson = localStorage.getItem(HISTORY_LOCAL_STORAGE_KEY);
  if (!historyJson) return {};

  const parsedObj = JSON.parse(historyJson);
  const parsedHistory = safeParse(GifSearchHistory, parsedObj);
  return parsedHistory.success ? parsedHistory.output : {};
}

@Injectable()
export class GifsHttpService implements GifsService {
  private http: HttpClient = inject(HttpClient);

  trendingGifs: WritableSignal<Gif[]> = signal<Gif[]>([]);
  searchHistory: WritableSignal<GifSearchHistory> = signal<GifSearchHistory>(
    loadHistoryFromLocalStorage(),
  );

  searchHistoryKeys: Signal<string[]> = computed<string[]>(() =>
    Object.keys(this.searchHistory()),
  );

  safeToLocalStorage = effect(() => {
    localStorage.setItem(
      HISTORY_LOCAL_STORAGE_KEY,
      JSON.stringify(this.searchHistory()),
    );
  });

  loadingTrendingGifs: WritableSignal<boolean> = signal<boolean>(true);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.loadingTrendingGifs.set(true);
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        },
      })
      .subscribe((response) => {
        const gifs: Gif[] = GifMapper.mapGiphyItemsToGiftArray(response.data);
        this.trendingGifs.set(gifs);
        this.loadingTrendingGifs.set(false);
      });
  }

  searchGifs(query: string): Observable<Gif[]> {
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
        params: { api_key: environment.giphyApiKey, q: query, limit: 20 },
      })
      .pipe(
        map((resp) => GifMapper.mapGiphyItemsToGiftArray(resp.data)),
        tap((gifs) => {
          this.searchHistory.update((history) => ({
            ...history,
            [query]: gifs,
          }));
        }),
      );
  }

  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query] ?? [];
  }
}
