import { getRangeProps } from './get-range-props';

const range: [Date, Date] = [new Date(2021, 0, 1), new Date(2021, 0, 15)];

describe('@mantine/dates/Day/get-range-props', () => {
  it('correctly detects date to be in range', () => {
    expect(getRangeProps(new Date(2021, 0, 12), range).inRange).toBe(true);
  });

  it('correctly detects date to be out range', () => {
    expect(getRangeProps(new Date(2021, 0, 17), range).inRange).toBe(false);
  });

  it('correctly detects date to be last in range', () => {
    const last = getRangeProps(new Date(2021, 0, 15), range);
    const notLast = getRangeProps(new Date(2021, 0, 14), range);

    expect(last.inRange).toBe(true);
    expect(last.lastInRange).toBe(true);
    expect(last.selectedInRange).toBe(true);

    expect(notLast.inRange).toBe(true);
    expect(notLast.lastInRange).toBe(false);
    expect(notLast.selectedInRange).toBe(false);
  });

  it('correctly detects date to be first in range', () => {
    const first = getRangeProps(new Date(2021, 0, 1), range);
    const notFirst = getRangeProps(new Date(2021, 0, 2), range);

    expect(first.inRange).toBe(true);
    expect(first.firstInRange).toBe(true);
    expect(first.selectedInRange).toBe(true);

    expect(notFirst.inRange).toBe(true);
    expect(notFirst.firstInRange).toBe(false);
    expect(notFirst.selectedInRange).toBe(false);
  });
});
