import { createContext, useContext } from 'react';
import { UseForm, UseFormReturnType } from '../types';
import { useForm } from '../use-form';

export interface FormProviderProps<Form> {
  form: Form;
  children: React.ReactNode;
}

export function createFormContext<Values, TransformedValues = Values>() {
  type Form = UseFormReturnType<Values, TransformedValues>;

  const FormContext = createContext<Form | null>(null);

  function FormProvider({ form, children }: FormProviderProps<Form>) {
    return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
  }

  function useFormContext() {
    const ctx = useContext(FormContext);
    if (!ctx) {
      throw new Error('useFormContext was called outside of FormProvider context');
    }

    return ctx;
  }

  return [FormProvider, useFormContext, useForm] as [
    React.FC<FormProviderProps<Form>>,
    () => Form,
    UseForm<Values, TransformedValues>,
  ];
}
