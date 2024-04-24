import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('validates object with nested values', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        clearInputErrorOnChange: false,
        initialValues: {
          a: { b: { c: 1 } },
        },
        validate: {
          a: { b: { c: (value) => (value === 1 ? 'error-c' : null) } },
        },
      })
    );

    expect(hook.result.current.errors).toStrictEqual({});

    act(() => {
      expect(hook.result.current.validate()).toStrictEqual({
        hasErrors: true,
        errors: { 'a.b.c': 'error-c' },
      });
    });

    expect(hook.result.current.errors).toStrictEqual({ 'a.b.c': 'error-c' });

    act(() => hook.result.current.setFieldValue('a.b.c', 2));
    expect(hook.result.current.errors).toStrictEqual({ 'a.b.c': 'error-c' });

    act(() => {
      expect(hook.result.current.validate()).toStrictEqual({
        hasErrors: false,
        errors: {},
      });
    });
    expect(hook.result.current.errors).toStrictEqual({});
  });

  it('validates array with nested values', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        clearInputErrorOnChange: false,
        initialValues: { a: [{ b: 1 }, { b: 1 }, { b: 3 }] },
        validate: { a: { b: (value) => (value < 2 ? 'error-b' : null) } },
      })
    );

    expect(hook.result.current.errors).toStrictEqual({});

    act(() => {
      expect(hook.result.current.validate()).toStrictEqual({
        hasErrors: true,
        errors: { 'a.0.b': 'error-b', 'a.1.b': 'error-b' },
      });
    });

    expect(hook.result.current.errors).toStrictEqual({ 'a.0.b': 'error-b', 'a.1.b': 'error-b' });

    act(() => {
      hook.result.current.setFieldValue('a.0.b', 4);
      hook.result.current.setFieldValue('a.1.b', 5);
    });

    expect(hook.result.current.errors).toStrictEqual({ 'a.0.b': 'error-b', 'a.1.b': 'error-b' });

    act(() => {
      expect(hook.result.current.validate()).toStrictEqual({
        hasErrors: false,
        errors: {},
      });
    });

    expect(hook.result.current.errors).toStrictEqual({});
  });
}

describe('@mantine/form/validate with nested rules controlled', () => {
  tests('controlled');
});

describe('@mantine/form/validate with nested rules uncontrolled', () => {
  tests('uncontrolled');
});
