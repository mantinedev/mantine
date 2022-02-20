import { extractMargins } from './extract-margins';

describe('@mantine/styles/extract-margins', () => {
  it('correctly extracts margin props', () => {
    expect(extractMargins({ mt: 10, mb: 15 })).toStrictEqual({
      margins: { mt: 10, mb: 15 },
      rest: {},
    });
  });

  it('return correct rest props', () => {
    expect(extractMargins({ mt: 10, a: 1, b: 'test' })).toStrictEqual({
      margins: { mt: 10 },
      rest: { a: 1, b: 'test' },
    });
  });
});
