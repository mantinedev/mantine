import {
  createOverlayStackContextHook,
  DrawerStackContext,
  OverlayStackContextHandlers,
} from '../../core/OverlayStack';

export type UseDrawerStackContextReturnType = OverlayStackContextHandlers;

export const useDrawerStackContext = createOverlayStackContextHook(
  DrawerStackContext,
  '[@mantine/core] useDrawerStackContext: Drawer.Stack or theme.overlayStack was not found in the tree'
);
