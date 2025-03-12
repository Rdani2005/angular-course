import { Gif, GifListItem } from '../models';
import { GiphyItem } from '../models/request';

export class GifMapper {
  static mapGiphyItemToGift(giphyItem: GiphyItem): Gif {
    return {
      id: giphyItem.id,
      title: giphyItem.title,
      url: giphyItem.images.original.url,
    };
  }

  static mapGiphyItemsToGiftArray(items: GiphyItem[]): Gif[] {
    return items.map(this.mapGiphyItemToGift);
  }

  static mapGifToGifListItem(gif: Gif): GifListItem {
    return {
      image: gif.url,
    };
  }

  static mapGifArrayToGifListItemArray(gifs: Gif[]): GifListItem[] {
    return gifs.map(this.mapGifToGifListItem);
  }
}
