import 'dayjs/locale/ru';
import { getWeekdaysNames } from './get-weekdays-names';

describe('@mantine/dates/get-weekdays-names', () => {
  it('returns correct weekday names for given locale', () => {
    expect(getWeekdaysNames('en')).toEqual(['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']);
    expect(getWeekdaysNames('ru')).toEqual(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);
  });
});
