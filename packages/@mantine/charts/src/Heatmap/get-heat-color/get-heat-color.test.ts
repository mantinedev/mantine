import { getHeatColor } from './get-heat-color';

const colors = ['1', '2', '3', '4'];

describe('@mantine/charts/get-heat-color', () => {
  it('returns correct color depending on value, min, max and colors', () => {
    expect(getHeatColor({ value: 1, min: 1, max: 4, colors })).toBe('1');
    expect(getHeatColor({ value: 2, min: 1, max: 4, colors })).toBe('2');
    expect(getHeatColor({ value: 3, min: 1, max: 4, colors })).toBe('3');
    expect(getHeatColor({ value: 4, min: 1, max: 4, colors })).toBe('4');
  });
});
