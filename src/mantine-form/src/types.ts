import type React from 'react';
import type { FormList } from './form-list/form-list';

export type FormErrors = Record<string, React.ReactNode>;

export type FormRulesRecord<T, K extends keyof T = any> = Record<
  K,
  T[K] extends FormList<infer U>
    ? {
        [P in keyof U]?: (value: U[P], values: T) => React.ReactNode;
      }
    : (value: T[K], values: T) => React.ReactNode
>;

export type FormRules<T, K extends keyof T = any> =
  | ((values: T) => FormErrors)
  | FormRulesRecord<T, K>;

export interface FormValidationResult {
  hasErrors: boolean;
  errors: FormErrors;
}

export interface FormFieldValidationResult {
  hasError: boolean;
  error: React.ReactNode;
}

export interface GetInputPropsPayload {
  value: any;
  onChange(event: any): void;
  error?: React.ReactNode;
}

export interface GetCheckboxPropsPayload {
  checked: boolean;
  onChange(event: any): void;
  error?: React.ReactNode;
}

export type GetInputPropsFieldType = 'checkbox' | 'input';

export type GetInputProps<T extends GetInputPropsFieldType> = T extends 'checkbox'
  ? GetCheckboxPropsPayload
  : GetInputPropsPayload;
