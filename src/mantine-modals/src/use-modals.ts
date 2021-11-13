import { useContext } from 'react';
import { modalsContext } from './context';

export function useModals() {
  const ctx = useContext(modalsContext);

  if (!ctx) {
    throw new Error(
      '[@mantine/modals] useModals hook was called outside of context, wrap your app with ModalsProvider component'
    );
  }

  return ctx;
}
