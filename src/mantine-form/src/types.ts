import type React from 'react';
import type { FormList } from './form-list/form-list';

export type FormErrors<T extends Record<string, any>, K extends keyof T, V extends T[K]> = Partial<
  Record<K, V extends FormList<any> ? never : React.ReactNode | null>
>;

export type FormRulesRecord<T> = {
  [K in keyof T]?: (value: T[K], values: T) => React.ReactNode;
};

export type FormRules<T, K extends keyof T, V extends T[K]> =
  | ((values: T) => FormErrors<T, K, V>)
  | FormRulesRecord<T>;

export interface FormValidationResult<T, K extends keyof T, V extends T[K]> {
  hasErrors: boolean;
  errors: FormErrors<T, K, V>;
}

export interface FormFieldValidationResult {
  valid: boolean;
  error: React.ReactNode | null;
}
