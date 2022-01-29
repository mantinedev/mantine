import { linearGradient, radialGradient } from './gradient';

describe('@mantine/styles/linear-gradient', () => {
  it('returns correct gradient with two color stops', () => {
    expect(linearGradient(24, '#000', '#fff')).toBe('linear-gradient(24deg, #000 0%, #fff 100%)');
  });

  it('returns correct gradient with multiple color stops', () => {
    expect(linearGradient(133, 'blue', 'red', 'orange', 'cyan', 'white')).toBe(
      'linear-gradient(133deg, blue 0%, red 25%, orange 50%, cyan 75%, white 100%)'
    );
  });
});

describe('@mantine/styles/radial-gradient', () => {
  it('returns correct gradient with two color stops', () => {
    expect(radialGradient('#000', '#fff')).toBe('radial-gradient(circle, #000 0%, #fff 100%)');
  });

  it('returns correct gradient with multiple color stops', () => {
    expect(radialGradient('blue', 'red', 'orange', 'cyan', 'white')).toBe(
      'radial-gradient(circle, blue 0%, red 25%, orange 50%, cyan 75%, white 100%)'
    );
  });
});
