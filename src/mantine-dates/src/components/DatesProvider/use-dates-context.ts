import dayjs, { Dayjs } from 'dayjs';
import { useContext, useCallback } from 'react';
import utcPlugin from 'dayjs/plugin/utc';
import timezonePlugin from 'dayjs/plugin/timezone';
import { DatesProviderContext, DatesProviderSettings, DatesProviderValue } from './DatesProvider';
import { dateStringParser } from '../DateInput/date-string-parser/date-string-parser';

dayjs.extend(utcPlugin);
dayjs.extend(timezonePlugin);

export function useDatesContext(localSettings: DatesProviderSettings) {
  const ctx = useContext(DatesProviderContext);

  // Override any settings from local settings if a defined value is given
  const settings = Object.fromEntries(
    Object.entries(ctx).map(([k, v]) => {
      const override = localSettings[k];
      return [k, override !== undefined ? override : v];
    })
  ) as DatesProviderValue;

  const applyLocale = useCallback(
    (d: Dayjs) => {
      if (settings.locale) {
        return d.locale(settings.locale);
      }
      return d;
    },
    [settings.locale]
  );

  const dateToDayjs = useCallback(
    (date: Date) => {
      let d = dayjs(date);
      if (settings.timezone) {
        d = d.tz(settings.timezone);
      }
      return applyLocale(d);
    },
    [settings.timezone, applyLocale]
  );

  const parseDate = useCallback(
    (rawDate: string, format: string) => {
      const parsedDate = settings.timezone
        ? dayjs.tz(rawDate, format, settings.timezone).toDate()
        : dayjs(rawDate, format, settings.locale).toDate();

      return Number.isNaN(parsedDate.getTime()) ? dateStringParser(rawDate) : parsedDate;
    },
    [settings.timezone, settings.locale]
  );

  const formatDate = useCallback(
    (date: Date, format: string) => (date ? dateToDayjs(date).format(format) : ''),
    [dateToDayjs]
  );

  return {
    ...settings,
    dayjs: dateToDayjs,
    parseDate,
    formatDate,
  };
}
