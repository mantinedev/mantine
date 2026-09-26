import { renderHook } from '@testing-library/react';
import { useDeepCompareMemo } from './use-deep-compare-memo';

function renderMemo<T>(initial: T) {
  return renderHook(({ value }) => useDeepCompareMemo(value), { initialProps: { value: initial } });
}

describe('@mantine/data-grid/useDeepCompareMemo', () => {
  it('keeps the previous reference for deeply equal plain objects and arrays', () => {
    const first = { sorting: [{ id: 'a', desc: false }], filter: { value: null } };
    const { result, rerender } = renderMemo(first);
    rerender({ value: { sorting: [{ id: 'a', desc: false }], filter: { value: null } } });
    expect(result.current).toBe(first);
  });

  it('returns the new value when a nested plain value changes', () => {
    const { result, rerender } = renderMemo({ sorting: [{ id: 'a', desc: false }] });
    const next = { sorting: [{ id: 'a', desc: true }] };
    rerender({ value: next });
    expect(result.current).toBe(next);
  });

  it('does not treat objects with different keys of the same count as equal', () => {
    const { result, rerender } = renderMemo<Record<string, unknown>>({ a: undefined });
    const next = { b: undefined };
    rerender({ value: next });
    expect(result.current).toBe(next);
  });

  it('compares dates by time', () => {
    const first = { value: new Date(2024, 0, 1) };
    const { result, rerender } = renderMemo(first);
    rerender({ value: { value: new Date(2024, 0, 1) } });
    expect(result.current).toBe(first);

    const next = { value: new Date(2024, 0, 2) };
    rerender({ value: next });
    expect(result.current).toBe(next);
  });

  it('compares maps by reference', () => {
    const map = new Map([['a', 1]]);
    const first = { value: map };
    const { result, rerender } = renderMemo(first);
    rerender({ value: { value: map } });
    expect(result.current).toBe(first);

    const next = { value: new Map([['a', 2]]) };
    rerender({ value: next });
    expect(result.current).toBe(next);
  });

  it('compares sets by reference', () => {
    const first = { value: new Set(['a']) };
    const { result, rerender } = renderMemo(first);
    const next = { value: new Set(['b']) };
    rerender({ value: next });
    expect(result.current).toBe(next);
  });

  it('compares class instances by reference', () => {
    class Range {
      constructor(public start: number) {}
    }
    const first = { value: new Range(1) };
    const { result, rerender } = renderMemo(first);
    const next = { value: new Range(2) };
    rerender({ value: next });
    expect(result.current).toBe(next);
  });
});
