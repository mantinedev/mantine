import { useCallback } from 'react';
import isEqual from 'fast-deep-equal';
import { changeErrorIndices, reorderErrors } from '../../lists';
import { getPath, insertPath, removePath, reorderPath, replacePath } from '../../paths';
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
  // Drops dirty state of the list items (indices may have shifted) and records the list itself
  // as dirty if it differs from the snapshot, so that `isDirty()` does not miss the change
  const updateListDirty = (path: Parameters<$FormStatus<Values>['setCalculatedFieldDirty']>[0]) => {
    const value = getPath(path, $values.refValues.current);

    if (isEqual(getPath(path, $values.getValuesSnapshot()), value)) {
      $status.clearFieldDirty(path);
    } else {
      $status.setCalculatedFieldDirty(path, value as any);
    }
  };

  const reorderListItem: ReorderListItem<Values> = useCallback((path, payload) => {
    const previousValues = $values.refValues.current;
    $errors.setErrors((errs) => reorderErrors(path, payload, errs));
    $values.setValues({
      values: reorderPath(path, payload, $values.refValues.current),
      updateState: true,
    });
    updateListDirty(path);
    $watch.notifyWatchSubscribers(previousValues);
  }, []);

  const removeListItem: RemoveListItem<Values> = useCallback((path, index) => {
    const previousValues = $values.refValues.current;
    $errors.setErrors((errs) => changeErrorIndices(path, index, errs, -1));
    $values.setValues({
      values: removePath(path, index, $values.refValues.current),
      updateState: true,
    });
    updateListDirty(path);
    $watch.notifyWatchSubscribers(previousValues);
  }, []);

  const insertListItem: InsertListItem<Values> = useCallback((path, item, index) => {
    const previousValues = $values.refValues.current;
    $errors.setErrors((errs) => changeErrorIndices(path, index, errs, 1));
    $values.setValues({
      values: insertPath(path, item, index, $values.refValues.current),
      updateState: true,
    });
    updateListDirty(path);
    $watch.notifyWatchSubscribers(previousValues);
  }, []);

  const replaceListItem: ReplaceListItem<Values> = useCallback((path, index, item) => {
    const previousValues = $values.refValues.current;
    $values.setValues({
      values: replacePath(path, item, index, $values.refValues.current),
      updateState: true,
    });
    updateListDirty(path);
    $watch.notifyWatchSubscribers(previousValues);
  }, []);

  return { reorderListItem, removeListItem, insertListItem, replaceListItem };
}
