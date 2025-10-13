import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { CodeHighlightFactory } from './CodeHighlight';

export interface CodeHighlightContextValue {
  getStyles: GetStylesApi<CodeHighlightFactory>;
  codeColorScheme: 'light' | 'dark' | undefined;
}

export const [CodeHighlightContextProvider, useCodeHighlightContext] =
  createSafeContext<CodeHighlightContextValue>(
    'CodeHighlightProvider was not found in the component tree'
  );
