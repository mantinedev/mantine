import { rotateWeekdaysNames } from './rotate-weekdays-names';

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

describe('rotateWeekdaysNames', () => {
  it('rotates weekdays names correctly when firstDayOfWeek is 0', () => {
    expect(rotateWeekdaysNames(weekdays, 0)).toEqual([
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]);
  });

  it('rotates weekdays names correctly when firstDayOfWeek is 1', () => {
    expect(rotateWeekdaysNames(weekdays, 1)).toEqual([
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ]);
  });

  it('rotates weekdays names correctly when firstDayOfWeek is 3', () => {
    expect(rotateWeekdaysNames(weekdays, 3)).toEqual([
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
    ]);
  });

  it('rotates weekdays names correctly when firstDayOfWeek is 6', () => {
    expect(rotateWeekdaysNames(weekdays, 6)).toEqual([
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
    ]);
  });

  it('returns the same array when firstDayOfWeek is equal to the length of the array', () => {
    expect(rotateWeekdaysNames(weekdays, 7)).toEqual([
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]);
  });
});
