import {
  findAmPmByLabelPrefix,
  findAmPmLabelSuffix,
  getAmPmFromLabel,
  getHoursOfPeriod,
  to12Hours,
  to24Hours,
} from './convert-hours';

const labels = { am: 'AM', pm: 'PM' };

describe('@mantine/dates/convert-hours', () => {
  it('converts 12h hours to 24h hours', () => {
    expect(to24Hours(12, 'am')).toBe(0);
    expect(to24Hours(1, 'am')).toBe(1);
    expect(to24Hours(11, 'am')).toBe(11);
    expect(to24Hours(12, 'pm')).toBe(12);
    expect(to24Hours(1, 'pm')).toBe(13);
    expect(to24Hours(11, 'pm')).toBe(23);
    expect(to24Hours(0, 'am')).toBe(0);
  });

  it('converts 24h hours to 12h hours', () => {
    expect(to12Hours(0)).toEqual({ hours: 12, amPm: 'am' });
    expect(to12Hours(11)).toEqual({ hours: 11, amPm: 'am' });
    expect(to12Hours(12)).toEqual({ hours: 12, amPm: 'pm' });
    expect(to12Hours(23)).toEqual({ hours: 11, amPm: 'pm' });
  });

  it('returns 24h hours of a period', () => {
    expect(getHoursOfPeriod('am').sort((a, b) => a - b)).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    ]);
    expect(getHoursOfPeriod('pm').sort((a, b) => a - b)).toEqual([
      12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    ]);
  });

  it('maps labels to periods case-insensitively', () => {
    expect(getAmPmFromLabel('AM', labels)).toBe('am');
    expect(getAmPmFromLabel('pm', labels)).toBe('pm');
    expect(getAmPmFromLabel('x', labels)).toBe(null);
    expect(getAmPmFromLabel(null, labels)).toBe(null);
    expect(findAmPmLabelSuffix('1:05 pm', labels)).toEqual({ amPm: 'pm', rest: '1:05 ' });
    expect(findAmPmLabelSuffix('1:05', labels)).toBe(null);
    expect(findAmPmByLabelPrefix('p', labels)).toEqual(['pm']);
    expect(findAmPmByLabelPrefix('', labels)).toEqual(['am', 'pm']);
  });
});
