import { InferOutput, object, string } from 'valibot';

export const MenuItem = object({
  title: string(),
  route: string(),
});

export type MenuItem = InferOutput<typeof MenuItem>;
