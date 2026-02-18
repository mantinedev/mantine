import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('validate() with all sync rules returns plain object (not Promise)', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: '', b: '' },
        validate: {
          a: (value) => (value === '' ? 'required' : null),
          b: (value) => (value === '' ? 'required' : null),
        },
      })
    );

    let result: any;
    act(() => {
      result = hook.result.current.validate();
    });

    expect(result).not.toBeInstanceOf(Promise);
    expect(result.hasErrors).toBe(true);
    expect(result.errors).toHaveProperty('a', 'required');
    expect(result.errors).toHaveProperty('b', 'required');
  });

  it('validate() with async rule returns Promise', async () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: '' },
        validate: {
          a: async (value) => (value === '' ? 'required' : null),
        },
      })
    );

    let result: any;
    act(() => {
      result = hook.result.current.validate();
    });

    expect(result).toBeInstanceOf(Promise);
    const resolved = await act(() => result);
    expect(resolved.hasErrors).toBe(true);
    expect(resolved.errors).toHaveProperty('a', 'required');
  });

  it('validate() with sync function-style validate returns plain object', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: '' },
        validate: (values) => ({
          a: values.a === '' ? 'required' : null,
        }),
      })
    );

    let result: any;
    act(() => {
      result = hook.result.current.validate();
    });

    expect(result).not.toBeInstanceOf(Promise);
    expect(result.hasErrors).toBe(true);
  });

  it('validate() with async function-style validate returns Promise', async () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: '' },
        validate: async (values) => ({
          a: values.a === '' ? 'required' : null,
        }),
      })
    );

    let result: any;
    act(() => {
      result = hook.result.current.validate();
    });

    expect(result).toBeInstanceOf(Promise);
    const resolved = await act(() => result);
    expect(resolved.hasErrors).toBe(true);
  });

  it('validateField() with sync rule returns plain object', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: '' },
        validate: {
          a: (value) => (value === '' ? 'required' : null),
        },
      })
    );

    let result: any;
    act(() => {
      result = hook.result.current.validateField('a');
    });

    expect(result).not.toBeInstanceOf(Promise);
    expect(result.hasError).toBe(true);
    expect(result.error).toBe('required');
  });

  it('validateField() with async rule returns Promise', async () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: '' },
        validate: {
          a: async (value) => (value === '' ? 'required' : null),
        },
      })
    );

    let result: any;
    act(() => {
      result = hook.result.current.validateField('a');
    });

    expect(result).toBeInstanceOf(Promise);
    const resolved = await act(() => result);
    expect(resolved.hasError).toBe(true);
    expect(resolved.error).toBe('required');
  });

  it('isValid() with all sync rules returns boolean (not Promise)', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: '' },
        validate: {
          a: (value) => (value === '' ? 'required' : null),
        },
      })
    );

    const result = hook.result.current.isValid();
    expect(result).not.toBeInstanceOf(Promise);
    expect(result).toBe(false);
  });

  it('isValid() with async rule returns Promise<boolean>', async () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: '' },
        validate: {
          a: async (value) => (value === '' ? 'required' : null),
        },
      })
    );

    const result = hook.result.current.isValid();
    expect(result).toBeInstanceOf(Promise);
    expect(await result).toBe(false);
  });

  it('isValid() with sync field rule returns boolean for specific field', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: '', b: 'valid' },
        validate: {
          a: (value) => (value === '' ? 'required' : null),
          b: (value) => (value === '' ? 'required' : null),
        },
      })
    );

    expect(hook.result.current.isValid('a')).toBe(false);
    expect(hook.result.current.isValid('b')).toBe(true);
  });

  it('validating state is NOT set during sync validation', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: '' },
        validate: {
          a: (value) => (value === '' ? 'required' : null),
        },
      })
    );

    expect(hook.result.current.validating).toBe(false);
    act(() => {
      hook.result.current.validate();
    });
    expect(hook.result.current.validating).toBe(false);
  });

  it('validating state IS set during async validation', async () => {
    let resolveValidation: (value: any) => void;
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: '' },
        validate: {
          a: () =>
            new Promise((resolve) => {
              resolveValidation = resolve;
            }),
        },
      })
    );

    let result: any;
    act(() => {
      result = hook.result.current.validate();
    });
    expect(hook.result.current.validating).toBe(true);

    await act(async () => {
      resolveValidation!(null);
      await result;
    });
    expect(hook.result.current.validating).toBe(false);
  });

  it('onSubmit works with sync validation', () => {
    const handleSubmit = jest.fn();
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: 'valid' },
        validate: {
          a: (value) => (value === '' ? 'required' : null),
        },
      })
    );

    act(() => {
      hook.result.current.onSubmit(handleSubmit)();
    });

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('onSubmit calls failure handler with sync validation errors', () => {
    const handleSubmit = jest.fn();
    const handleFailure = jest.fn();
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: '' },
        validate: {
          a: (value) => (value === '' ? 'required' : null),
        },
      })
    );

    act(() => {
      hook.result.current.onSubmit(handleSubmit, handleFailure)();
    });

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(handleFailure).toHaveBeenCalledTimes(1);
  });
}

describe('@mantine/form/sync-async-validation-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/sync-async-validation-uncontrolled', () => {
  tests('uncontrolled');
});
