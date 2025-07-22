export type FloatingPlacement = 'end' | 'start';
export type FloatingSide = 'top' | 'right' | 'bottom' | 'left';
export type FloatingPosition = FloatingSide | `${FloatingSide}-${FloatingPlacement}`;
export type ArrowPosition = 'center' | 'side';
export type FloatingStrategy = 'absolute' | 'fixed';

export interface FloatingAxesOffsets {
  mainAxis?: number;
  crossAxis?: number;
  alignmentAxis?: number | null;
}
