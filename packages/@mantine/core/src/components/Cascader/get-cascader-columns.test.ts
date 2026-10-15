import { CascaderOption } from './Cascader';
import {
  cascaderOptionHasChildren,
  findEnabledCascaderOptionIndex,
  getCascaderColumns,
  getCascaderIndexPath,
} from './get-cascader-columns';

const data: CascaderOption[] = [
  {
    value: 'asia',
    label: 'Asia',
    children: [{ value: 'jp', label: 'Japan', children: [{ value: 'tokyo', label: 'Tokyo' }] }],
  },
  { value: 'europe', label: 'Europe' },
];

describe('@mantine/core/Cascader/getCascaderColumns', () => {
  it('returns the root column for an empty active path', () => {
    const columns = getCascaderColumns(data, []);
    expect(columns).toHaveLength(1);
    expect(columns[0].map((option) => option.value)).toStrictEqual(['asia', 'europe']);
  });

  it('adds one column per highlighted option without expanding the deepest one', () => {
    const columns = getCascaderColumns(data, ['asia', 'jp']);
    expect(columns).toHaveLength(2);
    expect(columns[0].map((option) => option.value)).toStrictEqual(['asia', 'europe']);
    expect(columns[1].map((option) => option.value)).toStrictEqual(['jp']);
  });

  it('detects whether an option has children', () => {
    expect(cascaderOptionHasChildren({ value: 'x' })).toBe(false);
    expect(cascaderOptionHasChildren({ value: 'x', children: [] })).toBe(false);
    expect(cascaderOptionHasChildren({ value: 'x', children: [{ value: 'y' }] })).toBe(true);
  });

  it('resolves a value path to an index path', () => {
    expect(getCascaderIndexPath(data, [])).toStrictEqual([]);
    expect(getCascaderIndexPath(data, ['europe'])).toStrictEqual([1]);
    expect(getCascaderIndexPath(data, ['asia', 'jp', 'tokyo'])).toStrictEqual([0, 0, 0]);
    expect(getCascaderIndexPath(data, ['asia', 'missing', 'tokyo'])).toStrictEqual([0]);
    expect(getCascaderIndexPath(data, ['europe', 'paris'])).toStrictEqual([1]);
  });

  it('finds the next enabled option in both directions', () => {
    const options = [
      { value: 'a', disabled: true },
      { value: 'b' },
      { value: 'c', disabled: true },
    ];
    expect(findEnabledCascaderOptionIndex(options, -1, 1)).toBe(1);
    expect(findEnabledCascaderOptionIndex(options, options.length, -1)).toBe(1);
    expect(findEnabledCascaderOptionIndex(options, 1, 1)).toBe(-1);
    expect(findEnabledCascaderOptionIndex(options, 1, -1)).toBe(-1);
    expect(findEnabledCascaderOptionIndex([], -1, 1)).toBe(-1);
  });
});
