import { isFixed } from './is-fixed';

describe('@mantine/hooks/is-fixed', () => {
  it('returns true only if the current value is lower than or equals the previous value', () => {
    expect(isFixed(1, 2)).toBeTruthy();
    expect(isFixed(1, 1)).toBeTruthy();
    expect(isFixed(2, 1)).toBeFalsy();
  });
});
