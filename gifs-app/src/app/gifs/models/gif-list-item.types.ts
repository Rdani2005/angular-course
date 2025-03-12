import { InferOutput, object, string } from 'valibot';

export const GifListItem = object({
  image: string(),
});

export type GifListItem = InferOutput<typeof GifListItem>;
