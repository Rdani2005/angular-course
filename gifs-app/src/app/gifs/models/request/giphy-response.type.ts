import {
  array,
  boolean,
  date,
  enum_,
  InferOutput,
  number,
  object,
  optional,
  string,
  union,
} from 'valibot';

export const Onclick = object({
  url: string(),
});
export type Onclick = InferOutput<typeof Onclick>;

export const The480_WStill = object({
  height: string(),
  width: string(),
  size: string(),
  url: string(),
});
export type The480_WStill = InferOutput<typeof The480_WStill>;

export const The4_K = object({
  height: string(),
  width: string(),
  mp4_size: string(),
  mp4: string(),
});
export type The4_K = InferOutput<typeof The4_K>;

export const FixedHeight = object({
  height: string(),
  width: string(),
  size: string(),
  url: string(),
  mp4_size: optional(string()),
  mp4: optional(string()),
  webp_size: string(),
  webp: string(),
  frames: optional(string()),
  hash: optional(string()),
});
export type FixedHeight = InferOutput<typeof FixedHeight>;

export const Looping = object({
  mp4_size: string(),
  mp4: string(),
});
export type Looping = InferOutput<typeof Looping>;

enum Rating {
  G = 'g',
}

export const RatingSchema = enum_(Rating);
export type RatingSchema = InferOutput<typeof RatingSchema>;

enum TrendingDatetimeEnum {
  The00000000000000 = '0000-00-00 00:00:00',
}

export const TrendingDatetimeEnumSchema = enum_(TrendingDatetimeEnum);
export type TrendingDatetimeEnumSchema = InferOutput<
  typeof TrendingDatetimeEnumSchema
>;

enum Type {
  GIF = 'gif',
}

export const TypeSchema = enum_(Type);
export type TypeSchema = InferOutput<typeof TypeSchema>;

export const User = object({
  avatar_url: string(),
  banner_image: string(),
  banner_url: string(),
  profile_url: string(),
  username: string(),
  display_name: string(),
  description: string(),
  instagram_url: string(),
  website_url: string(),
  is_verified: boolean(),
});
export type User = InferOutput<typeof User>;

export const Meta = object({
  status: number(),
  msg: string(),
  response_id: string(),
});
export type Meta = InferOutput<typeof Meta>;

export const Pagination = object({
  total_count: number(),
  count: number(),
  offset: number(),
});

export type Pagination = InferOutput<typeof Pagination>;

export const Images = object({
  original: FixedHeight,
  downsized: The480_WStill,
  downsized_large: The480_WStill,
  downsized_medium: The480_WStill,
  downsized_small: The4_K,
  downsized_still: The480_WStill,
  fixed_height: FixedHeight,
  fixed_height_downsampled: FixedHeight,
  fixed_height_small: FixedHeight,
  fixed_height_small_still: The480_WStill,
  fixed_height_still: The480_WStill,
  fixed_width: FixedHeight,
  fixed_width_downsampled: FixedHeight,
  fixed_width_small: FixedHeight,
  fixed_width_small_still: The480_WStill,
  fixed_width_still: The480_WStill,
  looping: Looping,
  original_still: The480_WStill,
  original_mp4: The4_K,
  preview: The4_K,
  preview_gif: The480_WStill,
  preview_webp: The480_WStill,
  hd: optional(The4_K),
  '480w_still': The480_WStill,
  '4k': optional(The4_K),
});
export type Images = InferOutput<typeof Images>;

export const Analytics = object({
  onload: Onclick,
  onclick: Onclick,
  onsent: Onclick,
});
export type Analytics = InferOutput<typeof Analytics>;

export const Datum = object({
  type: TypeSchema,
  id: string(),
  url: string(),
  slug: string(),
  bitly_gif_url: string(),
  bitly_url: string(),
  embed_url: string(),
  username: string(),
  source: string(),
  title: string(),
  rating: RatingSchema,
  content_url: string(),
  source_tld: string(),
  source_post_url: string(),
  is_sticker: number(),
  import_datetime: date(),
  trending_datetime: union([string(), TrendingDatetimeEnumSchema]),
  images: Images,
  user: optional(User),
  analytics_response_payload: string(),
  analytics: Analytics,
  alt_text: string(),
});
export type Datum = InferOutput<typeof Datum>;

export const GiphyResponse = object({
  data: array(Datum),
  meta: Meta,
  pagination: Pagination,
});
export type GiphyResponse = InferOutput<typeof GiphyResponse>;
