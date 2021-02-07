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
  const initialErrors =
    validationRules instanceof Object
      ? Object.keys(validationRules).reduce((acc, field) => {
          acc[field as keyof T] = false;
          return acc;
        }, {} as { [P in keyof T]: boolean })
      : ({} as { [P in keyof T]: boolean });

  const [errors, setErrors] = useState<{ [P in keyof T]: boolean }>(initialErrors);
  const [values, setValues] = useState(initialValues);

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

  const invalidateField = (field: keyof T) =>
    setErrors((currentErrors) => ({ ...currentErrors, [field]: false }));

  const setField = <K extends keyof T, U extends T[K]>(field: K, value: U) => {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    invalidateField(field);
  };

  const onSubmit = (handleSubmit: (values: T) => any) => (event: React.FormEvent) => {
    event.preventDefault();
    validate() && handleSubmit(values);
  };

  const getInputProps = <K extends keyof T, U extends T[K]>({
    field,
    error,
  }: {
    field: keyof T;
    error?: string;
  }) => ({
    value: values[field] as U,
    onChange: (value: U) => setField(field, value),
    onFocus: () => invalidateField(field),
    error: errors[field] && error,
  });

  return {
    values,
    errors,
    validate,
    setField,
    invalidateField,
    onSubmit,
    getInputProps,
  };
}
