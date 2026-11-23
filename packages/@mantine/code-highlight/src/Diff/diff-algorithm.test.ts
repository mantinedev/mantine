import { diffChars, diffLines, diffWords } from './diff-algorithm';

describe('diff-algorithm', () => {
  describe('diffChars', () => {
    it('returns equal for identical strings', () => {
      expect(diffChars('abc', 'abc')).toEqual([{ type: 'equal', value: 'abc' }]);
    });

    it('returns empty array for two empty strings', () => {
      expect(diffChars('', '')).toEqual([]);
    });

    it('returns all added when old is empty', () => {
      expect(diffChars('', 'abc')).toEqual([{ type: 'add', value: 'abc' }]);
    });

    it('returns all removed when new is empty', () => {
      expect(diffChars('abc', '')).toEqual([{ type: 'remove', value: 'abc' }]);
    });

    it('detects single character change', () => {
      const result = diffChars('abc', 'axc');
      expect(result).toEqual([
        { type: 'equal', value: 'a' },
        { type: 'remove', value: 'b' },
        { type: 'add', value: 'x' },
        { type: 'equal', value: 'c' },
      ]);
    });

    it('detects insertion', () => {
      const result = diffChars('ac', 'abc');
      expect(result).toEqual([
        { type: 'equal', value: 'a' },
        { type: 'add', value: 'b' },
        { type: 'equal', value: 'c' },
      ]);
    });

    it('detects deletion', () => {
      const result = diffChars('abc', 'ac');
      expect(result).toEqual([
        { type: 'equal', value: 'a' },
        { type: 'remove', value: 'b' },
        { type: 'equal', value: 'c' },
      ]);
    });

    it('handles completely different strings', () => {
      const result = diffChars('abc', 'xyz');
      expect(result).toEqual([
        { type: 'remove', value: 'abc' },
        { type: 'add', value: 'xyz' },
      ]);
    });
  });

  describe('diffWords', () => {
    it('returns equal for identical text', () => {
      expect(diffWords('hello world', 'hello world')).toEqual([
        { type: 'equal', value: 'hello world' },
      ]);
    });

    it('detects changed word', () => {
      const result = diffWords('the brown fox', 'the red fox');
      expect(result).toEqual([
        { type: 'equal', value: 'the ' },
        { type: 'remove', value: 'brown' },
        { type: 'add', value: 'red' },
        { type: 'equal', value: ' fox' },
      ]);
    });

    it('detects added word', () => {
      const result = diffWords('hello world', 'hello beautiful world');
      expect(result).toEqual([
        { type: 'equal', value: 'hello ' },
        { type: 'add', value: 'beautiful ' },
        { type: 'equal', value: 'world' },
      ]);
    });

    it('detects removed word', () => {
      const result = diffWords('hello beautiful world', 'hello world');
      expect(result).toEqual([
        { type: 'equal', value: 'hello ' },
        { type: 'remove', value: 'beautiful ' },
        { type: 'equal', value: 'world' },
      ]);
    });
  });

  describe('diffLines', () => {
    it('returns equal for identical text', () => {
      expect(diffLines('line1\nline2\n', 'line1\nline2\n')).toEqual([
        { type: 'equal', value: 'line1\nline2\n' },
      ]);
    });

    it('detects added line', () => {
      const result = diffLines('line1\nline3\n', 'line1\nline2\nline3\n');
      expect(result).toEqual([
        { type: 'equal', value: 'line1\n' },
        { type: 'add', value: 'line2\n' },
        { type: 'equal', value: 'line3\n' },
      ]);
    });

    it('detects removed line', () => {
      const result = diffLines('line1\nline2\nline3\n', 'line1\nline3\n');
      expect(result).toEqual([
        { type: 'equal', value: 'line1\n' },
        { type: 'remove', value: 'line2\n' },
        { type: 'equal', value: 'line3\n' },
      ]);
    });

    it('detects changed line', () => {
      const result = diffLines('line1\nold\nline3\n', 'line1\nnew\nline3\n');
      expect(result).toEqual([
        { type: 'equal', value: 'line1\n' },
        { type: 'remove', value: 'old\n' },
        { type: 'add', value: 'new\n' },
        { type: 'equal', value: 'line3\n' },
      ]);
    });

    it('handles empty old text', () => {
      expect(diffLines('', 'hello\n')).toEqual([{ type: 'add', value: 'hello\n' }]);
    });

    it('handles empty new text', () => {
      expect(diffLines('hello\n', '')).toEqual([{ type: 'remove', value: 'hello\n' }]);
    });

    it('handles multi-line replacement with different cardinalities', () => {
      const result = diffLines('a\nb\nc\n', 'x\n');
      expect(result).toEqual([
        { type: 'remove', value: 'a\nb\nc\n' },
        { type: 'add', value: 'x\n' },
      ]);
    });
  });
});
