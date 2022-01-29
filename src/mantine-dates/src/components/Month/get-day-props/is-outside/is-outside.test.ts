import { isOutside } from './is-outside';

describe('@mantine/dates/Day/is-outside', () => {
  it('detects dates that are outside of given month', () => {
    expect(isOutside(new Date(2021, 0, 30), new Date(2021, 1, 1))).toBe(true);
    expect(isOutside(new Date(2021, 2, 1), new Date(2021, 1, 1))).toBe(true);
  });

  it('detects dates that are inside given month', () => {
    expect(isOutside(new Date(2021, 1, 14), new Date(2021, 1, 1))).toBe(false);
    expect(isOutside(new Date(2021, 1, 5), new Date(2021, 1, 1))).toBe(false);
  });
});
