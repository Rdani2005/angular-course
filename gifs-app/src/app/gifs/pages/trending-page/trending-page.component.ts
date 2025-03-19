import {
  AfterViewInit,
  Component,
  computed,
  inject,
  Signal,
  viewChild,
} from '@angular/core';
import { GifListComponent } from '@gifs-app/gifs/components';
import { GifMapper } from '@gifs-app/gifs/mappers/giph.mapper';
import { type GifListItem } from '@gifs-app/gifs/models';
import { GifsService } from '@gifs-app/gifs/services';
import { ScrollStateService } from '@gifs-app/shared/services/services/scroll-state';

@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css',
})
export default class TrendingPageComponent implements AfterViewInit {
  gifService: GifsService = inject(GifsService);
  gifs: Signal<GifListItem[]> = computed(() =>
    GifMapper.mapGifArrayToGifListItemArray(
      this.gifService.trendingGifs.gifs(),
    ),
  );
  scrollStateService = inject(ScrollStateService);

  scrollDivRef = viewChild(GifListComponent);

  handleScroll(_: Event) {
    const scrollDiv = this.scrollDivRef()?.divRef()?.nativeElement;

    if (!scrollDiv) {
      return;
    }

    const { scrollHeight, clientHeight, scrollTop } = scrollDiv;
    const totalScroll = scrollTop + clientHeight;
    const isAtBottom = totalScroll + 300 >= scrollHeight;
    this.scrollStateService.trendingScrollState.set(scrollTop);

    if (isAtBottom) {
      this.gifService.trendingGifs.loadGifs();
    }
  }

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.divRef()?.nativeElement;

    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }
}
