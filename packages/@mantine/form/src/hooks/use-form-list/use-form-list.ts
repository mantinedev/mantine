import { useCallback } from 'react';
import { changeErrorIndices, reorderErrors } from '../../lists';
import { insertPath, removePath, reorderPath, replacePath } from '../../paths';
import { InsertListItem, RemoveListItem, ReorderListItem, ReplaceListItem } from '../../types';
import type { $FormErrors } from '../use-form-errors/use-form-errors';
import type { $FormStatus } from '../use-form-status/use-form-status';
import type { $FormValues } from '../use-form-values/use-form-values';

interface UseFormListInput<Values extends Record<string, any>> {
  $values: $FormValues<Values>;
  $errors: $FormErrors<Values>;
  $status: $FormStatus<Values>;
}

export function useFormList<Values extends Record<string, any>>({
  $values,
  $errors,
  $status,
}: UseFormListInput<Values>) {
  const reorderListItem: ReorderListItem<Values> = useCallback((path, payload) => {
    $status.clearFieldDirty(path);
    $errors.setErrors((errs) => reorderErrors(path, payload, errs));
    $values.setValues({
      values: reorderPath(path, payload, $values.refValues.current),
      updateState: true,
    });
  }, []);

  const removeListItem: RemoveListItem<Values> = useCallback((path, index) => {
    $status.clearFieldDirty(path);
    $errors.setErrors((errs) => changeErrorIndices(path, index, errs, -1));
    $values.setValues({
      values: removePath(path, index, $values.refValues.current),
      updateState: true,
    });
  }, []);

  const insertListItem: InsertListItem<Values> = useCallback((path, item, index) => {
    $status.clearFieldDirty(path);
    $errors.setErrors((errs) => changeErrorIndices(path, index, errs, 1));
    $values.setValues({
      values: insertPath(path, item, index, $values.refValues.current),
      updateState: true,
    });
  }, []);

  const replaceListItem: ReplaceListItem<Values> = useCallback((path, index, item) => {
    $status.clearFieldDirty(path);
    $values.setValues({
      values: replacePath(path, item, index, $values.refValues.current),
      updateState: true,
    });
  }, []);

  return { reorderListItem, removeListItem, insertListItem, replaceListItem };
}
