import type React from 'react';

export type FormErrors<T extends Record<string, any>, K extends keyof T> = Partial<
  Record<K, React.ReactNode | null | Record<string, (React.ReactNode | null)[]>>
>;

export type FormRulesRecord<T> = {
  [K in keyof T]?: (value: T[K], values: T) => React.ReactNode;
};

export type FormRules<T, K extends keyof T> =
  | ((values: T) => FormErrors<T, K>)
  | FormRulesRecord<T>;

export interface FormValidationResult<T, K extends keyof T> {
  hasErrors: boolean;
  errors: FormErrors<T, K>;
}

export interface FormFieldValidationResult {
  valid: boolean;
  error: React.ReactNode | null;
}
