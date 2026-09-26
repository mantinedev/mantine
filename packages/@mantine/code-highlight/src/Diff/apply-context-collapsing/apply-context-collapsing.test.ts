import { HunkPair } from '../pair-hunks/pair-hunks';
import { LineEntry } from '../split-into-lines/split-into-lines';
import { applyContextCollapsing } from './apply-context-collapsing';

type PairedRow = (LineEntry & { kind: 'line' }) | HunkPair;

function equalLine(n: number): LineEntry & { kind: 'line' } {
  return {
    kind: 'line',
    type: 'equal',
    value: `line ${n}\n`,
    oldLineNumber: n,
    newLineNumber: n,
  };
}

function removeLine(n: number): LineEntry & { kind: 'line' } {
  return { kind: 'line', type: 'remove', value: `old ${n}\n`, oldLineNumber: n };
}

function addLine(n: number): LineEntry & { kind: 'line' } {
  return { kind: 'line', type: 'add', value: `new ${n}\n`, newLineNumber: n };
}

describe('applyContextCollapsing', () => {
  it('returns items unchanged when contextLines is Infinity', () => {
    const items: PairedRow[] = [equalLine(1), equalLine(2), equalLine(3)];
    const result = applyContextCollapsing(items, Infinity, new Set());
    expect(result).toEqual(items);
  });

  it('collapses all unchanged lines when contextLines is 0', () => {
    const items: PairedRow[] = [
      equalLine(1),
      equalLine(2),
      removeLine(3),
      addLine(3),
      equalLine(4),
      equalLine(5),
    ];
    const result = applyContextCollapsing(items, 0, new Set());
    expect(result[0]).toEqual({ kind: 'expand', sectionIndex: 0, hiddenCount: 2 });
    expect(result[1]).toEqual(items[2]);
    expect(result[2]).toEqual(items[3]);
    expect(result[3]).toEqual({ kind: 'expand', sectionIndex: 1, hiddenCount: 2 });
  });

  it('shows 1 line around each change when contextLines is 1', () => {
    const items: PairedRow[] = [
      equalLine(1),
      equalLine(2),
      equalLine(3),
      removeLine(4),
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
    const items: PairedRow[] = [
      equalLine(1),
      equalLine(2),
      equalLine(3),
      equalLine(4),
      equalLine(5),
      removeLine(6),
    ];
    const result = applyContextCollapsing(items, 1, new Set());
    expect(result[0]).toEqual({ kind: 'expand', sectionIndex: 0, hiddenCount: 4 });
  });

  it('includes items from expanded sections', () => {
    const items: PairedRow[] = [
      equalLine(1),
      equalLine(2),
      equalLine(3),
      removeLine(4),
      equalLine(5),
    ];
    const result = applyContextCollapsing(items, 0, new Set([0]));
    expect(result[0]).toEqual(items[0]);
    expect(result[1]).toEqual(items[1]);
    expect(result[2]).toEqual(items[2]);
    expect(result[3]).toEqual(items[3]);
  });
});
