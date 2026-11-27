import { useCallback } from 'react';
import { changeErrorIndices, reorderErrors } from '../../lists';
import { insertPath, removePath, reorderPath, replacePath } from '../../paths';
import { InsertListItem, RemoveListItem, ReorderListItem, ReplaceListItem } from '../../types';
import type { $FormErrors } from '../use-form-errors/use-form-errors';
import type { $FormStatus } from '../use-form-status/use-form-status';
import type { $FormValues } from '../use-form-values/use-form-values';
import type { $FormWatch } from '../use-form-watch/use-form-watch';

interface UseFormListInput<Values extends Record<string, any>> {
  $values: $FormValues<Values>;
  $errors: $FormErrors<Values>;
  $status: $FormStatus<Values>;
  $watch: $FormWatch<Values>;
}

export function useFormList<Values extends Record<string, any>>({
  $values,
  $errors,
  $status,
  $watch,
}: UseFormListInput<Values>) {
  const setListValues = (path: PropertyKey, values: Values) => {
    const previousValues = $values.refValues.current;
    $status.updateFieldDirty(path, values);
    $values.setValues({ values, updateState: true });
    $watch.notifyWatchSubscribers(previousValues);
  };

  const reorderListItem: ReorderListItem<Values> = useCallback((path, payload) => {
    $errors.setErrors((errs) => reorderErrors(path, payload, errs));
    setListValues(path, reorderPath(path, payload, $values.refValues.current));
  }, []);

  const removeListItem: RemoveListItem<Values> = useCallback((path, index) => {
    $errors.setErrors((errs) => changeErrorIndices(path, index, errs, -1));
    setListValues(path, removePath(path, index, $values.refValues.current));
  }, []);

  const insertListItem: InsertListItem<Values> = useCallback((path, item, index) => {
    $errors.setErrors((errs) => changeErrorIndices(path, index, errs, 1));
    setListValues(path, insertPath(path, item, index, $values.refValues.current));
  }, []);

  const replaceListItem: ReplaceListItem<Values> = useCallback((path, index, item) => {
    setListValues(path, replacePath(path, item, index, $values.refValues.current));
  }, []);

  return { reorderListItem, removeListItem, insertListItem, replaceListItem };
}
