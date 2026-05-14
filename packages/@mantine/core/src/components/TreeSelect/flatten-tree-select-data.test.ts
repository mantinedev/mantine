import type { TreeNodeData } from '../Tree';
import { flattenTreeSelectData } from './flatten-tree-select-data';

const data: TreeNodeData[] = [
  {
    value: 'fruits',
    label: 'Fruits',
    children: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
    ],
  },
  { value: 'milk', label: 'Milk' },
];

const deepData: TreeNodeData[] = [
  {
    value: 'root',
    label: 'Root',
    children: [
      {
        value: 'branch',
        label: 'Branch',
        children: [
          { value: 'leaf-1', label: 'Leaf 1' },
          { value: 'leaf-2', label: 'Leaf 2' },
        ],
      },
      { value: 'sibling', label: 'Sibling' },
    ],
  },
];

describe('flattenTreeSelectData', () => {
  it('flattens top-level nodes', () => {
    const result = flattenTreeSelectData(data, {});
    expect(result).toHaveLength(2);
    expect(result[0].node.value).toBe('fruits');
    expect(result[1].node.value).toBe('milk');
  });

  it('includes children when parent is expanded', () => {
    const result = flattenTreeSelectData(data, { fruits: true });
    expect(result).toHaveLength(4);
    expect(result.map((n) => n.node.value)).toEqual(['fruits', 'apple', 'banana', 'milk']);
  });

  it('does not include children when parent is collapsed', () => {
    const result = flattenTreeSelectData(data, { fruits: false });
    expect(result).toHaveLength(2);
  });

  it('sets correct level for each node', () => {
    const result = flattenTreeSelectData(data, { fruits: true });
    expect(result[0].level).toBe(1);
    expect(result[1].level).toBe(2);
    expect(result[2].level).toBe(2);
    expect(result[3].level).toBe(1);
  });

  it('sets correct parent for each node', () => {
    const result = flattenTreeSelectData(data, { fruits: true });
    expect(result[0].parent).toBe(null);
    expect(result[1].parent).toBe('fruits');
    expect(result[2].parent).toBe('fruits');
    expect(result[3].parent).toBe(null);
  });

  it('marks hasChildren correctly', () => {
    const result = flattenTreeSelectData(data, { fruits: true });
    expect(result[0].hasChildren).toBe(true);
    expect(result[1].hasChildren).toBe(false);
    expect(result[3].hasChildren).toBe(false);
  });

  it('marks expanded state correctly', () => {
    const result = flattenTreeSelectData(data, { fruits: true });
    expect(result[0].expanded).toBe(true);
    expect(result[1].expanded).toBe(false);
  });

  it('marks isLastChild correctly', () => {
    const result = flattenTreeSelectData(data, { fruits: true });
    expect(result[0].isLastChild).toBe(false);
    expect(result[2].isLastChild).toBe(true);
    expect(result[3].isLastChild).toBe(true);
  });

  it('handles deeply nested data', () => {
    const result = flattenTreeSelectData(deepData, { root: true, branch: true });
    expect(result).toHaveLength(5);
    expect(result[0].level).toBe(1);
    expect(result[1].level).toBe(2);
    expect(result[2].level).toBe(3);
    expect(result[3].level).toBe(3);
    expect(result[4].level).toBe(2);
  });

  it('sets lineGuides for deeply nested nodes', () => {
    const result = flattenTreeSelectData(deepData, { root: true, branch: true });
    expect(result[0].lineGuides).toEqual([]);
    expect(result[1].lineGuides).toEqual([]);
    expect(result[2].lineGuides).toEqual([true]);
    expect(result[3].lineGuides).toEqual([true]);
    expect(result[4].lineGuides).toEqual([]);
  });

  it('returns empty array for empty data', () => {
    const result = flattenTreeSelectData([], {});
    expect(result).toEqual([]);
  });
});
