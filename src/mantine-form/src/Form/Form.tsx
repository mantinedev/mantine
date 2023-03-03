import React, { forwardRef } from 'react';
import { UseFormReturnType, TransformedValues } from '../types';

export interface FormProps<Form extends UseFormReturnType<any>>
  extends React.ComponentPropsWithRef<'form'> {
  form: Form;
  onSubmit?(values: TransformedValues<Form>): void;
}

export type FormComponent = <Form extends UseFormReturnType<any>>(
  props: FormProps<Form>
) => JSX.Element;

export const Form: FormComponent = forwardRef(
  <Form extends UseFormReturnType<any>>(
    { form, onSubmit, onReset, ...others }: FormProps<Form>,
    ref: React.ForwardedRef<HTMLFormElement>
  ) => (
    <form
      {...others}
      onSubmit={form.onSubmit(onSubmit)}
      onReset={(event) => {
        onReset?.(event);
        form.onReset(event);
      }}
      ref={ref}
    />
  )
);
