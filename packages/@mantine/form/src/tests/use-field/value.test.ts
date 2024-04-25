import { act, renderHook } from '@testing-library/react';
import { useField } from '../../use-field';

describe('@mantine/form/use-field/value', () => {
  it('assigns correct initial value', () => {
    const hook = renderHook(() => useField({ initialValue: 'test' }));
    expect(hook.result.current.getValue()).toBe('test');
  });

  it('changes value with setValue handler', async () => {
    const hook = renderHook(() => useField({ initialValue: 'test' }));
    expect(hook.result.current.getValue()).toBe('test');
    await act(() => hook.result.current.setValue('new value'));
    expect(hook.result.current.getValue()).toBe('new value');
  });

  it('resets value to initial value with reset handler', async () => {
    const hook = renderHook(() => useField({ initialValue: 'test' }));
    expect(hook.result.current.getValue()).toBe('test');
    await act(() => hook.result.current.setValue('new value'));
    expect(hook.result.current.getValue()).toBe('new value');
    await act(() => hook.result.current.reset());
    expect(hook.result.current.getValue()).toBe('test');
  });

  it('calls onValueChange handler when value changes', async () => {
    const onValueChange = jest.fn();
    const hook = renderHook(() => useField({ initialValue: 'test', onValueChange }));
    await act(() => hook.result.current.setValue('new value'));
    expect(onValueChange).toHaveBeenLastCalledWith('new value');

    await act(() => hook.result.current.getInputProps().onChange('new value 2'));
    expect(onValueChange).toHaveBeenLastCalledWith('new value 2');
  });
});
