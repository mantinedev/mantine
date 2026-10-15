import { act, renderHook } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import { useTimePicker } from './use-time-picker';

describe('@mantine/dates/TimePicker/use-time-picker', () => {
  tests.itSupportsControllerMemoization({
    hook: () => useTimePicker(),
    actions: [
      'setValue',
      'setHours',
      'setMinutes',
      'setSeconds',
      'setAmPm',
      'clear',
      'clamp',
      'focus',
      'getValue',
      'getHours',
      'getMinutes',
      'getSeconds',
      'getAmPm',
      'hasValue',
      'refs',
      'onPaste',
      'onHoursBlur',
    ],
    changeState: (controller) => controller.setValue('12:30'),
  });

  it('calls onChange when field setters complete the time in one handler', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useTimePicker({ onChange }));

    act(() => {
      hook.result.current.setHours(9);
      hook.result.current.setMinutes(30);
    });

    expect(onChange).toHaveBeenLastCalledWith('09:30');
    expect(hook.result.current.getValue()).toBe('09:30');
  });

  it('reads fields set earlier in the same handler', () => {
    const hook = renderHook(() => useTimePicker({ withSeconds: true }));
    const reads: unknown[] = [];

    act(() => {
      hook.result.current.setHours(9);
      hook.result.current.setMinutes(30);
      hook.result.current.setSeconds(15);
      reads.push(
        hook.result.current.getHours(),
        hook.result.current.getMinutes(),
        hook.result.current.getSeconds(),
        hook.result.current.getValue(),
        hook.result.current.hasValue()
      );
    });

    expect(reads).toEqual([9, 30, 15, '09:30:15', true]);
  });

  it('returns empty state by default', () => {
    const hook = renderHook(() => useTimePicker());
    expect(hook.result.current.value).toBe('');
    expect(hook.result.current.hours).toBe(null);
    expect(hook.result.current.minutes).toBe(null);
    expect(hook.result.current.seconds).toBe(null);
    expect(hook.result.current.amPm).toBe(null);
    expect(hook.result.current.hasValue()).toBe(false);
  });

  it('parses defaultValue into fields', () => {
    const hook = renderHook(() => useTimePicker({ defaultValue: '14:35:45', withSeconds: true }));
    expect(hook.result.current.hours).toBe(14);
    expect(hook.result.current.minutes).toBe(35);
    expect(hook.result.current.seconds).toBe(45);
    expect(hook.result.current.value).toBe('14:35:45');
  });

  it('returns current state from getters', () => {
    const hook = renderHook(() =>
      useTimePicker({ defaultValue: '14:35:45', withSeconds: true, format: '12h' })
    );
    expect(hook.result.current.getValue()).toBe('14:35:45');
    expect(hook.result.current.getHours()).toBe(2);
    expect(hook.result.current.getMinutes()).toBe(35);
    expect(hook.result.current.getSeconds()).toBe(45);
    expect(hook.result.current.getAmPm()).toBe('pm');
    expect(hook.result.current.hasValue()).toBe(true);

    act(() => hook.result.current.clear());
    expect(hook.result.current.getValue()).toBe('');
    expect(hook.result.current.getHours()).toBe(null);
    expect(hook.result.current.getAmPm()).toBe(null);
    expect(hook.result.current.hasValue()).toBe(false);
  });

  it('parses defaultValue into 12h fields', () => {
    const hook = renderHook(() => useTimePicker({ defaultValue: '14:35', format: '12h' }));
    expect(hook.result.current.hours).toBe(2);
    expect(hook.result.current.minutes).toBe(35);
    expect(hook.result.current.amPm).toBe('pm');
    expect(hook.result.current.value).toBe('14:35');
  });

  it('exposes resolved options', () => {
    const hook = renderHook(() => useTimePicker());
    expect(hook.result.current.type).toBe('time');
    expect(hook.result.current.format).toBe('24h');
    expect(hook.result.current.withSeconds).toBe(false);
    expect(hook.result.current.amPmLabels).toStrictEqual({ am: 'AM', pm: 'PM' });
  });

  it('forces 24h format when type is duration', () => {
    const hook = renderHook(() => useTimePicker({ type: 'duration', format: '12h' }));
    expect(hook.result.current.format).toBe('24h');
  });

  it('calls onChange only when the value is complete', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useTimePicker({ onChange }));

    act(() => hook.result.current.setHours(12));
    expect(onChange).not.toHaveBeenCalled();
    expect(hook.result.current.value).toBe('');
    expect(hook.result.current.hasValue()).toBe(true);
    expect(hook.result.current.hours).toBe(12);

    act(() => hook.result.current.setMinutes(30));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith('12:30');
    expect(hook.result.current.value).toBe('12:30');
  });

  it('sets all fields with setValue', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useTimePicker({ onChange, withSeconds: true }));

    act(() => hook.result.current.setValue('08:15:20'));
    expect(hook.result.current.hours).toBe(8);
    expect(hook.result.current.minutes).toBe(15);
    expect(hook.result.current.seconds).toBe(20);
    expect(hook.result.current.value).toBe('08:15:20');
    expect(onChange).toHaveBeenLastCalledWith('08:15:20');
  });

  it('calls onChange with the value resolved to the current options in setValue', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useTimePicker({ onChange }));

    act(() => hook.result.current.setValue('08:15:20'));
    expect(hook.result.current.value).toBe('08:15');
    expect(onChange).toHaveBeenLastCalledWith('08:15');
  });

  it('ignores setAmPm in 24h format', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useTimePicker({ defaultValue: '14:30', onChange }));

    act(() => hook.result.current.setAmPm('am'));
    expect(hook.result.current.amPm).toBe(null);
    expect(hook.result.current.value).toBe('14:30');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('sets the am/pm field in 12h format', () => {
    const onChange = jest.fn();
    const hook = renderHook(() =>
      useTimePicker({ defaultValue: '14:30', format: '12h', onChange })
    );

    expect(hook.result.current.amPm).toBe('pm');
    act(() => hook.result.current.setAmPm('am'));
    expect(hook.result.current.amPm).toBe('am');
    expect(onChange).toHaveBeenLastCalledWith('02:30');
  });

  it('clears all fields with clear', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useTimePicker({ defaultValue: '10:20', onChange }));

    act(() => hook.result.current.clear());
    expect(hook.result.current.hours).toBe(null);
    expect(hook.result.current.minutes).toBe(null);
    expect(hook.result.current.value).toBe('');
    expect(hook.result.current.hasValue()).toBe(false);
    expect(onChange).toHaveBeenLastCalledWith('');
  });

  it('adjusts hours larger than 12 in 12h format', () => {
    const hook = renderHook(() => useTimePicker({ format: '12h' }));
    act(() => hook.result.current.setHours(14));
    expect(hook.result.current.hours).toBe(2);
  });

  it('clamps the current value to min and max', () => {
    const onChange = jest.fn();
    const hook = renderHook(() =>
      useTimePicker({ defaultValue: '05:00', min: '08:00', max: '18:00', onChange })
    );

    act(() => hook.result.current.clamp());
    expect(hook.result.current.value).toBe('08:00');
    expect(onChange).toHaveBeenLastCalledWith('08:00');
  });

  it('does not clamp when the value is within the range', () => {
    const onChange = jest.fn();
    const hook = renderHook(() =>
      useTimePicker({ defaultValue: '10:00', min: '08:00', max: '18:00', onChange })
    );

    act(() => hook.result.current.clamp());
    expect(hook.result.current.value).toBe('10:00');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('does not clamp when the value is not complete', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useTimePicker({ min: '08:00', max: '18:00', onChange }));

    act(() => hook.result.current.setHours(5));
    onChange.mockClear();
    act(() => hook.result.current.clamp());
    expect(hook.result.current.hours).toBe(5);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('syncs fields with the controlled value option', () => {
    const hook = renderHook(({ value }) => useTimePicker({ value }), {
      initialProps: { value: '10:20' },
    });

    expect(hook.result.current.hours).toBe(10);

    hook.rerender({ value: '16:45' });
    expect(hook.result.current.hours).toBe(16);
    expect(hook.result.current.minutes).toBe(45);
    expect(hook.result.current.value).toBe('16:45');

    hook.rerender({ value: '' });
    expect(hook.result.current.hours).toBe(null);
    expect(hook.result.current.minutes).toBe(null);
    expect(hook.result.current.value).toBe('');
  });

  it('does not revert the fields set from the controller when the value option does not change', () => {
    const hook = renderHook(({ value }) => useTimePicker({ value }), {
      initialProps: { value: '10:20' },
    });

    act(() => hook.result.current.setHours(11));
    expect(hook.result.current.hours).toBe(11);

    hook.rerender({ value: '10:20' });
    expect(hook.result.current.hours).toBe(11);
  });

  it('calls onChange with an empty string only once while the value stays incomplete', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useTimePicker({ defaultValue: '10:20', onChange }));

    act(() => hook.result.current.setHours(null));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith('');

    act(() => hook.result.current.setMinutes(null));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('syncs an external value that arrives after an incomplete entry', () => {
    const hook = renderHook(({ value }) => useTimePicker({ value }), {
      initialProps: { value: '' },
    });

    act(() => hook.result.current.setHours(1));
    expect(hook.result.current.hours).toBe(1);

    hook.rerender({ value: '10:30' });
    expect(hook.result.current.hours).toBe(10);
    expect(hook.result.current.minutes).toBe(30);
    expect(hook.result.current.value).toBe('10:30');
  });

  it('syncs an external value that arrives after clear on an empty value', () => {
    const hook = renderHook(({ value }) => useTimePicker({ value }), {
      initialProps: { value: '' },
    });

    act(() => hook.result.current.clear());

    hook.rerender({ value: '10:30' });
    expect(hook.result.current.hours).toBe(10);
    expect(hook.result.current.minutes).toBe(30);
  });

  it('keeps the remaining fields when the value option becomes empty after one field is cleared', () => {
    const hook = renderHook(({ value }) => useTimePicker({ value }), {
      initialProps: { value: '12:30' },
    });

    act(() => hook.result.current.setMinutes(null));
    hook.rerender({ value: '' });

    expect(hook.result.current.hours).toBe(12);
    expect(hook.result.current.minutes).toBe(null);
    expect(hook.result.current.value).toBe('');
  });

  it('reports an empty value when a field is cleared after an external value was applied', () => {
    const onChange = jest.fn();
    const hook = renderHook(({ value }) => useTimePicker({ value, onChange }), {
      initialProps: { value: '' },
    });

    hook.rerender({ value: '10:30' });
    expect(hook.result.current.hours).toBe(10);

    act(() => hook.result.current.setMinutes(null));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith('');
  });

  function paste(text: string) {
    return {
      preventDefault: () => {},
      clipboardData: { getData: () => text },
    } as any;
  }

  it('updates the incomplete value latch on paste', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useTimePicker({ onChange }));

    act(() => hook.result.current.onPaste(paste('12:30')));
    expect(onChange).toHaveBeenLastCalledWith('12:30');

    act(() => hook.result.current.setMinutes(null));
    expect(onChange).toHaveBeenLastCalledWith('');
    expect(hook.result.current.getValue()).toBe('');
  });

  it('writes the clamped value to the fields on paste', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useTimePicker({ onChange, max: '10:00:00' }));

    act(() => hook.result.current.onPaste(paste('12:30')));
    expect(onChange).toHaveBeenLastCalledWith('10:00');
    expect(hook.result.current.getValue()).toBe('10:00');
    expect(hook.result.current.hours).toBe(10);
    expect(hook.result.current.minutes).toBe(0);

    const minHook = renderHook(() => useTimePicker({ onChange, min: '10:00' }));
    act(() => minHook.result.current.onPaste(paste('08:00')));
    expect(onChange).toHaveBeenLastCalledWith('10:00');
    expect(minHook.result.current.getValue()).toBe('10:00');
  });

  it('clamps the value set earlier in the same handler', () => {
    const hook = renderHook(() => useTimePicker({ defaultValue: '10:00', max: '12:00' }));
    act(() => {
      hook.result.current.setValue('15:00');
      hook.result.current.clamp();
    });
    expect(hook.result.current.getValue()).toBe('12:00');

    const other = renderHook(() => useTimePicker({ defaultValue: '15:00', max: '12:00' }));
    act(() => {
      other.result.current.setValue('11:00');
      other.result.current.clamp();
    });
    expect(other.result.current.getValue()).toBe('11:00');
  });

  it('ignores pasted text that is not a valid time', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useTimePicker({ defaultValue: '10:20', onChange }));

    for (const text of ['ab:cd', '12:3o', '12:30:x', '10:75']) {
      act(() => hook.result.current.onPaste(paste(text)));
    }

    expect(onChange).not.toHaveBeenCalled();
    expect(hook.result.current.getValue()).toBe('10:20');
  });

  it('ignores pasteSplit results with parts that are not integers', () => {
    const onChange = jest.fn();
    const hook = renderHook(() =>
      useTimePicker({
        onChange,
        pasteSplit: () => ({ hours: NaN, minutes: 10, seconds: null, amPm: null }),
      })
    );

    act(() => hook.result.current.onPaste(paste('x')));
    expect(onChange).not.toHaveBeenCalled();
    expect(hook.result.current.hours).toBe(null);
  });

  it('parses pasted am/pm labels in 12h format', () => {
    const onChange = jest.fn();
    const hook = renderHook(() =>
      useTimePicker({ format: '12h', amPmLabels: { am: 'ДП', pm: 'ПП' }, onChange })
    );

    act(() => hook.result.current.onPaste(paste('12:30 ПП')));
    expect(hook.result.current.amPm).toBe('pm');
    expect(onChange).toHaveBeenLastCalledWith('12:30');
  });

  it('does not move focus from the field setters', () => {
    const hook = renderHook(() => useTimePicker({ format: '12h', withSeconds: true }));
    const inputs = ['hours', 'minutes', 'seconds'].map(() => document.createElement('input'));
    const select = document.createElement('select');
    inputs.forEach((input) => document.body.appendChild(input));
    document.body.appendChild(select);
    (hook.result.current.refs.hours as any).current = inputs[0];
    (hook.result.current.refs.minutes as any).current = inputs[1];
    (hook.result.current.refs.seconds as any).current = inputs[2];
    (hook.result.current.refs.amPm as any).current = select;

    act(() => {
      hook.result.current.setHours(1);
      hook.result.current.setMinutes(2);
      hook.result.current.setSeconds(3);
      hook.result.current.setAmPm('pm');
    });

    expect(document.activeElement).toBe(document.body);
    expect(hook.result.current.getValue()).toBe('13:02:03');
  });

  it('replaces a temporary 0 hours value with 12 on hours blur in 12h format', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useTimePicker({ format: '12h', onChange }));

    act(() => hook.result.current.setHours(0));
    act(() => hook.result.current.onHoursBlur());
    expect(hook.result.current.hours).toBe(12);

    const hook24 = renderHook(() => useTimePicker({ format: '24h' }));
    act(() => hook24.result.current.setHours(0));
    act(() => hook24.result.current.onHoursBlur());
    expect(hook24.result.current.hours).toBe(0);
  });

  it('keeps the am/pm field when amPmLabels change', () => {
    const onChange = jest.fn();
    const hook = renderHook(
      ({ amPmLabels }) =>
        useTimePicker({ format: '12h', defaultValue: '15:45', amPmLabels, onChange }),
      { initialProps: { amPmLabels: { am: 'AM', pm: 'PM' } } }
    );

    hook.rerender({ amPmLabels: { am: 'ДП', pm: 'ПП' } });
    expect(hook.result.current.amPm).toBe('pm');
    expect(hook.result.current.value).toBe('15:45');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('converts the fields when format changes', () => {
    const onChange = jest.fn();
    const hook = renderHook(
      ({ format }) => useTimePicker({ format, defaultValue: '00:15', onChange }),
      { initialProps: { format: '24h' as '12h' | '24h' } }
    );

    hook.rerender({ format: '12h' });
    expect(hook.result.current.hours).toBe(12);
    expect(hook.result.current.amPm).toBe('am');
    expect(hook.result.current.value).toBe('00:15');

    hook.rerender({ format: '24h' });
    expect(hook.result.current.hours).toBe(0);
    expect(hook.result.current.amPm).toBe(null);
    expect(hook.result.current.value).toBe('00:15');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('converts partial fields when format changes', () => {
    const hook = renderHook(({ format }) => useTimePicker({ format }), {
      initialProps: { format: '24h' as '12h' | '24h' },
    });

    act(() => hook.result.current.setHours(15));
    hook.rerender({ format: '12h' });
    expect(hook.result.current.hours).toBe(3);
    expect(hook.result.current.amPm).toBe('pm');
    expect(hook.result.current.value).toBe('');
  });

  it('reports the value only when a format change changes it', () => {
    const onChange = jest.fn();
    const hook = renderHook(({ format }) => useTimePicker({ format, onChange }), {
      initialProps: { format: '12h' as '12h' | '24h' },
    });

    act(() => {
      hook.result.current.setHours(5);
      hook.result.current.setMinutes(30);
    });
    expect(hook.result.current.value).toBe('');
    onChange.mockClear();

    hook.rerender({ format: '24h' });
    expect(hook.result.current.value).toBe('05:30');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith('05:30');

    hook.rerender({ format: '12h' });
    expect(hook.result.current.value).toBe('05:30');
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('clamps values with hours greater than 23 unless type is duration', () => {
    const time = renderHook(() => useTimePicker({ defaultValue: '30:15' }));
    expect(time.result.current.value).toBe('23:59');

    const duration = renderHook(() => useTimePicker({ type: 'duration', defaultValue: '30:15' }));
    expect(duration.result.current.value).toBe('30:15');
  });
});
