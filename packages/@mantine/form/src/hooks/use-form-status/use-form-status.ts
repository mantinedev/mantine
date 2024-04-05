import { useCallback, useState } from 'react';
import isEqual from 'fast-deep-equal';
import { getStatus } from '../../get-status';
import { clearListState } from '../../lists';
import { getPath } from '../../paths';
import {
  ClearFieldDirty,
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
  resetDirty: ResetStatus;
  resetTouched: ResetStatus;
  isTouched: GetFieldStatus<Values>;
  setFieldTouched: SetFieldTouched<Values>;
  setFieldDirty: SetFieldDirty<Values>;
  setTouchedState: React.Dispatch<React.SetStateAction<FormStatus>>;
  setDirtyState: React.Dispatch<React.SetStateAction<FormStatus>>;
  clearFieldDirty: ClearFieldDirty;
  isDirty: GetFieldStatus<Values>;
}

interface UseFormStatusInput<Values extends Record<string, any>> {
  initialDirty: FormStatus;
  initialTouched: FormStatus;
  $values: $FormValues<Values>;
}

export function useFormStatus<Values extends Record<string, any>>({
  initialDirty,
  initialTouched,
  $values,
}: UseFormStatusInput<Values>): $FormStatus<Values> {
  const [touchedState, setTouchedState] = useState(initialTouched);
  const [dirtyState, setDirtyState] = useState(initialDirty);

  const resetTouched: ResetStatus = useCallback(() => setTouchedState({}), []);

  const resetDirty: ResetDirty<Values> = (values) => {
    const newSnapshot = values
      ? { ...values, ...$values.refValues.current }
      : $values.refValues.current;
    $values.setValuesSnapshot(newSnapshot);
    setDirtyState({});
  };

  const setFieldTouched: SetFieldTouched<Values> = useCallback((path, touched) => {
    setTouchedState((currentTouched) => {
      if (getStatus(currentTouched, path) === touched) {
        return currentTouched;
      }

      return { ...currentTouched, [path]: touched };
    });
  }, []);

  const setFieldDirty: SetFieldDirty<Values> = useCallback((path, dirty) => {
    setDirtyState((currentDirty) => {
      if (getStatus(currentDirty, path) === dirty) {
        return currentDirty;
      }

      return { ...currentDirty, [path]: dirty };
    });
  }, []);

  const isTouched: GetFieldStatus<Values> = useCallback(
    (path) => getStatus(touchedState, path),
    [touchedState]
  );

  const clearFieldDirty: ClearFieldDirty = useCallback(
    (path) =>
      setDirtyState((current) => {
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

  const isDirty: GetFieldStatus<Values> = useCallback(
    (path) => {
      if (path) {
        const overriddenValue = getPath(path, dirtyState);
        if (typeof overriddenValue === 'boolean') {
          return overriddenValue;
        }

        const sliceOfValues = getPath(path, $values.refValues.current);
        const sliceOfInitialValues = getPath(path, $values.valuesSnapshot.current);
        return !isEqual(sliceOfValues, sliceOfInitialValues);
      }

      const isOverridden = Object.keys(dirtyState).length > 0;
      if (isOverridden) {
        return getStatus(dirtyState);
      }

      return !isEqual($values.refValues.current, $values.valuesSnapshot.current);
    },
    [dirtyState]
  );

  return {
    touchedState,
    dirtyState,
    resetDirty,
    resetTouched,
    isTouched,
    setFieldTouched,
    setFieldDirty,
    setTouchedState,
    setDirtyState,
    clearFieldDirty,
    isDirty,
  };
}
