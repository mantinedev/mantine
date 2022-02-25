import React, { useState, useCallback } from 'react';

export type FormErrors<T> = Partial<Record<keyof T, React.ReactNode | null>>;

export type SetFormErrors<T> = React.Dispatch<
  React.SetStateAction<Partial<Record<keyof T, React.ReactNode>>>
>;

export interface UseErrorsReturnType<T> {
  errors: FormErrors<T>;
  setErrors: SetFormErrors<T>;
  resetErrors: () => void;
}

export function useErrors<T>(initialErrors: FormErrors<T>): UseErrorsReturnType<T> {
  const [errors, setErrors] = useState<FormErrors<T>>(initialErrors || {});
  const resetErrors = useCallback(() => setErrors({}), []);

  return {
    errors,
    setErrors,
    resetErrors,
  };
}
