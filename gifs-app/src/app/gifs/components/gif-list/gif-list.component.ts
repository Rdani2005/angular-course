import {
  Component,
  computed,
  ElementRef,
  input,
  output,
  viewChild,
  type InputSignal,
  type Signal,
} from '@angular/core';
import { type GifListItem } from '@gifs-app/gifs/models';
import { GifListItemComponent } from '../gif-list-item/gif-list-item.component';

@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css',
})
export class GifListComponent {
  gifs: InputSignal<GifListItem[]> = input.required<GifListItem[]>();
  groupedGifs: Signal<GifListItem[][]> = computed<GifListItem[][]>(() => {
    const groupedGifs: GifListItem[][] = [];
    for (let i = 0; i < this.gifs().length; i += 3) {
      groupedGifs.push(this.gifs().slice(i, i + 3));
    }
    return groupedGifs;
  });

  divRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  trackByItems(item: GifListItem[]): string {
    return item.map((gif) => gif.image).join(',');
  }

  onScroll = output<Event>();

  handleScroll(event: Event) {
    this.onScroll.emit(event);
  }
}
