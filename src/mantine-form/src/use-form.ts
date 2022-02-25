import { useState } from 'react';
import { useErrors, FormErrors, SetFormErrors, SetFieldError } from './use-errors/use-errors';

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
  setFieldValue: <K extends keyof T, V extends T[K]>(field: K, value: V) => void;
  errors: FormErrors<T>;
  setErrors: SetFormErrors<T>;
  setFieldError: SetFieldError<T>;
  resetErrors(): void;
}

export function useForm<T extends { [key: string]: any }>({
  initialValues,
  initialErrors,
}: UseFormInput<T>): UseFormReturnType<T> {
  const [values, setValues] = useState(initialValues);
  const { errors, setErrors, resetErrors, setFieldError } = useErrors(initialErrors);

  const setFieldValue = <K extends keyof T, U extends T[K]>(field: K, value: U) => {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    setFieldError(field, null);
  };

  return {
    values,
    setValues,
    setFieldValue,
    errors,
    setErrors,
    resetErrors,
    setFieldError,
  };
}
