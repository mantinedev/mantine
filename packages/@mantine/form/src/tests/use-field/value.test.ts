import { act, renderHook } from '@testing-library/react';
import { useField } from '../../use-field';

describe('@mantine/form/use-field/value', () => {
  it('assigns correct initial value', () => {
    const hook = renderHook(() => useField({ initialValue: 'test' }));
    expect(hook.result.current.getValue()).toBe('test');
  });

  it('changes value with setValue handler', () => {
    const hook = renderHook(() => useField({ initialValue: 'test' }));
    expect(hook.result.current.getValue()).toBe('test');
    act(() => hook.result.current.setValue('new value'));
    expect(hook.result.current.getValue()).toBe('new value');
  });

  it('resets value to initial value with reset handler', () => {
    const hook = renderHook(() => useField({ initialValue: 'test' }));
    expect(hook.result.current.getValue()).toBe('test');
    act(() => hook.result.current.setValue('new value'));
    expect(hook.result.current.getValue()).toBe('new value');
    act(() => hook.result.current.reset());
    expect(hook.result.current.getValue()).toBe('test');
  });
});
