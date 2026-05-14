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
  const reorderListItem: ReorderListItem<Values> = useCallback((path, payload) => {
    const previousValues = $values.refValues.current;
    $status.clearFieldDirty(path);
    $errors.setErrors((errs) => reorderErrors(path, payload, errs));
    $values.setValues({
      values: reorderPath(path, payload, $values.refValues.current),
      updateState: true,
    });
    $watch.notifyWatchSubscribers(previousValues);
  }, []);

  const removeListItem: RemoveListItem<Values> = useCallback((path, index) => {
    const previousValues = $values.refValues.current;
    $status.clearFieldDirty(path);
    $errors.setErrors((errs) => changeErrorIndices(path, index, errs, -1));
    $values.setValues({
      values: removePath(path, index, $values.refValues.current),
      updateState: true,
    });
    $watch.notifyWatchSubscribers(previousValues);
  }, []);

  const insertListItem: InsertListItem<Values> = useCallback((path, item, index) => {
    const previousValues = $values.refValues.current;
    $status.clearFieldDirty(path);
    $errors.setErrors((errs) => changeErrorIndices(path, index, errs, 1));
    $values.setValues({
      values: insertPath(path, item, index, $values.refValues.current),
      updateState: true,
    });
    $watch.notifyWatchSubscribers(previousValues);
  }, []);

  const replaceListItem: ReplaceListItem<Values> = useCallback((path, index, item) => {
    const previousValues = $values.refValues.current;
    $status.clearFieldDirty(path);
    $values.setValues({
      values: replacePath(path, item, index, $values.refValues.current),
      updateState: true,
    });
    $watch.notifyWatchSubscribers(previousValues);
  }, []);

  return { reorderListItem, removeListItem, insertListItem, replaceListItem };
}
