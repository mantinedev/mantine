import { act, renderHook } from '@testing-library/react';
import { useDebouncedValue } from './use-debounced-value';

describe('useDebouncedValue', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('returns initial value immediately', () => {
    const { result } = renderHook(() => useDebouncedValue('initial', 200));
    expect(result.current[0]).toBe('initial');
  });

  test('debounces value updates by wait MS', () => {
    const { result, rerender } = renderHook(({ value }) => useDebouncedValue(value, 200), {
      initialProps: { value: 'a' },
    });
    expect(result.current[0]).toBe('a');

    rerender({ value: 'b' });
    expect(result.current[0]).toBe('a');

    act(() => jest.advanceTimersByTime(200));
    expect(result.current[0]).toBe('b');
  });

  test('only applies the last value when updated rapidly', () => {
    const seen: string[] = [];
    const { result, rerender } = renderHook(
      ({ value }) => {
        const debounced = useDebouncedValue(value, 200);
        seen.push(debounced[0]);
        return debounced;
      },
      {
        initialProps: { value: 'a' },
      }
    );

    rerender({ value: 'b' });
    rerender({ value: 'c' });
    rerender({ value: 'd' });

    expect(seen).toContain('a');
    expect(seen).not.toContain('b');
    expect(seen).not.toContain('c');
    expect(seen).not.toContain('d');

    act(() => jest.advanceTimersByTime(200));
    expect(result.current[0]).toBe('d');

    // first and latest values ('a' and 'd') should have been emitted, while
    // intermediate values ('b' and 'c') should have been skipped by debouncing
    expect(seen).toContain('a');
    expect(seen).not.toContain('b');
    expect(seen).not.toContain('c');
    expect(seen).toContain('d');
  });

  test('cancel prevents the pending update', () => {
    const { result, rerender } = renderHook(({ value }) => useDebouncedValue(value, 200), {
      initialProps: { value: 'a' },
    });

    rerender({ value: 'b' });
    act(() => {
      result.current[1](); // cancel
    });

    act(() => jest.advanceTimersByTime(200));
    expect(result.current[0]).toBe('a');
  });

  describe('with the `leading` option', () => {
    test('the first rerender updates the value immediately', () => {
      const { result, rerender } = renderHook(
        ({ value }) => useDebouncedValue(value, 200, { leading: true }),
        {
          initialProps: { value: 'a' },
        }
      );

      rerender({ value: 'b' });
      expect(result.current[0]).toBe('b');
    });

    test('subsequent rapid updates are suppressed until the cooldown has elapsed', () => {
      const { result, rerender } = renderHook(
        ({ value }) => useDebouncedValue(value, 200, { leading: true }),
        {
          initialProps: { value: 'a' },
        }
      );

      rerender({ value: 'b' });
      expect(result.current[0]).toBe('b'); // leading edge fires immediately

      rerender({ value: 'c' });
      expect(result.current[0]).toBe('b'); // still in cooldown — 'c' is queued

      act(() => jest.advanceTimersByTime(200));
      expect(result.current[0]).toBe('c'); // queued value applied after cooldown
    });

    test('the cooldown is reset after `wait` milliseconds', () => {
      const { result, rerender } = renderHook(
        ({ value }) => useDebouncedValue(value, 200, { leading: true }),
        {
          initialProps: { value: 'a' },
        }
      );

      // First burst — leading edge fires 'b' immediately
      rerender({ value: 'b' });
      expect(result.current[0]).toBe('b');

      // Let the full cooldown elapse with no further updates
      act(() => jest.advanceTimersByTime(200));
      expect(result.current[0]).toBe('b');

      // Second burst — should also fire on the leading edge, immediately
      rerender({ value: 'c' });
      expect(result.current[0]).toBe('c');
    });
  });
});
