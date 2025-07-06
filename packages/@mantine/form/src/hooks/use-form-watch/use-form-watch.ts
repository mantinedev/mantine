import { useCallback, useEffect, useRef } from 'react';
import { getPath } from '../../paths';
import { LooseKeys } from '../../paths.types';
import { FormFieldSubscriber, Watch } from '../../types';
import { $FormStatus } from '../use-form-status/use-form-status';
import { SetValuesSubscriberPayload } from '../use-form-values/use-form-values';

interface UseFormWatchInput<Values extends Record<string, any>> {
  $status: $FormStatus<Values>;
  cascadeUpdates?: boolean;
}

export function useFormWatch<Values extends Record<string, any>>({
  $status,
  cascadeUpdates,
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
    const result: ((input: SetValuesSubscriberPayload<Values>) => void)[] =
      subscribers.current[path]?.map(
        (callback) => (input: SetValuesSubscriberPayload<Values>) =>
          callback({
            previousValue: getPath(path, input.previousValues) as any,
            value: getPath(path, input.updatedValues) as any,
            touched: $status.isTouched(path),
            dirty: $status.isDirty(path),
          })
      ) ?? [];

    if (cascadeUpdates) {
      for (const subscriptionKey in subscribers.current) {
        if (subscriptionKey.startsWith(`${path}.`) || path.startsWith(`${subscriptionKey}.`)) {
          result.push(
            ...subscribers.current[subscriptionKey].map(
              (cb) => (input: SetValuesSubscriberPayload<Values>) =>
                cb({
                  previousValue: getPath(subscriptionKey, input.previousValues) as any,
                  value: getPath(subscriptionKey, input.updatedValues) as any,
                  touched: $status.isTouched(subscriptionKey),
                  dirty: $status.isDirty(subscriptionKey),
                })
            )
          );
        }
      }
    }

    return result;
  }, []);

  return {
    subscribers,
    watch,
    getFieldSubscribers,
  };
}
