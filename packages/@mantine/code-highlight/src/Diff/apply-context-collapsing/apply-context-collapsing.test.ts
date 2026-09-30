import { ChangeBlock, DiffRow, LineRow } from '../group-change-blocks/group-change-blocks';
import { applyContextCollapsing } from './apply-context-collapsing';

function equalLine(n: number): LineRow {
  return {
    kind: 'line',
    type: 'equal',
    value: `line ${n}`,
    oldLineNumber: n,
    newLineNumber: n,
  };
}

function group(removed: number[], added: number[]): ChangeBlock {
  return {
    kind: 'block',
    removed: removed.map((n) => ({ type: 'remove', value: `old ${n}`, oldLineNumber: n })),
    added: added.map((n) => ({ type: 'add', value: `new ${n}`, newLineNumber: n })),
    inlineDiffs: [],
  };
}

describe('applyContextCollapsing', () => {
  it('returns items unchanged when contextLines is Infinity', () => {
    const items: DiffRow[] = [equalLine(1), equalLine(2), equalLine(3)];
    const result = applyContextCollapsing(items, Infinity, new Set());
    expect(result).toEqual(items);
  });

  it('collapses all unchanged lines when contextLines is 0', () => {
    const items: DiffRow[] = [
      equalLine(1),
      equalLine(2),
      group([3], [3]),
      equalLine(4),
      equalLine(5),
    ];
    const result = applyContextCollapsing(items, 0, new Set());
    expect(result).toEqual([
      { kind: 'expand', sectionIndex: 0, hiddenCount: 2 },
      items[2],
      { kind: 'expand', sectionIndex: 1, hiddenCount: 2 },
    ]);
  });

  it('shows 1 line around each change when contextLines is 1', () => {
    const items: DiffRow[] = [
      equalLine(1),
      equalLine(2),
      equalLine(3),
      group([4], []),
      equalLine(5),
      equalLine(6),
      equalLine(7),
    ];
    const result = applyContextCollapsing(items, 1, new Set());
    expect(result[0]).toEqual({ kind: 'expand', sectionIndex: 0, hiddenCount: 2 });
    expect(result[1]).toEqual(items[2]);
    expect(result[2]).toEqual(items[3]);
    expect(result[3]).toEqual(items[4]);
    expect(result[4]).toEqual({ kind: 'expand', sectionIndex: 1, hiddenCount: 2 });
  });

  it('has correct hiddenCount on expand markers', () => {
    const items: DiffRow[] = [
      equalLine(1),
      equalLine(2),
      equalLine(3),
      equalLine(4),
      equalLine(5),
      group([6], []),
    ];
    const result = applyContextCollapsing(items, 1, new Set());
    expect(result[0]).toEqual({ kind: 'expand', sectionIndex: 0, hiddenCount: 4 });
  });

  it('includes items from expanded sections', () => {
    const items: DiffRow[] = [
      equalLine(1),
      equalLine(2),
      equalLine(3),
      group([4], []),
      equalLine(5),
    ];
    const result = applyContextCollapsing(items, 0, new Set([0]));
    expect(result).toEqual([
      { ...items[0], revealedSectionIndex: 0 },
      items[1],
      items[2],
      items[3],
      { kind: 'expand', sectionIndex: 1, hiddenCount: 1 },
    ]);
  });

  it('treats a multi-line change block as a single change item', () => {
    const items: DiffRow[] = [
      equalLine(1),
      equalLine(2),
      group([3, 4, 5], [3]),
      equalLine(6),
      equalLine(7),
    ];
    const result = applyContextCollapsing(items, 1, new Set());
    expect(result).toEqual([
      { kind: 'expand', sectionIndex: 0, hiddenCount: 1 },
      items[1],
      items[2],
      items[3],
      { kind: 'expand', sectionIndex: 1, hiddenCount: 1 },
    ]);
  });

  it('keeps a single unchanged line between adjacent change blocks visible with contextLines 0', () => {
    const items: DiffRow[] = [group([1], [1]), equalLine(2), group([3], [3])];
    expect(applyContextCollapsing(items, 0, new Set())).toEqual([
      items[0],
      { kind: 'expand', sectionIndex: 0, hiddenCount: 1 },
      items[2],
    ]);
  });

  it('shows everything when contextLines is larger than the file', () => {
    const items: DiffRow[] = [equalLine(1), group([2], [2]), equalLine(3)];
    expect(applyContextCollapsing(items, 100, new Set())).toEqual(items);
  });
});
