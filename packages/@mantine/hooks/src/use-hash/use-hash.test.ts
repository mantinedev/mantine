import { act, renderHook } from '@testing-library/react';
import { useHash } from './use-hash';

beforeEach(() => {
  window.location.hash = '';
});

describe('@mantine/hooks/use-hash', () => {
  it('reads window.location.hash in effect when getInitialValueInEffect is true', () => {
    window.location.hash = '#initial';
    const values: string[] = [];
    const { result } = renderHook(() => {
      const hook = useHash();
      values.push(hook[0]);
      return hook;
    });
    expect(values[0]).toBe('');
    expect(result.current[0]).toBe('#initial');
  });

  it('reads window.location.hash synchronously when getInitialValueInEffect is false', () => {
    window.location.hash = '#hello';
    const { result } = renderHook(() => useHash({ getInitialValueInEffect: false }));
    expect(result.current[0]).toBe('#hello');
  });

  it('setter updates state and writes to window.location.hash', () => {
    const { result } = renderHook(() => useHash({ getInitialValueInEffect: false }));
    act(() => {
      result.current[1]('world');
    });
    expect(result.current[0]).toBe('#world');
    expect(window.location.hash).toBe('#world');
  });

  it('setter does not double-prepend # when already present', () => {
    const { result } = renderHook(() => useHash({ getInitialValueInEffect: false }));
    act(() => {
      result.current[1]('#section');
    });
    expect(result.current[0]).toBe('#section');
  });

  it('reacts to external hashchange events', () => {
    const { result } = renderHook(() => useHash({ getInitialValueInEffect: false }));
    act(() => {
      window.location.hash = '#external';
      window.dispatchEvent(new Event('hashchange'));
    });
    expect(result.current[0]).toBe('#external');
  });
});
