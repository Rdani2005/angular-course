import { InferOutput, number, object, picklist, string } from 'valibot';

export const Country = object({
  cca2: string(),
  flag: string(),
  flagSvg: string(),
  name: string(),
  capital: string(),
  population: number(),
  region: string(),
  subRegion: string(),
});

export type Country = InferOutput<typeof Country>;

export const Region = picklist([
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
  'Antarctic',
]);

export type Region = InferOutput<typeof Region>;

export const regions: Region[] = [
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
  'Antarctic',
];
