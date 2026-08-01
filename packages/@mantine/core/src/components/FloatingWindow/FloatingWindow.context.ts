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

export interface FloatingWindowSize {
  /** Width of the floating window in px */
  width: number;

  /** Height of the floating window in px */
  height: number;
}

export interface FloatingWindowContextValue {
  rootRef: React.RefObject<HTMLDivElement | null>;
  dimensions: FloatingWindowDimensions | undefined;
  constrainToViewport: boolean | undefined;
  constrainOffset: number | undefined;
  onResizeStart: (() => void) | undefined;
  onResizeEnd: (() => void) | undefined;
  onSizeChange: ((size: FloatingWindowSize) => void) | undefined;
}

export const [FloatingWindowProvider, useFloatingWindowContext] =
  createSafeContext<FloatingWindowContextValue>(
    'FloatingWindow.ResizeHandle must be used within FloatingWindow'
  );
