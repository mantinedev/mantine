import { normalizeCode } from './normalize-code';

describe('@mantine/code-highlight/normalize-code', () => {
  it('trims the code by default', () => {
    expect(normalizeCode('\n    first\n  second\n  ')).toBe('first\n  second');
    expect(normalizeCode('  first  ')).toBe('first');
  });

  it('keeps indentation of the first line with withFirstLineIndentation option', () => {
    expect(normalizeCode('\n    first\n  second\n  ', { withFirstLineIndentation: true })).toBe(
      '    first\n  second'
    );
  });

  it('strips blank lines at the start with withFirstLineIndentation option', () => {
    expect(normalizeCode('  \n\t\n    first\n', { withFirstLineIndentation: true })).toBe(
      '    first'
    );
    expect(normalizeCode('\r\n    first\r\n', { withFirstLineIndentation: true })).toBe(
      '    first'
    );
  });

  it('strips trailing whitespace with withFirstLineIndentation option', () => {
    expect(normalizeCode('    first\nsecond  \n\n  ', { withFirstLineIndentation: true })).toBe(
      '    first\nsecond'
    );
  });

  it('returns an empty string for blank input', () => {
    expect(normalizeCode('  \n \n ', { withFirstLineIndentation: true })).toBe('');
    expect(normalizeCode('', { withFirstLineIndentation: true })).toBe('');
  });
});
