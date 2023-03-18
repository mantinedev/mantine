import React from 'react';
import { renderHook } from '@testing-library/react';
import { DatesProvider } from './DatesProvider';
import { useDatesContext } from './use-dates-context';

describe('@mantine/dates/use-dates-context', () => {
  it('returns default values from context if hook is called without DatesProvider', () => {
    const hook = renderHook(() => useDatesContext({}));
    expect(hook.result.current.locale).toBe('en');
    expect(hook.result.current.timezone).toBe(null);
    expect(hook.result.current.firstDayOfWeek).toBe(1);
    expect(hook.result.current.weekendDays).toStrictEqual([0, 6]);
    expect(hook.result.current.labelSeparator).toBe('-');

    expect(hook.result.current.locale).toBe('en');
  });

  it('returns correct values from DatesProvider context', () => {
    const hook = renderHook(() => useDatesContext({}), {
      wrapper: ({ children }) => (
        <DatesProvider
          settings={{
            locale: 'ru',
            timezone: 'Etc/UTC',
            firstDayOfWeek: 0,
            weekendDays: [1, 2],
            labelSeparator: ',',
          }}
        >
          {children}
        </DatesProvider>
      ),
    });

    expect(hook.result.current.locale).toBe('ru');
    expect(hook.result.current.timezone).toBe('Etc/UTC');
    expect(hook.result.current.firstDayOfWeek).toBe(0);
    expect(hook.result.current.weekendDays).toStrictEqual([1, 2]);
    expect(hook.result.current.labelSeparator).toBe(',');
  });

  it('returns local values if hook is called without DatesProvider', () => {
    const hook = renderHook(() =>
      useDatesContext({
        locale: 'ru',
        timezone: 'Etc/UTC',
        firstDayOfWeek: 0,
        weekendDays: [1, 2],
        labelSeparator: ',',
      })
    );

    expect(hook.result.current.locale).toBe('ru');
    expect(hook.result.current.timezone).toBe('Etc/UTC');
    expect(hook.result.current.firstDayOfWeek).toBe(0);
    expect(hook.result.current.weekendDays).toStrictEqual([1, 2]);
    expect(hook.result.current.labelSeparator).toBe(',');
  });

  it('returns local values if hooks is valled within DatesProvider', () => {
    const hook = renderHook(() => useDatesContext({ locale: 'en', timezone: null }), {
      wrapper: ({ children }) => (
        <DatesProvider
          settings={{
            locale: 'ru',
            timezone: 'Etc/UTC',
            firstDayOfWeek: 0,
            weekendDays: [1, 2],
            labelSeparator: ',',
          }}
        >
          {children}
        </DatesProvider>
      ),
    });

    expect(hook.result.current.locale).toBe('en');
    expect(hook.result.current.timezone).toBe(null);
    expect(hook.result.current.firstDayOfWeek).toBe(0);
    expect(hook.result.current.weekendDays).toStrictEqual([1, 2]);
    expect(hook.result.current.labelSeparator).toBe(',');
  });
});
