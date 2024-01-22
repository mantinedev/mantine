import { useEffect } from 'react';
import { useModalBaseContext } from './ModalBase.context';

export function useModalTitle() {
  const ctx = useModalBaseContext();

  useEffect(() => {
    ctx.setTitleMounted(true);
    return () => ctx.setTitleMounted(false);
  }, []);

  return ctx.getTitleId();
}
