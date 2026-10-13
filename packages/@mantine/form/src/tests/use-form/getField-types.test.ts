import { renderHook } from '@testing-library/react';
import type { FormPath, UseFormReturnType } from '../../types';
import { useField, type UseFieldReturnType } from '../../use-field';
import { useForm } from '../../use-form';

interface SignupValues {
  email: string;
  nickname: string | null;
  age: number;
  terms: boolean;
}

interface CheckoutValues {
  contact: { email: string };
  items: { sku: string; quantity: number }[];
}

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;

function expectType<T extends true>(value?: T) {
  return value;
}

function acceptStringField(field: UseFieldReturnType<string>) {
  return field;
}

function acceptCheckboxField(field: UseFieldReturnType<boolean, 'checkbox'>) {
  return field.getInputProps().checked;
}

function acceptEmailForm(form: UseFormReturnType<{ email: string }>) {
  return form;
}

describe('@mantine/form/getField-types', () => {
  it('infers the field value type from the path', () => {
    const signup = renderHook(() =>
      useForm<SignupValues>({
        initialValues: { email: '', nickname: null, age: 0, terms: false },
      })
    ).result.current;

    const checkout = renderHook(() =>
      useForm<CheckoutValues>({
        initialValues: { contact: { email: '' }, items: [{ sku: '', quantity: 1 }] },
      })
    ).result.current;

    const age = signup.getField('age');
    const nickname = signup.getField('nickname');
    expectType<Equal<typeof age, UseFieldReturnType<number>>>();
    expectType<Equal<typeof nickname, UseFieldReturnType<string | null>>>();

    acceptStringField(signup.getField('email'));
    acceptStringField(checkout.getField('contact.email'));
    acceptStringField(checkout.getField('items.0.sku'));

    // @ts-expect-error number value
    acceptStringField(signup.getField('age'));
    // @ts-expect-error nullable value
    acceptStringField(signup.getField('nickname'));
    // @ts-expect-error unknown path
    signup.getField('emial');

    acceptCheckboxField(signup.getField('terms', { type: 'checkbox' }));
    acceptCheckboxField(
      renderHook(() => useField({ initialValue: false, type: 'checkbox' })).result.current
    );
    // @ts-expect-error input type field
    acceptCheckboxField(signup.getField('terms'));

    acceptEmailForm(signup);
    // @ts-expect-error no top-level email
    acceptEmailForm(checkout);
  });

  it('lists paths with values of the given type', () => {
    expectType<Equal<FormPath<SignupValues, string>, 'email'>>();
    expectType<Equal<FormPath<SignupValues, string | null>, 'email' | 'nickname'>>();
    expectType<Equal<FormPath<CheckoutValues, { email: string }>, 'contact'>>();
    expectType<Equal<FormPath<{ a: { b: boolean } }>, 'a' | 'a.b'>>();
  });
});
