import type { LineEntry } from '../split-into-lines/split-into-lines';
import { pairHunks } from './pair-hunks';

describe('pairHunks', () => {
  it('passes all equal lines through unchanged', () => {
    const entries: LineEntry[] = [
      { type: 'equal', value: 'line1\n', oldLineNumber: 1, newLineNumber: 1 },
      { type: 'equal', value: 'line2\n', oldLineNumber: 2, newLineNumber: 2 },
    ];
    const result = pairHunks(entries, 'words');
    expect(result).toEqual([
      { ...entries[0], kind: 'line' },
      { ...entries[1], kind: 'line' },
    ]);
  });

  it('creates hunkPair with inlineDiff for a single remove/add pair', () => {
    const entries: LineEntry[] = [
      { type: 'remove', value: 'old text\n', oldLineNumber: 1 },
      { type: 'add', value: 'new text\n', newLineNumber: 1 },
    ];
    const result = pairHunks(entries, 'words');
    expect(result).toHaveLength(1);
    expect(result[0].kind).toBe('hunkPair');
    if (result[0].kind === 'hunkPair') {
      expect(result[0].removedLine).toEqual(entries[0]);
      expect(result[0].addedLine).toEqual(entries[1]);
      expect(result[0].inlineDiff.length).toBeGreaterThan(0);
    }
  });

  it('pairs multi-line hunks correctly (N:M replacement)', () => {
    const entries: LineEntry[] = [
      { type: 'remove', value: 'old1\n', oldLineNumber: 1 },
      { type: 'remove', value: 'old2\n', oldLineNumber: 2 },
      { type: 'add', value: 'new1\n', newLineNumber: 1 },
      { type: 'add', value: 'new2\n', newLineNumber: 2 },
      { type: 'add', value: 'new3\n', newLineNumber: 3 },
    ];
    const result = pairHunks(entries, 'words');
    expect(result[0].kind).toBe('hunkPair');
    expect(result[1].kind).toBe('hunkPair');
    expect(result[2].kind).toBe('line');
    if (result[2].kind === 'line') {
      expect(result[2].type).toBe('add');
    }
  });

  it('leaves unpaired lines as plain entries', () => {
    const entries: LineEntry[] = [
      { type: 'remove', value: 'old1\n', oldLineNumber: 1 },
      { type: 'remove', value: 'old2\n', oldLineNumber: 2 },
      { type: 'add', value: 'new1\n', newLineNumber: 1 },
    ];
    const result = pairHunks(entries, 'words');
    expect(result[0].kind).toBe('hunkPair');
    expect(result[1].kind).toBe('line');
    if (result[1].kind === 'line') {
      expect(result[1].type).toBe('remove');
    }
  });

  it('produces no hunkPairs with diffMethod="lines"', () => {
    const entries: LineEntry[] = [
      { type: 'remove', value: 'old\n', oldLineNumber: 1 },
      { type: 'add', value: 'new\n', newLineNumber: 1 },
    ];
    const result = pairHunks(entries, 'lines');
    expect(result.every((r) => r.kind === 'line')).toBe(true);
  });
});
