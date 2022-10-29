import { extractSystemStyles } from './extract-system-styles';

describe('@mantine/styles/extract-system-styles', () => {
  it('correctly extracts margin props', () => {
    expect(extractSystemStyles({ mt: 10, mb: 15 })).toStrictEqual({
      systemStyles: { mt: 10, mb: 15 },
      rest: {},
    });

    expect(extractSystemStyles({ pt: 10, pb: 15 })).toStrictEqual({
      systemStyles: { pt: 10, pb: 15 },
      rest: {},
    });
  });

  it('return correct rest props', () => {
    expect(extractSystemStyles({ mt: 10, p: 15, a: 1, b: 'test' })).toStrictEqual({
      systemStyles: { mt: 10, p: 15 },
      rest: { a: 1, b: 'test' },
    });
  });
});
