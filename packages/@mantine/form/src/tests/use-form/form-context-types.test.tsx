import { act, renderHook } from '@testing-library/react';
import { createFormContext } from '../../FormProvider/FormProvider';
import type { FormFieldValidationResult, FormValidationResult } from '../../types';

interface Values {
  name: string;
}

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;

function expectType<T extends true>(value?: T) {
  return value;
}

describe('@mantine/form/form-context-types', () => {
  it('infers async return types from rules passed to useForm returned by createFormContext', async () => {
    const [FormProvider, , useForm] = createFormContext<Values>();

    const hook = renderHook(() =>
      useForm({
        initialValues: { name: '' },
        validate: { name: async (value) => (value === '' ? 'required' : null) },
      })
    );

    const validate = hook.result.current.validate;
    const validateField = hook.result.current.validateField;
    expectType<Equal<ReturnType<typeof validate>, Promise<FormValidationResult>>>();
    expectType<Equal<ReturnType<typeof validateField>, Promise<FormFieldValidationResult>>>();

    let result!: Promise<FormValidationResult>;
    act(() => {
      result = hook.result.current.validate();
    });
    expect(result).toBeInstanceOf(Promise);
    expect((await act(() => result)).hasErrors).toBe(true);

    expect(<FormProvider form={hook.result.current}>content</FormProvider>).toBeDefined();
  });

  it('keeps sync return types for sync rules and forms without rules', () => {
    const [FormProvider, useFormContext, useForm] = createFormContext<Values>();

    const withRules = renderHook(() =>
      useForm({
        initialValues: { name: '' },
        validate: { name: (value) => (value === '' ? 'required' : null) },
      })
    );
    const withoutRules = renderHook(() => useForm({ initialValues: { name: '' } }));

    const validate = withRules.result.current.validate;
    const validateWithoutRules = withoutRules.result.current.validate;
    type ContextValidate = ReturnType<typeof useFormContext>['validate'];
    expectType<Equal<ReturnType<typeof validate>, FormValidationResult>>();
    expectType<Equal<ReturnType<typeof validateWithoutRules>, FormValidationResult>>();
    expectType<Equal<ReturnType<ContextValidate>, FormValidationResult>>();

    act(() => {
      expect(withRules.result.current.validate().hasErrors).toBe(true);
      expect(withoutRules.result.current.validate().hasErrors).toBe(false);
    });
    expect(<FormProvider form={withRules.result.current}>content</FormProvider>).toBeDefined();
    expect(<FormProvider form={withoutRules.result.current}>content</FormProvider>).toBeDefined();
  });

  it('infers transformed values and function-style async validation', () => {
    const [FormProvider, , useForm] = createFormContext<Values, { upper: string }>();

    const hook = renderHook(() =>
      useForm({
        initialValues: { name: '' },
        transformValues: (values) => ({ upper: values.name.toUpperCase() }),
        validate: async (values) => (values.name === '' ? { name: 'required' } : {}),
      })
    );

    const validate = hook.result.current.validate;
    expectType<Equal<ReturnType<typeof validate>, Promise<FormValidationResult>>>();
    expect(hook.result.current.getTransformedValues({ name: 'a' })).toStrictEqual({ upper: 'A' });
    expect(<FormProvider form={hook.result.current}>content</FormProvider>).toBeDefined();
  });
});
