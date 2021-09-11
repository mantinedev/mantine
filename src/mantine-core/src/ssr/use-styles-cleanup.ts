import { useEffect } from 'react';
import { SERVER_STYLES_ID } from './ServerStyles';

export function useStylesCleanup() {
  useEffect(() => {
    const jssStyles = document.getElementById(SERVER_STYLES_ID);
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);
}
