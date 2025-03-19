import { Component, inject, signal, WritableSignal } from '@angular/core';
import { GifListComponent } from '@gifs-app/gifs/components';
import { GifMapper } from '@gifs-app/gifs/mappers/giph.mapper';
import { GifListItem } from '@gifs-app/gifs/models';
import { GifsService } from '@gifs-app/gifs/services';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export default class SearchPageComponent {
  gifsService: GifsService = inject(GifsService);
  gifs: WritableSignal<GifListItem[]> = signal<GifListItem[]>([]);

  onSearch(query: string) {
    this.gifs.set([]);
    this.gifsService.gifsSearch.search(query).subscribe((response) => {
      this.gifs.set(GifMapper.mapGifArrayToGifListItemArray(response));
    });
  }
}
