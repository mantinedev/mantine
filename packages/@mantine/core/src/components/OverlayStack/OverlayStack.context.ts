import { createContext } from 'react';

export interface OverlayStackContextValue {
  stack: string[];
  maxDepth: number;
  addOverlay: (id: string, zIndex: number | string) => void;
  markClosing: (id: string) => void;
  removeOverlay: (id: string) => void;
  getZIndex: (id: string) => string;
  getDepth: (id: string) => number;
  isVisible: (id: string) => boolean;
  maxZIndex: number | string;
  currentId: string;
  reportDrag: (id: string, progress: number) => void;
  dragProgress: number;
  withStackTransform: boolean;
  topRect: { width: number; height: number } | null;
  reportTopRect: (id: string, rect: { width: number; height: number }) => void;
}

export const OverlayStackContext = createContext<OverlayStackContextValue | null>(null);
