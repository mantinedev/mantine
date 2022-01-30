import { useContext } from 'react';
import { nprogressContext } from './context';

export function useNProgress() {
  const ctx = useContext(nprogressContext);

  if (!ctx) {
    throw new Error(
      '[@mantine/nprogress] useNProgress hook was called outside of context, wrap your app with NProgressProvider component'
    );
  }

  return ctx;
}
