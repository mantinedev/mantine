import type { FlipOptions, InlineOptions, ShiftOptions, SizeOptions } from '@floating-ui/react';

export type PopoverWidth = 'target' | React.CSSProperties['width'] | null;

export interface PopoverMiddlewares {
  shift?: boolean | ShiftOptions | undefined;
  flip?: boolean | FlipOptions | undefined;
  inline?: boolean | InlineOptions | undefined;
  size?: boolean | SizeOptions | undefined;
}
