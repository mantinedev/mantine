import { useEffect } from 'react';
import { useModalBaseContext } from './ModalBase.context';

export function useOverlayTitleId() {
  const ctx = useModalBaseContext();

  useEffect(() => {
    ctx.setTitleMounted(true);
    return () => ctx.setTitleMounted(false);
  }, []);

  return ctx.getTitleId();
}
