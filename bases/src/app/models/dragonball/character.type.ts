import { InferOutput, number, object, string } from 'valibot';

export const Character = object({
  id: number(),
  name: string(),
  power: number(),
});

export type Character = InferOutput<typeof Character>;
