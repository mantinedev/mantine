import { useCallback, useMemo, useRef, useState } from 'react';

export const usePromise = <T>(fn: (abortController: AbortController) => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const controller = useRef<AbortController | null>(null);

  const fetch = useCallback(async () => {
    if (!fn) throw new Error('Missing function parameter');

    if (controller.current) controller.current.abort();

    setError(null);
    setLoading(true);

    const newController = new AbortController();
    controller.current = newController;
    fn(newController)
      .then(setData)
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
        controller.current = null;
      });
  }, [fn]);

  const abort = useCallback(() => {
    if (controller.current) {
      controller.current.abort('aborted');
      controller.current = null;
    }
  }, []);

  return useMemo(() => ({ loading, error, data, fetch, abort }), [loading]);
};
