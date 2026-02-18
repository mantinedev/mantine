import { createContext, use } from 'react';
import { UseForm, UseFormReturnType } from '../types';
import { useForm } from '../use-form';

export interface FormProviderProps<Form> {
  form: Form;
  children: React.ReactNode;
}

export function createFormContext<Values, TransformedValues = Values, Rules = any>() {
  type Form = UseFormReturnType<Values, TransformedValues, Rules>;

  const FormContext = createContext<Form | null>(null);

  function FormProvider({ form, children }: FormProviderProps<Form>) {
    return <FormContext value={form}>{children}</FormContext>;
  }

  function useFormContext() {
    const ctx = use(FormContext);
    if (!ctx) {
      throw new Error('useFormContext was called outside of FormProvider context');
    }

    return ctx;
  }

  return [FormProvider, useFormContext, useForm] as [
    React.FC<FormProviderProps<Form>>,
    () => Form,
    UseForm<Values, TransformedValues, Rules>,
  ];
}
