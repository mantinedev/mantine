import { toPx } from './to-px';

describe('@mantine/styles/to-px', () => {
  it('returns the correct px values when given a px string', () => {
    expect(toPx('10px')).toStrictEqual(10);
    expect(toPx('14px')).toStrictEqual(14);
  });

  it('returns the correct px values when given an other unit string', () => {
    expect(toPx('1rem')).toStrictEqual(16);
    expect(toPx('2rem')).toStrictEqual(32);
    expect(toPx('2em')).toStrictEqual(32);
  });
});
