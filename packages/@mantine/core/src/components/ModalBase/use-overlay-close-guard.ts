import { use, useCallback, useEffect } from 'react';
import { useLatestRef } from '@mantine/hooks';
import { ModalBaseProvider } from './ModalBase.context';
import { CloseGuard } from './use-close-guards';

const noop = () => {};

export function useOverlayCloseGuard(guard?: CloseGuard): () => void {
  const ctx = use(ModalBaseProvider);
  const guardRef = useLatestRef(guard ?? (() => true));
  const registerCloseGuard = ctx?.registerCloseGuard;
  const requestClose = ctx?.requestClose;

  useEffect(() => {
    if (!registerCloseGuard || !guard) {
      return undefined;
    }

    return registerCloseGuard(guardRef);
  }, [registerCloseGuard, !guard]);

  return useCallback(() => (requestClose ?? noop)(), [requestClose]);
}
