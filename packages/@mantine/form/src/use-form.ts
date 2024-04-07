import { useCallback, useState } from 'react';
import { useFormActions } from './actions';
import { getInputOnChange } from './get-input-on-change';
import { useFormErrors } from './hooks/use-form-errors/use-form-errors';
import { useFormList } from './hooks/use-form-list/use-form-list';
import { useFormStatus } from './hooks/use-form-status/use-form-status';
import { useFormValues } from './hooks/use-form-values/use-form-values';
import { useFormWatch } from './hooks/use-form-watch/use-form-watch';
import { getPath } from './paths';
import {
  _TransformValues,
  GetInputProps,
  GetTransformedValues,
  Initialize,
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
  mode = 'controlled',
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
  const $errors = useFormErrors<Values>(initialErrors);
  const $values = useFormValues<Values>({ initialValues, onValuesChange, mode });
  const $status = useFormStatus<Values>({ initialDirty, initialTouched, $values, mode });
  const $list = useFormList<Values>({ $values, $errors, $status });
  const $watch = useFormWatch<Values>({ $status });
  const [formKey, setFormKey] = useState(0);
  const [fieldKeys, setFieldKeys] = useState<Record<string, number>>({});

  const reset: Reset = useCallback(() => {
    $values.resetValues();
    $errors.clearErrors();
    $status.resetDirty();
    $status.resetTouched();
    mode === 'uncontrolled' && setFormKey((key) => key + 1);
  }, []);

  const initialize: Initialize<Values> = useCallback((values) => {
    $values.initialize(values, () => mode === 'uncontrolled' && setFormKey((key) => key + 1));
  }, []);

  const setFieldValue: SetFieldValue<Values> = useCallback(
    (path, value, options) => {
      const shouldValidate = shouldValidateOnChange(path, validateInputOnChange);

      $status.clearFieldDirty(path);
      $status.setFieldTouched(path, true);
      !shouldValidate && clearInputErrorOnChange && $errors.clearFieldError(path);

      $values.setFieldValue({
        path,
        value,
        updateState: mode === 'controlled',
        subscribers: [
          ...$watch.getFieldSubscribers(path),
          shouldValidate
            ? (payload) => {
                const validationResults = validateFieldValue(path, rules, payload.updatedValues);
                validationResults.hasError
                  ? $errors.setFieldError(path, validationResults.error)
                  : $errors.clearFieldError(path);
              }
            : null,
          options?.forceUpdate !== false && mode !== 'controlled'
            ? () =>
                setFieldKeys((keys) => ({
                  ...keys,
                  [path as string]: (keys[path as string] || 0) + 1,
                }))
            : null,
        ],
      });
    },
    [onValuesChange, rules]
  );

  const setValues: SetValues<Values> = useCallback(
    (values) => {
      const previousValues = $values.refValues.current;
      $values.setValues({ values, updateState: mode === 'controlled' });
      clearInputErrorOnChange && $errors.clearErrors();
      mode === 'uncontrolled' && setFormKey((key) => key + 1);

      Object.keys($watch.subscribers.current).forEach((path) => {
        const value = getPath(path, $values.refValues.current);
        const previousValue = getPath(path, previousValues);

        if (value !== previousValue) {
          $watch
            .getFieldSubscribers(path)
            .forEach((cb) => cb({ previousValues, updatedValues: $values.refValues.current }));
        }
      });
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
    const onChange = getInputOnChange((value) =>
      setFieldValue(path, value as any, { forceUpdate: false })
    );

    const payload: any = { onChange };

    if (mode === 'uncontrolled') {
      payload.key = `${formKey}-${path as string}-${fieldKeys[path as string] || 0}`;
    }

    if (withError) {
      payload.error = $errors.errorsState[path];
    }

    if (type === 'checkbox') {
      payload[mode === 'controlled' ? 'checked' : 'defaultChecked'] = getPath(
        path,
        $values.refValues.current
      );
    } else {
      payload[mode === 'controlled' ? 'value' : 'defaultValue'] = getPath(
        path,
        $values.refValues.current
      );
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
    watch: $watch.watch,

    initialized: $values.initialized.current,
    values: $values.stateValues,
    getValues: $values.getValues,
    setInitialValues: $values.setValuesSnapshot,
    initialize,
    setValues,
    setFieldValue,

    errors: $errors.errorsState,
    setErrors: $errors.setErrors,
    setFieldError: $errors.setFieldError,
    clearFieldError: $errors.clearFieldError,
    clearErrors: $errors.clearErrors,

    resetDirty: $status.resetDirty,
    setTouched: $status.setTouched,
    setDirty: $status.setDirty,
    isTouched: $status.isTouched,
    resetTouched: $status.resetTouched,
    isDirty: $status.isDirty,
    getTouched: $status.getTouched,
    getDirty: $status.getDirty,

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
