import { useState, useEffect, useContext } from 'react';
// import hljs from 'highlight.js/lib/core';
// import hljs from 'highlight.js/lib/core';
// import plaintext from 'highlight.js/lib/languages/plaintext';
import { HighlightContext } from './HighlightProvider';
// import hljs from 'highlight.js';
// hljs.registerLanguage('plaintext', plaintext);

interface UseHighlightInput {
  code: string;
  language: string;
  highlightOnClient: boolean | undefined;
}

// async function registerLanguage(language: string) {
//   await import(`/node_modules/highlight.js/lib/languages/${language}.js`).then((module) => {
//     hljs.registerLanguage(language, module.default);
//   });
// }

export function useHighlight({ code, language, highlightOnClient }: UseHighlightInput) {
  const highlight = useContext(HighlightContext);
  const { highlight: hljs } = highlight;

  console.log('with core');
  console.log('hljs.listLanguage', hljs!.listLanguages());
  // if (!hljs.getLanguage(language)) {
  //   console.warn('registering language', language);
  //   registerLanguage(language);
  // }

  const lang = hljs?.getLanguage(language) ? language : 'plaintext';
  console.log('lang', lang);

  const getHighlightedCode = () => hljs!.highlight(code.trim(), { language: lang }).value;
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
