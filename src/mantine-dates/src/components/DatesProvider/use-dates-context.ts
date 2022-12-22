import { useContext, useCallback } from 'react';
import { DayOfWeek } from '../../types';
import { DatesProviderContext } from './DatesProvider';

export function useDatesContext() {
  const ctx = useContext(DatesProviderContext);
  const getLocale = useCallback((input?: string) => input || ctx.locale, [ctx.locale]);
  const getFirstDayOfWeek = useCallback(
    (input?: DayOfWeek) => (typeof input === 'number' ? input : ctx.firstDayOfWeek),
    [ctx.firstDayOfWeek]
  );

  const getWeekendDays = useCallback(
    (input?: DayOfWeek[]) => (Array.isArray(input) ? input : ctx.weekendDays),
    [ctx.weekendDays]
  );

  return {
    ...ctx,
    getLocale,
    getFirstDayOfWeek,
    getWeekendDays,
  };
}
