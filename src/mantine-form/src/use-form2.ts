import React, { useState } from 'react';
import { setPath } from './paths';
import { filterErrors } from './filter-errors';

type LooseKeys<Values> = keyof Values | (string & {});
type FormErrors = Record<string, React.ReactNode>;
type ValuesPlaceholder = Record<string, unknown>;

type SetValues<Values> = React.Dispatch<React.SetStateAction<Values>>;
type SetErrors = React.Dispatch<React.SetStateAction<FormErrors>>;

type SetFieldValue<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  value: Field extends keyof Values ? Values[Field] : unknown
) => void;

type SetFieldError<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  error: React.ReactNode
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
}

export function useForm<Values extends ValuesPlaceholder>({
  initialValues = {} as Values,
  initialErrors = {},
  clearInputErrorOnChange = true,
}: UseFormInput<Values> = {}): UseFormReturnType<Values> {
  const [values, _setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);

  const setFieldError: SetFieldError<Values> = (path, error) =>
    setErrors((current) => filterErrors(setPath(path, error, current)));

  const setFieldValue: SetFieldValue<Values> = (path, value) => {
    _setValues((current) => setPath(path, value, current));
    clearInputErrorOnChange && setFieldError(path, null);
  };

  const setValues: SetValues<Values> = (payload) => {
    _setValues(payload);
    clearInputErrorOnChange && setErrors({});
  };

  return {
    values,
    errors,
    setValues,
    setErrors,
    setFieldValue,
    setFieldError,
  };
}
