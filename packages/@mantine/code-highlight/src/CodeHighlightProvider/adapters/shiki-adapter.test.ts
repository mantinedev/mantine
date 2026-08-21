import { createShikiAdapter } from './shiki-adapter';

function createShikiMock(loadedLanguages: string[]) {
  return {
    getLoadedLanguages: () => loadedLanguages,
    loadLanguage: jest.fn(() => Promise.resolve()),
    codeToHtml: (code: string) => `<pre><code>${code}</code></pre>`,
  };
}

describe('@mantine/code-highlight/createShikiAdapter', () => {
  it('resolves grammar of languages that are not loaded yet', () => {
    const shiki = createShikiMock(['tsx']);
    const resolveLanguage = jest.fn((language: string) => `${language}-grammar`);
    const adapter = createShikiAdapter(() => Promise.resolve(shiki), { resolveLanguage });

    expect(adapter.loadLanguage!(shiki, 'tsx')).toBeUndefined();
    expect(resolveLanguage).not.toHaveBeenCalled();

    expect(adapter.loadLanguage!(shiki, 'python')).toBeInstanceOf(Promise);
    expect(shiki.loadLanguage).toHaveBeenCalledWith('python-grammar');
  });

  it('does not load grammar of unsupported languages', () => {
    const shiki = createShikiMock([]);
    const adapter = createShikiAdapter(() => Promise.resolve(shiki), {
      resolveLanguage: () => null,
    });

    expect(adapter.loadLanguage!(shiki, 'python')).toBeUndefined();
    expect(shiki.loadLanguage).not.toHaveBeenCalled();
  });
});
