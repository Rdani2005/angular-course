import { InferOutput, object, string } from 'valibot';

export const NavBarItem = object({
  title: string(),
  path: string(),
});

export type NavBarItem = InferOutput<typeof NavBarItem>;
