import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('returns correct form validation state', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
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
        mode,
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
}

describe('@mantine/form/isValid-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/isValid-uncontrolled', () => {
  tests('uncontrolled');
});
