import { Component, computed, Signal } from '@angular/core';
import { GifListComponent } from '@gifs-app/gifs/components';
import { type GifListItem } from '@gifs-app/gifs/models';

@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css',
})
export default class TrendingPageComponent {
  gifs: Signal<GifListItem[]> = computed<GifListItem[]>(() => [
    {
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
    },
    {
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
    },
    {
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
    },
    {
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
    },
    {
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
    },
    {
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    },
    {
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
    },
    {
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
    },
    {
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
    },
    {
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
    },
    {
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
    },
    {
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
    },
  ]);
}
