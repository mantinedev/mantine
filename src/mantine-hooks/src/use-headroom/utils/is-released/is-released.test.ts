import { isReleased } from './is-released';

describe('@mantine/hooks/is-released', () => {
  it('returns true only if the current value is higher than the previous value', () => {
    expect(isReleased(1, 2)).toBeFalsy();
    expect(isReleased(2, 1)).toBeTruthy();
  });
});
