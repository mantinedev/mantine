import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from './use-form';

const TEST_FORM = {
  initialValues: {
    email: 'hello@mantine.dev',
    name: 'Mantine',
    age: 1,
  },

  validationRules: {
    email: (email: string) => email === 'test@email.dev',
    name: (name: string) => name === 'test-name',
  },
};

describe('@mantine/hooks/use-form', () => {
  it('returns correct values', () => {
    const hook = renderHook(() => useForm(TEST_FORM));
    expect(hook.result.current.values).toEqual(TEST_FORM.initialValues);
  });

  it('sets field value with setFieldValue handler', () => {
    const hook = renderHook(() => useForm(TEST_FORM));
    act(() => hook.result.current.setFieldValue('email', 'test@email.dev'));

    expect(hook.result.current.values).toEqual({
      ...TEST_FORM.initialValues,
      email: 'test@email.dev',
    });
  });

  it('sets field error with setFieldError handler', () => {
    const hook = renderHook(() => useForm(TEST_FORM));

    act(() => hook.result.current.setFieldError('email', true));
    expect(hook.result.current.errors.email).toBe(true);

    act(() => hook.result.current.setFieldError('email', false));
    expect(hook.result.current.errors.email).toBe(false);
  });

  it('sets field error to false on field change', () => {
    const hook = renderHook(() => useForm(TEST_FORM));
    act(() => hook.result.current.setFieldError('email', true));
    expect(hook.result.current.errors.email).toBe(true);

    act(() => hook.result.current.setFieldValue('email', 'test@email.dev'));
    expect(hook.result.current.errors.email).toBe(false);
  });

  it('validates field with given function with validateField handler', () => {
    const hook = renderHook(() => useForm(TEST_FORM));

    act(() => hook.result.current.validateField('email'));
    expect(hook.result.current.errors.email).toBe(true);

    act(() => hook.result.current.setFieldValue('email', 'test@email.dev'));
    act(() => hook.result.current.validateField('email'));
    expect(hook.result.current.errors.email).toBe(false);
  });

  it('validates all fields with given functions with validate handler', () => {
    const hook = renderHook(() => useForm(TEST_FORM));

    act(() => {
      hook.result.current.validate();
    });
    expect(hook.result.current.errors).toEqual({ name: true, email: true });

    act(() => hook.result.current.setFieldValue('email', 'test@email.dev'));
    act(() => {
      hook.result.current.validate();
    });
    expect(hook.result.current.errors).toEqual({ name: true, email: false });

    act(() => hook.result.current.setFieldValue('name', 'test-name'));
    act(() => {
      hook.result.current.validate();
    });
    expect(hook.result.current.errors).toEqual({ name: false, email: false });
  });

  it('calls given onSubmit callback only with valid values', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useForm(TEST_FORM));

    act(() => {
      hook.result.current.onSubmit(spy)();
    });

    expect(hook.result.current.errors).toEqual({ name: true, email: true });
    expect(spy).not.toHaveBeenCalled();

    act(() => hook.result.current.setFieldValue('email', 'test@email.dev'));
    act(() => hook.result.current.setFieldValue('name', 'test-name'));

    act(() => {
      hook.result.current.onSubmit(spy)();
    });

    expect(spy).toHaveBeenCalledWith({ email: 'test@email.dev', name: 'test-name', age: 1 });
  });
});
