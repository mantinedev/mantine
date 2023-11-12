import { useState, useEffect } from 'react';
import hljs from 'highlight.js/lib/core';

interface UseHighlightInput {
  code: string;
  language: string;
  highlightOnClient: boolean | undefined;
}

export function useHighlight({ code, language, highlightOnClient }: UseHighlightInput) {
  console.log('with core');
  const lang = hljs.getLanguage(language) ? language : 'plaintext';
  const getHighlightedCode = () => hljs.highlight(code.trim(), { language: lang }).value;
  const [highlighted, setHighlighted] = useState(!highlightOnClient);
  const [highlightedCode, setHighlightedCode] = useState(
    highlightOnClient ? code : getHighlightedCode()
  );

  const getCodeProps = () =>
    highlighted
      ? { dangerouslySetInnerHTML: { __html: highlightedCode } }
      : { children: code.trim() };

  useEffect(() => {
    if (highlightOnClient) {
      setHighlightedCode(getHighlightedCode());
      setHighlighted(true);
    }
  }, []);

  useEffect(() => {
    setHighlightedCode(getHighlightedCode());
  }, [code]);

  return getCodeProps;
}
