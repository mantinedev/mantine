import { act, renderHook } from '@testing-library/react';
import { TextInput } from '@mantine/core';
import { render, screen, userEvent } from '@mantine-tests/core';
import { FormMode } from '../../types';
import { useField, UseFieldReturnType } from '../../use-field';
import { useForm } from '../../use-form';

interface Values {
  email: string;
  contact: { email: string };
}

const initialValues: Values = {
  email: 'initial@mantine.dev',
  contact: { email: '' },
};

function EmailField({ field }: { field: UseFieldReturnType<string> }) {
  return <TextInput label="Email" {...field.getInputProps()} />;
}

function tests(mode: FormMode) {
  it('reads and writes the form value at the path', () => {
    const hook = renderHook(() => useForm({ mode, initialValues }));

    expect(hook.result.current.getField('email').getValue()).toBe('initial@mantine.dev');
    act(() => hook.result.current.getField('contact.email').setValue('next@mantine.dev'));

    expect(hook.result.current.getValues().contact.email).toBe('next@mantine.dev');
    expect(hook.result.current.getField('contact.email').getValue()).toBe('next@mantine.dev');
  });

  it('returns input props bound to the form path', () => {
    const hook = renderHook(() => useForm({ mode, initialValues }));
    const props = hook.result.current.getField('email').getInputProps();

    expect(props.value).toBe('initial@mantine.dev');
    act(() => props.onChange('changed@mantine.dev'));
    expect(hook.result.current.getValues().email).toBe('changed@mantine.dev');
  });

  it('binds checkbox fields with the type option', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { terms: false } }));
    const terms = hook.result.current.getField('terms', { type: 'checkbox' });

    expect(terms.getInputProps()).toHaveProperty('checked', false);
    act(() => terms.getInputProps().onChange(true));
    expect(hook.result.current.getValues().terms).toBe(true);
    expect(hook.result.current.getField('terms').getInputProps()).toHaveProperty('value', true);
  });

  it('passes getInputProps options to the form', () => {
    const hook = renderHook(() =>
      useForm({ mode, initialValues: { terms: false }, initialErrors: { terms: 'Required' } })
    );

    const props = hook.result.current.getField('terms').getInputProps({
      type: 'checkbox',
      withError: false,
    });

    expect(props).toHaveProperty('checked', false);
    expect(props).not.toHaveProperty('error');
  });

  it('exposes the form error at the path', () => {
    const hook = renderHook(() => useForm({ mode, initialValues }));

    expect(hook.result.current.getField('email').error).toBe(null);
    act(() => hook.result.current.getField('email').setError('Invalid email'));

    expect(hook.result.current.errors.email).toBe('Invalid email');
    expect(hook.result.current.getField('email').error).toBe('Invalid email');
    expect(hook.result.current.getField('email').getInputProps().error).toBe('Invalid email');

    act(() => hook.result.current.getField('email').setError(null));
    expect(hook.result.current.errors).toEqual({});
  });

  it('validates with the form rule and resolves with the error', async () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues,
        validate: { contact: { email: (value) => (value ? null : 'Email is required') } },
      })
    );

    let result: React.ReactNode | void;
    await act(async () => {
      result = await hook.result.current.getField('contact.email').validate();
    });

    expect(result).toBe('Email is required');
    expect(hook.result.current.getField('contact.email').error).toBe('Email is required');
  });

  it('reports async validation state of the path', async () => {
    let resolve!: (error: string | null) => void;
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues,
        validate: {
          email: () =>
            new Promise<string | null>((r) => {
              resolve = r;
            }),
        },
      })
    );

    let promise!: Promise<React.ReactNode | void>;
    act(() => {
      promise = hook.result.current.getField('email').validate();
    });

    expect(hook.result.current.getField('email').isValidating).toBe(true);
    expect(hook.result.current.getField('contact.email').isValidating).toBe(false);

    await act(async () => {
      resolve('Taken');
      await promise;
    });

    expect(hook.result.current.getField('email').isValidating).toBe(false);
    expect(hook.result.current.getField('email').error).toBe('Taken');
  });

  it('reports and resets touched and dirty state of the path', () => {
    const hook = renderHook(() => useForm({ mode, initialValues }));

    act(() => hook.result.current.getField('email').getInputProps().onFocus?.());
    act(() => hook.result.current.getField('email').setValue('next@mantine.dev'));

    expect(hook.result.current.getField('email').isTouched()).toBe(true);
    expect(hook.result.current.getField('email').isDirty()).toBe(true);
    expect(hook.result.current.getField('contact.email').isDirty()).toBe(false);

    act(() => hook.result.current.getField('email').resetTouched());
    expect(hook.result.current.getField('email').isTouched()).toBe(false);
    expect(hook.result.current.isTouched('email')).toBe(false);
  });

  it('resets value, error and touched state of the path only', () => {
    const hook = renderHook(() => useForm({ mode, initialValues }));

    act(() => hook.result.current.getField('email').getInputProps().onFocus?.());
    act(() => hook.result.current.getField('email').setValue('next@mantine.dev'));
    act(() => hook.result.current.getField('contact.email').setValue('other@mantine.dev'));
    act(() => hook.result.current.setErrors({ email: 'Invalid', 'contact.email': 'Invalid' }));

    act(() => hook.result.current.getField('email').reset());

    expect(hook.result.current.getValues()).toEqual({
      email: 'initial@mantine.dev',
      contact: { email: 'other@mantine.dev' },
    });
    expect(hook.result.current.errors).toEqual({ 'contact.email': 'Invalid' });
    expect(hook.result.current.isTouched('email')).toBe(false);
    expect(hook.result.current.isDirty('email')).toBe(false);
  });

  it('resets touched state of nested paths', () => {
    const hook = renderHook(() =>
      useForm({ mode, initialValues, initialTouched: { 'contact.email': true, email: true } })
    );

    expect(hook.result.current.getField('contact').isTouched()).toBe(true);
    act(() => hook.result.current.getField('contact').resetTouched());

    expect(hook.result.current.getField('contact').isTouched()).toBe(false);
    expect(hook.result.current.getTouched()).toEqual({ email: true });
  });

  it('passes the current form to enhanceGetInputProps', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues,
        enhanceGetInputProps: ({ form }) => ({ disabled: form.submitting }),
      })
    );

    expect(hook.result.current.getField('email').getInputProps()).toHaveProperty('disabled', false);
    act(() => hook.result.current.setSubmitting(true));
    expect(hook.result.current.getField('email').getInputProps()).toHaveProperty('disabled', true);
  });

  it('returns the same handle for a path until form data changes', () => {
    const hook = renderHook(() => useForm({ mode, initialValues }));
    const before = hook.result.current.getField('email');

    expect(hook.result.current.getField('email')).toBe(before);
    act(() => hook.rerender());
    expect(hook.result.current.getField('email')).toBe(before);

    act(() => hook.result.current.setFieldError('email', 'Invalid'));
    expect(hook.result.current.getField('email')).not.toBe(before);
    expect(hook.result.current.getField('email').error).toBe('Invalid');
  });

  it('binds the same field component to form paths and to useField', async () => {
    function Forms() {
      const form = useForm({ mode, initialValues });
      const standalone = useField({ initialValue: '' });

      return (
        <>
          <EmailField field={form.getField('contact.email')} />
          <EmailField field={standalone} />
          <output data-testid="form">{form.getField('contact.email').getValue()}</output>
          <output data-testid="standalone">{standalone.getValue()}</output>
          <button type="button" onClick={() => form.getField('contact.email').reset()}>
            reset
          </button>
        </>
      );
    }

    render(<Forms />);
    const [formInput, standaloneInput] = screen.getAllByRole('textbox');

    await userEvent.type(formInput, 'a@b.c');
    await userEvent.type(standaloneInput, 'x@y.z');
    expect(formInput).toHaveValue('a@b.c');
    expect(standaloneInput).toHaveValue('x@y.z');

    await userEvent.click(screen.getByRole('button', { name: 'reset' }));
    expect(formInput).toHaveValue('');
    expect(standaloneInput).toHaveValue('x@y.z');
  });
}

describe('@mantine/form/getField', () => {
  describe('controlled', () => {
    tests('controlled');
  });

  describe('uncontrolled', () => {
    tests('uncontrolled');
  });
});
