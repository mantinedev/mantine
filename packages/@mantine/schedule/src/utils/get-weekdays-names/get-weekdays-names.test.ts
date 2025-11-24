import dayjs from 'dayjs';

import 'dayjs/locale/ru';

import { getWeekdaysNames } from './get-weekdays-names';

describe('@mantine/dates/get-weekday-names', () => {
  afterEach(() => {
    dayjs.locale('en');
  });

  it('returns correct weekday names for given locale', () => {
    expect(getWeekdaysNames({ locale: 'en' })).toStrictEqual([
      'Mo',
      'Tu',
      'We',
      'Th',
      'Fr',
      'Sa',
      'Su',
    ]);
    expect(getWeekdaysNames({ locale: 'ru' })).toStrictEqual([
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
    expect(getWeekdaysNames({ locale: 'en', format: 'dddd' })).toStrictEqual([
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ]);
  });

  it('supports custom format function', () => {
    expect(
      getWeekdaysNames({ locale: 'en', format: (date) => dayjs(date).format('dd')[0] })
    ).toStrictEqual(['M', 'T', 'W', 'T', 'F', 'S', 'S']);

    expect(
      getWeekdaysNames({
        locale: 'ru',
        format: (date) => dayjs(date).locale('ru').format('dd')[0].toUpperCase(),
      })
    ).toStrictEqual(['П', 'В', 'С', 'Ч', 'П', 'С', 'В']);
  });

  it('supports custom first day of week', () => {
    expect(getWeekdaysNames({ locale: 'en', firstDayOfWeek: 0 })).toStrictEqual([
      'Su',
      'Mo',
      'Tu',
      'We',
      'Th',
      'Fr',
      'Sa',
    ]);
    expect(getWeekdaysNames({ locale: 'en', firstDayOfWeek: 6 })).toStrictEqual([
      'Sa',
      'Su',
      'Mo',
      'Tu',
      'We',
      'Th',
      'Fr',
    ]);
  });

  it('respects the locale globally set for dayjs', () => {
    dayjs.locale('ru');

    expect(getWeekdaysNames({ locale: 'en', firstDayOfWeek: 0 })).toStrictEqual([
      'Su',
      'Mo',
      'Tu',
      'We',
      'Th',
      'Fr',
      'Sa',
    ]);

    expect(getWeekdaysNames({ locale: 'en', firstDayOfWeek: 1 })).toStrictEqual([
      'Mo',
      'Tu',
      'We',
      'Th',
      'Fr',
      'Sa',
      'Su',
    ]);
  });
});
