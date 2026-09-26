import { act, renderHook } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import { useInlineDateTimePicker } from './use-inline-date-time-picker';
import { TimeEntryRegisteredSettings } from './use-time-entry';

function createSettings(
  settings: Partial<TimeEntryRegisteredSettings> = {}
): TimeEntryRegisteredSettings {
  return {
    instance: {},
    valueTime: '',
    valueEndTime: '',
    applyTime: jest.fn(),
    applyEndTime: jest.fn(),
    ...settings,
  };
}

describe('@mantine/dates/InlineDateTimePicker/use-inline-date-time-picker', () => {
  tests.itSupportsControllerMemoization({
    hook: () => useInlineDateTimePicker(),
    actions: [
      'getDate',
      'getLevel',
      'setDate',
      'setLevel',
      'next',
      'previous',
      'getDisplayedDate',
      'getDisplayedLevel',
      'registerCalendar',
      'getTime',
      'setTime',
      'getEndTime',
      'setEndTime',
      'focusTime',
      'focusEndTime',
      'getPendingTimeFocus',
      'registerTimePicker',
    ],
    changeState: (controller) => controller.setTime('10:30'),
  });

  it('returns empty times by default and defaultTimeValue when it is set', () => {
    expect(renderHook(() => useInlineDateTimePicker()).result.current.getTime()).toBe('');
    const hook = renderHook(() => useInlineDateTimePicker({ defaultTimeValue: '09:00' }));
    expect(hook.result.current.getTime()).toBe('09:00');
    expect(hook.result.current.getEndTime()).toBe('09:00');
  });

  it('reads the time set earlier in the same handler and calls onTimeChange', () => {
    const onTimeChange = jest.fn();
    const hook = renderHook(() => useInlineDateTimePicker({ onTimeChange }));
    let read = '';

    act(() => {
      hook.result.current.setTime('11:45');
      read = hook.result.current.getTime();
    });

    expect(read).toBe('11:45');
    expect(onTimeChange).toHaveBeenLastCalledWith('11:45');
  });

  it('applies the time to the value of the registered component', () => {
    const hook = renderHook(() => useInlineDateTimePicker());
    const settings = createSettings();
    act(() => {
      hook.result.current.registerTimePicker(settings);
    });

    act(() => hook.result.current.setTime('10:00'));
    act(() => hook.result.current.setEndTime('12:00'));
    expect(settings.applyTime).toHaveBeenLastCalledWith('10:00');
    expect(settings.applyEndTime).toHaveBeenLastCalledWith('12:00');
  });

  it('resets the time to the value time when a new instance registers', () => {
    const hook = renderHook(() => useInlineDateTimePicker());
    act(() => hook.result.current.setTime('08:00'));
    act(() => {
      hook.result.current.registerTimePicker(createSettings({ valueTime: '10:30' }));
    });
    expect(hook.result.current.getTime()).toBe('08:00');

    let cleanup = () => {};
    act(() => {
      cleanup = hook.result.current.registerTimePicker(createSettings({ valueTime: '10:30' }));
    });
    expect(hook.result.current.getTime()).toBe('10:30');

    act(() => cleanup());
    act(() => {
      hook.result.current.registerTimePicker(createSettings({ valueTime: '14:00' }));
    });
    expect(hook.result.current.getTime()).toBe('14:00');
  });

  it('keeps a time set while no component is registered and applies it on the next registration', () => {
    const hook = renderHook(() => useInlineDateTimePicker());
    act(() => hook.result.current.setTime('07:15'));

    const settings = createSettings({ valueTime: '10:30' });
    act(() => {
      hook.result.current.registerTimePicker(settings);
    });

    expect(hook.result.current.getTime()).toBe('07:15');
    expect(settings.applyTime).toHaveBeenCalledWith('07:15');
  });

  it('syncs the time with the value when the registered value time changes', () => {
    const hook = renderHook(() => useInlineDateTimePicker());
    const instance = {};
    act(() => {
      hook.result.current.registerTimePicker(createSettings({ instance, valueTime: '10:30' }));
    });
    act(() => {
      hook.result.current.registerTimePicker(
        createSettings({ instance, valueTime: '16:00', valueEndTime: '18:00' })
      );
    });

    expect(hook.result.current.getTime()).toBe('16:00');
    expect(hook.result.current.getEndTime()).toBe('18:00');
  });

  it('does not reset or sync a controlled time', () => {
    const onTimeChange = jest.fn();
    const hook = renderHook(() => useInlineDateTimePicker({ time: '06:00', onTimeChange }));
    const instance = {};
    act(() => {
      hook.result.current.registerTimePicker(createSettings({ instance, valueTime: '10:30' }));
    });
    act(() => {
      hook.result.current.registerTimePicker(createSettings({ instance, valueTime: '16:00' }));
    });

    expect(hook.result.current.getTime()).toBe('06:00');
    expect(onTimeChange).not.toHaveBeenCalled();
  });

  it('focuses a field when it is attached after focusTime was called', () => {
    const hook = renderHook(() => useInlineDateTimePicker());
    const input = document.createElement('input');
    document.body.appendChild(input);

    act(() => hook.result.current.focusTime('minutes'));
    expect(document.activeElement).not.toBe(input);

    hook.result.current.timeFieldRefs.time.hours(document.createElement('input'));
    hook.result.current.timeFieldRefs.time.minutes(input);
    expect(document.activeElement).toBe(input);

    input.blur();
    hook.result.current.timeFieldRefs.time.minutes(null);
    hook.result.current.timeFieldRefs.time.minutes(input);
    expect(document.activeElement).not.toBe(input);
    input.remove();
  });
});
