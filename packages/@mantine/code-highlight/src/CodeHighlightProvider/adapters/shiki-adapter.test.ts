import { createShikiAdapter } from './shiki-adapter';

function createShikiMock(loadedLanguages: string[]) {
  return {
    getLoadedLanguages: () => loadedLanguages,
    loadLanguage: jest.fn(() => Promise.resolve()),
    codeToHtml: (code: string) => `<pre><code>${code}</code></pre>`,
  };
}

describe('@mantine/code-highlight/createShikiAdapter', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    warn.mockRestore();
  });

  it('does not highlight code with language that is not loaded', () => {
    const shiki = createShikiMock(['tsx']);
    const adapter = createShikiAdapter(() => Promise.resolve(shiki));
    const highlight = adapter.getHighlighter(shiki);

    expect(highlight({ code: 'test', language: 'python', colorScheme: 'light' })).toStrictEqual({
      highlightedCode: 'test',
      isHighlighted: false,
    });

    expect(highlight({ code: 'test', language: 'tsx', colorScheme: 'light' }).isHighlighted).toBe(
      true
    );
  });

  it('warns once per language that is not loaded and cannot be loaded on demand', () => {
    const shiki = createShikiMock(['tsx']);
    const adapter = createShikiAdapter(() => Promise.resolve(shiki));
    const highlight = adapter.getHighlighter(shiki);

    highlight({ code: 'test', language: 'python', colorScheme: 'light' });
    highlight({ code: 'test', language: 'python', colorScheme: 'light' });
    highlight({ code: 'test', language: 'ruby', colorScheme: 'light' });
    highlight({ code: 'test', language: 'tsx', colorScheme: 'light' });

    expect(warn).toHaveBeenCalledTimes(2);
    expect(warn.mock.calls[0][0]).toContain('`python`');
    expect(warn.mock.calls[1][0]).toContain('`ruby`');
  });

  it('does not warn about languages that are loaded on demand', () => {
    const shiki = createShikiMock(['tsx']);
    const adapter = createShikiAdapter(() => Promise.resolve(shiki), {
      resolveLanguage: (language) => language,
    });

    adapter.loadLanguage!(shiki, 'python');
    adapter.getHighlighter(shiki)({ code: 'test', language: 'python', colorScheme: 'light' });

    expect(warn).not.toHaveBeenCalled();
  });

  it('highlights plain text languages without loading grammar', () => {
    const shiki = createShikiMock([]);
    const adapter = createShikiAdapter(() => Promise.resolve(shiki));
    const highlight = adapter.getHighlighter(shiki);

    ['text', 'plaintext', 'txt', 'plain', 'ansi'].forEach((language) => {
      expect(highlight({ code: 'test', language, colorScheme: 'light' }).isHighlighted).toBe(true);
    });

    expect(warn).not.toHaveBeenCalled();
  });

  it('resolves grammar of languages that are not loaded yet', () => {
    const shiki = createShikiMock(['tsx']);
    const resolveLanguage = jest.fn((language: string) => `${language}-grammar`);
    const adapter = createShikiAdapter(() => Promise.resolve(shiki), { resolveLanguage });

    expect(adapter.loadLanguage!(shiki, 'tsx')).toBeUndefined();
    expect(resolveLanguage).not.toHaveBeenCalled();

    expect(adapter.loadLanguage!(shiki, 'python')).toBeInstanceOf(Promise);
    expect(shiki.loadLanguage).toHaveBeenCalledWith('python-grammar');
  });

  it('converts synchronous loadLanguage errors into a rejected promise', async () => {
    const shiki = createShikiMock([]);
    shiki.loadLanguage = jest.fn(() => {
      throw new Error('Language `python` is not included in this bundle.');
    });

    const adapter = createShikiAdapter(() => Promise.resolve(shiki), {
      resolveLanguage: (language) => language,
    });

    const result = adapter.loadLanguage!(shiki, 'python');

    expect(result).toBeInstanceOf(Promise);
    await expect(result).rejects.toThrow('is not included in this bundle');
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn.mock.calls[0][0]).toContain('`python`');
  });

  it('warns when grammar loading rejects asynchronously', async () => {
    const shiki = createShikiMock([]);
    shiki.loadLanguage = jest.fn(() => Promise.reject(new Error('Failed to fetch chunk')));

    const adapter = createShikiAdapter(() => Promise.resolve(shiki), {
      resolveLanguage: (language) => language,
    });

    await expect(adapter.loadLanguage!(shiki, 'python')).rejects.toThrow('Failed to fetch chunk');
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn.mock.calls[0][0]).toContain('`python`');
  });

  it('does not load grammar of unsupported languages', () => {
    const shiki = createShikiMock([]);
    const adapter = createShikiAdapter(() => Promise.resolve(shiki), {
      resolveLanguage: () => null,
    });

    expect(adapter.loadLanguage!(shiki, 'python')).toBeUndefined();
    expect(shiki.loadLanguage).not.toHaveBeenCalled();
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn.mock.calls[0][0]).toContain('`python`');
  });
});
