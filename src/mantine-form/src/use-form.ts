import { useState } from 'react';

export type FormErrors<T> = Partial<Record<keyof T, React.ReactNode | null>>;

export type ValidationRules<T> =
  | ((values: T) => FormErrors<T>)
  | {
      [P in keyof T]?: (value: T[P], values?: T) => boolean;
    };

export interface UseFormInput<T> {
  initialValues: T;
  initialErrors?: FormErrors<T>;
  validate?: ValidationRules<T>;
}

export interface UseFormReturnType<T> {
  values: T;
  setValues: React.Dispatch<React.SetStateAction<T>>;
  setFieldValue: <K extends keyof T, V extends T[K]>(field: K, value: V) => void;
  errors: FormErrors<T>;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors<T>>>;
  setFieldError: (field: keyof T, error: React.ReactNode | null) => void;
  resetErrors(): void;
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

  const resetErrors = () => setErrors({});
  const setFieldError = (field: keyof T, error: React.ReactNode | null) =>
    setErrors((current) => ({ ...current, [field]: error }));

  const setFieldValue = <K extends keyof T, U extends T[K]>(field: K, value: U) => {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    setFieldError(field, null);
  };

  const setListItem = <K extends keyof T, U extends T[K][number]>(
    field: K,
    index: number,
    value: U
  ) => {
    const list = values[field];
    if (Array.isArray(list) && list[index] !== undefined) {
      const cloned = [...list];
      cloned[index] = value;
      setFieldValue(field, cloned as any);
    }
  };

  const removeListItem = (field: keyof T, indices: number[] | number) => {
    if (Array.isArray(values[field])) {
      setFieldValue(
        field,
        values[field].filter((_: any, index: number) =>
          Array.isArray(indices) ? !indices.includes(index) : indices !== index
        )
      );
    }
  };

  const addListItem = <K extends keyof T, U extends T[K][number]>(field: K, payload: U) => {
    const list = values[field];

    if (Array.isArray(list)) {
      setFieldValue(field, [...list, payload] as any);
    }
  };

  const reorderListItem = (field: keyof T, { from, to }: { from: number; to: number }) => {
    const list = values[field];

    if (Array.isArray(list) && list[from] !== undefined && list[to] !== undefined) {
      const cloned = [...list];
      const item = list[from];

      cloned.splice(from, 1);
      cloned.splice(to, 0, item);
      setFieldValue(field, cloned as any);
    }
  };

  return {
    values,
    setValues,
    setFieldValue,
    errors,
    setErrors,
    resetErrors,
    setFieldError,
    setListItem,
    removeListItem,
    addListItem,
    reorderListItem,
  };
}
