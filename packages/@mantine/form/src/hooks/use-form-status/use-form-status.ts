import { useCallback, useState } from 'react';
import isEqual from 'fast-deep-equal';
import { getStatus } from '../../get-status';
import { clearListState } from '../../lists';
import {
  ClearFieldDirty,
  FormStatus,
  GetFieldStatus,
  ResetStatus,
  SetFieldDirty,
  SetFieldTouched,
} from '../../types';

interface UseFormStatusInput {
  initialDirty: FormStatus;
  initialTouched: FormStatus;
}

export function useFormStatus<Values extends Record<string, any>>({
  initialDirty,
  initialTouched,
}: UseFormStatusInput) {
  const [touchedState, setTouchedState] = useState(initialTouched);
  const [dirtyState, setDirtyState] = useState(initialDirty);

  const resetTouched: ResetStatus = useCallback(() => setTouchedState({}), []);
  const resetDirty: ResetStatus = useCallback(() => setDirtyState({}), []);

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
  };
}
