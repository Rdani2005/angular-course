import { InferOutput, object, string } from 'valibot';

export const MenuOption = object({
  label: string(),
  subLabel: string(),
  to: string(),
  icon: string(),
});

export type MenuOption = InferOutput<typeof MenuOption>;
