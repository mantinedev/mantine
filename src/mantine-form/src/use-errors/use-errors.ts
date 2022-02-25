import React, { useState, useCallback } from 'react';

export type FormErrors<T> = Partial<Record<keyof T, React.ReactNode | null>>;

export type SetFormErrors<T> = React.Dispatch<
  React.SetStateAction<Partial<Record<keyof T, React.ReactNode>>>
>;

export type SetFieldError<T> = (field: keyof T, error: React.ReactNode | null) => void;

export interface UseErrorsReturnType<T> {
  errors: FormErrors<T>;
  setErrors: SetFormErrors<T>;
  resetErrors: () => void;
  setFieldError: SetFieldError<T>;
}

export function useErrors<T>(initialErrors: FormErrors<T>): UseErrorsReturnType<T> {
  const [errors, setErrors] = useState<FormErrors<T>>(initialErrors || {});
  const resetErrors = useCallback(() => setErrors({}), []);
  const setFieldError = useCallback(
    (field: keyof T, error: React.ReactNode | null) =>
      setErrors((current) => ({ ...current, [field]: error })),
    []
  );

  return {
    errors,
    setErrors,
    resetErrors,
    setFieldError,
  };
}
