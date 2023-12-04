import { useEffect } from 'react';
import { useModalBaseContext } from './ModalBase.context';

export function useModalBodyId() {
  const ctx = useModalBaseContext();

  useEffect(() => {
    ctx.setBodyMounted(true);
    return () => ctx.setBodyMounted(false);
  }, []);

  return ctx.getBodyId();
}
