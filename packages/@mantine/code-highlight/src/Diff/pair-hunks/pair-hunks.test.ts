import { LineEntry } from '../split-into-lines/split-into-lines';
import { computeSimilarity, pairHunks } from './pair-hunks';

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

  it('creates hunkPair for similar remove/add lines', () => {
    const entries: LineEntry[] = [
      { type: 'remove', value: '<Button color="blue">Click</Button>\n', oldLineNumber: 1 },
      { type: 'add', value: '<Button color="teal">Click</Button>\n', newLineNumber: 1 },
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

  it('does not pair dissimilar lines', () => {
    const entries: LineEntry[] = [
      {
        type: 'remove',
        value: 'return <Button color="blue">Click me</Button>;\n',
        oldLineNumber: 1,
      },
      { type: 'add', value: 'return (\n', newLineNumber: 1 },
    ];
    const result = pairHunks(entries, 'words');
    expect(result).toHaveLength(2);
    expect(result.every((r) => r.kind === 'line')).toBe(true);
  });

  it('skips pairing for dissimilar positional matches while pairing similar ones', () => {
    const entries: LineEntry[] = [
      { type: 'remove', value: 'const foo = "hello";\n', oldLineNumber: 1 },
      { type: 'remove', value: 'return (\n', oldLineNumber: 2 },
      { type: 'add', value: 'const foo = "hi";\n', newLineNumber: 1 },
      { type: 'add', value: '<MyComponent xyz={true} />\n', newLineNumber: 2 },
    ];
    const result = pairHunks(entries, 'words');
    expect(result[0].kind).toBe('hunkPair');
    expect(result[1].kind).toBe('line');
    expect(result[2].kind).toBe('line');
  });

  it('leaves unpaired surplus lines as plain entries', () => {
    const entries: LineEntry[] = [
      { type: 'remove', value: 'const foo = "hello";\n', oldLineNumber: 1 },
      { type: 'add', value: 'const foo = "hi";\n', newLineNumber: 1 },
      { type: 'add', value: 'const bar = "world";\n', newLineNumber: 2 },
    ];
    const result = pairHunks(entries, 'words');
    expect(result[0].kind).toBe('hunkPair');
    expect(result[1].kind).toBe('line');
    if (result[1].kind === 'line') {
      expect(result[1].type).toBe('add');
    }
  });

  it('produces no hunkPairs with diffMethod="lines"', () => {
    const entries: LineEntry[] = [
      { type: 'remove', value: '<Button color="blue"/>\n', oldLineNumber: 1 },
      { type: 'add', value: '<Button color="teal"/>\n', newLineNumber: 1 },
    ];
    const result = pairHunks(entries, 'lines');
    expect(result.every((r) => r.kind === 'line')).toBe(true);
  });
});
