import { toRgba } from './to-rgba';

describe('@mantine/styles/to-rgba', () => {
  it('returns the correct rgba values when given a hex string', () => {
    expect(toRgba('#F03E3E')).toStrictEqual({ r: 240, g: 62, b: 62, a: 1 });
    expect(toRgba('#D6336C')).toStrictEqual({ r: 214, g: 51, b: 108, a: 1 });
    expect(toRgba('#f00')).toStrictEqual({ r: 255, g: 0, b: 0, a: 1 });
    expect(toRgba('#7048E8')).toStrictEqual({ r: 112, g: 72, b: 232, a: 1 });
    expect(toRgba('#1098AD')).toStrictEqual({ r: 16, g: 152, b: 173, a: 1 });
  });

  it('returns the correct rgba values when given an rgb string', () => {
    expect(toRgba('rgb(240, 62, 62)')).toStrictEqual({ r: 240, g: 62, b: 62, a: 1 });
    expect(toRgba('rgb(214, 51, 108)')).toStrictEqual({ r: 214, g: 51, b: 108, a: 1 });
    expect(toRgba('rgb(112, 72, 232)')).toStrictEqual({ r: 112, g: 72, b: 232, a: 1 });
    expect(toRgba('rgb(16, 152, 173)')).toStrictEqual({ r: 16, g: 152, b: 173, a: 1 });
  });

  it('returns the correct rgba values when given an rgba string', () => {
    expect(toRgba('rgb(240, 62, 62, 0.8)')).toStrictEqual({ r: 240, g: 62, b: 62, a: 0.8 });
    expect(toRgba('rgb(214, 51, 108, 1)')).toStrictEqual({ r: 214, g: 51, b: 108, a: 1 });
    expect(toRgba('rgb(112, 72, 232, .2)')).toStrictEqual({ r: 112, g: 72, b: 232, a: 0.2 });
  });
});
