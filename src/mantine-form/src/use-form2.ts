import React, { useState, useCallback } from 'react';
import { getInputOnChange } from './get-input-on-change';
import { setPath, reorderPath, insertPath, getPath, removePath } from './paths';
import { filterErrors } from './filter-errors';
import { validateValues, validateFieldValue } from './validate';
import {
  ReorderPayload,
  FormErrors,
  FormValidateInput,
  FormValidationResult,
  FormFieldValidationResult,
  GetInputPropsType,
} from './types2';

type LooseKeys<Values> = keyof Values | (string & {});
type ValuesPlaceholder = Record<string, unknown>;

type SetValues<Values> = React.Dispatch<React.SetStateAction<Values>>;
type SetErrors = React.Dispatch<React.SetStateAction<FormErrors>>;

type OnSubmit<Values> = (
  handleSubmit: (values: Values, event: React.FormEvent<HTMLFormElement>) => void
) => (event: React.FormEvent<HTMLFormElement>) => void;

type OnReset = (event: React.FormEvent<HTMLFormElement>) => void;

type GetInputProps<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  options?: { type?: GetInputPropsType; withError?: boolean }
) => any;

type SetFieldValue<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  value: Field extends keyof Values ? Values[Field] : unknown
) => void;

type ClearFieldError = (path: unknown) => void;
type ClearErrors = () => void;
type Reset = () => void;
type Validate = () => FormValidationResult;
type ValidateField<Values> = <Field extends LooseKeys<Values>>(
  path: Field
) => FormFieldValidationResult;

type SetFieldError<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  error: React.ReactNode
) => void;

type ReorderListItem<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  payload: ReorderPayload
) => void;

type InsertListItem<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  item: unknown,
  index?: number
) => void;

type RemoveListItem<Values> = <Field extends LooseKeys<Values>>(path: Field, index: number) => void;

export interface UseFormInput<Values extends ValuesPlaceholder> {
  initialValues?: Values;
  initialErrors?: FormErrors;
  validate?: FormValidateInput<Values>;
  clearInputErrorOnChange?: boolean;
}

export interface UseFormReturnType<Values extends ValuesPlaceholder> {
  values: Values;
  errors: FormErrors;
  setValues: SetValues<Values>;
  setErrors: SetErrors;
  setFieldValue: SetFieldValue<Values>;
  setFieldError: SetFieldError<Values>;
  clearFieldError: ClearFieldError;
  clearErrors: ClearErrors;
  reset: Reset;
  validate: Validate;
  validateField: ValidateField<Values>;
  reorderListItem: ReorderListItem<Values>;
  removeListItem: RemoveListItem<Values>;
  insertListItem: InsertListItem<Values>;
  getInputProps: GetInputProps<Values>;
  onSubmit: OnSubmit<Values>;
  onReset: OnReset;
}

export function useForm<Values extends ValuesPlaceholder>({
  initialValues = {} as Values,
  initialErrors = {},
  clearInputErrorOnChange = true,
  validate: rules,
}: UseFormInput<Values> = {}): UseFormReturnType<Values> {
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

  const setFieldValue: SetFieldValue<Values> = useCallback((path, value) => {
    _setValues((current) => setPath(path, value, current));
    clearInputErrorOnChange && setFieldError(path, null);
  }, []);

  const setValues: SetValues<Values> = useCallback((payload) => {
    _setValues(payload);
    clearInputErrorOnChange && clearErrors();
  }, []);

  const reorderListItem: ReorderListItem<Values> = useCallback(
    (path, payload) => _setValues((current) => reorderPath(path, payload, current)),
    []
  );

  const removeListItem: RemoveListItem<Values> = useCallback(
    (path, index) => _setValues((current) => removePath(path, index, current)),
    []
  );

  const insertListItem: InsertListItem<Values> = useCallback(
    (path, item, index) => _setValues((current) => insertPath(path, item, index, current)),
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

  const validate: Validate = useCallback(() => {
    const results = validateValues(rules, values);
    _setErrors(results.errors);
    return results;
  }, [values]);

  const validateField: ValidateField<Values> = useCallback(
    (path) => {
      const results = validateFieldValue(path, rules, values);
      results.hasError ? setFieldError(path, results.error) : clearFieldError(path);
      return results;
    },
    [values]
  );

  const getInputProps: GetInputProps<Values> = (
    path,
    { type = 'input', withError = type === 'input' } = {}
  ) => {
    const onChange = getInputOnChange((value) => setFieldValue(path, value as any));
    const withOptionalError = (payload: Record<string, unknown>) => {
      if (withError) {
        // eslint-disable-next-line no-param-reassign
        payload.error = errors[path];
      }
      return payload;
    };

    return type === 'checkbox'
      ? withOptionalError({ checked: getPath(path, values), onChange })
      : withOptionalError({ value: getPath(path, values), onChange });
  };

  const onSubmit: OnSubmit<Values> = (handleSubmit) => (event) => {
    event.preventDefault();
    const results = validate();
    !results.hasErrors && handleSubmit(values, event);
  };

  const onReset: OnReset = useCallback((event) => {
    event.preventDefault();
    reset();
  }, []);

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
  };
}
