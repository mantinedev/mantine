import { useCallback, useContext } from 'react';
import { DayOfWeek } from '../../types';
import { DatesProviderContext } from './DatesProvider';

export function useDatesContext() {
  const ctx = useContext(DatesProviderContext);
  const getLocale = useCallback((input?: string) => input || ctx.locale, [ctx.locale]);

  const getTimezone = useCallback(
    (input?: string) => input || ctx.timezone || undefined,
    [ctx.timezone]
  );

  const getFirstDayOfWeek = useCallback(
    (input?: DayOfWeek) => (typeof input === 'number' ? input : ctx.firstDayOfWeek),
    [ctx.firstDayOfWeek]
  );

  const getWeekendDays = useCallback(
    (input?: DayOfWeek[]) => (Array.isArray(input) ? input : ctx.weekendDays),
    [ctx.weekendDays]
  );

  const getLabelSeparator = useCallback(
    (input?: string) => (typeof input === 'string' ? input : ctx.labelSeparator),
    [ctx.labelSeparator]
  );

  return {
    ...ctx,
    getLocale,
    getTimezone,
    getFirstDayOfWeek,
    getWeekendDays,
    getLabelSeparator,
  };
}
