import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseFetchOptions extends RequestInit {
  autoInvoke?: boolean;
}

export interface UseFetchReturnValue<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<any>;
  abort: () => void;
}

export function useFetch<T>(
  url: string,
  { autoInvoke = true, ...options }: UseFetchOptions = {}
): UseFetchReturnValue<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const controller = useRef<AbortController | null>(null);

  const refetch = useCallback(() => {
    if (controller.current) {
      controller.current.abort();
    }

    const requestController = new AbortController();
    controller.current = requestController;
    const isCurrentRequest = () => controller.current === requestController;

    setLoading(true);
    setError(null);

    return fetch(url, { ...options, signal: requestController.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        if (isCurrentRequest()) {
          setData(res);
          setLoading(false);
        }
        return res as T;
      })
      .catch((err) => {
        if (isCurrentRequest()) {
          setLoading(false);

          if (!requestController.signal.aborted) {
            setError(err);
          }
        }

        return err;
      });
  }, [url, JSON.stringify(options)]);

  const abort = useCallback(() => {
    if (controller.current) {
      controller.current?.abort('');
    }
  }, []);

  useEffect(() => {
    if (autoInvoke) {
      refetch();
    }

    return () => {
      if (controller.current) {
        controller.current.abort('');
      }
    };
  }, [refetch, autoInvoke]);

  return { data, loading, error, refetch, abort };
}

export namespace useFetch {
  export type Options = UseFetchOptions;
  export type ReturnValue<T> = UseFetchReturnValue<T>;
}
