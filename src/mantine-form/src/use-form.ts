import { useState } from 'react';
import { formList, isFormList, FormList } from './form-list/form-list';
import { validateValues, validateFieldValue } from './validate-values/validate-values';
import { filterErrors } from './filter-errors/filter-errors';
import { getInputOnChange } from './get-input-on-change/get-input-on-change';
import { getErrorPath } from './get-error-path/get-error-path';
import type {
  FormErrors,
  FormRules,
  FormValidationResult,
  FormFieldValidationResult,
  GetInputProps,
  GetInputPropsFieldType,
} from './types';

export interface UseFormInput<T> {
  initialValues: T;
  initialErrors?: FormErrors;
  validate?: FormRules<T>;
  schema?: (values: Record<string, any>) => FormErrors;
}

export interface UseFormReturnType<T> {
  values: T;
  setValues: React.Dispatch<React.SetStateAction<T>>;
  setFieldValue: <K extends keyof T, V extends T[K]>(field: K, value: V) => void;
  errors: FormErrors;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
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
  validate(): FormValidationResult;
  validateField: (field: string) => FormFieldValidationResult;
  onSubmit(
    handleSubmit: (values: T, event: React.FormEvent) => void
  ): (event?: React.FormEvent) => void;
  reset(): void;
  getInputProps: <K extends keyof T, L extends GetInputPropsFieldType = 'input'>(
    field: K,
    options?: { type?: L; withError?: boolean }
  ) => GetInputProps<L>;

  getListInputProps: <
    K extends keyof T,
    U extends T[K],
    L extends GetInputPropsFieldType = 'input'
  >(
    field: K,
    index: number,
    listField: U extends FormList<infer V> ? keyof V : never,
    options?: { type?: L; withError?: boolean }
  ) => GetInputProps<L>;
}

export function useForm<T extends { [key: string]: any }>({
  initialValues,
  initialErrors,
  validate: rules,
  schema,
}: UseFormInput<T>): UseFormReturnType<T> {
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

  const setFieldValue = <K extends keyof T, V extends T[K]>(
    field: K,
    value: V,
    errorPath?: string
  ) => {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    clearFieldError(errorPath || field);
  };

  const setListItem = <K extends keyof T, V extends T[K]>(
    field: K,
    index: number,
    value: V[K][number],
    errorPath?: string
  ) => {
    const list = values[field];
    if (isFormList(list) && list[index] !== undefined) {
      const cloned = [...list];
      cloned[index] = value;
      setFieldValue(field, formList(cloned) as any, errorPath);
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
    const results = validateValues(schema || rules, values);
    setErrors(results.errors);
    return results;
  };

  const validateField = (field: string) => {
    const results = validateFieldValue(field, schema || rules, values);
    results.hasError ? setFieldError(field, results.error) : clearFieldError(field);
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

  const getInputProps = <
    K extends keyof T,
    U extends T[K],
    L extends GetInputPropsFieldType = 'input'
  >(
    field: K,
    { type, withError = true }: { type?: L; withError?: boolean } = {}
  ): GetInputProps<L> => {
    const value = values[field];
    const onChange = getInputOnChange<U>((val: U) => setFieldValue(field, val)) as any;

    const payload: any = type === 'checkbox' ? { checked: value, onChange } : { value, onChange };

    if (withError && errors[field as any]) {
      payload.error = errors[field as any];
    }

    return payload as any;
  };

  const getListInputProps = <
    K extends keyof T,
    U extends T[K][number],
    LK extends keyof U,
    L extends GetInputPropsFieldType = 'input'
  >(
    field: K,
    index: number,
    listField: LK,
    { type, withError = true }: { type?: L; withError?: boolean } = {}
  ): GetInputProps<L> => {
    const list = values[field];

    if (isFormList(list) && list[index] && listField in list[index]) {
      const listValue = list[index];
      const value = listValue[listField];
      const listItemErrorPath = getErrorPath([field, index, listField]);
      const onChange = getInputOnChange<U[LK]>((val: U[LK]) =>
        setListItem(field, index, { ...listValue, [listField]: val }, listItemErrorPath)
      ) as any;
      const payload: any = type === 'checkbox' ? { checked: value, onChange } : { value, onChange };
      const error = errors[getErrorPath([field, index, listField])];

      if (withError && error) {
        payload.error = error;
      }

      return payload;
    }

    return {} as any;
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
    getInputProps,
    getListInputProps,
  };
}
