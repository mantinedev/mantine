import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('accepts initial touched state', () => {
    const hook = renderHook(() => useForm({ mode, initialTouched: { a: true, b: false } }));
    expect(hook.result.current.isTouched('a')).toBe(true);
    expect(hook.result.current.isTouched('b')).toBe(false);
    expect(hook.result.current.isTouched()).toBe(true);
  });

  it('sets field as touched if value changes', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1 } }));
    expect(hook.result.current.isTouched('a')).toBe(false);
    expect(hook.result.current.isTouched()).toBe(false);

    act(() => hook.result.current.setFieldValue('a', 5));
    expect(hook.result.current.isTouched('a')).toBe(true);
    expect(hook.result.current.isTouched()).toBe(true);
  });

  it('allows to set touched state with setTouched handler', () => {
    const hook = renderHook(() => useForm({ mode }));
    expect(hook.result.current.isTouched()).toBe(false);
    expect(hook.result.current.isTouched('a')).toBe(false);

    act(() => hook.result.current.setTouched({ a: true }));
    expect(hook.result.current.isTouched()).toBe(true);
    expect(hook.result.current.isTouched('a')).toBe(true);
  });

  it('resets status with resetTouched handler', () => {
    const hook = renderHook(() => useForm({ mode, initialTouched: { a: true } }));
    expect(hook.result.current.isTouched()).toBe(true);

    act(() => hook.result.current.resetTouched());
    expect(hook.result.current.isTouched()).toBe(false);
  });

  it('sets field as touched with getInputProps onFocus', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1 } }));
    expect(hook.result.current.isTouched()).toBe(false);
    expect(hook.result.current.isTouched('a')).toBe(false);

    act(() => hook.result.current.getInputProps('a').onFocus());
    expect(hook.result.current.isTouched()).toBe(true);
    expect(hook.result.current.isTouched('a')).toBe(true);
  });

  it('does not set field as touched if touchTrigger is focus and field was changed with form.setFieldValue', () => {
    const hook = renderHook(() =>
      useForm({ mode, initialValues: { a: 1 }, touchTrigger: 'focus' })
    );
    expect(hook.result.current.isTouched()).toBe(false);
    expect(hook.result.current.isTouched('a')).toBe(false);

    act(() => hook.result.current.setFieldValue('a', 5));
    expect(hook.result.current.isTouched()).toBe(false);
    expect(hook.result.current.isTouched('a')).toBe(false);

    act(() => hook.result.current.getInputProps('a').onFocus());
    expect(hook.result.current.isTouched()).toBe(true);
  });
}

describe('@mantine/form/touched-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/touched-uncontrolled', () => {
  tests('uncontrolled');
});
