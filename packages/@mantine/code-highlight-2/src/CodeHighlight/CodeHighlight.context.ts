import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { CodeHighlightFactory } from './CodeHighlight';

interface CodeHighlightContext {
  getStyles: GetStylesApi<CodeHighlightFactory>;
  codeColorScheme: 'light' | 'dark' | undefined;
}

export const [CodeHighlightContextProvider, useCodeHighlightContext] =
  createSafeContext<CodeHighlightContext>(
    'CodeHighlightProvider was not found in the component tree'
  );
