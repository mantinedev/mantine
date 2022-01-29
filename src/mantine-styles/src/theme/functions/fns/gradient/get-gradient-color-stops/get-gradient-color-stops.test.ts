import { getGradientColorStops } from './get-gradient-color-stops';

describe('@mantine/styles/get-gradient-color', () => {
  it('returns correct color steps', () => {
    expect(getGradientColorStops(['#000', '#fff'])).toBe('#000 0%, #fff 100%');
    expect(getGradientColorStops(['blue', 'red', 'orange', 'cyan', 'white'])).toBe(
      'blue 0%, red 25%, orange 50%, cyan 75%, white 100%'
    );
  });
});
