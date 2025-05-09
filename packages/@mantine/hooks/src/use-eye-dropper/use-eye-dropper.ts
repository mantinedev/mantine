import { useCallback, useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';

export interface EyeDropperOpenOptions {
  signal?: AbortSignal;
}

export interface EyeDropperOpenReturnType {
  sRGBHex: string;
}

export interface UseEyeDropperReturnValue {
  supported: boolean;
  open: (options?: EyeDropperOpenOptions) => Promise<EyeDropperOpenReturnType | undefined>;
}

export function useEyeDropper(): UseEyeDropperReturnValue {
  const [supported, setSupported] = useState(false);

  useIsomorphicEffect(() => {
    setSupported(typeof window !== 'undefined' && !isOpera() && 'EyeDropper' in window);
  }, []);

  const open = useCallback(
    (options: EyeDropperOpenOptions = {}): Promise<EyeDropperOpenReturnType | undefined> => {
      if (supported) {
        const eyeDropper = new (window as any).EyeDropper();
        return eyeDropper.open(options);
      }

      return Promise.resolve(undefined);
    },
    [supported]
  );

  return { supported, open };
}

function isOpera() {
  return navigator.userAgent.includes('OPR');
}
