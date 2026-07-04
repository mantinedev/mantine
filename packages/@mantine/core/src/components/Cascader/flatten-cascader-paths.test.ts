import type { CascaderOption } from './Cascader';
import { flattenCascaderPaths } from './flatten-cascader-paths';

const data: CascaderOption[] = [
  {
    value: 'asia',
    label: 'Asia',
    children: [{ value: 'jp', label: 'Japan', children: [{ value: 'tokyo', label: 'Tokyo' }] }],
  },
  {
    value: 'europe',
    label: 'Europe',
    disabled: true,
    children: [{ value: 'fr', label: 'France' }],
  },
];

describe('@mantine/core/Cascader/flattenCascaderPaths', () => {
  it('flattens every node into a full path from root', () => {
    const paths = flattenCascaderPaths(data).map((flatPath) => flatPath.path);
    expect(paths).toStrictEqual([
      ['asia'],
      ['asia', 'jp'],
      ['asia', 'jp', 'tokyo'],
      ['europe'],
      ['europe', 'fr'],
    ]);
  });

  it('marks leaf nodes', () => {
    const leafPaths = flattenCascaderPaths(data)
      .filter((flatPath) => flatPath.leaf)
      .map((flatPath) => flatPath.path.join('/'));
    expect(leafPaths).toStrictEqual(['asia/jp/tokyo', 'europe/fr']);
  });

  it('propagates disabled state from ancestors', () => {
    const disabled = flattenCascaderPaths(data)
      .filter((flatPath) => flatPath.disabled)
      .map((flatPath) => flatPath.path.join('/'));
    expect(disabled).toStrictEqual(['europe', 'europe/fr']);
  });
});
