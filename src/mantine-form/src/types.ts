import type React from 'react';
import type { FormList } from './form-list/form-list';

export type FormErrors<T extends Record<string, any>, K extends keyof T = string> = Partial<
  Record<K, any>
>;

export type FormRulesRecord<T, K extends keyof T = any> = Record<
  K,
  T[K] extends FormList<infer U>
    ? {
        [P in keyof U]?: (value: U[P], values: T) => React.ReactNode;
      }
    : (value: T[K], values: T) => React.ReactNode
>;

export type FormRules<T, K extends keyof T = any> =
  | ((values: T) => FormErrors<T, K>)
  | FormRulesRecord<T, K>;

export interface FormValidationResult<T, K extends keyof T = any> {
  hasErrors: boolean;
  errors: FormErrors<T, K>;
}

export interface FormFieldValidationResult {
  valid: boolean;
  error: any;
}

export interface GetInputPropsPayload<V> {
  value: V;
  onChange(event: React.ChangeEvent<any> | V): void;
  error?: React.ReactNode;
}

export interface GetCheckboxPropsPayload<V> {
  checked: V;
  onChange(event: React.ChangeEvent<any> | V): void;
  error?: React.ReactNode;
}

export type GetInputPropsFieldType = 'checkbox' | 'input';

export type GetInputProps<T extends GetInputPropsFieldType, V> = T extends 'checkbox'
  ? GetCheckboxPropsPayload<V>
  : GetInputPropsPayload<V>;
