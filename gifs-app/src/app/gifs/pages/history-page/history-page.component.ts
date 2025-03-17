import { Component, computed, inject, Signal } from '@angular/core';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { GifListComponent } from '@gifs-app/gifs/components';
import { GifMapper } from '@gifs-app/gifs/mappers/giph.mapper';
import { type Gif, type GifListItem } from '@gifs-app/gifs/models';
import { GifsService } from '@gifs-app/gifs/services';

@Component({
  selector: 'app-history-page',
  imports: [GifListComponent],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css',
})
export default class HistoryPageComponent {
  query: Signal<string | undefined> = toSignal<string>(
    inject(ActivatedRoute).params.pipe<string>(
      map((params) => params['query'] ?? ''),
    ),
  );
  gifService: GifsService = inject(GifsService);

  gifsByKey: Signal<Gif[]> = computed(() => {
    return this.gifService.getHistoryGifs(this.query() ?? '');
  });

  gifs: Signal<GifListItem[]> = computed(() => {
    return GifMapper.mapGifArrayToGifListItemArray(this.gifsByKey());
  });
}
