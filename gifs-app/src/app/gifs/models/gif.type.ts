import { InferOutput, object, string } from 'valibot';

export const Gif = object({
  id: string(),
  title: string(),
  url: string(),
});

export type Gif = InferOutput<typeof Gif>;
