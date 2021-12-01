import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from './use-form';

const TEST_FORM = {
  initialValues: {
    email: 'hello@mantine.dev',
    confirmEmail: '',
    name: 'Mantine',
    age: 1,
  },

  validationRules: {
    email: (email: string) => email === 'test@email.dev',
    confirmEmail: (email: string, values) => email === values.email,
    name: (name: string) => name === 'test-name',
  },
};

const MESSAGES_FORM = {
  ...TEST_FORM,
  errorMessages: {
    email: 'test-email-error',
    confirmEmail: 'test-confirm-email-error',
  },
};

const BOOLEAN_FORM = {
  initialValues: {
    email: '',
    termsAndConditions: false,
  },

  validationRules: {
    email: (email: string) => email === 'test@email.dev',
    termsAndConditions: (value: boolean) => value,
  },

  errorMessages: {
    email: 'test-email-error',
    termsAndConditions: 'test-terms-and-conditions-error',
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
    expect(hook.result.current.errors.email).toBe(null);
  });

  it('validates field with given function with validateField handler', () => {
    const hook = renderHook(() => useForm(TEST_FORM));

    act(() => hook.result.current.validateField('email'));
    expect(hook.result.current.errors.email).toBe(true);

    act(() => hook.result.current.setFieldValue('email', 'test@email.dev'));
    act(() => hook.result.current.validateField('email'));
    expect(hook.result.current.errors.email).toBe(null);

    act(() => hook.result.current.validateField('confirmEmail'));
    expect(hook.result.current.errors.confirmEmail).toBe(true);

    act(() => hook.result.current.setFieldValue('confirmEmail', 'test@email.dev'));
    act(() => hook.result.current.validateField('confirmEmail'));
    expect(hook.result.current.errors.confirmEmail).toBe(null);
  });

  it('sets message from given errorMessages with validateField handler', () => {
    const hook = renderHook(() => useForm(MESSAGES_FORM));
    expect(hook.result.current.errors.email).toBe(null);
    act(() => hook.result.current.validateField('email'));
    expect(hook.result.current.errors.email).toBe('test-email-error');
  });

  it('validates all fields with given functions with validate handler', () => {
    const hook = renderHook(() => useForm(TEST_FORM));

    act(() => {
      hook.result.current.validate();
    });
    expect(hook.result.current.errors).toEqual({
      age: null,
      name: true,
      email: true,
      confirmEmail: true,
    });

    act(() => hook.result.current.setFieldValue('email', 'test@email.dev'));
    act(() => {
      hook.result.current.validate();
    });
    expect(hook.result.current.errors).toEqual({
      age: null,
      name: true,
      email: null,
      confirmEmail: true,
    });

    act(() => hook.result.current.setFieldValue('confirmEmail', 'test@email.dev'));
    act(() => {
      hook.result.current.validate();
    });
    expect(hook.result.current.errors).toEqual({
      age: null,
      name: true,
      email: null,
      confirmEmail: null,
    });

    act(() => hook.result.current.setFieldValue('name', 'test-name'));
    act(() => {
      hook.result.current.validate();
    });
    expect(hook.result.current.errors).toEqual({
      age: null,
      name: null,
      email: null,
      confirmEmail: null,
    });
  });

  it('calls given onSubmit callback only with valid values', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useForm(TEST_FORM));

    act(() => {
      hook.result.current.onSubmit(spy)();
    });

    expect(hook.result.current.errors).toEqual({
      age: null,
      name: true,
      email: true,
      confirmEmail: true,
    });
    expect(spy).not.toHaveBeenCalled();

    act(() => hook.result.current.setFieldValue('email', 'test@email.dev'));
    act(() => hook.result.current.setFieldValue('confirmEmail', 'test@email.dev'));
    act(() => hook.result.current.setFieldValue('name', 'test-name'));

    act(() => {
      hook.result.current.onSubmit(spy)();
    });

    expect(spy).toHaveBeenCalledWith({
      email: 'test@email.dev',
      confirmEmail: 'test@email.dev',
      name: 'test-name',
      age: 1,
    });
  });

  it('resets state to default with reset handler', () => {
    const hook = renderHook(() => useForm(TEST_FORM));
    act(() => {
      hook.result.current.setFieldValue('email', 'test@email.dev');
      hook.result.current.validateField('name');
    });

    expect(hook.result.current.errors.name).toBe(true);
    expect(hook.result.current.values).toEqual({
      ...TEST_FORM.initialValues,
      email: 'test@email.dev',
    });

    act(() => hook.result.current.reset());

    expect(hook.result.current.values).toEqual(TEST_FORM.initialValues);
    expect(hook.result.current.errors.name).toBe(null);
  });

  it('sets form values with setValues handler', () => {
    const hook = renderHook(() => useForm(TEST_FORM));
    act(() => {
      hook.result.current.setValues({
        email: 'hello@mantine.dev',
        confirmEmail: 'hello@mantine.dev',
        name: 'Mantine',
        age: 1,
      });
    });

    expect(hook.result.current.values).toEqual({
      email: 'hello@mantine.dev',
      confirmEmail: 'hello@mantine.dev',
      name: 'Mantine',
      age: 1,
    });
  });

  it('resets errors with resetErrors handler', () => {
    const hook = renderHook(() => useForm(TEST_FORM));

    act(() => {
      hook.result.current.validate();
    });

    expect(hook.result.current.errors).toEqual({
      age: null,
      name: true,
      email: true,
      confirmEmail: true,
    });

    act(() => {
      hook.result.current.resetErrors();
    });

    expect(hook.result.current.errors).toEqual({
      age: null,
      name: null,
      email: null,
      confirmEmail: null,
    });
  });

  it('allows to set errors object with setErrors handler', () => {
    const hook = renderHook(() => useForm(TEST_FORM));
    expect(hook.result.current.errors).toEqual({
      age: null,
      name: null,
      email: null,
      confirmEmail: null,
    });

    act(() => {
      hook.result.current.setErrors({ age: true, name: null, email: true, confirmEmail: null });
    });

    expect(hook.result.current.errors).toEqual({
      age: true,
      name: null,
      email: true,
      confirmEmail: null,
    });
  });

  it('displays provided error messages when field is invalid', () => {
    const hook = renderHook(() => useForm(MESSAGES_FORM));
    act(() => {
      hook.result.current.validate();
    });
    expect(hook.result.current.errors).toEqual({
      age: null,
      confirmEmail: 'test-confirm-email-error',
      email: 'test-email-error',
      name: true,
    });
  });

  it('supports setting custom error messages', () => {
    const hook = renderHook(() => useForm(MESSAGES_FORM));
    act(() => hook.result.current.setFieldError('email', 'test-external-error'));
    expect(hook.result.current.errors).toEqual({
      age: null,
      confirmEmail: null,
      email: 'test-external-error',
      name: null,
    });
  });

  it('returns correct values in getInputProps function', () => {
    const hook = renderHook(() => useForm(BOOLEAN_FORM));
    const inputProps = hook.result.current.getInputProps('email');
    const checkboxProps = hook.result.current.getInputProps('termsAndConditions', {
      type: 'checkbox',
    });

    expect(checkboxProps.checked).toBe(false);
    expect(checkboxProps.error).toBe(undefined);
    expect(typeof checkboxProps.onChange).toBe('function');

    expect(inputProps.value).toBe('');
    expect(inputProps.error).toBe(undefined);
    expect(typeof inputProps.onChange).toBe('function');

    act(() => inputProps.onChange('test@email'));
    expect(hook.result.current.getInputProps('email').value).toBe('test@email');
    expect(hook.result.current.getInputProps('email').error).toBe(undefined);

    act(() => {
      hook.result.current.validate();
    });
    expect(hook.result.current.getInputProps('email').error).toBe('test-email-error');
    expect(hook.result.current.getInputProps('termsAndConditions').error).toBe(
      'test-terms-and-conditions-error'
    );
  });
});
