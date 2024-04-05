import { useCallback, useState } from 'react';
import isEqual from 'fast-deep-equal';
import { useFormActions } from './actions';
import { filterErrors } from './filter-errors';
import { getInputOnChange } from './get-input-on-change';
import { getStatus } from './get-status';
import { useFormValues } from './hooks/use-form-values/use-form-values';
import { changeErrorIndices, clearListState, reorderErrors } from './lists';
import { getPath, insertPath, removePath, reorderPath } from './paths';
import {
  _TransformValues,
  ClearErrors,
  ClearFieldDirty,
  ClearFieldError,
  GetFieldStatus,
  GetInputProps,
  GetTransformedValues,
  InsertListItem,
  IsValid,
  OnReset,
  OnSubmit,
  RemoveListItem,
  ReorderListItem,
  Reset,
  ResetDirty,
  SetErrors,
  SetFieldError,
  SetFieldValue,
  SetValues,
  UseFormInput,
  UseFormReturnType,
  Validate,
  ValidateField,
} from './types';
import { shouldValidateOnChange, validateFieldValue, validateValues } from './validate';

export function useForm<
  Values extends Record<string, any> = Record<string, any>,
  TransformValues extends _TransformValues<Values> = (values: Values) => Values,
>({
  name,
  initialValues,
  initialErrors = {},
  initialDirty = {},
  initialTouched = {},
  clearInputErrorOnChange = true,
  validateInputOnChange = false,
  validateInputOnBlur = false,
  onValuesChange,
  transformValues = ((values: Values) => values) as any,
  enhanceGetInputProps,
  validate: rules,
}: UseFormInput<Values, TransformValues> = {}): UseFormReturnType<Values, TransformValues> {
  const $values = useFormValues<Values>({ initialValues, onValuesChange });
  const [touched, setTouched] = useState(initialTouched);
  const [dirty, setDirty] = useState(initialDirty);
  const [errors, _setErrors] = useState(filterErrors(initialErrors));

  const resetTouched = useCallback(() => setTouched({}), []);
  const resetDirty: ResetDirty<Values> = (values) => {
    const newSnapshot = values
      ? { ...values, ...$values.refValues.current }
      : $values.refValues.current;
    $values.setValuesSnapshot(newSnapshot);
    setDirty({});
  };

  const setErrors: SetErrors = useCallback(
    (errs) =>
      _setErrors((current) => filterErrors(typeof errs === 'function' ? errs(current) : errs)),
    []
  );

  const clearErrors: ClearErrors = useCallback(() => _setErrors({}), []);
  const reset: Reset = useCallback(() => {
    $values.resetValues();
    clearErrors();
    setDirty({});
    resetTouched();
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

  const clearFieldDirty: ClearFieldDirty = useCallback(
    (path) =>
      setDirty((current) => {
        if (typeof path !== 'string') {
          return current;
        }

        const result = clearListState(path, current);
        delete result[path];
        return result;
      }),
    []
  );

  const setFieldValue: SetFieldValue<Values> = useCallback(
    (path, value) => {
      const shouldValidate = shouldValidateOnChange(path, validateInputOnChange);

      clearFieldDirty(path);
      setTouched((currentTouched) => ({ ...currentTouched, [path]: true }));
      !shouldValidate && clearInputErrorOnChange && setFieldError(path, null);

      $values.setFieldValue({
        path,
        value,
        updateState: true,
        subscribers: [
          shouldValidate
            ? (payload) => {
                const validationResults = validateFieldValue(path, rules, payload.updatedValues);
                validationResults.hasError
                  ? setFieldError(path, validationResults.error)
                  : clearFieldError(path);
              }
            : null,
        ],
      });
    },
    [onValuesChange]
  );

  const setValues: SetValues<Values> = useCallback(
    (values) => {
      $values.setValues({ values, updateState: true });
      clearInputErrorOnChange && clearErrors();
    },
    [onValuesChange, clearInputErrorOnChange]
  );

  const reorderListItem: ReorderListItem<Values> = useCallback((path, payload) => {
    clearFieldDirty(path);
    _setErrors((errs) => reorderErrors(path, payload, errs));
    $values.setValues({
      values: reorderPath(path, payload, $values.refValues.current),
      updateState: true,
    });
  }, []);

  const removeListItem: RemoveListItem<Values> = useCallback((path, index) => {
    clearFieldDirty(path);
    _setErrors((errs) => changeErrorIndices(path, index, errs, -1));
    $values.setValues({
      values: removePath(path, index, $values.refValues.current),
      updateState: true,
    });
  }, []);

  const insertListItem: InsertListItem<Values> = useCallback((path, item, index) => {
    clearFieldDirty(path);
    _setErrors((errs) => changeErrorIndices(path, index, errs, 1));
    $values.setValues({
      values: insertPath(path, item, index, $values.refValues.current),
      updateState: true,
    });
  }, []);

  const validate: Validate = useCallback(() => {
    const results = validateValues(rules, $values.refValues.current);
    _setErrors(results.errors);
    return results;
  }, [rules]);

  const validateField: ValidateField<Values> = useCallback(
    (path) => {
      const results = validateFieldValue(path, rules, $values.refValues.current);
      results.hasError ? setFieldError(path, results.error) : clearFieldError(path);
      return results;
    },
    [rules]
  );

  const getInputProps: GetInputProps<Values> = (
    path,
    { type = 'input', withError = true, withFocus = true, ...otherOptions } = {}
  ) => {
    const onChange = getInputOnChange((value) => setFieldValue(path, value as any));
    const payload: any = { onChange };

    if (withError) {
      payload.error = errors[path];
    }

    if (type === 'checkbox') {
      payload.checked = getPath(path, $values.refValues.current);
    } else {
      payload.value = getPath(path, $values.refValues.current);
    }

    if (withFocus) {
      payload.onFocus = () => setTouched((current) => ({ ...current, [path]: true }));
      payload.onBlur = () => {
        if (shouldValidateOnChange(path, validateInputOnBlur)) {
          const validationResults = validateFieldValue(path, rules, $values.refValues.current);

          validationResults.hasError
            ? setFieldError(path, validationResults.error)
            : clearFieldError(path);
        }
      };
    }

    return Object.assign(
      payload,
      enhanceGetInputProps?.({
        inputProps: payload,
        field: path,
        options: { type, withError, withFocus, ...otherOptions },
        form,
      })
    );
  };

  const onSubmit: OnSubmit<Values, TransformValues> =
    (handleSubmit, handleValidationFailure) => (event) => {
      event?.preventDefault();
      const results = validate();

      if (results.hasErrors) {
        handleValidationFailure?.(results.errors, $values.refValues.current, event);
      } else {
        handleSubmit?.(transformValues($values.refValues.current) as any, event);
      }
    };

  const getTransformedValues: GetTransformedValues<Values, TransformValues> = (input) =>
    (transformValues as any)(input || $values.refValues.current);

  const onReset: OnReset = useCallback((event) => {
    event.preventDefault();
    reset();
  }, []);

  const isDirty: GetFieldStatus<Values> = (path) => {
    if (path) {
      const overriddenValue = getPath(path, dirty);
      if (typeof overriddenValue === 'boolean') {
        return overriddenValue;
      }

      const sliceOfValues = getPath(path, $values.refValues.current);
      const sliceOfInitialValues = getPath(path, $values.valuesSnapshot.current);
      return !isEqual(sliceOfValues, sliceOfInitialValues);
    }

    const isOverridden = Object.keys(dirty).length > 0;
    if (isOverridden) {
      return getStatus(dirty);
    }

    return !isEqual($values.refValues.current, $values.valuesSnapshot.current);
  };

  const isTouched: GetFieldStatus<Values> = useCallback(
    (path) => getStatus(touched, path),
    [touched]
  );

  const isValid: IsValid<Values> = useCallback(
    (path) =>
      path
        ? !validateFieldValue(path, rules, $values.refValues.current).hasError
        : !validateValues(rules, $values.refValues.current).hasErrors,
    [rules]
  );

  const form: UseFormReturnType<Values, TransformValues> = {
    initialized: $values.initialized.current,
    values: $values.stateValues,
    initialize: $values.initialize,
    setInitialValues: $values.setValuesSnapshot,

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
    resetTouched,
    resetDirty,
    isValid,
    getTransformedValues,
  };

  useFormActions(name, form);

  return form;
}
