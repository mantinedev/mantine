import React, { useState } from 'react';
import { setPath } from './paths';

type FormErrors = Record<string, React.ReactNode>;

type ValuesPlaceholder = Record<string, unknown>;
type SetFieldValue<Values> = <Field extends keyof Values | (string & {})>(
  path: Field,
  value: Field extends keyof Values ? Values[Field] : unknown
) => void;

export interface UseFormInput<Values extends ValuesPlaceholder> {
  initialValues?: Values;
  initialErrors?: FormErrors;
}

export interface UseFormReturnType<Values extends ValuesPlaceholder> {
  values: Values;
  errors: FormErrors;
  setValues: React.Dispatch<React.SetStateAction<Values>>;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
  setFieldValue: SetFieldValue<Values>;
}

export function useForm<Values extends ValuesPlaceholder>({
  initialValues = {} as Values,
  initialErrors = {},
}: UseFormInput<Values> = {}): UseFormReturnType<Values> {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);

  const setFieldValue: SetFieldValue<Values> = (path, value) =>
    setValues((current) => setPath(path, value, current));

  return {
    values,
    errors,
    setValues,
    setErrors,
    setFieldValue,
  };
}
