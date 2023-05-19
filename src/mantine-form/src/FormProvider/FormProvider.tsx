import React, { createContext, useContext } from 'react';
import { UseForm, UseFormReturnType, _TransformValues } from '../types';
import { useForm } from '../use-form';

export interface FormProviderProps<Form> {
  form: Form;
  children: React.ReactNode;
}

export function createFormContext<
  Values,
  TransformValues extends _TransformValues<Values> = (values: Values) => Values
>() {
  type Form = UseFormReturnType<Values, TransformValues>;

  const FormContext = createContext<Form>(null);

  function FormProvider({ form, children }: FormProviderProps<Form>) {
    return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
  }

  function useFormContext() {
    const ctx = useContext(FormContext);
    if (!ctx) {
      // eslint-disable-next-line no-console
      console.warn('useFormContext was called outside of FormProvider context');
      // throw new Error('useFormContext was called outside of FormProvider context');
    }

    return ctx;
  }

  return [FormProvider, useFormContext, useForm] as [
    React.FC<FormProviderProps<Form>>,
    () => Form,
    UseForm<Values, TransformValues>
  ];
}
