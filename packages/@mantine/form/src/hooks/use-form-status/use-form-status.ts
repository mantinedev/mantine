import { useCallback, useRef, useState } from 'react';
import isEqual from 'fast-deep-equal';
import { getStatus } from '../../get-status';
import { getUpdatedDirty } from '../../get-status/get-updated-dirty';
import { getPath } from '../../paths';
import {
  FormMode,
  FormStatus,
  GetFieldStatus,
  ResetDirty,
  ResetStatus,
  SetFieldDirty,
  SetFieldTouched,
} from '../../types';
import type { $FormValues } from '../use-form-values/use-form-values';

export interface $FormStatus<out Values extends Record<string, any>> {
  touchedState: FormStatus;
  dirtyState: FormStatus;
  touchedRef: React.RefObject<FormStatus>;
  dirtyRef: React.RefObject<FormStatus>;
  setTouched: React.Dispatch<React.SetStateAction<FormStatus>>;
  setDirty: React.Dispatch<React.SetStateAction<FormStatus>>;
  resetDirty: ResetStatus;
  resetTouched: ResetStatus;
  isTouched: GetFieldStatus<Values>;
  setFieldTouched: SetFieldTouched<Values>;
  setFieldDirty: SetFieldDirty<Values>;
  setTouchedState: React.Dispatch<React.SetStateAction<FormStatus>>;
  setDirtyState: React.Dispatch<React.SetStateAction<FormStatus>>;
  isDirty: GetFieldStatus<Values>;
  getDirty: () => FormStatus;
  getTouched: () => FormStatus;
  updateFieldDirty: (path: PropertyKey, values: unknown, clear?: boolean) => void;
}

interface UseFormStatusInput<out Values extends Record<string, any>> {
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

  const setDirty = useCallback(
    (values: FormStatus | ((current: FormStatus) => FormStatus), forceUpdate = false) => {
      const resolvedValues = typeof values === 'function' ? values(dirtyRef.current) : values;
      dirtyRef.current = resolvedValues;

      if (mode === 'controlled' || forceUpdate) {
        setDirtyState(resolvedValues);
      }
    },
    []
  );

  const resetTouched: ResetStatus = useCallback(() => setTouched({}), []);

  const resetDirty: ResetDirty<Values> = useCallback((values) => {
    const newSnapshot = values
      ? { ...$values.refValues.current, ...values }
      : $values.refValues.current;
    $values.setValuesSnapshot(newSnapshot);
    setDirty({});
  }, []);

  const setFieldTouched: SetFieldTouched<Values> = useCallback((path, touched) => {
    setTouched((currentTouched) => {
      if (getStatus(currentTouched, path) === touched) {
        return currentTouched;
      }

      return { ...currentTouched, [path]: touched };
    });
  }, []);

  const setFieldDirty: SetFieldDirty<Values> = useCallback((path, dirty, forceUpdate) => {
    setDirty((currentDirty) => {
      if (getStatus(currentDirty, path) === dirty) {
        return currentDirty;
      }

      return { ...currentDirty, [path]: dirty };
    }, forceUpdate);
  }, []);

  const updateFieldDirty = useCallback((path: PropertyKey, values: unknown, clear = false) => {
    const current = dirtyRef.current;
    const next = getUpdatedDirty(current, path, values, $values.getValuesSnapshot(), clear);
    setDirty(next, getStatus(current, path) !== getStatus(next, path));
  }, []);

  const isTouched: GetFieldStatus<Values> = useCallback(
    (path) => getStatus(touchedRef.current, path),
    [touchedRef.current]
  );

  const isDirty: GetFieldStatus<Values> = useCallback(
    (path) => {
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
    },
    [dirtyRef.current, $values.refValues.current, $values.valuesSnapshot.current]
  );

  const getDirty = useCallback(() => dirtyRef.current, [dirtyRef.current]);
  const getTouched = useCallback(() => touchedRef.current, [touchedRef.current]);

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
    isDirty,
    getDirty,
    getTouched,
    updateFieldDirty,
  };
}
