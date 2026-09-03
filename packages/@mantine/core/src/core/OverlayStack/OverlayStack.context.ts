import { createContext } from 'react';

export interface OverlayStackRect {
  width: number;
  height: number;
}

export interface OverlayStackContextValue {
  stack: string[];
  openStack: string[];
  maxDepth: number;
  addOverlay: (id: string, zIndex: number | string) => void;
  markClosing: (id: string) => void;
  removeOverlay: (id: string) => void;
  registerCloseHandler: (id: string, handler: () => void) => () => void;
  close: (id: string) => void;
  closeAll: () => void;
  getZIndex: (id: string) => string;
  getDepth: (id: string) => number;
  isVisible: (id: string) => boolean;
  maxZIndex: number | string;
  currentId: string | undefined;
  activeId: string | undefined;
  shared: boolean;
  reportDrag: (id: string, progress: number) => void;
  dragProgress: number;
  withStackTransform: boolean;
  topRect: OverlayStackRect | null;
  reportTopRect: (id: string, rect: OverlayStackRect) => void;
}

export type OverlayStackContextType = React.Context<OverlayStackContextValue | null>;

export const ModalStackContext: OverlayStackContextType =
  createContext<OverlayStackContextValue | null>(null);

export const DrawerStackContext: OverlayStackContextType =
  createContext<OverlayStackContextValue | null>(null);
