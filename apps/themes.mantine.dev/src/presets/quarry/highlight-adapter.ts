import type { CodeHighlightAdapter } from '@mantine/code-highlight';
import classes from './highlight.module.css';

const KEYWORDS =
  'WITH|AS|SELECT|FROM|JOIN|ON|WHERE|GROUP|BY|ORDER|FILTER|AND|OR|NOT|IN|COUNT|LEFT|DISTINCT|HAVING|CASE|WHEN|THEN|ELSE|END|BETWEEN|IS|NULL|LIMIT|DESC|ASC|INTERVAL|DATE';

const TOKEN = new RegExp(
  `(--[^\\n]*)|('(?:[^']|'')*')|(\\b\\d+(?:\\.\\d+)?\\b)|(\\b(?:${KEYWORDS})\\b)|(\\b[a-z_]+(?=\\())`,
  'gi'
);

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function highlightSql(code: string) {
  let result = '';
  let last = 0;

  for (const match of code.matchAll(TOKEN)) {
    const [token, comment, string, number, keyword] = match;
    const index = match.index ?? 0;
    const kind = comment
      ? classes.comment
      : string
        ? classes.string
        : number
          ? classes.number
          : keyword
            ? classes.keyword
            : classes.fn;
    result += `${escapeHtml(code.slice(last, index))}<span class="${kind}">${escapeHtml(token)}</span>`;
    last = index + token.length;
  }

  return result + escapeHtml(code.slice(last));
}

export const quarryHighlightAdapter: CodeHighlightAdapter = {
  getHighlighter:
    () =>
    ({ code, language }) => ({
      highlightedCode:
        highlightSql(code) +
        (language === 'sql-typing' ? `<span class="${classes.caret}"></span>` : ''),
      isHighlighted: true,
    }),
};
