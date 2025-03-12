import { Component, input, InputSignal } from '@angular/core';
import { type GifListItem } from '@gifs-app/gifs/models';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',
  styleUrl: './gif-list-item.component.css',
})
export class GifListItemComponent {
  gifItem: InputSignal<GifListItem> = input.required<GifListItem>();
}
