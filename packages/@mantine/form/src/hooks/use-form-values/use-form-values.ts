import { useCallback, useRef, useState } from 'react';
import { getPath, setPath } from '../../paths';
import { FormMode } from '../../types';

export interface $FormValues<out Values extends Record<PropertyKey, any>> {
  initialized: React.RefObject<boolean>;
  stateValues: Values;
  refValues: React.RefObject<Values>;
  valuesSnapshot: React.RefObject<Values>;
  setValues: <TValues extends Values>(payload: SetValuesInput<TValues>) => void;
  setFieldValue: <TValues extends Values>(payload: SetFieldValueInput<TValues>) => void;
  resetValues: () => void;
  setValuesSnapshot: <TValues extends Values>(payload: TValues) => void;
  initialize: <TValues extends Values>(values: TValues, onInitialize: () => void) => void;
  getValues: () => Values;
  getValuesSnapshot: () => Values;
  resetField: <TValues extends Values>(
    path: PropertyKey,
    subscribers?: (SetFieldValueSubscriber<TValues> | null | undefined)[]
  ) => void;
}

export interface SetValuesSubscriberPayload<Values> {
  path?: PropertyKey;
  updatedValues: Values;
  previousValues: Values;
}

export interface SetValuesInput<out Values = Record<string, any>> {
  values: Partial<Values> | (<TValues extends Values>(values: TValues) => Partial<TValues>);
  mergeWithPreviousValues?: boolean;
  updateState?: boolean;
  subscribers?: (SetFieldValueSubscriber<Values> | null | undefined)[];
}

export type SetFieldValueSubscriber<out Values> = <TValues extends Values>(
  payload: SetValuesSubscriberPayload<TValues>
) => void;

export interface SetFieldValueInput<Values> {
  path: PropertyKey;
  value: any;
  updateState?: boolean;
  subscribers?: (SetFieldValueSubscriber<Values> | null | undefined)[];
}

interface UseFormValuesInput<Values extends Record<PropertyKey, any>> {
  initialValues: Values | undefined;
  mode: FormMode;
  onValuesChange?: ((values: Values, previousValues: Values) => void) | undefined;
}

export function useFormValues<Values extends Record<PropertyKey, any>>({
  initialValues,
  onValuesChange,
  mode,
}: UseFormValuesInput<Values>): $FormValues<Values> {
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
      if (updateState) {
        setStateValues(updatedValues);
        if (mode === 'uncontrolled') {
          refValues.current = updatedValues;
        }
      }
      onValuesChange?.(updatedValues, previousValues);
      subscribers
        ?.filter(Boolean)
        .forEach((subscriber) => subscriber!({ updatedValues, previousValues }));
    },
    [onValuesChange]
  );

  const setFieldValue = useCallback(
    (payload: SetFieldValueInput<Values>) => {
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
    },
    [setValues]
  );

  const setValuesSnapshot = useCallback((payload: Values) => {
    valuesSnapshot.current = payload;
  }, []);

  const initialize = useCallback(
    (values: Values, onInitialize: () => void) => {
      if (!initialized.current) {
        initialized.current = true;
        setValues({ values, updateState: mode === 'controlled' });
        setValuesSnapshot(values);
        onInitialize();
      }
    },
    [setValues]
  );

  const resetValues = useCallback(() => {
    setValues({
      values: valuesSnapshot.current,
      updateState: true,
      mergeWithPreviousValues: false,
    });
  }, [setValues]);

  const getValues = useCallback(() => refValues.current, []);
  const getValuesSnapshot = useCallback(() => valuesSnapshot.current, []);

  const resetField = useCallback(
    (path: PropertyKey, subscribers?: (SetFieldValueSubscriber<Values> | null | undefined)[]) => {
      const snapshotValue = getPath(path, valuesSnapshot.current);
      if (typeof snapshotValue === 'undefined') {
        return;
      }
      setFieldValue({
        path,
        value: snapshotValue,
        updateState: mode === 'controlled',
        subscribers,
      });
    },
    [setFieldValue, mode]
  );

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
    getValues,
    getValuesSnapshot,
    resetField,
  };
}
