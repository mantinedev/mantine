import { renderHook } from '@testing-library/react';
import { DatesProvider } from './DatesProvider';
import { useDatesContext } from './use-dates-context';

describe('@mantine/dates/use-dates-context', () => {
  it('returns default values from context if hook is called without DatesProvider', () => {
    const hook = renderHook(() => useDatesContext());
    expect(hook.result.current.locale).toBe('en');
    expect(hook.result.current.firstDayOfWeek).toBe(1);
    expect(hook.result.current.weekendDays).toStrictEqual([0, 6]);

    expect(hook.result.current.getLocale()).toBe('en');
    expect(hook.result.current.getLocale('ru')).toBe('ru');

    expect(hook.result.current.getTimezone()).toBe(undefined);

    expect(hook.result.current.getFirstDayOfWeek()).toBe(1);
    expect(hook.result.current.getFirstDayOfWeek(0)).toBe(0);
    expect(hook.result.current.getFirstDayOfWeek(6)).toBe(6);

    expect(hook.result.current.getWeekendDays()).toStrictEqual([0, 6]);
    expect(hook.result.current.getWeekendDays([1, 5])).toStrictEqual([1, 5]);
  });

  it('returns correct values from DatesProvider context', () => {
    const hook = renderHook(() => useDatesContext(), {
      wrapper: ({ children }) => (
        <DatesProvider
          settings={{ locale: 'ru', firstDayOfWeek: 0, weekendDays: [1, 2], timezone: 'UTC' }}
        >
          {children}
        </DatesProvider>
      ),
    });

    expect(hook.result.current.locale).toBe('ru');
    expect(hook.result.current.firstDayOfWeek).toBe(0);
    expect(hook.result.current.weekendDays).toStrictEqual([1, 2]);

    expect(hook.result.current.getLocale()).toBe('ru');
    expect(hook.result.current.getLocale('en')).toBe('en');

    expect(hook.result.current.getTimezone()).toBe('UTC');

    expect(hook.result.current.getFirstDayOfWeek()).toBe(0);
    expect(hook.result.current.getFirstDayOfWeek(1)).toBe(1);

    expect(hook.result.current.getWeekendDays()).toStrictEqual([1, 2]);
    expect(hook.result.current.getWeekendDays([1, 5])).toStrictEqual([1, 5]);
  });
});
