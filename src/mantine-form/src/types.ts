import type React from 'react';

export type FormErrors<T> = Partial<Record<keyof T, React.ReactNode | null>>;

export type FormRulesRecord<T> = {
  [P in keyof T]?: (value: T[P], values: T) => React.ReactNode;
};

export type FormRules<T> = ((values: T) => FormErrors<T>) | FormRulesRecord<T>;

export interface FormValidationResult<T> {
  hasErrors: boolean;
  errors: FormErrors<T>;
}

export interface FormFieldValidationResult {
  valid: boolean;
  error: React.ReactNode | null;
}
