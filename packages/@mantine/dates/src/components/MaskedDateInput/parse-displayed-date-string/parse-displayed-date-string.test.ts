import { parseDisplayedDateString } from './parse-displayed-date-string';

type Fields = ('day' | 'month' | 'year')[];

const dmy: Fields = ['day', 'month', 'year'];
const mdy: Fields = ['month', 'day', 'year'];
const ymd: Fields = ['year', 'month', 'day'];
const labels = { am: 'AM', pm: 'PM' };
const spanish = { am: 'a. m.', pm: 'p. m.' };
const greek = { am: 'ΠΜ', pm: 'ΜΜ' };
const sameLetters = { am: 'am', pm: 'A.M.' };
const noLetters = { am: '.', pm: 'PM' };
const empty = { day: null, month: null, year: null, hours: null, minutes: null, seconds: null };

describe('@mantine/dates/parseDisplayedDateString', () => {
  it.each<[string, Fields, string, { am: string; pm: string }, (number | null)[] | null]>([
    ['05/01/2026', dmy, '/', labels, [5, 1, 2026, null, null, null]],
    ['  5/1/2026\n', dmy, '/', labels, [5, 1, 2026, null, null, null]],
    ['05/01/2026', dmy, ' / ', labels, [5, 1, 2026, null, null, null]],
    ['05 / 01 / 2026', dmy, ' / ', labels, [5, 1, 2026, null, null, null]],
    ['01/05/2026', mdy, '/', labels, [5, 1, 2026, null, null, null]],
    ['2026/01/05', ymd, '/', labels, [5, 1, 2026, null, null, null]],
    ['05|01|2026', dmy, '|', labels, [5, 1, 2026, null, null, null]],
    ['05/01/2026 14:30:45', dmy, '/', labels, [5, 1, 2026, 14, 30, 45]],
    ['01/05/2026, 1:30 PM', mdy, '/', labels, [5, 1, 2026, 13, 30, null]],
    ['05/01/2026 1:30pm', dmy, '/', labels, [5, 1, 2026, 13, 30, null]],
    ['05/01/2026 1:30\u202fPM', dmy, '/', labels, [5, 1, 2026, 13, 30, null]],
    ['05/01/2026 12:30 a.m.', dmy, '/', labels, [5, 1, 2026, 0, 30, null]],
    ['05/01/2026 1:30 p. m.', dmy, '/', spanish, [5, 1, 2026, 13, 30, null]],
    ['05/01/2026 1:30 μμ', dmy, '/', greek, [5, 1, 2026, 13, 30, null]],
    ['05/01/2026 13:30', dmy, '/', sameLetters, [5, 1, 2026, 13, 30, null]],
    ['05.01.2026', dmy, '/', labels, null],
    ['123/01/2026', dmy, '/', labels, null],
    ['05/01/26', dmy, '/', labels, null],
    ['Due 05/01/2026.', dmy, '/', labels, null],
    ['05/01/2026 24:00', dmy, '/', labels, null],
    ['05/01/2026 13:30 PM', dmy, '/', labels, null],
    ['05/01/2026 1:30 am', dmy, '/', sameLetters, null],
    ['05/01/2026 1:30 PM', dmy, '/', noLetters, null],
    ['05/01/2026 1:30 Uhr', dmy, '/', labels, null],
    ['05/01/2026 1:30 PM5', dmy, '/', labels, null],
  ])('reads %j with %j', (value, fieldsOrder, dateSeparator, amPmLabels, expected) => {
    const parsed = parseDisplayedDateString({ value, fieldsOrder, dateSeparator, amPmLabels });
    const [day, month, year, hours, minutes, seconds] = expected ?? Array(6).fill(null);

    expect(parsed).toEqual({ day, month, year, hours, minutes, seconds });
  });

  it('reads a long run of spaces before a label quickly', () => {
    const value = `05/01/2026 1:30${' '.repeat(50000)}x5`;

    expect(
      parseDisplayedDateString({ value, fieldsOrder: dmy, dateSeparator: '/', amPmLabels: labels })
    ).toEqual(empty);
  });
});
