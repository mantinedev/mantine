import { getWeekdaysNames } from './get-weekdays-names';

describe('@mantine/dates/get-weekdays-names', () => {
  it('returns weekdays names for given locale', () => {
    expect(getWeekdaysNames('ru')).toEqual(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);
    expect(getWeekdaysNames('en')).toEqual(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
    expect(getWeekdaysNames('de')).toEqual(['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']);
  });
});
