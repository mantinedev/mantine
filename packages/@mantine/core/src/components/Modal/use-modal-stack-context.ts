import {
  createOverlayStackContextHook,
  DrawerStackContext,
  ModalStackContext,
  OverlayStackContextHandlers,
} from '../OverlayStack';

export type UseModalStackContextReturnType = OverlayStackContextHandlers;
export type UseDrawerStackContextReturnType = OverlayStackContextHandlers;

export const useModalStackContext = createOverlayStackContextHook(
  ModalStackContext,
  '[@mantine/core] useModalStackContext: Modal.Stack or theme.overlayStack was not found in the tree'
);

export const useDrawerStackContext = createOverlayStackContextHook(
  DrawerStackContext,
  '[@mantine/core] useDrawerStackContext: Drawer.Stack or theme.overlayStack was not found in the tree'
);
