import { useCallback, useRef, useState } from 'react';
import isEqual from 'fast-deep-equal';
import { getStatus } from '../../get-status';
import { clearListState } from '../../lists';
import { getPath } from '../../paths';
import {
  ClearFieldDirty,
  FormMode,
  FormStatus,
  GetFieldStatus,
  ResetDirty,
  ResetStatus,
  SetFieldDirty,
  SetFieldTouched,
} from '../../types';
import type { $FormValues } from '../use-form-values/use-form-values';

export interface $FormStatus<Values extends Record<string, any>> {
  touchedState: FormStatus;
  dirtyState: FormStatus;
  touchedRef: React.MutableRefObject<FormStatus>;
  dirtyRef: React.MutableRefObject<FormStatus>;
  setTouched: React.Dispatch<React.SetStateAction<FormStatus>>;
  setDirty: React.Dispatch<React.SetStateAction<FormStatus>>;
  resetDirty: ResetStatus;
  resetTouched: ResetStatus;
  isTouched: GetFieldStatus<Values>;
  setFieldTouched: SetFieldTouched<Values>;
  setFieldDirty: SetFieldDirty<Values>;
  setTouchedState: React.Dispatch<React.SetStateAction<FormStatus>>;
  setDirtyState: React.Dispatch<React.SetStateAction<FormStatus>>;
  clearFieldDirty: ClearFieldDirty;
  isDirty: GetFieldStatus<Values>;
  getDirty: () => FormStatus;
  getTouched: () => FormStatus;
}

interface UseFormStatusInput<Values extends Record<string, any>> {
  initialDirty: FormStatus;
  initialTouched: FormStatus;
  mode: FormMode;
  $values: $FormValues<Values>;
}

export function useFormStatus<Values extends Record<string, any>>({
  initialDirty,
  initialTouched,
  mode,
  $values,
}: UseFormStatusInput<Values>): $FormStatus<Values> {
  const [touchedState, setTouchedState] = useState(initialTouched);
  const [dirtyState, setDirtyState] = useState(initialDirty);

  const touchedRef = useRef(initialTouched);
  const dirtyRef = useRef(initialDirty);

  const setTouched = useCallback((values: FormStatus | ((current: FormStatus) => FormStatus)) => {
    const resolvedValues = typeof values === 'function' ? values(touchedRef.current) : values;
    touchedRef.current = resolvedValues;

    if (mode === 'controlled') {
      setTouchedState(resolvedValues);
    }
  }, []);

  const setDirty = useCallback((values: FormStatus | ((current: FormStatus) => FormStatus)) => {
    const resolvedValues = typeof values === 'function' ? values(dirtyRef.current) : values;
    dirtyRef.current = resolvedValues;

    if (mode === 'controlled') {
      setDirtyState(resolvedValues);
    }
  }, []);

  const resetTouched: ResetStatus = useCallback(() => setTouched({}), []);

  const resetDirty: ResetDirty<Values> = (values) => {
    const newSnapshot = values
      ? { ...values, ...$values.refValues.current }
      : $values.refValues.current;
    $values.setValuesSnapshot(newSnapshot);
    setDirty({});
  };

  const setFieldTouched: SetFieldTouched<Values> = useCallback((path, touched) => {
    setTouched((currentTouched) => {
      if (getStatus(currentTouched, path) === touched) {
        return currentTouched;
      }

      return { ...currentTouched, [path]: touched };
    });
  }, []);

  const setFieldDirty: SetFieldDirty<Values> = useCallback((path, dirty) => {
    setDirty((currentDirty) => {
      if (getStatus(currentDirty, path) === dirty) {
        return currentDirty;
      }

      return { ...currentDirty, [path]: dirty };
    });
  }, []);

  const isTouched: GetFieldStatus<Values> = useCallback(
    (path) => getStatus(touchedRef.current, path),
    []
  );

  const clearFieldDirty: ClearFieldDirty = useCallback(
    (path) =>
      setDirty((current) => {
        if (typeof path !== 'string') {
          return current;
        }

        const result = clearListState(path, current);
        delete result[path];

        if (isEqual(result, current)) {
          return current;
        }

        return result;
      }),
    []
  );

  const isDirty: GetFieldStatus<Values> = useCallback((path) => {
    if (path) {
      const overriddenValue = getPath(path, dirtyRef.current);
      if (typeof overriddenValue === 'boolean') {
        return overriddenValue;
      }

      const sliceOfValues = getPath(path, $values.refValues.current);
      const sliceOfInitialValues = getPath(path, $values.valuesSnapshot.current);
      return !isEqual(sliceOfValues, sliceOfInitialValues);
    }

    const isOverridden = Object.keys(dirtyRef.current).length > 0;
    if (isOverridden) {
      return getStatus(dirtyRef.current);
    }

    return !isEqual($values.refValues.current, $values.valuesSnapshot.current);
  }, []);

  const getDirty = useCallback(() => dirtyRef.current, []);
  const getTouched = useCallback(() => touchedRef.current, []);

  return {
    touchedState,
    dirtyState,
    touchedRef,
    dirtyRef,
    setTouched,
    setDirty,
    resetDirty,
    resetTouched,
    isTouched,
    setFieldTouched,
    setFieldDirty,
    setTouchedState,
    setDirtyState,
    clearFieldDirty,
    isDirty,
    getDirty,
    getTouched,
  };
}
