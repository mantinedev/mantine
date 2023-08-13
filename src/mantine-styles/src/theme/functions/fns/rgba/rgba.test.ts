import { rgba } from './rgba';

describe('@mantine/styles/rgba', () => {
  it('correctly converts colors from hex to rgba', () => {
    expect(rgba('#228BE6', 0.74)).toBe('rgba(34, 139, 230, 0.74)');
    expect(rgba('96f2d7', 0.945)).toBe('rgba(150, 242, 215, 0.945)');
    expect(rgba('#000000', 0.333)).toBe('rgba(0, 0, 0, 0.333)');
    expect(rgba('#000', 0.333)).toBe('rgba(0, 0, 0, 0.333)');
    expect(rgba('fff', 1)).toBe('rgba(255, 255, 255, 1)');
    expect(rgba('#ffffff', 1)).toBe('rgba(255, 255, 255, 1)');
  });

  it('sets correct opacity in rgb color', () => {
    expect(rgba('rgb(1, 23, 124)', 0.3)).toBe('rgba(1, 23, 124, 0.3)');
  });

  it('sets correct opacity in rgba color', () => {
    expect(rgba('rgba(1, 23, 124, 0.5)', 0.3)).toBe('rgba(1, 23, 124, 0.3)');
  });

  it('returns black color for incorrect values', () => {
    expect(rgba(null, 0.74)).toBe('rgba(0, 0, 0, 1)');
    expect(rgba('#000000', -12)).toBe('rgba(0, 0, 0, 1)');
    expect(rgba('#00000', 1)).toBe('rgba(0, 0, 0, 1)');
    expect(rgba('#000', 1)).toBe('rgba(0, 0, 0, 1)');
    expect(rgba('#000000', 24)).toBe('rgba(0, 0, 0, 1)');
    expect(rgba('#000000', 1.01)).toBe('rgba(0, 0, 0, 1)');
  });

  it('returns color as-is if it is a CSS variable', () => {
    expect(rgba('var(--css-custom-property)', 0.5)).toBe('var(--css-custom-property)');
  });
});
