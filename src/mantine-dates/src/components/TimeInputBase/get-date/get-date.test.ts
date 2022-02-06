import { getDate } from './get-date';

describe('@mantine/dates/get-date', () => {
  it('returns correct dates', () => {
    const format24 = getDate('20', '12', '30', '24');

    expect(format24.getHours()).toEqual(20);
    expect(format24.getMinutes()).toEqual(12);
    expect(format24.getSeconds()).toEqual(30);

    const format12PM = getDate('8', '12', '30', '12', 'pm');

    expect(format12PM.getHours()).toEqual(20);
    expect(format12PM.getMinutes()).toEqual(12);
    expect(format12PM.getSeconds()).toEqual(30);

    const format12AM = getDate('8', '12', '30', '12', 'am');

    expect(format12AM.getHours()).toEqual(8);
    expect(format12AM.getMinutes()).toEqual(12);
    expect(format12AM.getSeconds()).toEqual(30);

    expect(getDate('12', '00', '00', '12', 'am').getHours()).toEqual(0);
    expect(getDate('12', '00', '00', '12', 'pm').getHours()).toEqual(12);
  });
});
