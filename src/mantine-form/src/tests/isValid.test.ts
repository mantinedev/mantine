import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

describe('@mantine/form/isValid', () => {
  it('returns correct form validation state', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { a: 1 },
        validate: {
          a: (value) => (value < 2 ? 'error' : null),
        },
      })
    );

    expect(hook.result.current.isValid()).toBe(false);
    expect(hook.result.current.errors).toStrictEqual({});

    act(() => hook.result.current.setFieldValue('a', 2));
    expect(hook.result.current.isValid()).toBe(true);
  });

  it('returns correct field validation state', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { a: 1, b: 2 },
        validate: {
          a: (value) => (value < 2 ? 'error' : null),
        },
      })
    );

    expect(hook.result.current.isValid('a')).toBe(false);
    expect(hook.result.current.isValid('b')).toBe(true);
    expect(hook.result.current.errors).toStrictEqual({});

    act(() => hook.result.current.setFieldValue('a', 2));
    expect(hook.result.current.isValid('a')).toBe(true);
    expect(hook.result.current.isValid('b')).toBe(true);
  });
});
