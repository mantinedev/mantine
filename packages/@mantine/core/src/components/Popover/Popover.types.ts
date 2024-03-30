import type { ShiftOptions } from '@floating-ui/react';

export type PopoverWidth = 'target' | React.CSSProperties['width'] | null;

export interface PopoverMiddlewares {
  shift: boolean | Omit<ShiftOptions, 'limiter'>;
  flip: boolean;
  inline?: boolean;
  size?: boolean;
}
