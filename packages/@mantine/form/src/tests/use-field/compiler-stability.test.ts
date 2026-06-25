import { act, renderHook } from '@testing-library/react';
import { useField } from '../../use-field';

describe('@mantine/form/use-field compiler stability', () => {
  it('changes getter identity after a value change', () => {
    const hook = renderHook(() => useField({ initialValue: 'test' }));

    const before = {
      getValue: hook.result.current.getValue,
      isDirty: hook.result.current.isDirty,
    };

    act(() => hook.result.current.getInputProps().onChange('new value'));

    expect(hook.result.current.getValue).not.toBe(before.getValue);
    expect(hook.result.current.isDirty).not.toBe(before.isDirty);
  });

  it('changes isTouched identity after the field is touched', () => {
    const hook = renderHook(() => useField({ initialValue: 'test' }));
    const before = hook.result.current.isTouched;
    act(() => hook.result.current.getInputProps().onFocus?.());
    expect(hook.result.current.isTouched).not.toBe(before);
  });

  it('keeps a stable getter identity across a re-render with no data change', () => {
    const hook = renderHook(() => useField({ initialValue: 'test' }));

    const before = {
      getValue: hook.result.current.getValue,
      isTouched: hook.result.current.isTouched,
      isDirty: hook.result.current.isDirty,
    };

    act(() => hook.rerender());

    expect(hook.result.current.getValue).toBe(before.getValue);
    expect(hook.result.current.isTouched).toBe(before.isTouched);
    expect(hook.result.current.isDirty).toBe(before.isDirty);
  });

  it('reads current data from getters retained across renders', () => {
    const hook = renderHook(() => useField({ initialValue: 'test' }));

    const retainedGetValue = hook.result.current.getValue;
    const retainedIsDirty = hook.result.current.isDirty;
    const retainedIsTouched = hook.result.current.isTouched;

    act(() => hook.result.current.getInputProps().onFocus?.());
    act(() => hook.result.current.getInputProps().onChange('new value'));

    expect(retainedGetValue()).toBe('new value');
    expect(retainedIsDirty()).toBe(true);
    expect(retainedIsTouched()).toBe(true);
  });
});
