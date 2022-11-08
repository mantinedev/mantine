import { isFunction } from './is-function';

describe('@mantine/hooks/is-function', () => {
  it('returns correct boolean value', () => {
    expect(isFunction(/abc/)).toBe(false);
    expect(isFunction(() => {})).toBe(true);
  });
});
