import { act, renderHook } from '@testing-library/react';
import { useHash } from './use-hash';

beforeEach(() => {
  window.location.hash = '';
});

describe('@mantine/hooks/use-hash', () => {
  it('returns empty string initially when hash is not set (getInitialValueInEffect: true)', () => {
    const { result } = renderHook(() => useHash());
    // Before effects settle the value is ''
    expect(typeof result.current[0]).toBe('string');
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

  it('setter prepends # when not already present', () => {
    const { result } = renderHook(() => useHash({ getInitialValueInEffect: false }));
    act(() => {
      result.current[1]('section');
    });
    expect(result.current[0]).toBe('#section');
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
