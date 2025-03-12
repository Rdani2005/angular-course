import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '@gifs-env/environment';
import { type GiphyResponse } from '../models/request';
import { type Gif } from '../models';
import { GifMapper } from '../mappers/giph.mapper';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private http: HttpClient = inject(HttpClient);

  trendingGifs: WritableSignal<Gif[]> = signal<Gif[]>([]);
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
}
