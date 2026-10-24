export { ModalBaseProvider, useModalBaseContext } from './ModalBase.context';
export { useOverlay } from './use-overlay';
export { useCloseGuards } from './use-close-guards';
export { useOverlayCloseGuard } from './use-overlay-close-guard';
export type { CloseGuard } from './use-close-guards';
export { useOverlayTransition } from './use-overlay-transition';
export { useOverlayBodyId } from './use-overlay-body-id';
export { useOverlayTitleId } from './use-overlay-title-id';

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
