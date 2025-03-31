import { InferOutput, number, object, string } from 'valibot';

export const Country = object({
  cca2: string(),
  flag: string(),
  flagSvg: string(),
  name: string(),
  capital: string(),
  population: number(),
});

export type Country = InferOutput<typeof Country>;
