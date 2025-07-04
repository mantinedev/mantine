import { forwardRef } from 'react';
import { TransformedValues, UseFormReturnType } from '../types';

export interface FormProps<Form extends UseFormReturnType<any>>
  extends React.ComponentPropsWithRef<'form'> {
  form: Form;
  onSubmit?: Parameters<Form['onSubmit']>[0]
  onValidationFailure?: Parameters<Form['onSubmit']>[1]
  onReset?: React.FormEventHandler<HTMLFormElement>
}

export type FormComponent = (<Form extends UseFormReturnType<any>>(
  props: FormProps<Form>
) => React.JSX.Element | React.ReactNode) & { displayName?: string };

export const Form: FormComponent = forwardRef(
  <Form extends UseFormReturnType<any>>(
    { form, onSubmit, onReset, onValidationFailure, ...others }: FormProps<Form>,
    ref: React.ForwardedRef<HTMLFormElement>
  ) => (
    <form
      {...others}
      onSubmit={
        form.onSubmit(
          typeof onSubmit === 'function' ? onSubmit : () => {},
          onValidationFailure
        )
      }
      onReset={(event) => {
        onReset?.(event);
        form.onReset(event);
      }}
      ref={ref}
    />
  )
);

Form.displayName = '@mantine/use-form/Form';
