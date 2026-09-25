import { act, renderHook } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import { useMaskedDateInput } from './use-masked-date-input';

describe('@mantine/dates/MaskedDateInput/use-masked-date-input', () => {
  tests.itSupportsControllerMemoization({
    hook: () => useMaskedDateInput(),
    actions: [
      'setValue',
      'setDay',
      'setMonth',
      'setYear',
      'setHours',
      'setMinutes',
      'setSeconds',
      'setAmPm',
      'clear',
      'focus',
      'getValue',
      'getDay',
      'getMonth',
      'getYear',
      'getHours',
      'getMinutes',
      'getSeconds',
      'getAmPm',
      'hasValue',
      'refs',
      'onPaste',
    ],
    changeState: (controller) => controller.setValue('2024-03-15'),
  });

  it('returns empty state by default', () => {
    const hook = renderHook(() => useMaskedDateInput());
    expect(hook.result.current.getValue()).toBe(null);
    expect(hook.result.current.getDay()).toBe(null);
    expect(hook.result.current.getMonth()).toBe(null);
    expect(hook.result.current.getYear()).toBe(null);
    expect(hook.result.current.hasValue()).toBe(false);
  });

  it('parses defaultValue into fields, converting hours in 12h format', () => {
    const hook = renderHook(() =>
      useMaskedDateInput({ defaultValue: '2024-03-15 14:35:00', withTime: true, format: '12h' })
    );
    expect(hook.result.current.getDay()).toBe(15);
    expect(hook.result.current.getMonth()).toBe(3);
    expect(hook.result.current.getYear()).toBe(2024);
    expect(hook.result.current.getHours()).toBe(2);
    expect(hook.result.current.getMinutes()).toBe(35);
    expect(hook.result.current.getAmPm()).toBe('PM');
    expect(hook.result.current.getValue()).toBe('2024-03-15 14:35:00');
  });

  it('reads fields and value set earlier in the same handler', () => {
    const hook = renderHook(() => useMaskedDateInput());
    const reads: unknown[] = [];

    act(() => {
      hook.result.current.setDay(15);
      hook.result.current.setMonth(3);
      hook.result.current.setYear(2024);
      reads.push(
        hook.result.current.getDay(),
        hook.result.current.getMonth(),
        hook.result.current.getYear(),
        hook.result.current.getValue(),
        hook.result.current.hasValue()
      );
    });

    expect(reads).toEqual([15, 3, 2024, '2024-03-15', true]);
  });

  it('reads the value set with setValue and cleared with clear in the same handler', () => {
    const hook = renderHook(() => useMaskedDateInput());
    const reads: unknown[] = [];

    act(() => {
      hook.result.current.setValue('2024-03-15');
      reads.push(hook.result.current.getValue());
      hook.result.current.clear();
      reads.push(hook.result.current.getValue(), hook.result.current.hasValue());
    });

    expect(reads).toEqual(['2024-03-15', null, false]);
  });

  it('returns null from getValue for a complete date outside minDate and maxDate', () => {
    const hook = renderHook(() => useMaskedDateInput({ minDate: '2024-01-01' }));
    let read: unknown;

    act(() => {
      hook.result.current.setValue('2023-06-15');
      read = hook.result.current.getValue();
    });

    expect(read).toBe(null);
    expect(hook.result.current.getYear()).toBe(2023);
  });

  it('syncs an external value that arrives after an incomplete entry', () => {
    const hook = renderHook(({ value }) => useMaskedDateInput({ value }), {
      initialProps: { value: null as string | null },
    });

    act(() => hook.result.current.setDay(5));
    expect(hook.result.current.day).toBe(5);

    hook.rerender({ value: '2024-03-15' });
    expect(hook.result.current.day).toBe(15);
    expect(hook.result.current.month).toBe(3);
    expect(hook.result.current.year).toBe(2024);
  });

  it('syncs an external value that arrives after clear on an empty value', () => {
    const hook = renderHook(({ value }) => useMaskedDateInput({ value }), {
      initialProps: { value: null as string | null },
    });

    act(() => hook.result.current.clear());

    hook.rerender({ value: '2024-03-15' });
    expect(hook.result.current.day).toBe(15);
    expect(hook.result.current.year).toBe(2024);
  });

  it('keeps the remaining fields when the value option becomes null after one field is cleared', () => {
    const hook = renderHook(({ value }) => useMaskedDateInput({ value }), {
      initialProps: { value: '2024-03-15' as string | null },
    });

    act(() => hook.result.current.setDay(null));
    hook.rerender({ value: null });

    expect(hook.result.current.day).toBe(null);
    expect(hook.result.current.month).toBe(3);
    expect(hook.result.current.year).toBe(2024);
  });
});
