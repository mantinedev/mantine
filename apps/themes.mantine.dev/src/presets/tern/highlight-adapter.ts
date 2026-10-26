import type { CodeHighlightAdapter } from '@mantine/code-highlight';
import classes from './highlight.module.css';

type TokenKind = keyof typeof classes;

const KEYWORDS: Record<string, string[]> = {
  bash: ['curl'],
  js: ['const', 'let', 'new', 'await', 'async', 'return', 'import', 'from', 'export'],
  python: ['import', 'from', 'def', 'return', 'await'],
  json: ['true', 'false', 'null'],
};

const STRING = String.raw`f?"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|\`(?:[^\`\\]|\\.)*\``;
const NUMBER = String.raw`\b\d+(?:\.\d+)?\b`;
const WORD = String.raw`[A-Za-z_$][\w$]*`;

function getTokenRegex(language: string) {
  const comment = language === 'python' || language === 'bash' ? '#[^\\n]*' : '//[^\\n]*';
  const flag = language === 'bash' ? String.raw`(?<=\s)-{1,2}[A-Za-z][\w-]*` : '(?!)';
  return new RegExp(`(${comment})|(${STRING})|(${NUMBER})|(${flag})|(${WORD})`, 'g');
}

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function wrap(value: string, kind: TokenKind) {
  return `<span class="${classes[kind]}">${escapeHtml(value)}</span>`;
}

export function highlightCode(code: string, language = '') {
  const keywords = KEYWORDS[language] || [];
  let result = '';
  let last = 0;

  for (const match of code.matchAll(getTokenRegex(language))) {
    const [token, comment, string, number, flag] = match;
    const index = match.index ?? 0;
    result += escapeHtml(code.slice(last, index));
    last = index + token.length;

    if (comment) {
      result += wrap(token, 'comment');
    } else if (string) {
      const isKey = language === 'json' && /^\s*:/.test(code.slice(last));
      result += wrap(token, isKey ? 'key' : 'string');
    } else if (number) {
      result += language === 'js' ? escapeHtml(token) : wrap(token, 'number');
    } else if (flag) {
      result += wrap(token, 'flag');
    } else {
      result += keywords.includes(token) ? wrap(token, 'keyword') : escapeHtml(token);
    }
  }

  return result + escapeHtml(code.slice(last));
}

export const ternHighlightAdapter: CodeHighlightAdapter = {
  getHighlighter:
    () =>
    ({ code, language }) => ({
      highlightedCode: highlightCode(code, language),
      isHighlighted: true,
    }),
};
