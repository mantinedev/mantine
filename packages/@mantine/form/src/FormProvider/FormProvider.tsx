import { createContext, use } from 'react';
import { FormErrors, FormRulesRecord, UseForm, UseFormInput, UseFormReturnType } from '../types';
import { useForm } from '../use-form';

export interface FormProviderProps<Form> {
  form: Form;
  children: React.ReactNode;
}

type IsAny<T> = 0 extends 1 & T ? true : false;

interface UseContextForm<Values, TransformedValues> {
  <R extends FormErrors | Promise<FormErrors> = FormErrors>(
    input: UseFormInput<Values, TransformedValues> & { validate: (values: Values) => R }
  ): UseFormReturnType<Values, TransformedValues, (values: Values) => R>;

  <Rules extends FormRulesRecord<Values> = FormRulesRecord<Values>>(
    input: UseFormInput<Values, TransformedValues> & { validate: Rules }
  ): UseFormReturnType<Values, TransformedValues, Rules>;

  (
    input?: UseFormInput<Values, TransformedValues>
  ): UseFormReturnType<Values, TransformedValues, undefined>;
}

type AnyRulesForm<Values, TransformedValues> =
  | UseFormReturnType<Values, TransformedValues, any>
  | UseFormReturnType<Values, TransformedValues, () => Promise<FormErrors>>
  | UseFormReturnType<Values, TransformedValues, () => FormErrors | Promise<FormErrors>>;

export function createFormContext<Values, TransformedValues = Values, Rules = any>() {
  type Form = UseFormReturnType<Values, TransformedValues, Rules>;
  type ProviderForm = IsAny<Rules> extends true ? AnyRulesForm<Values, TransformedValues> : Form;
  type UseFormHook =
    IsAny<Rules> extends true
      ? UseContextForm<Values, TransformedValues>
      : UseForm<Values, TransformedValues, Rules>;

  const FormContext = createContext<Form | null>(null);

  function FormProvider({ form, children }: FormProviderProps<ProviderForm>) {
    return <FormContext value={form as Form}>{children}</FormContext>;
  }

  function useFormContext() {
    const ctx = use(FormContext);
    if (!ctx) {
      throw new Error('useFormContext was called outside of FormProvider context');
    }

    return ctx;
  }

  return [FormProvider, useFormContext, useForm] as unknown as [
    React.FC<FormProviderProps<ProviderForm>>,
    () => Form,
    UseFormHook,
  ];
}
