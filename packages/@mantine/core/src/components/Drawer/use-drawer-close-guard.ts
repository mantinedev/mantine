import { CloseGuard, useOverlayCloseGuard } from '../ModalBase';

export type DrawerCloseGuard = CloseGuard;

/**
 * Registers a function that is called before the drawer is closed by the user:
 * close button, Escape key, overlay click or swipe. Return `false` or a promise
 * resolving to `false` to keep the drawer opened. Returns a function that closes
 * the drawer through the registered guards. Does nothing when called outside of a drawer.
 */
export function useDrawerCloseGuard(guard?: DrawerCloseGuard): () => void {
  return useOverlayCloseGuard(guard);
}
