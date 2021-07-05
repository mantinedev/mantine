import { getMonthsNames } from './get-months-names';
import 'dayjs/locale/ru';

describe('@mantine/dates/get-months-names', () => {
  it('returns months names with given locale', () => {
    expect(getMonthsNames('en')).toEqual([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]);

    expect(getMonthsNames('ru')).toEqual([
      'январь',
      'февраль',
      'март',
      'апрель',
      'май',
      'июнь',
      'июль',
      'август',
      'сентябрь',
      'октябрь',
      'ноябрь',
      'декабрь',
    ]);
  });
});
