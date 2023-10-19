import { createSafeContext } from '../../../core';

export interface ScrollbarContextValue {
  hasThumb: boolean;
  scrollbar: HTMLDivElement | null;
  onThumbChange: (thumb: HTMLDivElement | null) => void;
  onThumbPointerUp: () => void;
  onThumbPointerDown: (pointerPos: { x: number; y: number }) => void;
  onThumbPositionChange: () => void;
}

export const [ScrollbarProvider, useScrollbarContext] = createSafeContext<ScrollbarContextValue>(
  'ScrollAreaScrollbar was not found in tree'
);
