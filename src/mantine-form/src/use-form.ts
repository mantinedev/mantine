import { useState } from 'react';
import { formList, isFormList } from './form-list/form-list';
import { validateValues, validateFieldValue } from './validate-values/validate-values';
import { filterErrors } from './filter-errors/filter-errors';
import type {
  FormErrors,
  FormRules,
  FormValidationResult,
  FormFieldValidationResult,
} from './types';

export interface UseFormInput<T, K extends keyof T, V extends T[K]> {
  initialValues: T;
  initialErrors?: FormErrors<T, K, V>;
  validate?: FormRules<T, K, V>;
}

export interface UseFormReturnType<T, K extends keyof T, V extends T[K]> {
  values: T;
  setValues: React.Dispatch<React.SetStateAction<T>>;
  setFieldValue: (field: K, value: V) => void;
  errors: FormErrors<T, K, V>;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors<T, K, V>>>;
  setFieldError(field: K, error: React.ReactNode): void;
  clearFieldError(field: K): void;
  clearErrors(): void;
  setListItem: (field: K, index: number, value: V extends any[] ? V[number] : never) => void;
  addListItem: (field: K, payload: V extends any[] ? V[number] : never) => void;
  removeListItem(field: K, indices: number[] | number): void;
  reorderListItem(field: K, payload: { from: number; to: number }): void;
  validate(): FormValidationResult<T, K, V>;
  validateField(field: K): FormFieldValidationResult;
}

export function useForm<T extends { [key: string]: any }, K extends keyof T, V extends T[K]>({
  initialValues,
  initialErrors,
  validate: rules,
}: UseFormInput<T, K, V>): UseFormReturnType<T, K, V> {
  const [errors, setErrors] = useState(filterErrors(initialErrors));
  const [values, setValues] = useState(initialValues);

  const clearErrors = () => setErrors({});
  const setFieldError = (field: keyof T, error: React.ReactNode) =>
    setErrors((current) => ({ ...current, [field]: error }));

  const clearFieldError = (field: keyof T) =>
    setErrors((current) => {
      const clone: any = { ...current };
      delete clone[field];
      return clone;
    });

  const setFieldValue = (field: K, value: V) => {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    clearFieldError(field);
  };

  const setListItem = (field: K, index: number, value: T[K][number]) => {
    const list = values[field];
    if (isFormList(list) && list[index] !== undefined) {
      const cloned = [...list];
      cloned[index] = value;
      setFieldValue(field, formList(cloned) as any);
    }
  };

  const removeListItem = (field: K, indices: number[] | number) => {
    const list = values[field];

    if (isFormList(list)) {
      setFieldValue(
        field,
        formList(
          list.filter((_: any, index: number) =>
            Array.isArray(indices) ? !indices.includes(index) : indices !== index
          )
        ) as any
      );
    }
  };

  const addListItem = (field: K, payload: T[K][number]) => {
    const list = values[field];

    if (isFormList(list)) {
      setFieldValue(field, formList([...list, payload]) as any);
    }
  };

  const reorderListItem = (field: K, { from, to }: { from: number; to: number }) => {
    const list = values[field];

    if (isFormList(list) && list[from] !== undefined && list[to] !== undefined) {
      const cloned = [...list];
      const item = list[from];

      cloned.splice(from, 1);
      cloned.splice(to, 0, item);
      setFieldValue(field, formList(cloned) as any);
    }
  };

  const validate = () => {
    const results = validateValues(rules, values);
    setErrors(results.errors);
    return results;
  };

  const validateField = (field: K) => {
    const results = validateFieldValue(field, rules, values);
    results.valid ? clearFieldError(field) : setFieldError(field, results.error);
    return results;
  };

  return {
    values,
    setValues,
    setFieldValue,
    errors,
    setErrors,
    clearErrors,
    clearFieldError,
    setFieldError,
    setListItem,
    removeListItem,
    addListItem,
    reorderListItem,
    validate,
    validateField,
  };
}
