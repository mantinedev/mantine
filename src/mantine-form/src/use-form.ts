import { useState } from 'react';
import { formList, isFormList, FormList } from './form-list/form-list';
import { validateValues, validateFieldValue } from './validate-values/validate-values';
import { filterErrors } from './filter-errors/filter-errors';
import type {
  FormErrors,
  FormRules,
  FormValidationResult,
  FormFieldValidationResult,
} from './types';

export interface UseFormInput<T, K extends keyof T> {
  initialValues: T;
  initialErrors?: FormErrors<T, K>;
  validate?: FormRules<T, K>;
}

export interface UseFormReturnType<T, KK extends keyof T> {
  values: T;
  setValues: React.Dispatch<React.SetStateAction<T>>;
  setFieldValue: <K extends keyof T, V extends T[K]>(field: K, value: V) => void;
  errors: FormErrors<T, KK>;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors<T>>>;
  setFieldError: <K extends keyof T>(field: K, error: React.ReactNode) => void;
  clearFieldError: <K extends keyof T>(field: K) => void;
  clearErrors(): void;
  setListItem: <K extends keyof T, V extends T[K]>(
    field: K,
    index: number,
    value: V extends FormList<infer U> ? U : never
  ) => void;
  addListItem: <K extends keyof T, V extends T[K]>(
    field: K,
    payload: V extends FormList<infer U> ? U : never
  ) => void;
  removeListItem: <K extends keyof T>(field: K, indices: number[] | number) => void;
  reorderListItem: <K extends keyof T>(field: K, payload: { from: number; to: number }) => void;
  validate(): FormValidationResult<T>;
  validateField: <K extends keyof T>(field: K) => FormFieldValidationResult;
  onSubmit(
    handleSubmit: (values: T, event: React.FormEvent) => void
  ): (event?: React.FormEvent) => void;
  reset(): void;
}

export function useForm<T extends { [key: string]: any }, KK extends keyof T>({
  initialValues,
  initialErrors,
  validate: rules,
}: UseFormInput<T, KK>): UseFormReturnType<T, KK> {
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

  const setFieldValue = <K extends keyof T, V extends T[K]>(field: K, value: V) => {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    clearFieldError(field);
  };

  const setListItem = <K extends keyof T, V extends T[K]>(
    field: K,
    index: number,
    value: V[K][number]
  ) => {
    const list = values[field];
    if (isFormList(list) && list[index] !== undefined) {
      const cloned = [...list];
      cloned[index] = value;
      setFieldValue(field, formList(cloned) as any);
    }
  };

  const removeListItem = <K extends keyof T>(field: K, indices: number[] | number) => {
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

  const addListItem = <K extends keyof T, V extends T[K]>(field: K, payload: V[number]) => {
    const list = values[field];

    if (isFormList(list)) {
      setFieldValue(field, formList([...list, payload]) as any);
    }
  };

  const reorderListItem = <K extends keyof T>(
    field: K,
    { from, to }: { from: number; to: number }
  ) => {
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

  const validateField = <K extends keyof T>(field: K) => {
    const results = validateFieldValue<any, any>(field, rules, values);
    results.valid ? clearFieldError(field) : setFieldError(field, results.error);
    return results;
  };

  const onSubmit =
    (handleSubmit: (values: T, event: React.FormEvent) => void) => (event: React.FormEvent) => {
      event.preventDefault();
      const results = validate();
      !results.hasErrors && handleSubmit(values, event);
    };

  const reset = () => {
    setValues(initialValues);
    clearErrors();
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
    onSubmit,
    reset,
  };
}
