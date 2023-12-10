import { act, renderHook } from '@testing-library/react';
import { useToggle } from './use-toggle';

describe('@mantine/hooks/use-toggle', () => {
  it('returns correct initial state', () => {
    const hook = renderHook(() => useToggle(['dark', 'light'] as const));
    expect(hook.result.current[0]).toBe('dark');
  });

  it('correctly toggles value', () => {
    const hook = renderHook(() => useToggle(['dark', 'light'] as const));

    act(() => hook.result.current[1]());
    expect(hook.result.current[0]).toBe('light');

    act(() => hook.result.current[1]());
    expect(hook.result.current[0]).toBe('dark');
  });

  it('correctly toggles more than two values', () => {
    const hook = renderHook(() => useToggle(['dark', 'light', 'normal'] as const));

    act(() => hook.result.current[1]());
    expect(hook.result.current[0]).toBe('light');

    act(() => hook.result.current[1]());
    expect(hook.result.current[0]).toBe('normal');

    act(() => hook.result.current[1]());
    expect(hook.result.current[0]).toBe('dark');

    act(() => hook.result.current[1]('normal'));
    expect(hook.result.current[0]).toBe('normal');

    act(() => hook.result.current[1]());
    expect(hook.result.current[0]).toBe('dark');
  });

  it('allows to set value', () => {
    const hook = renderHook(() => useToggle(['dark', 'light'] as const));

    act(() => hook.result.current[1]('dark'));
    expect(hook.result.current[0]).toBe('dark');

    act(() => hook.result.current[1]('dark'));
    expect(hook.result.current[0]).toBe('dark');
  });

  it('allows to set value with callback function', () => {
    const hook = renderHook(() => useToggle(['dark', 'light'] as const));
    act(() => hook.result.current[1]((v) => v));
    expect(hook.result.current[0]).toBe('dark');
  });

  it('allows to use hook without options', () => {
    const hook = renderHook(() => useToggle());
    expect(hook.result.current[0]).toBe(false);
    act(() => hook.result.current[1]());
    expect(hook.result.current[0]).toBe(true);
  });
});
