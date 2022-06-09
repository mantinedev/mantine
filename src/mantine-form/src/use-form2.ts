import React, { useState } from 'react';
import { setPath, reorderPath, insertPath } from './paths';
import { filterErrors } from './filter-errors';
import { ReorderPayload, FormErrors, FormValidateInput } from './types2';

type LooseKeys<Values> = keyof Values | (string & {});
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

type InsertListItem<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  item: unknown,
  index?: number
) => void;

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
  reorderListItem: ReorderListItem<Values>;
  insertListItem: InsertListItem<Values>;
}

export function useForm<Values extends ValuesPlaceholder>({
  initialValues = {} as Values,
  initialErrors = {},
  clearInputErrorOnChange = true,
}: UseFormInput<Values> = {}): UseFormReturnType<Values> {
  const [values, _setValues] = useState(initialValues);
  const [errors, _setErrors] = useState(filterErrors(initialErrors));

  const setErrors: SetErrors = (errs) =>
    _setErrors((current) => filterErrors(typeof errs === 'function' ? errs(current) : errs));

  const clearErrors: ClearErrors = () => _setErrors({});
  const reset: Reset = () => {
    _setValues(initialValues);
    clearErrors();
  };

  const setFieldError: SetFieldError<Values> = (path, error) =>
    setErrors((current) => ({ ...current, [path]: error }));

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

  const insertListItem: InsertListItem<Values> = (path, item, index) =>
    _setValues((current) => insertPath(path, item, index, current));

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
    insertListItem,
  };
}
