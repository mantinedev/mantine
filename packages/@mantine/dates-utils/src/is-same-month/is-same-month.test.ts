import { isSameMonth } from './is-same-month';

describe('@mantine/dates/is-same-month', () => {
  it('detects same month', () => {
    expect(isSameMonth('2021-03-01', '2021-03-02')).toBe(true);
    expect(isSameMonth('2021-04-01', '2021-03-02')).toBe(false);
    expect(isSameMonth('2022-03-02', '2021-03-02')).toBe(false);
  });
});
