import type { LineEntry } from '../split-into-lines/split-into-lines';
import { type ChangeBlock, computeSimilarity, groupChangeBlocks } from './group-change-blocks';

describe('computeSimilarity', () => {
  it('returns 1 for identical strings', () => {
    expect(computeSimilarity('hello', 'hello')).toBe(1);
  });

  it('returns 0 when one string is empty', () => {
    expect(computeSimilarity('', 'hello')).toBe(0);
    expect(computeSimilarity('hello', '')).toBe(0);
  });

  it('returns 1 for two empty strings', () => {
    expect(computeSimilarity('', '')).toBe(1);
  });

  it('returns high similarity for similar strings', () => {
    const sim = computeSimilarity(
      '<Button color="blue">Click me</Button>',
      '<Button color="teal">Click me</Button>'
    );
    expect(sim).toBeGreaterThan(0.8);
  });

  it('returns low similarity for dissimilar strings', () => {
    const sim = computeSimilarity('return <Button color="blue">Click me</Button>;', 'return (');
    expect(sim).toBeLessThan(0.4);
  });
});

describe('groupChangeBlocks', () => {
  it('passes all equal lines through unchanged', () => {
    const entries: LineEntry[] = [
      { type: 'equal', value: 'line1', oldLineNumber: 1, newLineNumber: 1 },
      { type: 'equal', value: 'line2', oldLineNumber: 2, newLineNumber: 2 },
    ];
    const result = groupChangeBlocks(entries, 'words');
    expect(result).toEqual([
      { ...entries[0], kind: 'line' },
      { ...entries[1], kind: 'line' },
    ]);
  });

  it('groups a run of removed lines followed by added lines into one change block', () => {
    const entries: LineEntry[] = [
      { type: 'equal', value: 'same', oldLineNumber: 1, newLineNumber: 1 },
      { type: 'remove', value: 'foo = 1', oldLineNumber: 2 },
      { type: 'remove', value: 'bar = 2', oldLineNumber: 3 },
      { type: 'add', value: 'foo = 10', newLineNumber: 2 },
      { type: 'add', value: 'bar = 20', newLineNumber: 3 },
      { type: 'equal', value: 'end', oldLineNumber: 4, newLineNumber: 4 },
    ];
    const result = groupChangeBlocks(entries, 'words');
    expect(result).toHaveLength(3);
    const block = result[1] as ChangeBlock;
    expect(block.kind).toBe('block');
    expect(block.removed).toEqual([entries[1], entries[2]]);
    expect(block.added).toEqual([entries[3], entries[4]]);
    expect(block.inlineDiffs).toHaveLength(2);
    expect(block.inlineDiffs.every(Boolean)).toBe(true);
  });

  it('computes inline diff for similar remove/add lines', () => {
    const entries: LineEntry[] = [
      { type: 'remove', value: '<Button color="blue">Click</Button>', oldLineNumber: 1 },
      { type: 'add', value: '<Button color="teal">Click</Button>', newLineNumber: 1 },
    ];
    const result = groupChangeBlocks(entries, 'words');
    expect(result).toHaveLength(1);
    const block = result[0] as ChangeBlock;
    expect(block.inlineDiffs[0]).toContainEqual({ type: 'remove', value: 'blue' });
    expect(block.inlineDiffs[0]).toContainEqual({ type: 'add', value: 'teal' });
  });

  it('does not compute inline diff for dissimilar lines', () => {
    const entries: LineEntry[] = [
      {
        type: 'remove',
        value: 'return <Button color="blue">Click me</Button>;',
        oldLineNumber: 1,
      },
      { type: 'add', value: 'return (', newLineNumber: 1 },
    ];
    const result = groupChangeBlocks(entries, 'words');
    expect(result).toHaveLength(1);
    expect((result[0] as ChangeBlock).inlineDiffs).toEqual([undefined]);
  });

  it('computes inline diff only for similar positional pairs', () => {
    const entries: LineEntry[] = [
      { type: 'remove', value: 'const foo = "hello";', oldLineNumber: 1 },
      { type: 'remove', value: 'return (', oldLineNumber: 2 },
      { type: 'add', value: 'const foo = "hi";', newLineNumber: 1 },
      { type: 'add', value: '<MyComponent xyz={true} />', newLineNumber: 2 },
    ];
    const block = groupChangeBlocks(entries, 'words')[0] as ChangeBlock;
    expect(block.inlineDiffs[0]).toBeDefined();
    expect(block.inlineDiffs[1]).toBeUndefined();
  });

  it('keeps surplus lines of the longer side in the block without inline diffs', () => {
    const entries: LineEntry[] = [
      { type: 'remove', value: 'const foo = "hello";', oldLineNumber: 1 },
      { type: 'add', value: 'const foo = "hi";', newLineNumber: 1 },
      { type: 'add', value: 'const bar = "world";', newLineNumber: 2 },
    ];
    const result = groupChangeBlocks(entries, 'words');
    expect(result).toHaveLength(1);
    const block = result[0] as ChangeBlock;
    expect(block.removed).toHaveLength(1);
    expect(block.added).toHaveLength(2);
    expect(block.inlineDiffs).toHaveLength(1);
  });

  it('does not compute inline diff when either paired line is empty', () => {
    const entries: LineEntry[] = [
      { type: 'remove', value: '  ', oldLineNumber: 1 },
      { type: 'remove', value: '', oldLineNumber: 2 },
      { type: 'add', value: '', newLineNumber: 1 },
      { type: 'add', value: ' ', newLineNumber: 2 },
    ];
    const block = groupChangeBlocks(entries, 'chars')[0] as ChangeBlock;
    expect(block.inlineDiffs).toEqual([undefined, undefined]);
  });

  it('does not compute inline diffs with diffMethod="lines"', () => {
    const entries: LineEntry[] = [
      { type: 'remove', value: '<Button color="blue"/>', oldLineNumber: 1 },
      { type: 'add', value: '<Button color="teal"/>', newLineNumber: 1 },
    ];
    const result = groupChangeBlocks(entries, 'lines');
    expect(result).toHaveLength(1);
    expect((result[0] as ChangeBlock).inlineDiffs).toEqual([undefined]);
  });

  it('creates blocks with only removed or only added lines', () => {
    const entries: LineEntry[] = [
      { type: 'remove', value: 'gone', oldLineNumber: 1 },
      { type: 'equal', value: 'same', oldLineNumber: 2, newLineNumber: 1 },
      { type: 'add', value: 'new', newLineNumber: 2 },
    ];
    const result = groupChangeBlocks(entries, 'words');
    expect(result).toEqual([
      { kind: 'block', removed: [entries[0]], added: [], inlineDiffs: [] },
      { ...entries[1], kind: 'line' },
      { kind: 'block', removed: [], added: [entries[2]], inlineDiffs: [] },
    ]);
  });
});
