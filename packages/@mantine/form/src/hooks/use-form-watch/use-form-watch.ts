import { useCallback, useEffect, useRef } from 'react';
import { getPath } from '../../paths';
import { FormPathValue, LooseKeys } from '../../paths.types';
import { FormFieldSubscriber, Watch } from '../../types';
import { $FormStatus } from '../use-form-status/use-form-status';
import { $FormValues, SetValuesSubscriberPayload } from '../use-form-values/use-form-values';

interface UseFormWatchInput<out Values extends Record<PropertyKey, any>> {
  $values: $FormValues<Values>;
  $status: $FormStatus<Values>;
  cascadeUpdates?: boolean;
}

export interface $FormWatch<Values extends Record<PropertyKey, any>> {
  subscribers: React.RefObject<Record<string, FormFieldSubscriber<Values, any>[]>>;
  watch: Watch<Values, any>;
  getFieldSubscribers: (path: any) => ((input: SetValuesSubscriberPayload<Values>) => void)[];
  notifyWatchSubscribers: (previousValues: Values) => void;
}

export function useFormWatch<
  Values extends Record<PropertyKey, any>,
  Field extends LooseKeys<Values> = LooseKeys<Values>,
>({ $values, $status, cascadeUpdates }: UseFormWatchInput<Values>) {
  const subscribers = useRef<Record<Field, FormFieldSubscriber<Values, Field>[]>>({} as any);

  const watch: Watch<Values, Field> = useCallback((path, callback) => {
    useEffect(() => {
      subscribers.current[path] = subscribers.current[path] || [];
      subscribers.current[path].push(callback);

      return () => {
        subscribers.current[path] = subscribers.current[path].filter((cb) => cb !== callback);
      };
    }, [callback]);
  }, []);

  const getFieldSubscribers = useCallback((path: Field) => {
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

    for (const subscriptionKey in subscribers.current) {
      const isParent = String(path).startsWith(`${subscriptionKey}.`);
      const isChild = String(subscriptionKey).startsWith(`${path}.`);

      if (isParent || (cascadeUpdates && isChild)) {
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

    return result;
  }, []);

  const notifyWatchSubscribers = useCallback((previousValues: Values) => {
    Object.keys(subscribers.current).forEach((path) => {
      const value = getPath(path, $values.refValues.current);
      const previousValue = getPath(path, previousValues);

      if (value !== previousValue) {
        subscribers.current[path as Field]?.forEach((cb) =>
          cb({
            previousValue: getPath(path, previousValues) as FormPathValue<Values, Field>,
            value: getPath(path, $values.refValues.current) as FormPathValue<Values, Field>,
            touched: $status.isTouched(path),
            dirty: $status.isDirty(path),
          })
        );
      }
    });
  }, []);

  return {
    subscribers,
    watch,
    getFieldSubscribers,
    notifyWatchSubscribers,
  };
}
