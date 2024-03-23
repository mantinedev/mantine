import { colorsTuple } from './colors-tuple';

describe('@mantine/core/colorsTuple', () => {
  it('returns array of 10 colors if argument is a string', () => {
    expect(colorsTuple('red')).toStrictEqual(Array(10).fill('red'));
  });

  it('returns array if argument is an array', () => {
    expect(colorsTuple(['red', 'blue'])).toStrictEqual(['red', 'blue']);
  });
});
