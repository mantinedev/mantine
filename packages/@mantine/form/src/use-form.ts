import { useCallback } from 'react';
import { useFormActions } from './actions';
import { getInputOnChange } from './get-input-on-change';
import { useFormErrors } from './hooks/use-form-errors/use-form-errors';
import { useFormList } from './hooks/use-form-list/use-form-list';
import { useFormStatus } from './hooks/use-form-status/use-form-status';
import { useFormValues } from './hooks/use-form-values/use-form-values';
import { getPath } from './paths';
import {
  _TransformValues,
  GetInputProps,
  GetTransformedValues,
  IsValid,
  OnReset,
  OnSubmit,
  Reset,
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
  const $errors = useFormErrors<Values>(initialErrors);
  const $status = useFormStatus<Values>({ initialDirty, initialTouched, $values });
  const $list = useFormList<Values>({ $values, $errors, $status });

  const reset: Reset = useCallback(() => {
    $values.resetValues();
    $errors.clearErrors();
    $status.resetDirty();
    $status.resetTouched();
  }, []);

  const setFieldValue: SetFieldValue<Values> = useCallback(
    (path, value) => {
      const shouldValidate = shouldValidateOnChange(path, validateInputOnChange);

      $status.clearFieldDirty(path);
      $status.setFieldTouched(path, true);
      !shouldValidate && clearInputErrorOnChange && $errors.clearFieldError(path);

      $values.setFieldValue({
        path,
        value,
        updateState: true,
        subscribers: [
          shouldValidate
            ? (payload) => {
                const validationResults = validateFieldValue(path, rules, payload.updatedValues);
                validationResults.hasError
                  ? $errors.setFieldError(path, validationResults.error)
                  : $errors.clearFieldError(path);
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
      clearInputErrorOnChange && $errors.clearErrors();
    },
    [onValuesChange, clearInputErrorOnChange]
  );

  const validate: Validate = useCallback(() => {
    const results = validateValues(rules, $values.refValues.current);
    $errors.setErrors(results.errors);
    return results;
  }, [rules]);

  const validateField: ValidateField<Values> = useCallback(
    (path) => {
      const results = validateFieldValue(path, rules, $values.refValues.current);
      results.hasError ? $errors.setFieldError(path, results.error) : $errors.clearFieldError(path);
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
      payload.error = $errors.errorsState[path];
    }

    if (type === 'checkbox') {
      payload.checked = getPath(path, $values.refValues.current);
    } else {
      payload.value = getPath(path, $values.refValues.current);
    }

    if (withFocus) {
      payload.onFocus = () => $status.setFieldTouched(path, true);
      payload.onBlur = () => {
        if (shouldValidateOnChange(path, validateInputOnBlur)) {
          const validationResults = validateFieldValue(path, rules, $values.refValues.current);

          validationResults.hasError
            ? $errors.setFieldError(path, validationResults.error)
            : $errors.clearFieldError(path);
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
    setValues,
    setFieldValue,

    errors: $errors.errorsState,
    setErrors: $errors.setErrors,
    setFieldError: $errors.setFieldError,
    clearFieldError: $errors.clearFieldError,
    clearErrors: $errors.clearErrors,

    resetDirty: $status.resetDirty,
    setTouched: $status.setTouchedState,
    setDirty: $status.setDirtyState,
    isTouched: $status.isTouched,
    resetTouched: $status.resetTouched,
    isDirty: $status.isDirty,

    reorderListItem: $list.reorderListItem,
    insertListItem: $list.insertListItem,
    removeListItem: $list.removeListItem,

    reset,
    validate,
    validateField,
    getInputProps,
    onSubmit,
    onReset,
    isValid,
    getTransformedValues,
  };

  useFormActions(name, form);

  return form;
}
