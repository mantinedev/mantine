import type React from 'react';
import type { FormList } from './form-list/form-list';

export type FormErrors<T extends Record<string, any>, K extends keyof T> = Partial<
  Record<K, React.ReactNode | null | Record<string, (React.ReactNode | null)[]>>
>;

export type FormRulesRecord<T, K extends keyof T> = Record<
  K,
  T[K] extends FormList<infer U>
    ? Record<keyof U, (value: T[K], values: T) => React.ReactNode>
    : (value: T[K], values: T) => React.ReactNode
>;

export type FormRules<T, K extends keyof T> =
  | ((values: T) => FormErrors<T, K>)
  | FormRulesRecord<T, K>;

export interface FormValidationResult<T, K extends keyof T> {
  hasErrors: boolean;
  errors: FormErrors<T, K>;
}

export interface FormFieldValidationResult {
  valid: boolean;
  error: React.ReactNode | null;
}
