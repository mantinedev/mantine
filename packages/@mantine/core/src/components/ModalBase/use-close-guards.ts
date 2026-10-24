import { RefObject, useCallback, useEffect, useRef } from 'react';
import { useLatestRef } from '@mantine/hooks';

export type CloseGuard = () => boolean | Promise<boolean>;
export type RegisterCloseGuard = (guard: RefObject<CloseGuard>) => () => void;

interface UseCloseGuardsReturn {
  requestClose: () => Promise<boolean>;
  registerCloseGuard: RegisterCloseGuard;
}

function isPromise(value: unknown): value is Promise<boolean> {
  return !!value && typeof (value as Promise<boolean>).then === 'function';
}

export function useCloseGuards(opened: boolean, onClose: () => void): UseCloseGuardsReturn {
  const guardsRef = useRef(new Set<RefObject<CloseGuard>>());
  const pendingRef = useRef(false);
  const requestIdRef = useRef(0);
  const onCloseRef = useLatestRef(onClose);

  const invalidate = () => {
    requestIdRef.current += 1;
    pendingRef.current = false;
  };

  useEffect(() => {
    if (!opened) {
      invalidate();
    }
  }, [opened]);

  useEffect(() => invalidate, []);

  const registerCloseGuard: RegisterCloseGuard = useCallback((guard) => {
    guardsRef.current.add(guard);
    return () => {
      guardsRef.current.delete(guard);
    };
  }, []);

  const requestClose = useCallback(
    () =>
      new Promise<boolean>((resolve) => {
        if (pendingRef.current) {
          resolve(false);
          return;
        }

        const guards = Array.from(guardsRef.current);
        const requestId = requestIdRef.current;

        const deny = () => {
          pendingRef.current = false;
          resolve(false);
        };

        const run = (index: number) => {
          if (requestId !== requestIdRef.current) {
            resolve(false);
            return;
          }

          for (let i = index; i < guards.length; i += 1) {
            const result = guards[i].current?.();

            if (result === false) {
              deny();
              return;
            }

            if (isPromise(result)) {
              pendingRef.current = true;

              const settle = (allowed: boolean) => {
                if (requestId !== requestIdRef.current) {
                  resolve(false);
                  return;
                }

                allowed ? run(i + 1) : deny();
              };

              result.then(settle, () => settle(false));
              return;
            }
          }

          pendingRef.current = false;
          onCloseRef.current();
          resolve(true);
        };

        run(0);
      }),
    []
  );

  return { requestClose, registerCloseGuard };
}
