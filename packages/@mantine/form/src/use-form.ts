import { useCallback, useRef, useState } from 'react';
import isEqual from 'fast-deep-equal';
import { useFormActions } from './actions';
import { filterErrors } from './filter-errors';
import { getInputOnChange } from './get-input-on-change';
import { getStatus } from './get-status';
import { changeErrorIndices, clearListState, reorderErrors } from './lists';
import { getPath, insertPath, removePath, reorderPath, setPath } from './paths';
import {
  _TransformValues,
  ClearErrors,
  ClearFieldDirty,
  ClearFieldError,
  GetFieldStatus,
  GetInputProps,
  GetTransformedValues,
  Initialize,
  InsertListItem,
  IsValid,
  OnReset,
  OnSubmit,
  PathValue,
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
  Values = Record<string, unknown>,
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
  const [touched, setTouched] = useState(initialTouched);
  const [dirty, setDirty] = useState(initialDirty);
  const [values, _setValues] = useState((initialValues || {}) as Values);
  const [errors, _setErrors] = useState(filterErrors(initialErrors));
  const [initialized, setInitialized] = useState(false);

  const valuesSnapshot = useRef<Values>((initialValues || {}) as Values);
  const setValuesSnapshot = (_values: Values) => {
    valuesSnapshot.current = _values;
  };

  const initialize: Initialize<Values> = useCallback(
    (_values) => {
      if (!initialized) {
        setInitialized(true);
        _setValues(_values);
        setValuesSnapshot(_values);
      }
    },
    [initialized]
  );

  const resetTouched = useCallback(() => setTouched({}), []);
  const resetDirty: ResetDirty<Values> = (_values) => {
    const newSnapshot = _values ? { ...values, ..._values } : values;
    setValuesSnapshot(newSnapshot as Values);
    setDirty({});
  };

  const setErrors: SetErrors = useCallback(
    (errs) =>
      _setErrors((current) => filterErrors(typeof errs === 'function' ? errs(current) : errs)),
    []
  );

  const clearErrors: ClearErrors = useCallback(() => _setErrors({}), []);
  const reset: Reset = useCallback(() => {
    _setValues(valuesSnapshot.current);
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

  const setFieldValue: SetFieldValue<Values> = useCallback((path, payload) => {
    const shouldValidate = shouldValidateOnChange(path, validateInputOnChange);
    clearFieldDirty(path);
    setTouched((currentTouched) => ({ ...currentTouched, [path]: true }));
    _setValues((current) => {
      const currentValue = getPath(path, current) as PathValue<Values, typeof path>;
      const result = setPath(
        path,
        payload instanceof Function ? payload(currentValue) : payload,
        current
      );

      if (shouldValidate) {
        const validationResults = validateFieldValue(path, rules, result);
        validationResults.hasError
          ? setFieldError(path, validationResults.error)
          : clearFieldError(path);
      }

      onValuesChange?.(result, current);

      return result;
    });

    !shouldValidate && clearInputErrorOnChange && setFieldError(path, null);
  }, []);

  const setValues: SetValues<Values> = useCallback((payload) => {
    _setValues((currentValues) => {
      const valuesPartial = payload instanceof Function ? payload(currentValues) : payload;
      const result = { ...currentValues, ...valuesPartial };
      onValuesChange?.(result, currentValues);
      return result;
    });
    clearInputErrorOnChange && clearErrors();
  }, []);

  const reorderListItem: ReorderListItem<Values> = useCallback((path, payload) => {
    clearFieldDirty(path);
    _setValues((current) => {
      const result = reorderPath(path, payload, current);
      onValuesChange?.(result, current);
      return result;
    });
    _setErrors((errs) => reorderErrors(path, payload, errs));
  }, []);

  const removeListItem: RemoveListItem<Values> = useCallback((path, index) => {
    clearFieldDirty(path);
    _setValues((current) => {
      const result = removePath(path, index, current);
      onValuesChange?.(result, current);
      return result;
    });
    _setErrors((errs) => changeErrorIndices(path, index, errs, -1));
  }, []);

  const insertListItem: InsertListItem<Values> = useCallback((path, item, index) => {
    clearFieldDirty(path);
    _setValues((current) => {
      const result = insertPath(path, item, index, current);
      onValuesChange?.(result, current);
      return result;
    });
    _setErrors((errs) => changeErrorIndices(path, index, errs, 1));
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
    { type = 'input', withError = true, withFocus = true, ...otherOptions } = {}
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
        handleValidationFailure?.(results.errors, values, event);
      } else {
        handleSubmit?.(transformValues(values) as any, event);
      }
    };

  const getTransformedValues: GetTransformedValues<Values, TransformValues> = (input) =>
    (transformValues as any)(input || values);

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

      const sliceOfValues = getPath(path, values);
      const sliceOfInitialValues = getPath(path, valuesSnapshot.current);
      return !isEqual(sliceOfValues, sliceOfInitialValues);
    }

    const isOverridden = Object.keys(dirty).length > 0;
    if (isOverridden) {
      return getStatus(dirty);
    }

    return !isEqual(values, valuesSnapshot.current);
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

  const form: UseFormReturnType<Values, TransformValues> = {
    initialized,
    values,
    errors,
    initialize,
    setValues,
    setInitialValues: setValuesSnapshot,
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
