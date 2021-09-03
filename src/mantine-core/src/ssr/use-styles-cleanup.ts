import { useEffect } from 'react';

export function useStylesCleanup() {
  useEffect(() => {
    const jssStyles = document.getElementById('mantine-ssr-styles');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);
}
