import { CloseGuard, useOverlayCloseGuard } from '../ModalBase';

export type ModalCloseGuard = CloseGuard;

/**
 * Registers a function that is called before the modal is closed by the user:
 * close button, Escape key or overlay click. Return `false` or a promise resolving
 * to `false` to keep the modal opened. Returns a function that closes the modal
 * through the registered guards. Does nothing when called outside of a modal.
 */
export function useModalCloseGuard(guard?: ModalCloseGuard): () => void {
  return useOverlayCloseGuard(guard);
}
