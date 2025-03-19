import { inject, signal, WritableSignal } from '@angular/core';
import { Gif } from '../models';
import { HttpClient } from '@angular/common/http';
import { GiphyResponse } from '../models/request';
import { environment } from '@gifs-env/environment';
import { GifMapper } from '../mappers/giph.mapper';

const MAX_TRENDING_GIF_SIZE_PER_PAGE = 24;

export abstract class TrendingGifsService {
  abstract gifs: WritableSignal<Gif[]>;
  abstract loadGifs(): void;
}

export class TrendingRemoteGifsService implements TrendingGifsService {
  gifs: WritableSignal<Gif[]> = signal<Gif[]>([]);

  private http: HttpClient = inject(HttpClient);
  private isLoading: WritableSignal<boolean> = signal<boolean>(false);
  private trendingPage = signal(0);

  constructor() {
    this.loadGifs();
  }

  loadGifs() {
    if (this.isLoading()) return;
    this.isLoading.set(true);
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: this.getSearchParams(),
      })
      .subscribe((response) => this.subscribeToTrendingPage(response));
  }

  private subscribeToTrendingPage(response: GiphyResponse) {
    const gifs: Gif[] = GifMapper.mapGiphyItemsToGiftArray(response.data);
    this.gifs.update((previousGifs) => [...previousGifs, ...gifs]);
    this.trendingPage.update((page) => page + 1);
    this.isLoading.set(false);
  }

  private getSearchParams() {
    return {
      api_key: environment.giphyApiKey,
      limit: MAX_TRENDING_GIF_SIZE_PER_PAGE,
      offset: this.trendingPage() * MAX_TRENDING_GIF_SIZE_PER_PAGE,
    };
  }
}
