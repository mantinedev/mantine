import { renderHook } from '@testing-library/react';
import { useForm } from '../../use-form';

describe('@mantine/form/validate-type-safety', () => {
  it('accepts valid validate keys from initialValues', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { firstName: '', lastName: '' },
        validate: {
          firstName: (value) => (value.length < 2 ? 'Too short' : null),
          lastName: (value) => (value.length < 2 ? 'Too short' : null),
        },
      })
    );

    expect(hook.result.current).toBeDefined();
  });

  it('accepts partial validate keys', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { firstName: '', lastName: '' },
        validate: {
          firstName: (value) => (value.length < 2 ? 'Too short' : null),
        },
      })
    );

    expect(hook.result.current).toBeDefined();
  });

  it('rejects unknown validate keys not present in initialValues', () => {
    renderHook(() =>
      useForm({
        initialValues: { firstName: '', lastName: '' },
        validate: {
          // @ts-expect-error: 'unknownField' is not a key of initialValues
          unknownField: (value: string) => (value.length < 2 ? 'Too short' : null),
          firstName: (value) => (value.length < 2 ? 'Too short' : null),
        },
      })
    );
  });
});
