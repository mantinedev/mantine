import { highlighter } from './highlighter';

describe('@mantine/core/Highlight/highlighter', () => {
  const VALUE = 'Hello, World';

  it('highlights start of string', () => {
    expect(highlighter(VALUE, 'Hell')).toStrictEqual([
      { chunk: 'Hell', highlighted: true },
      { chunk: 'o, World', highlighted: false },
    ]);
  });

  it('Highlights middle of string', () => {
    expect(highlighter(VALUE, 'llo, W')).toStrictEqual([
      { chunk: 'He', highlighted: false },
      { chunk: 'llo, W', highlighted: true },
      { chunk: 'orld', highlighted: false },
    ]);
  });

  it('Highlights multiple of string', () => {
    expect(highlighter(VALUE, ['Hell', 'world'])).toStrictEqual([
      { chunk: 'Hell', highlighted: true },
      { chunk: 'o, ', highlighted: false },
      { chunk: 'World', highlighted: true },
    ]);
  });

  it('returns initial string if highlight is empty', () => {
    expect(highlighter(VALUE, '')).toStrictEqual([{ chunk: VALUE, highlighted: false }]);
    expect(highlighter(VALUE, [])).toStrictEqual([{ chunk: VALUE, highlighted: false }]);
    expect(highlighter(VALUE, ['', ''])).toStrictEqual([{ chunk: VALUE, highlighted: false }]);
  });

  it('highlights uppercased value', () => {
    expect(highlighter(VALUE, 'HELL')).toStrictEqual([
      { chunk: 'Hell', highlighted: true },
      { chunk: 'o, World', highlighted: false },
    ]);
    expect(highlighter(VALUE, 'Hello,')).toStrictEqual([
      { chunk: 'Hello,', highlighted: true },
      { chunk: ' World', highlighted: false },
    ]);
  });

  it('highlights value with whitespace', () => {
    expect(highlighter(VALUE, 'Hello  \t')).toStrictEqual([
      { chunk: 'Hello', highlighted: true },
      { chunk: ', World', highlighted: false },
    ]);
  });

  it('does not highlight if nothing found', () => {
    expect(highlighter(VALUE, 'Hi, there')).toStrictEqual([{ chunk: VALUE, highlighted: false }]);
  });

  it('does not highlight if highlight is null or undefined', () => {
    expect(highlighter(VALUE, null!)).toStrictEqual([{ chunk: VALUE, highlighted: false }]);
    expect(highlighter(VALUE, undefined!)).toStrictEqual([{ chunk: VALUE, highlighted: false }]);
  });

  it('escapes regex symbols', () => {
    expect(highlighter('[Hello], there', 'lo], t')).toStrictEqual([
      { chunk: '[Hel', highlighted: false },
      { chunk: 'lo], t', highlighted: true },
      { chunk: 'here', highlighted: false },
    ]);

    expect(highlighter('([Hello]), there', ['([H', 'o])'])).toStrictEqual([
      { chunk: '([H', highlighted: true },
      { chunk: 'ell', highlighted: false },
      { chunk: 'o])', highlighted: true },
      { chunk: ', there', highlighted: false },
    ]);
  });

  describe('accentInsensitive option', () => {
    it('matches accented characters when searching with unaccented term', () => {
      expect(highlighter('I love café', 'cafe', { accentInsensitive: true })).toStrictEqual([
        { chunk: 'I love ', highlighted: false },
        { chunk: 'café', highlighted: true },
      ]);
    });

    it('matches unaccented characters when searching with accented term', () => {
      expect(highlighter('I love cafe', 'café', { accentInsensitive: true })).toStrictEqual([
        { chunk: 'I love ', highlighted: false },
        { chunk: 'cafe', highlighted: true },
      ]);
    });

    it('preserves original accented characters in highlighted chunk', () => {
      expect(highlighter('résumé and resume', 'resume', { accentInsensitive: true })).toStrictEqual(
        [
          { chunk: 'résumé', highlighted: true },
          { chunk: ' and ', highlighted: false },
          { chunk: 'resume', highlighted: true },
        ]
      );
    });

    it('does not match accented variant when accentInsensitive is false', () => {
      expect(highlighter('I love café', 'cafe', { accentInsensitive: false })).toStrictEqual([
        { chunk: 'I love café', highlighted: false },
      ]);
    });

    it('combines with caseInsensitive', () => {
      expect(
        highlighter('CAFÉ is nice', 'cafe', { accentInsensitive: true, caseInsensitive: true })
      ).toStrictEqual([
        { chunk: 'CAFÉ', highlighted: true },
        { chunk: ' is nice', highlighted: false },
      ]);
    });

    it('does not match when case differs and caseInsensitive is false', () => {
      expect(
        highlighter('CAFÉ is nice', 'cafe', { accentInsensitive: true, caseInsensitive: false })
      ).toStrictEqual([{ chunk: 'CAFÉ is nice', highlighted: false }]);
    });

    it('combines with wholeWord', () => {
      expect(
        highlighter('café cafés', 'cafe', { accentInsensitive: true, wholeWord: true })
      ).toStrictEqual([
        { chunk: 'café', highlighted: true },
        { chunk: ' cafés', highlighted: false },
      ]);
    });

    it('matches multiple accented terms', () => {
      expect(
        highlighter('naïve résumé', ['naive', 'resume'], { accentInsensitive: true })
      ).toStrictEqual([
        { chunk: 'naïve', highlighted: true },
        { chunk: ' ', highlighted: false },
        { chunk: 'résumé', highlighted: true },
      ]);
    });

    it('handles decomposed (NFD) accents without corrupting later matches', () => {
      const text = 'café cafe';
      expect(highlighter(text, 'cafe', { accentInsensitive: true })).toStrictEqual([
        { chunk: 'café', highlighted: true },
        { chunk: ' ', highlighted: false },
        { chunk: 'cafe', highlighted: true },
      ]);
    });

    it('handles fully decomposed text with multiple matches', () => {
      const text = 'näive résumé';
      expect(highlighter(text, ['naive', 'resume'], { accentInsensitive: true })).toStrictEqual([
        { chunk: 'näive', highlighted: true },
        { chunk: ' ', highlighted: false },
        { chunk: 'résumé', highlighted: true },
      ]);
    });

    it('uses true as the default for accentInsensitive when options is omitted', () => {
      expect(highlighter('café', 'cafe')).toStrictEqual([{ chunk: 'café', highlighted: true }]);
    });

    it('uses true as the default for accentInsensitive with partial options', () => {
      expect(highlighter('café', 'cafe', { wholeWord: false })).toStrictEqual([
        { chunk: 'café', highlighted: true },
      ]);
    });
  });

  describe('case sensitivity', () => {
    it('does not match different casing when caseInsensitive is false', () => {
      expect(highlighter(VALUE, 'hell', { caseInsensitive: false })).toStrictEqual([
        { chunk: VALUE, highlighted: false },
      ]);
    });

    it('matches different casing when caseInsensitive is true', () => {
      expect(highlighter(VALUE, 'hell', { caseInsensitive: true })).toStrictEqual([
        { chunk: 'Hell', highlighted: true },
        { chunk: 'o, World', highlighted: false },
      ]);
    });

    it('keeps caseInsensitive default of true when other options are passed', () => {
      expect(highlighter(VALUE, 'hell', { wholeWord: false })).toStrictEqual([
        { chunk: 'Hell', highlighted: true },
        { chunk: 'o, World', highlighted: false },
      ]);
    });
  });

  describe('wholeWord option', () => {
    it('matches whole words only when wholeWord is true', () => {
      const text = 'the theme is there';
      expect(highlighter(text, 'the', { wholeWord: true })).toStrictEqual([
        { chunk: 'the', highlighted: true },
        { chunk: ' theme is there', highlighted: false },
      ]);
    });

    it('matches partial words when wholeWord is false', () => {
      const text = 'the theme is there';
      expect(highlighter(text, 'the', { wholeWord: false })).toStrictEqual([
        { chunk: 'the', highlighted: true },
        { chunk: ' ', highlighted: false },
        { chunk: 'the', highlighted: true },
        { chunk: 'me is ', highlighted: false },
        { chunk: 'the', highlighted: true },
        { chunk: 're', highlighted: false },
      ]);
    });

    it('matches multiple whole words', () => {
      const text = 'test testing tested';
      expect(highlighter(text, ['test', 'tested'], { wholeWord: true })).toStrictEqual([
        { chunk: 'test', highlighted: true },
        { chunk: ' testing ', highlighted: false },
        { chunk: 'tested', highlighted: true },
      ]);
    });

    it('handles word boundaries correctly with punctuation', () => {
      const text = 'Hello, world! Hello-world';
      expect(highlighter(text, 'Hello', { wholeWord: true })).toStrictEqual([
        { chunk: 'Hello', highlighted: true },
        { chunk: ', world! ', highlighted: false },
        { chunk: 'Hello', highlighted: true },
        { chunk: '-world', highlighted: false },
      ]);
    });

    it('does not match when word is part of hyphenated compound', () => {
      const text = 'test test-case testing';
      expect(highlighter(text, 'test', { wholeWord: true })).toStrictEqual([
        { chunk: 'test', highlighted: true },
        { chunk: ' ', highlighted: false },
        { chunk: 'test', highlighted: true },
        { chunk: '-case testing', highlighted: false },
      ]);
    });

    it('matches whole word containing non-ASCII letters', () => {
      const text = 'ergō numerus syllabārum et vōcālium īdem est';
      expect(highlighter(text, 'īdem', { wholeWord: true })).toStrictEqual([
        { chunk: 'ergō numerus syllabārum et vōcālium ', highlighted: false },
        { chunk: 'īdem', highlighted: true },
        { chunk: ' est', highlighted: false },
      ]);
    });

    it('matches whole word containing accented characters', () => {
      const text = 'I love café and croissant';
      expect(highlighter(text, 'café', { wholeWord: true })).toStrictEqual([
        { chunk: 'I love ', highlighted: false },
        { chunk: 'café', highlighted: true },
        { chunk: ' and croissant', highlighted: false },
      ]);
    });

    it('does not match partial word across Unicode letter boundary', () => {
      const text = 'cafés are nice';
      expect(highlighter(text, 'café', { wholeWord: true })).toStrictEqual([
        { chunk: 'cafés are nice', highlighted: false },
      ]);
    });

    it('does not match word adjacent to digit', () => {
      const text = 'test test1 final';
      expect(highlighter(text, 'test', { wholeWord: true })).toStrictEqual([
        { chunk: 'test', highlighted: true },
        { chunk: ' test1 final', highlighted: false },
      ]);
    });

    it('does not match word adjacent to underscore', () => {
      const text = 'hello hello_world end';
      expect(highlighter(text, 'hello', { wholeWord: true })).toStrictEqual([
        { chunk: 'hello', highlighted: true },
        { chunk: ' hello_world end', highlighted: false },
      ]);
    });
  });
});
