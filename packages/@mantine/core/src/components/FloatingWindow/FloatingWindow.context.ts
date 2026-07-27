import { createSafeContext } from '../../core';

export interface FloatingWindowDimensions {
  /** Initial width of the floating window in px */
  initialWidth?: number;

  /** Minimum width of the floating window in px */
  minWidth?: number;

  /** Maximum width of the floating window in px */
  maxWidth?: number;

  /** Initial height of the floating window in px */
  initialHeight?: number;

  /** Minimum height of the floating window in px */
  minHeight?: number;

  /** Maximum height of the floating window in px */
  maxHeight?: number;
}

export interface FloatingWindowContextValue {
  rootRef: React.RefObject<HTMLDivElement | null>;
  dimensions: FloatingWindowDimensions | undefined;
  constrainToViewport: boolean | undefined;
  constrainOffset: number | undefined;
}

export const [FloatingWindowProvider, useFloatingWindowContext] =
  createSafeContext<FloatingWindowContextValue>(
    'FloatingWindow.ResizeHandle must be used within FloatingWindow'
  );
