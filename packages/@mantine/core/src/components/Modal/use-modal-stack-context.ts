import {
  createOverlayStackContextHook,
  ModalStackContext,
  OverlayStackContextHandlers,
} from '../../core/OverlayStack';

export type UseModalStackContextReturnType = OverlayStackContextHandlers;

export const useModalStackContext = createOverlayStackContextHook(
  ModalStackContext,
  '[@mantine/core] useModalStackContext: Modal.Stack or theme.overlayStack was not found in the tree'
);
