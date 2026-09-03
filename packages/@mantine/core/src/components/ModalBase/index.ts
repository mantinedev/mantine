export { ModalBaseProvider, useModalBaseContext } from './ModalBase.context';
export { useOverlay } from './use-overlay';
export { useLockScroll } from './use-lock-scroll';
export { useOverlayTransition } from './use-modal-transition';
export { useOverlayBodyId } from './use-modal-body-id';
export { useOverlayTitleId } from './use-modal-title-id';

export type { UseOverlayInput, UseOverlayReturn } from './use-overlay';
export type { ModalBaseBreakpoint } from './use-below-breakpoint';
export type {
  ModalBaseProps,
  ModalBaseContentProps,
  ModalBaseOverlayProps,
  RemoveScrollProps,
} from './ModalBase.types';

export type ModalBaseStylesNames =
  | 'body'
  | 'header'
  | 'footer'
  | 'title'
  | 'overlay'
  | 'root'
  | 'content'
  | 'close'
  | 'inner';
