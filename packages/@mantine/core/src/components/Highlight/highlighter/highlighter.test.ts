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
});
