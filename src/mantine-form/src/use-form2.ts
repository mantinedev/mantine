import React, { useState } from 'react';
import { setPath, reorderPath } from './paths';
import { filterErrors } from './filter-errors';
import { ReorderPayload } from './types2';

type LooseKeys<Values> = keyof Values | (string & {});
type FormErrors = Record<string, React.ReactNode>;
type ValuesPlaceholder = Record<string, unknown>;

type SetValues<Values> = React.Dispatch<React.SetStateAction<Values>>;
type SetErrors = React.Dispatch<React.SetStateAction<FormErrors>>;

type SetFieldValue<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  value: Field extends keyof Values ? Values[Field] : unknown
) => void;

type ClearFieldError = (field: string) => void;
type ClearErrors = () => void;
type Reset = () => void;

type SetFieldError<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  error: React.ReactNode
) => void;

type ReorderListItem<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  payload: ReorderPayload
) => void;

export interface UseFormInput<Values extends ValuesPlaceholder> {
  initialValues?: Values;
  initialErrors?: FormErrors;
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
  reorderListItem: ReorderListItem<Values>;
}

export function useForm<Values extends ValuesPlaceholder>({
  initialValues = {} as Values,
  initialErrors = {},
  clearInputErrorOnChange = true,
}: UseFormInput<Values> = {}): UseFormReturnType<Values> {
  const [values, _setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);

  const clearErrors: ClearErrors = () => setErrors({});
  const reset: Reset = () => {
    _setValues(initialValues);
    clearErrors();
  };

  const setFieldError: SetFieldError<Values> = (path, error) =>
    setErrors((current) => filterErrors({ ...current, [path]: error }));

  const setFieldValue: SetFieldValue<Values> = (path, value) => {
    _setValues((current) => setPath(path, value, current));
    clearInputErrorOnChange && setFieldError(path, null);
  };

  const setValues: SetValues<Values> = (payload) => {
    _setValues(payload);
    clearInputErrorOnChange && clearErrors();
  };

  const reorderListItem: ReorderListItem<Values> = (path, payload) =>
    _setValues((current) => reorderPath(path, payload, current));

  const clearFieldError: ClearFieldError = (field) =>
    setErrors((current) => {
      const clone = { ...current };
      delete clone[field];
      return clone;
    });

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
    reorderListItem,
  };
}
