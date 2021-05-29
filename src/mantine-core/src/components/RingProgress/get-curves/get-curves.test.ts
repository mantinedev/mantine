import { getCurves } from './get-curves';

describe('@mantine/core/RingProgress/get-curves', () => {
  it('returns valid curves data', () => {
    expect(
      getCurves({
        size: 350,
        thickness: 12,
        sections: [
          { value: 40, color: 'blue' },
          { value: 22.345, color: 'red' },
          { value: 9, color: 'blue' },
        ],
      })
    ).toEqual([
      { data: { color: 'blue', value: 40 }, offset: 914.2034621946298, root: false, sum: 71.345 },
      {
        data: { color: 'red', value: 22.345 },
        offset: 548.5220773167778,
        root: false,
        sum: 71.345,
      },
      { data: { color: 'blue', value: 9 }, offset: 344.2433136893878, root: false, sum: 71.345 },
      { data: null, offset: 261.9650020918711, root: true, sum: 71.345 },
    ]);
  });
});
