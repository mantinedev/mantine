import { cssObjectToString } from './css-object-to-string';

const result = 'padding:1vh;font-size:2.2vh;border-top-right-radius:10px;';

const undefinedResult = 'padding:1vh;border-top-right-radius:10px;';

describe('@mantine/core/css-object-to-string', () => {
  it('correctly transforms css object into string', () => {
    expect(
      cssObjectToString({
        padding: '1vh',
        fontSize: '2.2vh',
        borderTopRightRadius: '10px',
      })
    ).toBe(result);
  });

  it('filters out undefined values', () => {
    expect(
      cssObjectToString({
        padding: '1vh',
        fontSize: undefined,
        borderTopRightRadius: '10px',
      })
    ).toBe(undefinedResult);
  });
});
