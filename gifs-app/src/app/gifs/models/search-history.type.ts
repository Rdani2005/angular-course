import { array, InferOutput, record, string } from 'valibot';
import { Gif } from './gif.type';

export const GifSearchHistory = record(string(), array(Gif));
export type GifSearchHistory = InferOutput<typeof GifSearchHistory>;
