import { act, renderHook } from '@testing-library/react';
import { useField } from '../../use-field';

describe('@mantine/form/use-field/get-input-props', () => {
  it('returns correct props from getInputProps (controlled)', () => {
    const hook = renderHook(() => useField({ initialValue: 'test', initialError: 'test-error' }));
    expect(hook.result.current.getInputProps()).toStrictEqual({
      value: 'test',
      error: 'test-error',
      onChange: expect.any(Function),
      onBlur: expect.any(Function),
      onFocus: expect.any(Function),
    });
  });

  it('returns correct props from getInputProps (uncontrolled)', () => {
    const hook = renderHook(() =>
      useField({ mode: 'uncontrolled', initialValue: 'test', initialError: 'test-error' })
    );
    expect(hook.result.current.getInputProps()).toStrictEqual({
      defaultValue: 'test',
      error: 'test-error',
      onChange: expect.any(Function),
      onBlur: expect.any(Function),
      onFocus: expect.any(Function),
    });
  });

  it('updates value with onChange handler returned from getInputProps', () => {
    const hook = renderHook(() => useField({ initialValue: 'test' }));
    expect(hook.result.current.getValue()).toBe('test');
    act(() => hook.result.current.getInputProps().onChange('new value'));
    expect(hook.result.current.getValue()).toBe('new value');
  });

  it('updates touched with onFocus handler returned from getInputProps', () => {
    const hook = renderHook(() => useField({ initialValue: 'test' }));
    expect(hook.result.current.isTouched()).toBe(false);
    act(() => hook.result.current.getInputProps().onFocus?.());
    expect(hook.result.current.isTouched()).toBe(true);
  });

  it('returns correct props for type="checkbox" (controlled)', () => {
    const hook = renderHook(() =>
      useField({ initialValue: false, type: 'checkbox', initialError: 'test-error' })
    );
    expect(hook.result.current.getInputProps()).toStrictEqual({
      checked: false,
      error: 'test-error',
      onChange: expect.any(Function),
      onBlur: expect.any(Function),
      onFocus: expect.any(Function),
    });
  });

  it('returns correct props for type="checkbox" (uncontrolled)', () => {
    const hook = renderHook(() =>
      useField({
        mode: 'uncontrolled',
        initialValue: false,
        type: 'checkbox',
        initialError: 'test-error',
      })
    );
    expect(hook.result.current.getInputProps()).toStrictEqual({
      defaultChecked: false,
      error: 'test-error',
      onChange: expect.any(Function),
      onBlur: expect.any(Function),
      onFocus: expect.any(Function),
    });
  });
});
