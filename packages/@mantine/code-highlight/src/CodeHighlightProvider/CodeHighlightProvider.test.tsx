import { act, waitFor } from '@testing-library/react';
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

  const highlighter = jest.fn(({ code, language }: any) => {
    if (!language || !loadedLanguages.has(language)) {
      return { highlightedCode: code, isHighlighted: false };
    }

    return {
      highlightedCode: `<span data-testid="highlighted-code">${code}</span>`,
      isHighlighted: true,
    };
  });

  const adapter: CodeHighlightAdapter = {
    loadContext: () => Promise.resolve({ name: 'test-highlighter' }),
    loadLanguage,
    getHighlighter: (ctx) => {
      if (!ctx) {
        return ({ code }) => ({ highlightedCode: code, isHighlighted: false });
      }

      return highlighter;
    },
  };

  return { adapter, loadLanguage, highlighter };
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

  it('retries loading a language after a failed attempt', async () => {
    const loadLanguage = jest
      .fn()
      .mockImplementationOnce(() => Promise.reject(new Error('Failed to load grammar')))
      .mockImplementationOnce(() => Promise.resolve());

    const adapter: CodeHighlightAdapter = {
      loadContext: () => Promise.resolve({}),
      loadLanguage,
      getHighlighter:
        () =>
        ({ code }) => ({ highlightedCode: code, isHighlighted: false }),
    };

    const { unmount } = render(
      <CodeHighlightAdapterProvider adapter={adapter}>
        <CodeHighlight code="const a = 1" language="tsx" />
      </CodeHighlightAdapterProvider>
    );

    await waitFor(() => expect(loadLanguage).toHaveBeenCalledTimes(1));
    unmount();

    render(
      <CodeHighlightAdapterProvider adapter={adapter}>
        <CodeHighlight code="const a = 1" language="tsx" />
      </CodeHighlightAdapterProvider>
    );

    await waitFor(() => expect(loadLanguage).toHaveBeenCalledTimes(2));
  });

  it('does not re-highlight code blocks of languages that were not loaded', async () => {
    const { adapter, highlighter } = createLazyAdapter();

    render(
      <CodeHighlightAdapterProvider adapter={adapter}>
        <CodeHighlight code="const a = 1" language="tsx" />
        <CodeHighlight code="print(1)" language="python" />
      </CodeHighlightAdapterProvider>
    );

    await screen.findAllByTestId('highlighted-code');
    await waitFor(() => expect(highlighter).toHaveBeenCalledTimes(4));

    const tsxCalls = highlighter.mock.calls.filter(([input]: any) => input.language === 'tsx');
    const pythonCalls = highlighter.mock.calls.filter(
      ([input]: any) => input.language === 'python'
    );

    expect(tsxCalls).toHaveLength(2);
    expect(pythonCalls).toHaveLength(2);
  });

  it('ignores pending language loads of a replaced adapter', async () => {
    let resolveStaleLoad: () => void = () => {};
    const staleLoad = new Promise<void>((resolve) => {
      resolveStaleLoad = resolve;
    });

    const staleAdapter: CodeHighlightAdapter = {
      loadContext: () => Promise.resolve({ name: 'stale' }),
      loadLanguage: jest.fn(() => staleLoad),
      getHighlighter:
        () =>
        ({ code }) => ({ highlightedCode: code, isHighlighted: false }),
    };

    let resolveFreshLoad: () => void = () => {};
    const freshLoad = new Promise<void>((resolve) => {
      resolveFreshLoad = resolve;
    });

    let freshGrammarLoaded = false;

    const freshAdapter: CodeHighlightAdapter = {
      loadContext: () => Promise.resolve({ name: 'fresh' }),
      loadLanguage: jest.fn(() => freshLoad),
      getHighlighter:
        (ctx) =>
        ({ code }) => {
          if (!ctx || !freshGrammarLoaded) {
            return { highlightedCode: code, isHighlighted: false };
          }

          return {
            highlightedCode: `<span data-testid="highlighted-code">${code}</span>`,
            isHighlighted: true,
          };
        },
    };

    const { rerender } = render(
      <CodeHighlightAdapterProvider adapter={staleAdapter}>
        <CodeHighlight code="const a = 1" language="tsx" />
      </CodeHighlightAdapterProvider>
    );

    await waitFor(() => expect(staleAdapter.loadLanguage).toHaveBeenCalledTimes(1));

    // wrapped in a fragment to match the tree that `render` creates, otherwise the provider
    // is remounted instead of receiving a new adapter
    rerender(
      <>
        <CodeHighlightAdapterProvider adapter={freshAdapter}>
          <CodeHighlight code="const a = 1" language="tsx" />
        </CodeHighlightAdapterProvider>
      </>
    );

    await waitFor(() => expect(freshAdapter.loadLanguage).toHaveBeenCalledTimes(1));

    await act(async () => {
      resolveStaleLoad();
      await staleLoad;
    });

    expect(screen.queryByTestId('highlighted-code')).toBe(null);

    freshGrammarLoaded = true;

    await act(async () => {
      resolveFreshLoad();
      await freshLoad;
    });

    expect(screen.getByTestId('highlighted-code')).toBeInTheDocument();
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
