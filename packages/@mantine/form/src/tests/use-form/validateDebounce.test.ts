import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../use-form';

describe('@mantine/form/validateDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('correctly debounces validation and clears previous timer on rapid value changes', () => {
    const validateSpy = jest.fn().mockReturnValue(null);

    const hook = renderHook(() =>
      useForm({
        initialValues: { name: '' },
        validateInputOnChange: true,
        validateDebounce: 100,
        validate: {
          name: validateSpy,
        },
      })
    );

    act(() => {
      hook.result.current.setFieldValue('name', 'a');
    });

    // Advance time slightly, but not enough to trigger validation
    act(() => {
      jest.advanceTimersByTime(50);
    });
    expect(validateSpy).not.toHaveBeenCalled();

    // Type a second character - this should clear the first timer
    act(() => {
      hook.result.current.setFieldValue('name', 'ab');
    });

    // Advance time past the original 100ms mark from the first keystroke (total time: 110ms)
    act(() => {
      jest.advanceTimersByTime(60);
    });
    // If the debounce failed to clear the timer, the validation for 'a' would have fired here.
    expect(validateSpy).not.toHaveBeenCalled();

    // Now advance time fully past the second keystroke's debounce window (total time: 150ms)
    act(() => {
      jest.advanceTimersByTime(50);
    });
    expect(validateSpy).toHaveBeenCalledTimes(1);
    expect(validateSpy).toHaveBeenLastCalledWith(
      'ab',
      expect.anything(),
      'name',
      expect.anything()
    );
  });

  it('marks field as validating while debounced validation is pending', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { name: '' },
        validateInputOnChange: true,
        validateDebounce: 100,
        validate: { name: (value) => (value.length < 2 ? 'error' : null) },
      })
    );

    expect(hook.result.current.isValidating('name')).toBe(false);

    act(() => hook.result.current.setFieldValue('name', 'a'));
    expect(hook.result.current.isValidating('name')).toBe(true);
    expect(hook.result.current.validating).toBe(true);

    act(() => jest.advanceTimersByTime(100));
    expect(hook.result.current.isValidating('name')).toBe(false);
    expect(hook.result.current.errors.name).toBe('error');
  });

  it('keeps field validating when a previous async validation resolves during debounce', async () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { name: '' },
        validateInputOnChange: true,
        validateDebounce: 100,
        validate: {
          name: (value) =>
            new Promise<string | null>((resolve) => {
              setTimeout(() => resolve(value === 'taken' ? 'taken' : null), 50);
            }),
        },
      })
    );

    act(() => hook.result.current.setFieldValue('name', 'taken'));
    act(() => jest.advanceTimersByTime(120));
    expect(hook.result.current.isValidating('name')).toBe(true);

    act(() => hook.result.current.setFieldValue('name', 'takenn'));
    await act(async () => {
      jest.advanceTimersByTime(50);
      await Promise.resolve();
    });
    expect(hook.result.current.isValidating('name')).toBe(true);
    expect(hook.result.current.errors).toStrictEqual({});

    await act(async () => {
      jest.advanceTimersByTime(200);
      await Promise.resolve();
    });
    expect(hook.result.current.isValidating('name')).toBe(false);
    expect(hook.result.current.errors).toStrictEqual({});
  });

  it('cancels pending debounced validation on reset', () => {
    const validateSpy = jest.fn().mockReturnValue('error');
    const hook = renderHook(() =>
      useForm({
        initialValues: { name: '' },
        validateInputOnChange: true,
        validateDebounce: 100,
        validate: { name: validateSpy },
      })
    );

    act(() => hook.result.current.setFieldValue('name', 'a'));
    act(() => hook.result.current.reset());
    expect(hook.result.current.isValidating('name')).toBe(false);

    act(() => jest.advanceTimersByTime(100));
    expect(validateSpy).not.toHaveBeenCalled();
    expect(hook.result.current.errors).toStrictEqual({});
  });
  it('clears the previous error when a debounced check starts', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { name: '' },
        validateInputOnChange: true,
        validateDebounce: 100,
        validate: { name: (value) => (value.length < 2 ? 'error' : null) },
      })
    );

    act(() => hook.result.current.setFieldValue('name', 'a'));
    act(() => jest.advanceTimersByTime(100));
    expect(hook.result.current.errors.name).toBe('error');

    act(() => hook.result.current.setFieldValue('name', 'b'));
    expect(hook.result.current.isValidating('name')).toBe(true);
    expect(hook.result.current.errors.name).toBeUndefined();

    act(() => jest.advanceTimersByTime(100));
    expect(hook.result.current.errors.name).toBe('error');
  });

  it('clears the previous error when an async check without debounce starts', async () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { name: '' },
        validateInputOnChange: true,
        validate: {
          name: (value) =>
            new Promise<string | null>((resolve) => {
              setTimeout(() => resolve(value.length < 3 ? 'short' : null), 50);
            }),
        },
      })
    );

    act(() => hook.result.current.setFieldValue('name', 'a'));
    await act(async () => {
      jest.advanceTimersByTime(50);
      await Promise.resolve();
    });
    expect(hook.result.current.errors.name).toBe('short');

    act(() => hook.result.current.setFieldValue('name', 'ab'));
    expect(hook.result.current.isValidating('name')).toBe(true);
    expect(hook.result.current.errors.name).toBeUndefined();

    await act(async () => {
      jest.advanceTimersByTime(50);
      await Promise.resolve();
    });
    expect(hook.result.current.isValidating('name')).toBe(false);
    expect(hook.result.current.errors.name).toBe('short');
  });

  it('clears the previous error when a blur-triggered async check starts', async () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { name: 'a' },
        validateInputOnBlur: true,
        clearInputErrorOnChange: false,
        validate: {
          name: (value) =>
            new Promise<string | null>((resolve) => {
              setTimeout(() => resolve(value.length < 3 ? 'short' : null), 50);
            }),
        },
      })
    );

    act(() => hook.result.current.setFieldError('name', 'short'));
    act(() => hook.result.current.setFieldValue('name', 'ab'));
    expect(hook.result.current.errors.name).toBe('short');

    act(() => hook.result.current.getInputProps('name').onBlur());
    expect(hook.result.current.isValidating('name')).toBe(true);
    expect(hook.result.current.errors.name).toBeUndefined();

    await act(async () => {
      jest.advanceTimersByTime(50);
      await Promise.resolve();
    });
    expect(hook.result.current.errors.name).toBe('short');
  });

  it('keeps errors while a full async form.validate() is pending', async () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { name: 'a' },
        validate: {
          name: (value) =>
            new Promise<string | null>((resolve) => {
              setTimeout(() => resolve(value.length < 3 ? 'short' : null), 50);
            }),
        },
      })
    );

    act(() => hook.result.current.setFieldError('name', 'short'));

    let pending: Promise<unknown>;
    act(() => {
      pending = hook.result.current.validate() as Promise<unknown>;
    });
    expect(hook.result.current.validating).toBe(true);
    expect(hook.result.current.errors.name).toBe('short');

    await act(async () => {
      jest.advanceTimersByTime(50);
      await pending;
    });
    expect(hook.result.current.validating).toBe(false);
    expect(hook.result.current.errors.name).toBe('short');
  });

  it('keeps the error while a direct async validateField() call is pending', async () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { name: 'a' },
        validate: {
          name: (value) =>
            new Promise<string | null>((resolve) => {
              setTimeout(() => resolve(value.length < 3 ? 'short' : null), 50);
            }),
        },
      })
    );

    act(() => hook.result.current.setFieldError('name', 'short'));

    let pending: Promise<unknown>;
    act(() => {
      pending = hook.result.current.validateField('name') as Promise<unknown>;
    });
    expect(hook.result.current.isValidating('name')).toBe(true);
    expect(hook.result.current.errors.name).toBe('short');

    await act(async () => {
      jest.advanceTimersByTime(50);
      await pending;
    });
    expect(hook.result.current.errors.name).toBe('short');
  });

  it('clears the list root error when a debounced list check starts', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { items: [] as string[] },
        validateInputOnChange: true,
        validateDebounce: 100,
        validate: { items: (value) => (value.length < 3 ? 'too-few' : null) },
      })
    );

    act(() => hook.result.current.insertListItem('items', 'a'));
    act(() => jest.advanceTimersByTime(100));
    expect(hook.result.current.errors.items).toBe('too-few');

    act(() => hook.result.current.insertListItem('items', 'b'));
    expect(hook.result.current.errors.items).toBeUndefined();

    act(() => jest.advanceTimersByTime(100));
    expect(hook.result.current.errors.items).toBe('too-few');
  });
});
