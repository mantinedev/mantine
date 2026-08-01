import type { CascaderOption } from './Cascader';
import { getCascaderPathOptions } from './get-cascader-path-options';

const data: CascaderOption[] = [
  {
    value: 'asia',
    label: 'Asia',
    children: [{ value: 'jp', label: 'Japan', children: [{ value: 'tokyo', label: 'Tokyo' }] }],
  },
  { value: 'europe', label: 'Europe' },
];

describe('@mantine/core/Cascader/getCascaderPathOptions', () => {
  it('returns an empty array for empty or nullish values', () => {
    expect(getCascaderPathOptions(data, null)).toStrictEqual([]);
    expect(getCascaderPathOptions(data, undefined)).toStrictEqual([]);
    expect(getCascaderPathOptions(data, [])).toStrictEqual([]);
  });

  it('resolves a full path to the option chain', () => {
    const options = getCascaderPathOptions(data, ['asia', 'jp', 'tokyo']);
    expect(options.map((option) => option.value)).toStrictEqual(['asia', 'jp', 'tokyo']);
  });

  it('returns the options resolved so far when the path is invalid', () => {
    const options = getCascaderPathOptions(data, ['asia', 'unknown']);
    expect(options.map((option) => option.value)).toStrictEqual(['asia']);
  });
});
