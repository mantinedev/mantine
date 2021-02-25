import { isBrightColor } from './is-bright-color';

describe('@mantine/tag-picker/is-bright-color', () => {
  it('detects dark color', () => {
    expect(isBrightColor('#000000')).toBe(false);
  });

  it('detects light color', () => {
    expect(isBrightColor('#fffff')).toBe(true);
  });

  it('does not not depend on register', () => {
    expect(isBrightColor('#fffff')).toBe(true);
    expect(isBrightColor('#FFFFF')).toBe(true);
  });
});
