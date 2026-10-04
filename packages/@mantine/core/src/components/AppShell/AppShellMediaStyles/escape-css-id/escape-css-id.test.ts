import { escapeCssId } from './escape-css-id';

describe('@mantine/core/AppShell/escape-css-id', () => {
  it('returns safe identifiers unchanged', () => {
    expect(escapeCssId('mantine-r1')).toBe('mantine-r1');
    expect(escapeCssId('app_shell')).toBe('app_shell');
    expect(escapeCssId('Ünïcode')).toBe('Ünïcode');
  });

  it('escapes selector punctuation', () => {
    expect(escapeCssId('app:shell')).toBe('app\\:shell');
    expect(escapeCssId('app.shell')).toBe('app\\.shell');
    expect(escapeCssId('app shell')).toBe('app\\ shell');
    expect(escapeCssId('a[b]')).toBe('a\\[b\\]');
  });

  it('escapes a leading digit and a lone hyphen', () => {
    expect(escapeCssId('1shell')).toBe('\\31 shell');
    expect(escapeCssId('-1shell')).toBe('-\\31 shell');
    expect(escapeCssId('-')).toBe('\\-');
    expect(escapeCssId('--shell')).toBe('--shell');
  });

  it('replaces NULL and escapes control characters', () => {
    expect(escapeCssId(`a${String.fromCharCode(0)}b`)).toBe(`a${String.fromCharCode(0xfffd)}b`);
    expect(escapeCssId(`a${String.fromCharCode(1)}b`)).toBe('a\\1 b');
  });
});
