import type React from 'react';
import type { FormList } from './form-list/form-list';

export type FormErrors = Record<string, React.ReactNode>;

export type FormRulesRecord<T> = Partial<{
  [P in keyof T]: T[P] extends FormList<infer U>
    ? {
        [L in keyof U]?: (value: U[L], values: T) => React.ReactNode;
      }
    : (value: T[P], values: T) => React.ReactNode;
}>;

export type FormRules<T> = ((values: T) => FormErrors) | FormRulesRecord<T>;

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
