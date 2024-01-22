import { toRgba } from './to-rgba';

describe('@mantine/core/to-rgba', () => {
  it('returns the correct rgba values when given a hex string', () => {
    expect(toRgba('#F03E3E')).toStrictEqual({ r: 240, g: 62, b: 62, a: 1 });
    expect(toRgba('#D6336C')).toStrictEqual({ r: 214, g: 51, b: 108, a: 1 });
    expect(toRgba('#f00')).toStrictEqual({ r: 255, g: 0, b: 0, a: 1 });
    expect(toRgba('#7048E8')).toStrictEqual({ r: 112, g: 72, b: 232, a: 1 });
    expect(toRgba('#1098AD')).toStrictEqual({ r: 16, g: 152, b: 173, a: 1 });
    expect(toRgba('#F03E3EFF')).toStrictEqual({ r: 240, g: 62, b: 62, a: 1 });
    expect(toRgba('#F03E3E00')).toStrictEqual({ r: 240, g: 62, b: 62, a: 0 });
    expect(toRgba('#F03E3E84')).toStrictEqual({ r: 240, g: 62, b: 62, a: 0.5176470588235295 });
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
    expect(toRgba('rgb(240, 62, 62 / 0.8)')).toStrictEqual({ r: 240, g: 62, b: 62, a: 0.8 });
    expect(toRgba('rgb(214, 51, 108 / 1)')).toStrictEqual({ r: 214, g: 51, b: 108, a: 1 });
    expect(toRgba('rgb(112, 72, 232 / .2)')).toStrictEqual({ r: 112, g: 72, b: 232, a: 0.2 });
  });

  it('returns the correct rgba values when given an hsl string', () => {
    expect(toRgba('hsl(0, 0%, 0%)')).toStrictEqual({ r: 0, g: 0, b: 0, a: 1 });
    expect(toRgba('hsl(120, 100%, 50%)')).toStrictEqual({ r: 0, g: 255, b: 0, a: 1 });
    expect(toRgba('hsla(240, 100%, 50%, 0.5)')).toStrictEqual({ r: 0, g: 0, b: 255, a: 0.5 });
    expect(toRgba('hsla(300, 50%, 25%, 0.75)')).toStrictEqual({ r: 96, g: 32, b: 96, a: 0.75 });
  });
});
