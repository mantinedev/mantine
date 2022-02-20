import 'dayjs/locale/ru';
import { getWeekdaysNames } from './get-weekdays-names';

describe('@mantine/dates/get-weekdays-names', () => {
  it('returns correct weekday names for given locale', () => {
    expect(getWeekdaysNames('en')).toStrictEqual(['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']);
    expect(getWeekdaysNames('ru')).toStrictEqual(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);

    expect(getWeekdaysNames('en', 'sunday')).toStrictEqual([
      'Su',
      'Mo',
      'Tu',
      'We',
      'Th',
      'Fr',
      'Sa',
    ]);
    expect(getWeekdaysNames('ru', 'sunday')).toStrictEqual([
      'вс',
      'пн',
      'вт',
      'ср',
      'чт',
      'пт',
      'сб',
    ]);
  });
});
