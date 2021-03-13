import React, { useState } from 'react';

export type ValidationRule<T> = {
  readonly [P in keyof T]?: (value: T[P]) => boolean;
};

export interface UseForm<T> {
  validationRules?: ValidationRule<T>;
  initialValues: T;
}

export function useForm<T extends { [key: string]: any }>({
  initialValues,
  validationRules = {},
}: UseForm<T>) {
  type ValidationErrors = { [P in keyof T]: boolean };

  const initialErrors =
    validationRules instanceof Object
      ? Object.keys(validationRules).reduce((acc, field) => {
          acc[field as keyof T] = false;
          return acc;
        }, {} as ValidationErrors)
      : ({} as ValidationErrors);

  const [errors, setErrors] = useState<ValidationErrors>(initialErrors);
  const [values, setValues] = useState(initialValues);

  const reset = () => {
    setValues(initialValues);
    setErrors(initialErrors);
  };

  const validate = () => {
    let isValid = true;

    const validationErrors = Object.keys(validationRules).reduce((acc, field) => {
      if (!validationRules[field](values[field])) {
        acc[field as keyof T] = true;
        isValid = false;
      } else {
        acc[field as keyof T] = false;
      }

      return acc;
    }, {} as { [P in keyof T]: boolean });

    setErrors(validationErrors);
    return isValid;
  };

  const validateField = (field: keyof T) =>
    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]:
        typeof validationRules[field] === 'function'
          ? !validationRules[field](values[field])
          : false,
    }));

  const setFieldError = (field: keyof T, error: boolean) =>
    setErrors((currentErrors) => ({ ...currentErrors, [field]: error }));

  const setFieldValue = <K extends keyof T, U extends T[K]>(field: K, value: U) => {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    setFieldError(field, false);
  };

  const onSubmit = (handleSubmit: (values: T) => any) => (event?: React.FormEvent) => {
    event && event.preventDefault();
    validate() && handleSubmit(values);
  };

  return {
    values,
    errors,
    validate,
    reset,
    setValues,
    setFieldValue,
    setFieldError,
    validateField,
    onSubmit,
  };
}
