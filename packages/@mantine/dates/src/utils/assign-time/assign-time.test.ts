import { assignTime } from './assign-time';

describe('@mantine/dates/assign-time', () => {
  it('assigns time to date', () => {
    const date = '2021-01-01';
    expect(assignTime(date, '12:34:56')).toBe('2021-01-01 12:34:56');
  });

  it('changes time in the existing date with time', () => {
    const date = '2021-01-01 12:34:56';
    expect(assignTime(date, '01:02:03')).toBe('2021-01-01 01:02:03');
  });
});
