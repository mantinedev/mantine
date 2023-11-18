import { isLightColor } from './is-light-color';

describe('@mantine.core/is-light-color', () => {
  it('correctly detects light colors', () => {
    expect(isLightColor('#fff')).toBe(true);
    expect(isLightColor('#000')).toBe(false);
  });
});
