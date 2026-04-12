import type { TreeNodeData } from '../Tree';
import { checkedToValue, expandToLeafChecked } from './get-checked-values-by-strategy';

const data: TreeNodeData[] = [
  {
    value: 'fruits',
    label: 'Fruits',
    children: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
    ],
  },
  {
    value: 'vegetables',
    label: 'Vegetables',
    children: [{ value: 'carrot', label: 'Carrot' }],
  },
  { value: 'milk', label: 'Milk' },
];

describe('expandToLeafChecked', () => {
  it('expands parent value to leaf children', () => {
    const result = expandToLeafChecked(['fruits'], data);
    expect(result.sort()).toEqual(['apple', 'banana']);
  });

  it('returns leaf values as-is', () => {
    const result = expandToLeafChecked(['apple'], data);
    expect(result).toEqual(['apple']);
  });

  it('handles mix of parent and leaf values', () => {
    const result = expandToLeafChecked(['fruits', 'milk'], data);
    expect(result.sort()).toEqual(['apple', 'banana', 'milk']);
  });

  it('deduplicates leaf values', () => {
    const result = expandToLeafChecked(['fruits', 'apple'], data);
    expect(result.sort()).toEqual(['apple', 'banana']);
  });

  it('returns empty array for empty input', () => {
    expect(expandToLeafChecked([], data)).toEqual([]);
  });
});

describe('checkedToValue', () => {
  it('returns empty array for empty checked state', () => {
    expect(checkedToValue([], data, 'child')).toEqual([]);
    expect(checkedToValue([], data, 'all')).toEqual([]);
    expect(checkedToValue([], data, 'parent')).toEqual([]);
  });

  it('returns checked state as-is for child strategy', () => {
    const result = checkedToValue(['apple', 'banana'], data, 'child');
    expect(result).toEqual(['apple', 'banana']);
  });

  it('returns all checked nodes (parents + children) for all strategy', () => {
    const result = checkedToValue(['apple', 'banana'], data, 'all');
    expect(result.sort()).toEqual(['apple', 'banana', 'fruits']);
  });

  it('returns topmost checked parents for parent strategy', () => {
    const result = checkedToValue(['apple', 'banana'], data, 'parent');
    expect(result).toEqual(['fruits']);
  });

  it('returns leaf node for parent strategy when only partial children checked', () => {
    const result = checkedToValue(['apple'], data, 'parent');
    expect(result).toEqual(['apple']);
  });
});
