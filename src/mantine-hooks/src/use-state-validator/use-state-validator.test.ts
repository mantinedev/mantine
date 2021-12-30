/* eslint-disable no-console */
import { act, renderHook } from '@testing-library/react-hooks';
import { useStateValidator } from './use-state-validator';

describe('@mantine/hooks/use-state-validator', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns correct initial state when valid', () => {
    const hook = renderHook(() => useStateValidator('init', (val) => typeof val === 'string'));
    expect(hook.result.current[0]).toBe('init');
    expect(hook.result.current[2]).toBe(true);
  });

  it('returns correct initial state when invalid', () => {
    const hook = renderHook(() => useStateValidator('init', (val) => typeof val === 'number'));
    expect(hook.result.current[0]).toBe(undefined);
    expect(hook.result.current[2]).toBe(false);
  });

  it('returns correct state on valid onChange', () => {
    const hook = renderHook(() => useStateValidator('init', (val) => typeof val === 'string'));
    expect(hook.result.current[0]).toBe('init');
    expect(hook.result.current[2]).toBe(true);

    act(() => hook.result.current[1]('nextValue'));

    expect(hook.result.current[0]).toBe('nextValue');
    expect(hook.result.current[2]).toBe(true);
  });

  it('returns correct state on invalid onChange', () => {
    const hook = renderHook(() => useStateValidator('init', (val) => typeof val === 'string'));
    expect(hook.result.current[0]).toBe('init');
    expect(hook.result.current[2]).toBe(true);

    act(() => hook.result.current[1](undefined));

    expect(hook.result.current[0]).toBe('init');
    expect(hook.result.current[2]).toBe(false);
  });
});
