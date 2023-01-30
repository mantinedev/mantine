import { useState, useCallback, useRef } from 'react';
import isEqual from 'fast-deep-equal';
import { getInputOnChange } from './get-input-on-change';
import { setPath, reorderPath, insertPath, getPath, removePath } from './paths';
import { filterErrors } from './filter-errors';
import { validateValues, validateFieldValue, shouldValidateOnChange } from './validate';
import { getStatus } from './get-status';
import { clearListState } from './clear-list-state';
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
  GetFieldStatus,
  ResetDirty,
  IsValid,
  _TransformValues,
  ClearFieldDirty,
} from './types';

export function useForm<
  Values = Record<string, unknown>,
  TransformValues extends _TransformValues<Values> = (values: Values) => Values
>({
  initialValues = {} as Values,
  initialErrors = {},
  initialDirty = {},
  initialTouched = {},
  clearInputErrorOnChange = true,
  validateInputOnChange = false,
  validateInputOnBlur = false,
  transformValues = ((values: Values) => values) as any,
  validate: rules,
}: UseFormInput<Values, TransformValues> = {}): UseFormReturnType<Values, TransformValues> {
  const [touched, setTouched] = useState(initialTouched);
  const [dirty, setDirty] = useState(initialDirty);
  const [values, _setValues] = useState(initialValues);
  const valuesRef = useRef<Values>(values);
  const [errors, _setErrors] = useState(filterErrors(initialErrors));
  const _dirtyValues = useRef<Values>(initialValues);
  const _setDirtyValues = (_values: Values) => {
    _dirtyValues.current = _values;
  };

  const resetTouched = useCallback(() => setTouched({}), []);
  const resetDirty: ResetDirty<Values> = (_values) => {
    _setDirtyValues(_values || values);
    setDirty({});
  };

  const setErrors: SetErrors = useCallback(
    (errs) =>
      _setErrors((current) => filterErrors(typeof errs === 'function' ? errs(current) : errs)),
    []
  );

  const clearErrors: ClearErrors = useCallback(() => _setErrors({}), []);
  const reset: Reset = useCallback(() => {
    _setValues(initialValues);
    clearErrors();
    resetDirty(initialValues);
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

  const setFieldValue: SetFieldValue<Values> = useCallback((path, value) => {
    const shouldValidate = shouldValidateOnChange(path, validateInputOnChange);
    clearFieldDirty(path);
    setTouched((currentTouched) => ({ ...currentTouched, [path]: true }));
    _setValues((current) => {
      const result = setPath(path, value, current);

      if (shouldValidate) {
        const validationResults = validateFieldValue(path, rules, result);
        validationResults.hasError
          ? setFieldError(path, validationResults.error)
          : clearFieldError(path);
      }

      valuesRef.current = result;

      return result;
    });

    !shouldValidate && clearInputErrorOnChange && setFieldError(path, null);
  }, []);

  const setValues: SetValues<Values> = useCallback((payload) => {
    _setValues((currentValues) => {
      const valuesPartial = typeof payload === 'function' ? payload(currentValues) : payload;
      return { ...currentValues, ...valuesPartial };
    });
    clearInputErrorOnChange && clearErrors();
  }, []);

  const reorderListItem: ReorderListItem<Values> = useCallback((path, payload) => {
    clearFieldDirty(path);
    _setValues((current) => reorderPath(path, payload, current));
  }, []);

  const removeListItem: RemoveListItem<Values> = useCallback((path, index) => {
    clearFieldDirty(path);
    _setValues((current) => removePath(path, index, current));
    _setErrors((errs) => clearListState(path, errs));
  }, []);

  const insertListItem: InsertListItem<Values> = useCallback((path, item, index) => {
    clearFieldDirty(path);
    _setValues((current) => insertPath(path, item, index, current));
  }, []);

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
    const payload: any = { onChange };

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
      payload.onBlur = () => {
        if (shouldValidateOnChange(path, validateInputOnBlur)) {
          const validationResults = validateFieldValue(path, rules, values);

          validationResults.hasError
            ? setFieldError(path, validationResults.error)
            : clearFieldError(path);
        }
      };
    }

    return payload;
  };

  const onSubmit: OnSubmit<Values, TransformValues> =
    (handleSubmit, handleValidationFailure) => (event) => {
      event?.preventDefault();
      const results = validate();

      if (results.hasErrors) {
        handleValidationFailure?.(results.errors, values, event);
      } else {
        handleSubmit(transformValues(values) as any, event);
      }
    };

  const onReset: OnReset = useCallback((event) => {
    event.preventDefault();
    reset();
  }, []);

  const isDirty: GetFieldStatus<Values> = (path) => {
    if (path) {
      const overridenValue = getPath(path, dirty);
      if (typeof overridenValue === 'boolean') {
        return overridenValue;
      }

      const sliceOfValues = getPath(path, values);
      const sliceOfInitialValues = getPath(path, _dirtyValues.current);
      return !isEqual(sliceOfValues, sliceOfInitialValues);
    }

    const isOverridden = Object.keys(dirty).length > 0;
    if (isOverridden) {
      return getStatus(dirty);
    }

    return !isEqual(values, _dirtyValues.current);
  };

  const isTouched: GetFieldStatus<Values> = useCallback(
    (path) => getStatus(touched, path),
    [touched]
  );

  const isValid: IsValid<Values> = useCallback(
    (path) =>
      path
        ? !validateFieldValue(path, rules, values).hasError
        : !validateValues(rules, values).hasErrors,
    [values, rules]
  );

  return {
    values,
    valuesRef,
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
  };
}
