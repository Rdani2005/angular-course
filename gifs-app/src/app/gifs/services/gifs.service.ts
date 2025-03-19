import {
  TrendingGifsService,
  TrendingRemoteGifsService,
} from './trending-gifs.service';
import {
  SearchGifsRemoteService,
  SearchGifsService,
} from './gifs-history.service';
import { Injectable } from '@angular/core';

export abstract class GifsService {
  abstract trendingGifs: TrendingGifsService;
  abstract gifsSearch: SearchGifsService;
}

@Injectable()
export class GifsHttpService implements GifsService {
  trendingGifs: TrendingGifsService = new TrendingRemoteGifsService();
  gifsSearch: SearchGifsService = new SearchGifsRemoteService();
}
