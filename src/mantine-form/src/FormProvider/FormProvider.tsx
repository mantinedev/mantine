import React, { createContext, useContext } from 'react';
import { useForm } from '../use-form';
import { UseFormReturnType, UseForm } from '../types';

export interface FormProviderProps<Form> {
  form: Form;
  children: React.ReactNode;
}

export function createFormContext<Values>() {
  type Form = UseFormReturnType<Values>;

  const FormContext = createContext<Form>(null);

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
    UseForm<Values>
  ];
}
