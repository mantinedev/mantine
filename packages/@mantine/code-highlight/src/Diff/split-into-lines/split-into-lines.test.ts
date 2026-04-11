import { splitIntoLines } from './split-into-lines';

describe('splitIntoLines', () => {
  it('handles a single equal line', () => {
    const result = splitIntoLines([{ type: 'equal', value: 'hello' }]);
    expect(result).toEqual([{ type: 'equal', value: 'hello', oldLineNumber: 1, newLineNumber: 1 }]);
  });

  it('handles multiple equal lines with newlines', () => {
    const result = splitIntoLines([{ type: 'equal', value: 'line1\nline2\nline3\n' }]);
    expect(result).toEqual([
      { type: 'equal', value: 'line1\n', oldLineNumber: 1, newLineNumber: 1 },
      { type: 'equal', value: 'line2\n', oldLineNumber: 2, newLineNumber: 2 },
      { type: 'equal', value: 'line3\n', oldLineNumber: 3, newLineNumber: 3 },
    ]);
  });

  it('assigns correct line numbers to added and removed lines', () => {
    const result = splitIntoLines([
      { type: 'remove', value: 'old\n' },
      { type: 'add', value: 'new\n' },
    ]);
    expect(result).toEqual([
      { type: 'remove', value: 'old\n', oldLineNumber: 1 },
      { type: 'add', value: 'new\n', newLineNumber: 1 },
    ]);
  });

  it('returns empty array for empty input', () => {
    const result = splitIntoLines([]);
    expect(result).toEqual([]);
  });

  it('handles mixed add/remove/equal entries', () => {
    const result = splitIntoLines([
      { type: 'equal', value: 'same\n' },
      { type: 'remove', value: 'old\n' },
      { type: 'add', value: 'new1\nnew2\n' },
      { type: 'equal', value: 'end' },
    ]);
    expect(result).toEqual([
      { type: 'equal', value: 'same\n', oldLineNumber: 1, newLineNumber: 1 },
      { type: 'remove', value: 'old\n', oldLineNumber: 2 },
      { type: 'add', value: 'new1\n', newLineNumber: 2 },
      { type: 'add', value: 'new2\n', newLineNumber: 3 },
      { type: 'equal', value: 'end', oldLineNumber: 3, newLineNumber: 4 },
    ]);
  });
});
