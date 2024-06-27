import { act, renderHook } from '@testing-library/react';
import { useField } from '../../use-field';

describe('@mantine/form/use-field/touched', () => {
  it('sets correct initial touched state', () => {
    const hook = renderHook(() => useField({ initialValue: 'test', initialTouched: true }));
    expect(hook.result.current.isTouched()).toBe(true);
  });

  it('updates touched state when the input is focused', () => {
    const hook = renderHook(() => useField({ initialValue: 'test' }));
    expect(hook.result.current.isTouched()).toBe(false);
    act(() => hook.result.current.getInputProps().onFocus?.());
    expect(hook.result.current.isTouched()).toBe(true);
  });

  it('resets touched state with resetTouched handler', () => {
    const hook = renderHook(() => useField({ initialValue: 'test', initialTouched: true }));
    expect(hook.result.current.isTouched()).toBe(true);
    act(() => hook.result.current.resetTouched());
    expect(hook.result.current.isTouched()).toBe(false);
  });

  it('resets touched state with reset handler', () => {
    const hook = renderHook(() => useField({ initialValue: 'test', initialTouched: true }));
    expect(hook.result.current.isTouched()).toBe(true);
    act(() => hook.result.current.reset());
    expect(hook.result.current.isTouched()).toBe(false);
  });
});
