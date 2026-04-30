import type { TreeNodeData } from '../Tree';
import { defaultTreeNodeFilter, filterTreeData, TreeNodeFilter } from './filter-tree-data';

const data: TreeNodeData[] = [
  {
    label: 'src',
    value: 'src',
    children: [
      {
        label: 'components',
        value: 'src/components',
        children: [
          { label: 'Accordion.tsx', value: 'src/components/Accordion.tsx' },
          { label: 'Button.tsx', value: 'src/components/Button.tsx' },
          { label: 'Tree.tsx', value: 'src/components/Tree.tsx' },
        ],
      },
      {
        label: 'hooks',
        value: 'src/hooks',
        children: [
          { label: 'use-debounce.ts', value: 'src/hooks/use-debounce.ts' },
          { label: 'use-media-query.ts', value: 'src/hooks/use-media-query.ts' },
        ],
      },
    ],
  },
  {
    label: 'public',
    value: 'public',
    children: [
      { label: 'favicon.ico', value: 'public/favicon.ico' },
      { label: 'logo.svg', value: 'public/logo.svg' },
    ],
  },
  { label: 'package.json', value: 'package.json' },
  { label: 'tsconfig.json', value: 'tsconfig.json' },
];

describe('filterTreeData', () => {
  it('returns data unchanged for empty query', () => {
    expect(filterTreeData(data, '')).toBe(data);
  });

  it('returns data unchanged for whitespace-only query', () => {
    expect(filterTreeData(data, '   ')).toBe(data);
  });

  it('filters leaf nodes by label', () => {
    const result = filterTreeData(data, 'Button');
    expect(result).toHaveLength(1);
    expect(result[0].value).toBe('src');
    expect(result[0].children).toHaveLength(1);
    expect(result[0].children![0].value).toBe('src/components');
    expect(result[0].children![0].children).toHaveLength(1);
    expect(result[0].children![0].children![0].value).toBe('src/components/Button.tsx');
  });

  it('is case-insensitive by default', () => {
    const result = filterTreeData(data, 'button');
    expect(result).toHaveLength(1);
    expect(result[0].children![0].children![0].value).toBe('src/components/Button.tsx');
  });

  it('preserves ancestor chain for matching leaves', () => {
    const result = filterTreeData(data, 'use-debounce');
    expect(result).toHaveLength(1);
    expect(result[0].value).toBe('src');
    expect(result[0].children).toHaveLength(1);
    expect(result[0].children![0].value).toBe('src/hooks');
    expect(result[0].children![0].children).toHaveLength(1);
    expect(result[0].children![0].children![0].value).toBe('src/hooks/use-debounce.ts');
  });

  it('includes parent when parent label matches', () => {
    const result = filterTreeData(data, 'hooks');
    expect(result).toHaveLength(1);
    expect(result[0].value).toBe('src');
    expect(result[0].children).toHaveLength(1);
    expect(result[0].children![0].value).toBe('src/hooks');
  });

  it('returns multiple matching branches', () => {
    const result = filterTreeData(data, '.json');
    expect(result).toHaveLength(2);
    expect(result[0].value).toBe('package.json');
    expect(result[1].value).toBe('tsconfig.json');
  });

  it('returns empty array when nothing matches', () => {
    const result = filterTreeData(data, 'nonexistent-file');
    expect(result).toHaveLength(0);
  });

  it('matches across different levels', () => {
    const result = filterTreeData(data, '.tsx');
    expect(result).toHaveLength(1);
    expect(result[0].value).toBe('src');
    expect(result[0].children).toHaveLength(1);
    expect(result[0].children![0].value).toBe('src/components');
    expect(result[0].children![0].children).toHaveLength(3);
  });

  it('does not mutate original data', () => {
    const originalChildren = data[0].children!.length;
    filterTreeData(data, 'Button');
    expect(data[0].children).toHaveLength(originalChildren);
  });

  it('works with custom filter function', () => {
    const filter: TreeNodeFilter = (query, node) => node.value.endsWith(query);
    const result = filterTreeData(data, '.svg', filter);
    expect(result).toHaveLength(1);
    expect(result[0].value).toBe('public');
    expect(result[0].children).toHaveLength(1);
    expect(result[0].children![0].value).toBe('public/logo.svg');
  });

  it('handles nodes without children', () => {
    const flat: TreeNodeData[] = [
      { label: 'file-a.txt', value: 'a' },
      { label: 'file-b.txt', value: 'b' },
      { label: 'readme.md', value: 'c' },
    ];
    const result = filterTreeData(flat, 'file');
    expect(result).toHaveLength(2);
    expect(result[0].value).toBe('a');
    expect(result[1].value).toBe('b');
  });
});

describe('defaultTreeNodeFilter', () => {
  it('matches string labels case-insensitively', () => {
    const node: TreeNodeData = { label: 'Button.tsx', value: 'button' };
    expect(defaultTreeNodeFilter('button', node)).toBe(true);
    expect(defaultTreeNodeFilter('BUTTON', node)).toBe(true);
    expect(defaultTreeNodeFilter('xyz', node)).toBe(false);
  });

  it('trims query whitespace', () => {
    const node: TreeNodeData = { label: 'Button.tsx', value: 'button' };
    expect(defaultTreeNodeFilter('  button  ', node)).toBe(true);
  });

  it('falls back to node.value when label is not a string', () => {
    const node: TreeNodeData = { label: (<span>icon</span>) as React.ReactNode, value: 'my-node' };
    expect(defaultTreeNodeFilter('my-node', node)).toBe(true);
    expect(defaultTreeNodeFilter('icon', node)).toBe(false);
  });
});
