import { getDate } from './get-date';

describe('@mantine/dates/get-date', () => {
  it('returns correct dates', () => {
    const format24 = getDate('20', '12', '30', '24');

    expect(format24.getHours()).toStrictEqual(20);
    expect(format24.getMinutes()).toStrictEqual(12);
    expect(format24.getSeconds()).toStrictEqual(30);
    expect(format24.getMilliseconds()).toStrictEqual(0);

    const format12PM = getDate('8', '12', '30', '12', 'pm');

    expect(format12PM.getHours()).toStrictEqual(20);
    expect(format12PM.getMinutes()).toStrictEqual(12);
    expect(format12PM.getSeconds()).toStrictEqual(30);
    expect(format12PM.getMilliseconds()).toStrictEqual(0);

    const format12AM = getDate('8', '12', '30', '12', 'am');

    expect(format12AM.getHours()).toStrictEqual(8);
    expect(format12AM.getMinutes()).toStrictEqual(12);
    expect(format12AM.getSeconds()).toStrictEqual(30);
    expect(format12AM.getMilliseconds()).toStrictEqual(0);

    expect(getDate('12', '00', '00', '12', 'am').getHours()).toStrictEqual(0);
    expect(getDate('12', '00', '00', '12', 'pm').getHours()).toStrictEqual(12);
  });
});
