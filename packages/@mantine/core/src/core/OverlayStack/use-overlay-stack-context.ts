import { use } from 'react';
import { OverlayStackContextType } from './OverlayStack.context';

export interface OverlayStackContextHandlers {
  /** Ids of opened overlays, the last item is the top one */
  stack: string[];

  /** Id of the top overlay, `undefined` if no overlays are opened */
  currentId: string | undefined;

  /** Calls `onClose` of the overlay with the given id */
  close: (id: string) => void;

  /** Calls `onClose` of all opened overlays, starting from the top one */
  closeAll: () => void;
}

export function createOverlayStackContextHook(
  context: OverlayStackContextType,
  errorMessage: string
) {
  return function useOverlayStackContext(): OverlayStackContextHandlers {
    const ctx = use(context);

    if (!ctx) {
      throw new Error(errorMessage);
    }

    return {
      stack: ctx.openStack,
      currentId: ctx.currentId,
      close: ctx.close,
      closeAll: ctx.closeAll,
    };
  };
}
