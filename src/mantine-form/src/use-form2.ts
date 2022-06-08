import { useState } from 'react';
import { setPath } from './paths';

type ValuesPlaceholder = Record<string, unknown>;
type SetFieldValue<Values> = <Field extends keyof Values | (string & {})>(
  path: Field,
  value: Field extends keyof Values ? Values[Field] : unknown
) => void;

export interface UseFormInput<Values extends ValuesPlaceholder> {
  initialValues: Values;
}

export interface UseFormReturnType<Values extends ValuesPlaceholder> {
  values: Values;
  setValues: React.Dispatch<React.SetStateAction<Values>>;
  setFieldValue: SetFieldValue<Values>;
}

export function useForm<Values extends ValuesPlaceholder>({
  initialValues,
}: UseFormInput<Values>): UseFormReturnType<Values> {
  const [values, setValues] = useState(initialValues);

  const setFieldValue: SetFieldValue<Values> = (path, value) =>
    setValues((current) => setPath(path, value, current));

  return { values, setValues, setFieldValue };
}
