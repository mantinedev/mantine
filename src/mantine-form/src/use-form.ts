import { useState } from 'react';
import { useErrors, FormErrors, SetFormErrors } from './use-errors/use-errors';

export type ValidationRules<T> =
  | ((values: T) => FormErrors<T>)
  | {
      [P in keyof T]?: (value: T[P], values?: T) => boolean;
    };

export interface UseFormInput<T> {
  initialValues: T;
  initialErrors?: FormErrors<T>;
  validate?: ValidationRules<T>;
}

export interface UseFormReturnType<T> {
  values: T;
  setValues: React.Dispatch<React.SetStateAction<T>>;
  errors: FormErrors<T>;
  setErrors: SetFormErrors<T>;
  resetErrors: () => void;
}

export function useForm<T extends { [key: string]: any }>({
  initialValues,
  initialErrors,
}: UseFormInput<T>): UseFormReturnType<T> {
  const [values, setValues] = useState(initialValues);
  const { errors, setErrors, resetErrors } = useErrors(initialErrors);

  return { values, setValues, errors, setErrors, resetErrors };
}
