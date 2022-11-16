import { useContext } from 'react';

import { DrawersContext } from '../context';

export function useDrawers() {
  const ctx = useContext(DrawersContext);

  if (!ctx) {
    throw new Error(
      '[@mantine/drawers] useDrawers hook was called outside of context, wrap your app with DrawersProvider component'
    );
  }

  return ctx;
}
