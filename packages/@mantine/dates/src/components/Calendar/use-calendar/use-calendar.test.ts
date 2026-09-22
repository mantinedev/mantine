import { act, renderHook } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import { CalendarRegisteredSettings, useCalendar } from './use-calendar';

const defaultSettings: CalendarRegisteredSettings = {
  minLevel: undefined,
  maxLevel: undefined,
  columnsToScroll: 1,
  fallbackDate: '2022-04-11',
};

function registerCalendar(
  hook: { result: { current: ReturnType<typeof useCalendar> } },
  settings: Partial<CalendarRegisteredSettings> = {}
) {
  act(() => {
    hook.result.current.registerCalendar({ ...defaultSettings, ...settings });
  });
}

describe('@mantine/dates/Calendar/use-calendar', () => {
  tests.itSupportsControllerMemoization({
    hook: () => useCalendar(),
    actions: [
      'setDate',
      'setLevel',
      'next',
      'previous',
      'nextMonth',
      'previousMonth',
      'nextYear',
      'previousYear',
      'nextDecade',
      'previousDecade',
      'getDisplayedDate',
      'getDisplayedLevel',
      'registerCalendar',
    ],
    setup: (controller) => controller.registerCalendar(defaultSettings),
    changeState: (controller) => controller.nextMonth(),
  });

  it('returns null date and month level by default', () => {
    const hook = renderHook(() => useCalendar());
    expect(hook.result.current.date).toBe(null);
    expect(hook.result.current.level).toBe('month');
    expect(hook.result.current.dateReadOnly).toBe(false);
  });

  it('supports uncontrolled date with defaultDate', () => {
    const hook = renderHook(() => useCalendar({ defaultDate: '2022-04-11' }));
    expect(hook.result.current.date).toBe('2022-04-11');

    act(() => hook.result.current.setDate('2023-01-05'));
    expect(hook.result.current.date).toBe('2023-01-05');
  });

  it('converts Date objects given to defaultDate and setDate', () => {
    const hook = renderHook(() => useCalendar({ defaultDate: new Date(2022, 3, 11) }));
    expect(hook.result.current.date).toBe('2022-04-11');

    act(() => hook.result.current.setDate(new Date(2023, 0, 5)));
    expect(hook.result.current.date).toBe('2023-01-05');
  });

  it('supports controlled date and calls onDateChange without changing the value', () => {
    const onDateChange = jest.fn();
    const hook = renderHook(() => useCalendar({ date: '2022-04-11', onDateChange }));

    act(() => hook.result.current.setDate('2023-01-05'));
    expect(onDateChange).toHaveBeenLastCalledWith('2023-01-05');
    expect(hook.result.current.date).toBe('2022-04-11');
  });

  it('sets dateReadOnly when date is controlled without onDateChange', () => {
    expect(renderHook(() => useCalendar({ date: '2022-04-11' })).result.current.dateReadOnly).toBe(
      true
    );

    expect(
      renderHook(() => useCalendar({ date: '2022-04-11', onDateChange: () => {} })).result.current
        .dateReadOnly
    ).toBe(false);

    expect(
      renderHook(() => useCalendar({ defaultDate: '2022-04-11' })).result.current.dateReadOnly
    ).toBe(false);
  });

  it('supports uncontrolled level with defaultLevel', () => {
    const hook = renderHook(() => useCalendar({ defaultLevel: 'year' }));
    expect(hook.result.current.level).toBe('year');

    act(() => hook.result.current.setLevel('decade'));
    expect(hook.result.current.level).toBe('decade');
  });

  it('supports controlled level and calls onLevelChange without changing the value', () => {
    const onLevelChange = jest.fn();
    const hook = renderHook(() => useCalendar({ level: 'month', onLevelChange }));

    act(() => hook.result.current.setLevel('year'));
    expect(onLevelChange).toHaveBeenLastCalledWith('year');
    expect(hook.result.current.level).toBe('month');
  });

  it('clamps setLevel to minLevel and maxLevel registered by the component', () => {
    const hook = renderHook(() => useCalendar());
    registerCalendar(hook, { minLevel: 'year', maxLevel: 'year' });

    act(() => hook.result.current.setLevel('month'));
    expect(hook.result.current.level).toBe('year');

    act(() => hook.result.current.setLevel('decade'));
    expect(hook.result.current.level).toBe('year');
  });

  it('does not clamp setLevel before a component is registered', () => {
    const hook = renderHook(() => useCalendar());

    act(() => hook.result.current.setLevel('decade'));
    expect(hook.result.current.level).toBe('decade');
  });

  it('getDisplayedDate returns the date, then the registered fallback date', () => {
    const hook = renderHook(() => useCalendar());
    expect(hook.result.current.getDisplayedDate()).toBe(null);

    registerCalendar(hook);
    expect(hook.result.current.getDisplayedDate()).toBe('2022-04-11');

    act(() => hook.result.current.setDate('2023-01-05'));
    expect(hook.result.current.getDisplayedDate()).toBe('2023-01-05');
  });

  it('does not change the date with stepping actions before a component is registered', () => {
    const hook = renderHook(() => useCalendar());

    act(() => hook.result.current.nextMonth());
    expect(hook.result.current.date).toBe(null);
  });

  it('steps the date by month, year and decade', () => {
    const hook = renderHook(() => useCalendar({ defaultDate: '2022-04-11' }));
    registerCalendar(hook);

    act(() => hook.result.current.nextMonth());
    expect(hook.result.current.date).toBe('2022-05-11');

    act(() => hook.result.current.previousMonth());
    expect(hook.result.current.date).toBe('2022-04-11');

    act(() => hook.result.current.nextYear());
    expect(hook.result.current.date).toBe('2023-04-11');

    act(() => hook.result.current.previousYear());
    expect(hook.result.current.date).toBe('2022-04-11');

    act(() => hook.result.current.nextDecade());
    expect(hook.result.current.date).toBe('2032-04-11');

    act(() => hook.result.current.previousDecade());
    expect(hook.result.current.date).toBe('2022-04-11');
  });

  it('steps the date by the registered columnsToScroll', () => {
    const hook = renderHook(() => useCalendar({ defaultDate: '2022-04-11' }));
    registerCalendar(hook, { columnsToScroll: 3 });

    act(() => hook.result.current.nextMonth());
    expect(hook.result.current.date).toBe('2022-07-11');

    act(() => hook.result.current.nextDecade());
    expect(hook.result.current.date).toBe('2052-07-11');
  });

  it('next and previous step by the current level', () => {
    const hook = renderHook(() => useCalendar({ defaultDate: '2022-04-11' }));
    registerCalendar(hook);

    act(() => hook.result.current.next());
    expect(hook.result.current.date).toBe('2022-05-11');

    act(() => hook.result.current.setLevel('year'));
    act(() => hook.result.current.next());
    expect(hook.result.current.date).toBe('2023-05-11');

    act(() => hook.result.current.setLevel('decade'));
    act(() => hook.result.current.previous());
    expect(hook.result.current.date).toBe('2013-05-11');
  });

  it('next and previous step by the level the component displays, not the raw level', () => {
    const hook = renderHook(() =>
      useCalendar({ defaultDate: '2022-04-11', defaultLevel: 'decade' })
    );
    registerCalendar(hook, { maxLevel: 'year' });

    expect(hook.result.current.level).toBe('decade');
    expect(hook.result.current.getDisplayedLevel()).toBe('year');

    act(() => hook.result.current.next());
    expect(hook.result.current.date).toBe('2023-04-11');
  });

  it('clears the registered settings only when the current registration is disposed', () => {
    const hook = renderHook(() => useCalendar());
    let firstCleanup: () => void = () => {};

    act(() => {
      firstCleanup = hook.result.current.registerCalendar({
        ...defaultSettings,
        fallbackDate: '2021-01-01',
      });
    });

    registerCalendar(hook, { fallbackDate: '2022-04-11' });
    act(() => firstCleanup());

    expect(hook.result.current.getDisplayedDate()).toBe('2022-04-11');
  });
});
