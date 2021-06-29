import { renderHook, act } from '@testing-library/react-hooks';
import { useToggle, useBooleanToggle } from './use-toggle';

describe('@mantine/hooks/use-boolean-toggle', () => {
  it('correctly toggles boolean value', () => {
    const hook = renderHook(() => useBooleanToggle(false));
    expect(hook.result.current[0]).toBe(false);

    act(() => hook.result.current[1]());
    expect(hook.result.current[0]).toBe(true);

    act(() => hook.result.current[1]());
    expect(hook.result.current[0]).toBe(false);

    act(() => hook.result.current[1](false));
    expect(hook.result.current[0]).toBe(false);
  });
});

describe('@mantine/hooks/use-toggle', () => {
  it('returns correct initial state', () => {
    const hook = renderHook(() => useToggle<'dark' | 'light'>('dark', ['dark', 'light']));
    expect(hook.result.current[0]).toBe('dark');
  });

  it('correctly toggles value', () => {
    const hook = renderHook(() => useToggle<'dark' | 'light'>('dark', ['dark', 'light']));

    act(() => hook.result.current[1]());
    expect(hook.result.current[0]).toBe('light');

    act(() => hook.result.current[1]());
    expect(hook.result.current[0]).toBe('dark');
  });

  it('allows to set value', () => {
    const hook = renderHook(() => useToggle<'dark' | 'light'>('dark', ['dark', 'light']));

    act(() => hook.result.current[1]('dark'));
    expect(hook.result.current[0]).toBe('dark');

    act(() => hook.result.current[1]('dark'));
    expect(hook.result.current[0]).toBe('dark');
  });

  it('allows to set value with callback function', () => {
    const hook = renderHook(() => useToggle<'dark' | 'light'>('dark', ['dark', 'light']));
    act(() => hook.result.current[1]((v) => v));
    expect(hook.result.current[0]).toBe('dark');
  });
});
