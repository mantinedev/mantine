import { useCallback, useRef, useState } from 'react';
import { getPath, setPath } from '../../paths';

export interface SetValuesSubscriberPayload<Values> {
  path?: PropertyKey;
  updatedValues: Values;
  previousValues: Values;
}

export interface SetValuesInput<Values> {
  values: Partial<Values> | ((values: Values) => Partial<Values>);
  mergeWithPreviousValues?: boolean;
  updateState?: boolean;
  subscribers?: (SetFieldValueSubscriber<Values> | null | undefined)[];
}

export type SetFieldValueSubscriber<Values> = (payload: SetValuesSubscriberPayload<Values>) => void;

export interface SetFieldValueInput<Values> {
  path: PropertyKey;
  value: any;
  updateState?: boolean;
  subscribers?: (SetFieldValueSubscriber<Values> | null | undefined)[];
}

interface UseFormValuesInput<Values extends Record<PropertyKey, any>> {
  initialValues: Values | undefined;
  onValuesChange?: ((values: Values, previousValues: Values) => void) | undefined;
}

export function useFormValues<Values extends Record<PropertyKey, any>>({
  initialValues,
  onValuesChange,
}: UseFormValuesInput<Values>) {
  const initialized = useRef(false);
  const [stateValues, setStateValues] = useState<Values>(initialValues || ({} as Values));
  const refValues = useRef(stateValues);
  const valuesSnapshot = useRef(stateValues);

  const setValues = useCallback(
    ({
      values,
      subscribers,
      updateState = true,
      mergeWithPreviousValues = true,
    }: SetValuesInput<Values>) => {
      const previousValues = refValues.current;
      const resolvedValues = values instanceof Function ? values(refValues.current) : values;
      const updatedValues = mergeWithPreviousValues
        ? { ...previousValues, ...resolvedValues }
        : (resolvedValues as Values);
      refValues.current = updatedValues;
      updateState && setStateValues(updatedValues);
      onValuesChange?.(updatedValues, previousValues);
      subscribers
        ?.filter(Boolean)
        .forEach((subscriber) => subscriber!({ updatedValues, previousValues }));
    },
    [onValuesChange]
  );

  const setFieldValue = useCallback((payload: SetFieldValueInput<Values>) => {
    const currentValue = getPath(payload.path, refValues.current);
    const updatedValue =
      payload.value instanceof Function ? payload.value(currentValue) : payload.value;

    if (currentValue !== updatedValue) {
      const previousValues = refValues.current;
      const updatedValues = setPath(payload.path, updatedValue, refValues.current);
      setValues({ values: updatedValues, updateState: payload.updateState });

      payload.subscribers
        ?.filter(Boolean)
        .forEach((subscriber) =>
          subscriber!({ path: payload.path, updatedValues, previousValues })
        );
    }
  }, []);

  const setValuesSnapshot = useCallback((payload: Values) => {
    valuesSnapshot.current = payload;
  }, []);

  const initialize = useCallback((values: Values) => {
    if (!initialized.current) {
      initialized.current = true;
      setValues({ values, updateState: true });
      setValuesSnapshot(values);
    }
  }, []);

  const resetValues = useCallback(() => {
    setValues({
      values: valuesSnapshot.current,
      updateState: true,
      mergeWithPreviousValues: false,
    });
  }, []);

  return {
    initialized,
    stateValues,
    refValues,
    valuesSnapshot,
    setValues,
    setFieldValue,
    resetValues,
    setValuesSnapshot,
    initialize,
  };
}
