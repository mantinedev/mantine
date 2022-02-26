import { useState } from 'react';
import { formList, isFormList } from './form-list/form-list';
import type { FormErrors, FormRules } from './types';

export interface UseFormInput<T> {
  initialValues: T;
  initialErrors?: FormErrors<T>;
  validate?: FormRules<T>;
}

export interface UseFormReturnType<T> {
  values: T;
  setValues: React.Dispatch<React.SetStateAction<T>>;
  setFieldValue: <K extends keyof T, V extends T[K]>(field: K, value: V) => void;
  errors: FormErrors<T>;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors<T>>>;
  setFieldError(field: keyof T, error: React.ReactNode): void;
  clearFieldError(field: keyof T): void;
  clearErrors(): void;
  setListItem: <K extends keyof T, U extends T[K]>(
    field: K,
    index: number,
    value: U extends any[] ? U[number] : never
  ) => void;
  addListItem: <K extends keyof T, U extends T[K]>(
    field: K,
    payload: U extends any[] ? U[number] : never
  ) => void;
  removeListItem(field: keyof T, indices: number[] | number): void;
  reorderListItem(field: keyof T, payload: { from: number; to: number }): void;
}

export function useForm<T extends { [key: string]: any }>({
  initialValues,
  initialErrors,
}: UseFormInput<T>): UseFormReturnType<T> {
  const [errors, setErrors] = useState<FormErrors<T>>(initialErrors || {});
  const [values, setValues] = useState(initialValues);

  const clearErrors = () => setErrors({});
  const setFieldError = (field: keyof T, error: React.ReactNode) =>
    setErrors((current) => ({ ...current, [field]: error }));

  const clearFieldError = (field: keyof T) =>
    setErrors((current) => {
      const clone = { ...current };
      delete clone[field];
      return clone;
    });

  const setFieldValue = <K extends keyof T, U extends T[K]>(field: K, value: U) => {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    clearFieldError(field);
  };

  const setListItem = <K extends keyof T, U extends T[K][number]>(
    field: K,
    index: number,
    value: U
  ) => {
    const list = values[field];
    if (isFormList(list) && list[index] !== undefined) {
      const cloned = [...list];
      cloned[index] = value;
      setFieldValue(field, formList(cloned) as any);
    }
  };

  const removeListItem = (field: keyof T, indices: number[] | number) => {
    const list = values[field];

    if (isFormList(list)) {
      setFieldValue(
        field,
        formList(
          list.filter((_: any, index: number) =>
            Array.isArray(indices) ? !indices.includes(index) : indices !== index
          )
        )
      );
    }
  };

  const addListItem = <K extends keyof T, U extends T[K][number]>(field: K, payload: U) => {
    const list = values[field];

    if (isFormList(list)) {
      setFieldValue(field, formList([...list, payload]) as any);
    }
  };

  const reorderListItem = (field: keyof T, { from, to }: { from: number; to: number }) => {
    const list = values[field];

    if (isFormList(list) && list[from] !== undefined && list[to] !== undefined) {
      const cloned = [...list];
      const item = list[from];

      cloned.splice(from, 1);
      cloned.splice(to, 0, item);
      setFieldValue(field, formList(cloned) as any);
    }
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
  };
}
