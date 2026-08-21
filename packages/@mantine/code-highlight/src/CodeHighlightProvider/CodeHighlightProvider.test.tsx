import { render, screen } from '@mantine-tests/core';
import { CodeHighlight } from '../CodeHighlight/CodeHighlight';
import { CodeHighlightAdapterProvider, type CodeHighlightAdapter } from './CodeHighlightProvider';

function createLazyAdapter() {
  const loadedLanguages = new Set<string>();

  const loadLanguage = jest.fn((_ctx: any, language: string) => {
    if (loadedLanguages.has(language)) {
      return undefined;
    }

    return Promise.resolve().then(() => {
      loadedLanguages.add(language);
    });
  });

  const adapter: CodeHighlightAdapter = {
    loadContext: () => Promise.resolve({ name: 'test-highlighter' }),
    loadLanguage,
    getHighlighter: (ctx) => {
      return ({ code, language }) => {
        if (!ctx || !language || !loadedLanguages.has(language)) {
          return { highlightedCode: code, isHighlighted: false };
        }

        return {
          highlightedCode: `<span data-testid="highlighted-code">${code}</span>`,
          isHighlighted: true,
        };
      };
    },
  };

  return { adapter, loadLanguage };
}

describe('@mantine/code-highlight/CodeHighlightProvider', () => {
  it('highlights code again after adapter loads language', async () => {
    const { adapter } = createLazyAdapter();

    render(
      <CodeHighlightAdapterProvider adapter={adapter}>
        <CodeHighlight code="const a = 1" language="tsx" />
      </CodeHighlightAdapterProvider>
    );

    expect(screen.queryByTestId('highlighted-code')).toBe(null);
    expect(await screen.findByTestId('highlighted-code')).toBeInTheDocument();
  });

  it('loads the same language only once', async () => {
    const { adapter, loadLanguage } = createLazyAdapter();

    render(
      <CodeHighlightAdapterProvider adapter={adapter}>
        <CodeHighlight code="const a = 1" language="tsx" />
        <CodeHighlight code="const b = 2" language="tsx" />
      </CodeHighlightAdapterProvider>
    );

    expect(await screen.findAllByTestId('highlighted-code')).toHaveLength(2);
    expect(loadLanguage).toHaveBeenCalledTimes(1);
    expect(loadLanguage).toHaveBeenCalledWith({ name: 'test-highlighter' }, 'tsx');
  });

  it('does not call loadLanguage if adapter does not support it', async () => {
    const adapter: CodeHighlightAdapter = {
      loadContext: () => Promise.resolve({}),
      getHighlighter:
        () =>
        ({ code }) => ({ highlightedCode: code, isHighlighted: false }),
    };

    render(
      <CodeHighlightAdapterProvider adapter={adapter}>
        <CodeHighlight code="const a = 1" language="tsx" />
      </CodeHighlightAdapterProvider>
    );

    expect(await screen.findByText('const a = 1')).toBeInTheDocument();
  });
});
