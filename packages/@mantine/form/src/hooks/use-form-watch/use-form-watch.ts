import { useCallback, useEffect, useRef } from 'react';
import { getPath } from '../../paths';
import { FormFieldSubscriber, LooseKeys, Watch } from '../../types';
import { $FormStatus } from '../use-form-status/use-form-status';
import { SetValuesSubscriberPayload } from '../use-form-values/use-form-values';

interface UseFormWatchInput<Values extends Record<string, any>> {
  $status: $FormStatus<Values>;
}

export function useFormWatch<Values extends Record<string, any>>({
  $status,
}: UseFormWatchInput<Values>) {
  const subscribers = useRef<Record<LooseKeys<Values>, FormFieldSubscriber<Values, any>[]>>(
    {} as any
  );

  const watch: Watch<Values> = useCallback((path, callback) => {
    useEffect(() => {
      subscribers.current[path] = subscribers.current[path] || [];
      subscribers.current[path].push(callback);

      return () => {
        subscribers.current[path] = subscribers.current[path].filter((cb) => cb !== callback);
      };
    }, [callback]);
  }, []);

  const getFieldSubscribers = useCallback((path: LooseKeys<Values>) => {
    if (!subscribers.current[path]) {
      return [];
    }

    return subscribers.current[path].map(
      (callback) => (input: SetValuesSubscriberPayload<Values>) =>
        callback({
          previousValue: getPath(path, input.previousValues) as any,
          value: getPath(path, input.updatedValues) as any,
          touched: $status.isTouched(path),
          dirty: $status.isDirty(path),
        })
    );
  }, []);

  return {
    subscribers,
    watch,
    getFieldSubscribers,
  };
}
