import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';
import {
  computed,
  inject,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { environment } from '@gifs-env/environment';
import { GifsService } from './gifs.service';
import { type Gif } from '../models';
import { GiphyResponse } from '../models/request';
import { GifMapper } from '../mappers/giph.mapper';

@Injectable()
export class GifsHttpService implements GifsService {
  private http: HttpClient = inject(HttpClient);

  trendingGifs: WritableSignal<Gif[]> = signal<Gif[]>([]);
  searchHistory: WritableSignal<Record<string, Gif[]>> = signal<
    Record<string, Gif[]>
  >({});
  searchHistoryKeys: Signal<string[]> = computed<string[]>(() =>
    Object.keys(this.searchHistory()),
  );

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

  searchGifs(query: string) {
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
