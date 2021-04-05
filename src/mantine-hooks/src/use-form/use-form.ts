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
  type ValidationErrors = Record<keyof T, boolean>;

  const initialErrors = Object.keys(initialValues).reduce((acc, field) => {
    acc[field as keyof T] = false;
    return acc;
  }, {} as ValidationErrors);

  const [errors, setErrors] = useState(initialErrors);
  const [values, setValues] = useState(initialValues);

  const resetErrors = () => setErrors(initialErrors);

  const reset = () => {
    setValues(initialValues);
    resetErrors();
  };

  const validate = () => {
    let isValid = true;

    const validationErrors = Object.keys(values).reduce((acc, field) => {
      if (
        validationRules &&
        typeof validationRules[field] === 'function' &&
        !validationRules[field](values[field])
      ) {
        acc[field as keyof T] = true;
        isValid = false;
      } else {
        acc[field as keyof T] = false;
      }

      return acc;
    }, {} as ValidationErrors);

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
    setErrors,
    setValues,
    setFieldValue,
    setFieldError,
    validateField,
    resetErrors,
    onSubmit,
  };
}
