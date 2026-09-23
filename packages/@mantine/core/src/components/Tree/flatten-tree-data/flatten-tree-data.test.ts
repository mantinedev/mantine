import { TreeNodeData } from '../Tree';
import { flattenTreeData } from './flatten-tree-data';

const data: TreeNodeData[] = [
  { value: 'a', label: 'A' },
  {
    value: 'b',
    label: 'B',
    children: [
      { value: 'b1', label: 'B1' },
      {
        value: 'b2',
        label: 'B2',
        children: [
          { value: 'b2a', label: 'B2a' },
          { value: 'b2b', label: 'B2b' },
        ],
      },
      { value: 'b3', label: 'B3' },
    ],
  },
  { value: 'c', label: 'C' },
];

const fullyExpanded = { a: true, b: true, b2: true, c: true };

function linesByValue(state = fullyExpanded) {
  const flat = flattenTreeData(data, state);
  return Object.fromEntries(flat.map((row) => [row.node.value, row.linesPath]));
}

describe('@mantine/core/Tree/flatten-tree-data', () => {
  it('returns an empty linesPath for level-1 nodes', () => {
    const map = linesByValue();
    expect(map.a).toEqual([]);
    expect(map.b).toEqual([]);
    expect(map.c).toEqual([]);
  });

  it('marks the own-level line as continuing for non-last siblings', () => {
    const map = linesByValue();
    expect(map.b1).toEqual(['continuing']);
    expect(map.b2).toEqual(['continuing']);
  });

  it('marks the own-level line as closing for the last sibling', () => {
    const map = linesByValue();
    expect(map.b3).toEqual(['closing']);
  });

  it('propagates ancestor "continuing" lines through descendants when the ancestor has more siblings below', () => {
    const map = linesByValue();
    // B2 has more siblings after it (B3), so its descendants get a continuing
    // line at column 2 (B2's column).
    expect(map.b2a).toEqual(['continuing', 'continuing']);
    expect(map.b2b).toEqual(['continuing', 'closing']);
  });

  it('does not draw ancestor lines below a last-sibling ancestor', () => {
    const dataWithLastAncestorChildren: TreeNodeData[] = [
      {
        value: 'root',
        label: 'Root',
        children: [
          { value: 'first', label: 'First' },
          {
            value: 'last',
            label: 'Last',
            children: [
              { value: 'last-child-1', label: 'L1' },
              { value: 'last-child-2', label: 'L2' },
            ],
          },
        ],
      },
    ];

    const flat = flattenTreeData(dataWithLastAncestorChildren, {
      root: true,
      last: true,
    });
    const map = Object.fromEntries(flat.map((row) => [row.node.value, row.linesPath]));

    // `last` is the last sibling at level 2, so it gets a closing line at column 2.
    expect(map.last).toEqual(['closing']);
    // `last`'s descendants should have NO line at column 2 (it's already closed),
    // and their own column 3 reflects their own sibling position.
    expect(map['last-child-1']).toEqual(['none', 'continuing']);
    expect(map['last-child-2']).toEqual(['none', 'closing']);
  });

  it('only emits ancestor entries for expanded levels (collapsed branches do not appear in output)', () => {
    const flat = flattenTreeData(data, { b: false });
    const values = flat.map((row) => row.node.value);
    expect(values).toEqual(['a', 'b', 'c']);
    // B is collapsed; its children should not appear at all.
    expect(values).not.toContain('b1');
  });

  it('treats an empty children array as no children', () => {
    const emptyChildrenData: TreeNodeData[] = [
      { value: 'populated', label: 'Populated', children: [{ value: 'child', label: 'Child' }] },
      { value: 'empty', label: 'Empty', children: [] },
      { value: 'empty-explicit', label: 'Empty explicit', children: [], hasChildren: false },
      { value: 'async', label: 'Async', hasChildren: true },
      { value: 'leaf', label: 'Leaf' },
    ];

    const flat = flattenTreeData(emptyChildrenData, {});
    const hasChildrenByValue = Object.fromEntries(
      flat.map((row) => [row.node.value, row.hasChildren])
    );

    expect(hasChildrenByValue).toEqual({
      populated: true,
      empty: false,
      'empty-explicit': false,
      async: true,
      leaf: false,
    });
  });
});
