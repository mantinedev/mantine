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
});
