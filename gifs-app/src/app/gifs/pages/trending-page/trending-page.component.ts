import { Component, computed, inject, Signal } from '@angular/core';
import { GifListComponent } from '@gifs-app/gifs/components';
import { GifMapper } from '@gifs-app/gifs/mappers/giph.mapper';
import { type GifListItem } from '@gifs-app/gifs/models';
import { GifsService } from '@gifs-app/gifs/services';

@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css',
})
export default class TrendingPageComponent {
  gifService: GifsService = inject(GifsService);
  gifs: Signal<GifListItem[]> = computed(() =>
    GifMapper.mapGifArrayToGifListItemArray(this.gifService.trendingGifs()),
  );
}
