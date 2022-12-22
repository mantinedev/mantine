import 'dayjs/locale/ru';
import { getWeekdayNames } from './get-weekdays-names';

describe('@mantine/dates/get-weekday-names', () => {
  it('returns correct weekday names for given locale', () => {
    expect(getWeekdayNames({ locale: 'en' })).toStrictEqual([
      'Mo',
      'Tu',
      'We',
      'Th',
      'Fr',
      'Sa',
      'Su',
    ]);
    expect(getWeekdayNames({ locale: 'ru' })).toStrictEqual([
      'пн',
      'вт',
      'ср',
      'чт',
      'пт',
      'сб',
      'вс',
    ]);
  });

  it('supports custom format', () => {
    expect(getWeekdayNames({ locale: 'en', format: 'dddd' })).toStrictEqual([
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ]);
  });

  it('supports custom first day of week', () => {
    expect(getWeekdayNames({ locale: 'en', firstDayOfWeek: 0 })).toStrictEqual([
      'Su',
      'Mo',
      'Tu',
      'We',
      'Th',
      'Fr',
      'Sa',
    ]);
    expect(getWeekdayNames({ locale: 'en', firstDayOfWeek: 6 })).toStrictEqual([
      'Sa',
      'Su',
      'Mo',
      'Tu',
      'We',
      'Th',
      'Fr',
    ]);
  });
});
