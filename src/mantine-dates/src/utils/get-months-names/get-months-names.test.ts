import { getMonthsNames } from './get-months-names';
import 'dayjs/locale/ru';

describe('@mantine/dates/get-months-names', () => {
  it('returns months names with given locale and format', () => {
    expect(getMonthsNames('en', 'MMMM')).toEqual([
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

    expect(getMonthsNames('ru', 'MMMM')).toEqual([
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
