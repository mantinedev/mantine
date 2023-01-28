import { isPinned } from './is-pinned';

describe('@mantine/hooks/is-pinned', () => {
  it('returns true only if the current value is lower than the previous value', () => {
    expect(isPinned(1, 2)).toBeTruthy();
    expect(isPinned(1, 1)).toBeTruthy();
    expect(isPinned(2, 1)).toBeFalsy();
  });
});
