import { hexToRgba } from './hex-to-rgba';

describe('@mantine/theme/hex-to-rgba', () => {
  it('correctly converts colors from hex to rgba', () => {
    expect(hexToRgba('#228BE6', 0.74)).toBe('rgba(34, 139, 230, 0.74)');
    expect(hexToRgba('96f2d7', 0.945)).toBe('rgba(150, 242, 215, 0.945)');
    expect(hexToRgba('#000000', 0.333)).toBe('rgba(0, 0, 0, 0.333)');
    expect(hexToRgba('#ffffff', 1)).toBe('rgba(255, 255, 255, 1)');
  });

  it('returns empty string for incorrect values', () => {
    expect(hexToRgba(null, 0.74)).toBe('');
    expect(hexToRgba('#000000', -12)).toBe('');
    expect(hexToRgba('#00000', 1)).toBe('');
    expect(hexToRgba('#000', 1)).toBe('');
    expect(hexToRgba('#000000', 24)).toBe('');
    expect(hexToRgba('#000000', 1.01)).toBe('');
  });
});
