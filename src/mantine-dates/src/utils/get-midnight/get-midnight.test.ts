import { getMidnight } from './get-midnight';

describe('@mantine/dates/get-midnight', () => {
  it('returns date at midnight', () => {
    const midnight = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      0,
      0,
      0,
      0
    );

    expect(getMidnight().toUTCString()).toBe(midnight.toUTCString());
  });
});
