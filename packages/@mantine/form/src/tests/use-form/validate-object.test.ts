import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('validates all fields with validate handler', async () => {
    const hook = renderHook(() =>
      useForm<{ banana: string; orange: string; bar: number }>({
        mode,
        initialValues: {
          banana: '',
          orange: '',
          bar: 42,
        },

        validate: {
          banana: (value) => (value !== 'test-banana' ? 'invalid banana' : null),
          orange: (value) => (value !== 'test-orange' ? 'invalid orange' : null),
        },
      })
    );

    expect(hook.result.current.errors).toStrictEqual({});

    await act(async () => {
      const result = await hook.result.current.validate();
      expect(result).toStrictEqual({
        hasErrors: true,
        errors: {
          banana: 'invalid banana',
          orange: 'invalid orange',
        },
      });
    });

    expect(hook.result.current.errors).toStrictEqual({
      banana: 'invalid banana',
      orange: 'invalid orange',
    });

    act(() => hook.result.current.setFieldValue('banana', 'test-banana'));
    await act(async () => {
      const result = await hook.result.current.validate();
      expect(result).toStrictEqual({
        hasErrors: true,
        errors: { orange: 'invalid orange' },
      });
    });

    expect(hook.result.current.errors).toStrictEqual({ orange: 'invalid orange' });

    act(() => hook.result.current.setFieldValue('orange', 'test-orange'));
    await act(async () => {
      const result = await hook.result.current.validate();
      expect(result).toStrictEqual({ hasErrors: false, errors: {} });
    });

    expect(hook.result.current.errors).toStrictEqual({});
  });

  it('validates single field with validateField handler', async () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: {
          banana: '',
          orange: '',
        },

        validate: {
          banana: (value) => (value !== 'test-banana' ? 'invalid banana' : null),
          orange: (value) => (value !== 'test-orange' ? 'invalid orange' : null),
        },
      })
    );

    await act(async () => {
      const result = await hook.result.current.validateField('banana');
      expect(result).toStrictEqual({ hasError: true, error: 'invalid banana' });
    });

    expect(hook.result.current.errors).toStrictEqual({ banana: 'invalid banana' });

    act(() => hook.result.current.setFieldValue('banana', 'test-banana'));
    await act(async () => {
      const result = await hook.result.current.validateField('banana');
      expect(result).toStrictEqual({ hasError: false, error: null });
    });

    expect(hook.result.current.errors).toStrictEqual({});
  });

  it('allows to validate values based on their path', async () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: [{ b: 1 }, { b: 2 }] },
        validate: {
          a: {
            b: (_value, _values, path) => (path === 'a.0.b' ? 'error' : null),
          },
        },
      })
    );

    await act(async () => {
      const result = await hook.result.current.validate();
      expect(result).toStrictEqual({
        hasErrors: true,
        errors: {
          'a.0.b': 'error',
        },
      });
    });
  });
}

describe('@mantine/form/validate with record rules controlled', () => {
  tests('controlled');
});

describe('@mantine/form/validate with record rules uncontrolled', () => {
  tests('uncontrolled');
});
