import type { CascaderOption } from './Cascader';
import { cascaderOptionHasChildren, getCascaderColumns } from './get-cascader-columns';

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

  it('does not expand the deepest highlighted option', () => {
    // 'asia' is the deepest highlight – its children column is not shown until it is expanded
    const columns = getCascaderColumns(data, ['asia']);
    expect(columns).toHaveLength(1);
    expect(columns[0].map((option) => option.value)).toStrictEqual(['asia', 'europe']);
  });

  it('detects whether an option has children', () => {
    expect(cascaderOptionHasChildren({ value: 'x' })).toBe(false);
    expect(cascaderOptionHasChildren({ value: 'x', children: [] })).toBe(false);
    expect(cascaderOptionHasChildren({ value: 'x', children: [{ value: 'y' }] })).toBe(true);
  });
});
