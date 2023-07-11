import { type ButtonHTMLAttributes, type ReactElement } from 'react';

export const ButtonAppearance = {
  Primary: 'primary',
  Secondary: 'secondary',
  Switcher: 'switcher_btn',
  user: 'user',
  chevron: 'chevron',
  burger: 'burger',
  pagination: 'pagination',
  system: 'system'
} as const;

export type ButtonAppearances =
  (typeof ButtonAppearance)[keyof typeof ButtonAppearance];

export type ButtonProperties = {
  appearance?: ButtonAppearances;
  iconLeft?: ReactElement | null;
  iconRight?: ReactElement | null;
  shouldFitContainer?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
