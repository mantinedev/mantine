import { STYLE_PROPS_DATA } from '../style-props-data';
import { extractStyleProps } from './extract-style-props';

describe('@mantine/core/Box/extract-style-props', () => {
  it('correctly extracts style props', () => {
    expect(extractStyleProps({ mt: 10, mb: 15 })).toStrictEqual({
      styleProps: { mt: 10, mb: 15 },
      rest: {},
    });

    expect(extractStyleProps({ pt: 10, pb: 15 })).toStrictEqual({
      styleProps: { pt: 10, pb: 15 },
      rest: {},
    });
  });

  it('return correct rest props', () => {
    expect(extractStyleProps({ mt: 10, p: 15, firstProp: 1, secondProp: 'test' })).toStrictEqual({
      styleProps: { mt: 10, p: 15 },
      rest: { firstProp: 1, secondProp: 'test' },
    });
  });

  it('correctly extracts logical style props', () => {
    expect(extractStyleProps({ mis: 10, mie: 15, pis: 20, pie: 25 })).toStrictEqual({
      styleProps: { mis: 10, mie: 15, pis: 20, pie: 25 },
      rest: {},
    });
  });

  it('keeps style props in a stable order regardless of the order they were passed in', () => {
    const { styleProps } = extractStyleProps({ mt: 10, m: 5, pt: 4, p: 2 });
    expect(Object.keys(styleProps)).toStrictEqual(['m', 'mt', 'p', 'pt']);
  });

  it('omits undefined style props from both styleProps and rest', () => {
    expect(extractStyleProps({ mt: undefined, p: 10, title: 'test' })).toStrictEqual({
      styleProps: { p: 10 },
      rest: { title: 'test' },
    });
  });

  it('returns empty styleProps when no style props are passed', () => {
    expect(extractStyleProps({ title: 'test', id: 'id' })).toStrictEqual({
      styleProps: {},
      rest: { title: 'test', id: 'id' },
    });
  });

  it('extracts every style prop defined in STYLE_PROPS_DATA', () => {
    const keys = Object.keys(STYLE_PROPS_DATA);
    const { styleProps, rest } = extractStyleProps(Object.fromEntries(keys.map((key) => [key, 1])));
    expect(Object.keys(styleProps).sort()).toStrictEqual([...keys].sort());
    expect(rest).toStrictEqual({});
  });
});
