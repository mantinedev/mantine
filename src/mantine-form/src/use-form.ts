import { useCallback } from 'react';
import { formList, isFormList, FormList } from './form-list/form-list';
import { validateValues, validateFieldValue } from './validate-values/validate-values';
import { filterErrors } from './filter-errors/filter-errors';
import { getInputOnChange } from './get-input-on-change/get-input-on-change';
import { getErrorPath } from './get-error-path/get-error-path';
import { useStateRef } from './use-state-ref/use-state-ref';
import { usePropRef } from './use-prop-ref/use-prop-ref';
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
  const [errors, setErrors, errorsRef] = useStateRef(filterErrors(initialErrors));
  const [values, setValues, valuesRef] = useStateRef(initialValues);
  const initialValuesRef = usePropRef(initialValues);
  const rulesRef = usePropRef(rules);
  const schemaRef = usePropRef(schema);

  const clearErrors = useCallback(() => setErrors({}), []);
  const setFieldError = useCallback(
    (field: keyof T, error: React.ReactNode) =>
      setErrors((current) => ({ ...current, [field]: error })),
    []
  );

  const clearFieldError = useCallback(
    (field: keyof T) =>
      setErrors((current) => {
        const clone: any = { ...current };
        delete clone[field];
        return clone;
      }),
    []
  );

  const setFieldValue = useCallback(<K extends keyof T, V extends T[K]>(field: K, value: V) => {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    clearFieldError(field);
  }, []);

  const setListItem = useCallback(
    <K extends keyof T, V extends T[K]>(field: K, index: number, value: V[K][number]) => {
      const list = valuesRef.current[field];
      if (isFormList(list) && list[index] !== undefined) {
        const cloned = [...list];
        cloned[index] = value;
        setFieldValue(field, formList(cloned) as any);
      }
    },
    []
  );

  const removeListItem = useCallback(<K extends keyof T>(field: K, indices: number[] | number) => {
    const list = valuesRef.current[field];

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
  }, []);

  const addListItem = useCallback(
    <K extends keyof T, V extends T[K]>(field: K, payload: V[number]) => {
      const list = valuesRef.current[field];

      if (isFormList(list)) {
        setFieldValue(field, formList([...list, payload]) as any);
      }
    },
    []
  );

  const reorderListItem = useCallback(
    <K extends keyof T>(field: K, { from, to }: { from: number; to: number }) => {
      const list = valuesRef.current[field];

      if (isFormList(list) && list[from] !== undefined && list[to] !== undefined) {
        const cloned = [...list];
        const item = list[from];

        cloned.splice(from, 1);
        cloned.splice(to, 0, item);
        setFieldValue(field, formList(cloned) as any);
      }
    },
    []
  );

  const validate = useCallback(() => {
    const results = validateValues(schemaRef.current || rulesRef.current, valuesRef.current);
    setErrors(results.errors);
    return results;
  }, []);

  const validateField = useCallback((field: string) => {
    const results = validateFieldValue(
      field,
      schemaRef.current || rulesRef.current,
      valuesRef.current
    );
    results.hasError ? setFieldError(field, results.error) : clearFieldError(field);
    return results;
  }, []);

  const onSubmit = useCallback(
    (handleSubmit: (values: T, event: React.FormEvent) => void) => (event: React.FormEvent) => {
      event.preventDefault();
      const results = validate();
      !results.hasErrors && handleSubmit(valuesRef.current, event);
    },
    []
  );

  const reset = useCallback(() => {
    setValues(initialValuesRef.current);
    clearErrors();
  }, []);

  const getInputProps = useCallback(
    <K extends keyof T, U extends T[K], L extends GetInputPropsFieldType = 'input'>(
      field: K,
      { type, withError = true }: { type?: L; withError?: boolean } = {}
    ): GetInputProps<L> => {
      const value = valuesRef.current[field];
      const onChange = getInputOnChange<U>((val: U) => setFieldValue(field, val)) as any;

      const payload: any = type === 'checkbox' ? { checked: value, onChange } : { value, onChange };

      if (withError && errorsRef.current[field as any]) {
        payload.error = errorsRef.current[field as any];
      }

      return payload as any;
    },
    []
  );

  const getListInputProps = useCallback(
    <
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
      const list = valuesRef.current[field];

      if (isFormList(list) && list[index] && listField in list[index]) {
        const listValue = list[index];
        const value = listValue[listField];
        const onChange = getInputOnChange<U[LK]>((val: U[LK]) =>
          setListItem(field, index, { ...listValue, [listField]: val })
        ) as any;
        const payload: any =
          type === 'checkbox' ? { checked: value, onChange } : { value, onChange };
        const error = errorsRef.current[getErrorPath([field, index, listField])];

        if (withError && error) {
          payload.error = error;
        }

        return payload;
      }

      return {} as any;
    },
    []
  );

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
