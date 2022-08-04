import { useState, useCallback } from 'react';
import isEqual from 'fast-deep-equal';
import { getInputOnChange } from './get-input-on-change';
import { setPath, reorderPath, insertPath, getPath, removePath } from './paths';
import { filterErrors, clearListErrors } from './filter-errors';
import { validateValues, validateFieldValue, shouldValidateOnChange } from './validate';
import { getStatus } from './get-status';
import {
  UseFormReturnType,
  UseFormInput,
  SetErrors,
  ClearErrors,
  Reset,
  SetFieldError,
  SetFieldValue,
  SetValues,
  ReorderListItem,
  RemoveListItem,
  InsertListItem,
  ClearFieldError,
  Validate,
  ValidateField,
  GetInputProps,
  OnSubmit,
  OnReset,
  IsDirty,
} from './types';

export function useForm<Values = Record<string, unknown>>({
  initialValues = {} as Values,
  initialErrors = {},
  initialDirty = {},
  initialTouched = {},
  clearInputErrorOnChange = true,
  validateInputOnChange = false,
  validate: rules,
}: UseFormInput<Values> = {}): UseFormReturnType<Values> {
  const [touched, setTouched] = useState(initialTouched);
  const [dirty, setDirty] = useState(initialDirty);
  const [values, _setValues] = useState(initialValues);
  const [errors, _setErrors] = useState(filterErrors(initialErrors));

  const setErrors: SetErrors = useCallback(
    (errs) =>
      _setErrors((current) => filterErrors(typeof errs === 'function' ? errs(current) : errs)),
    []
  );

  const clearErrors: ClearErrors = useCallback(() => _setErrors({}), []);
  const reset: Reset = useCallback(() => {
    _setValues(initialValues);
    clearErrors();
  }, []);

  const setFieldError: SetFieldError<Values> = useCallback(
    (path, error) => setErrors((current) => ({ ...current, [path]: error })),
    []
  );

  const clearFieldError: ClearFieldError = useCallback(
    (path) =>
      setErrors((current) => {
        if (typeof path !== 'string') {
          return current;
        }

        const clone = { ...current };
        delete clone[path];
        return clone;
      }),
    []
  );

  const setFieldValue: SetFieldValue<Values> = useCallback((path, value) => {
    const shouldValidate = shouldValidateOnChange(path, validateInputOnChange);
    _setValues((current) => {
      const initialValue = getPath(path, initialValues);
      const isFieldDirty = !isEqual(initialValue, value);
      setDirty((currentDirty) => ({ ...currentDirty, [path]: isFieldDirty }));
      setTouched((currentTouched) => ({ ...currentTouched, [path]: true }));

      const result = setPath(path, value, current);

      if (shouldValidate) {
        const validationResults = validateFieldValue(path, rules, result);
        validationResults.hasError
          ? setFieldError(path, validationResults.error)
          : clearFieldError(path);
      }

      return result;
    });

    !shouldValidate && clearInputErrorOnChange && setFieldError(path, null);
  }, []);

  const setValues: SetValues<Values> = useCallback((payload) => {
    _setValues(payload);
    clearInputErrorOnChange && clearErrors();
  }, []);

  const reorderListItem: ReorderListItem<Values> = useCallback(
    (path, payload) => _setValues((current) => reorderPath(path, payload, current)),
    []
  );

  const removeListItem: RemoveListItem<Values> = useCallback((path, index) => {
    _setValues((current) => removePath(path, index, current));
    _setErrors((errs) => clearListErrors(path, errs));
  }, []);

  const insertListItem: InsertListItem<Values> = useCallback(
    (path, item, index) => _setValues((current) => insertPath(path, item, index, current)),
    []
  );

  const validate: Validate = useCallback(() => {
    const results = validateValues(rules, values);
    _setErrors(results.errors);
    return results;
  }, [values, rules]);

  const validateField: ValidateField<Values> = useCallback(
    (path) => {
      const results = validateFieldValue(path, rules, values);
      results.hasError ? setFieldError(path, results.error) : clearFieldError(path);
      return results;
    },
    [values, rules]
  );

  const getInputProps: GetInputProps<Values> = (
    path,
    { type = 'input', withError = type === 'input', withFocus = true } = {}
  ) => {
    const onChange = getInputOnChange((value) => setFieldValue(path, value as any));
    const payload: Record<string, any> = { onChange };

    if (withError) {
      payload.error = errors[path];
    }

    if (type === 'checkbox') {
      payload.checked = getPath(path, values);
    } else {
      payload.value = getPath(path, values);
    }

    if (withFocus) {
      payload.onFocus = () => setTouched((current) => ({ ...current, [path]: true }));
    }

    return payload;
  };

  const onSubmit: OnSubmit<Values> = (handleSubmit, handleValidationFailure) => (event) => {
    event.preventDefault();
    const results = validate();

    if (results.hasErrors) {
      handleValidationFailure?.(results.errors, values, event);
    } else {
      handleSubmit(values, event);
    }
  };

  const onReset: OnReset = useCallback((event) => {
    event.preventDefault();
    reset();
  }, []);

  const isDirty: IsDirty<Values> = useCallback((path) => getStatus(dirty, path), [dirty]);
  const isTouched: IsDirty<Values> = useCallback((path) => getStatus(touched, path), [touched]);

  return {
    values,
    errors,
    setValues,
    setErrors,
    setFieldValue,
    setFieldError,
    clearFieldError,
    clearErrors,
    reset,
    validate,
    validateField,
    reorderListItem,
    removeListItem,
    insertListItem,
    getInputProps,
    onSubmit,
    onReset,
    isDirty,
    isTouched,
    setTouched,
    setDirty,
  };
}
