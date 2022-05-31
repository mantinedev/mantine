import { renderHook, act } from '@testing-library/react';
import { useToggle } from './use-toggle';

describe('@mantine/hooks/use-toggle', () => {
  it('returns correct initial state', () => {
    const hook = renderHook(() => useToggle<'dark' | 'light'>(['dark', 'light']));
    expect(hook.result.current[0]).toBe('dark');
  });

  it('correctly toggles value', () => {
    const hook = renderHook(() => useToggle<'dark' | 'light'>(['dark', 'light']));

    act(() => hook.result.current[1]());
    expect(hook.result.current[0]).toBe('light');

    act(() => hook.result.current[1]());
    expect(hook.result.current[0]).toBe('dark');
  });

  it('allows to set value', () => {
    const hook = renderHook(() => useToggle<'dark' | 'light'>(['dark', 'light']));

    act(() => hook.result.current[1]('dark'));
    expect(hook.result.current[0]).toBe('dark');

    act(() => hook.result.current[1]('dark'));
    expect(hook.result.current[0]).toBe('dark');
  });

  it('allows to set value with callback function', () => {
    const hook = renderHook(() => useToggle<'dark' | 'light'>(['dark', 'light']));
    act(() => hook.result.current[1]((v) => v));
    expect(hook.result.current[0]).toBe('dark');
  });
});
