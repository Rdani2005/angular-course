import { Component, computed, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { GifListComponent } from '@gifs-app/gifs/components';
import { GifMapper } from '@gifs-app/gifs/mappers/giph.mapper';
import { GifsService } from '@gifs-app/gifs/services';
import { map } from 'rxjs';

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
  gifService = inject(GifsService);

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query() ?? '');
  });

  gifs = computed(() => {
    return GifMapper.mapGifArrayToGifListItemArray(this.gifsByKey());
  });
}
