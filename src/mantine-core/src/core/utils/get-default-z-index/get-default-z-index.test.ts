import { getDefaultZIndex } from './get-default-z-index';

describe('@mantine/core/get-default-z-index', () => {
  it('returns correct z-index value', () => {
    expect(getDefaultZIndex('app')).toBe(100);
    expect(getDefaultZIndex('modal')).toBe(200);
    expect(getDefaultZIndex('popover')).toBe(300);
    expect(getDefaultZIndex('overlay')).toBe(400);
  });
});
