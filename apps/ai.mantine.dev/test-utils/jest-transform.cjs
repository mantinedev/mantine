// esbuild transformer with support for vitest's module mocking in generated tests: `vi.mock()`
// and `vi.hoisted()` statements are moved above the other imports (esbuild keeps the source order
// of requires), relative mock paths are resolved from the test file instead of the shim, and
// `vi.hoisted(factory)` becomes an immediate call. esbuild-jest is not used for TypeScript files
// because it falls back to Babel without the TypeScript preset as soon as a file calls `mock(`.
const path = require('path');
const esbuild = require('esbuild');

const LOADERS = { '.ts': 'ts', '.tsx': 'tsx', '.mjs': 'js', '.js': 'js', '.jsx': 'jsx' };

const STATEMENT_START = /^(?:(?:const|let|var)\s[^\n=]*=\s*)?vi\.(?:mock|hoisted)\(/gm;
const TEST_IMPORT = /^import[^\n]*from ['"]vite-plus\/test['"];?\n/m;

function statementEnd(src, openParen) {
  let depth = 0;
  let quote = null;
  for (let i = openParen; i < src.length; i++) {
    const ch = src[i];
    if (quote) {
      if (ch === '\\') {
        i++;
      } else if (ch === quote) {
        quote = null;
      }
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
    } else if (ch === '(' || ch === '{' || ch === '[') {
      depth++;
    } else if (ch === ')' || ch === '}' || ch === ']') {
      depth--;
      if (depth === 0) {
        return src[i + 1] === ';' ? i + 2 : i + 1;
      }
    }
  }
  return src.length;
}

function rewrite(statement) {
  if (statement.includes('vi.hoisted(')) {
    return statement.replace('vi.hoisted(', '(').replace(/\)(;?)$/, ')()$1');
  }
  return statement.replace(
    /vi\.mock\(\s*(['"])(\.{1,2}\/[^'"]+)\1/,
    (_, quote, modulePath) => `vi.mock(require.resolve(${quote}${modulePath}${quote})`
  );
}

function hoistVitestMocks(src) {
  if (!/\bvi\.(mock|hoisted)\(/.test(src)) {
    return src;
  }

  const ranges = [];
  let match;
  while ((match = STATEMENT_START.exec(src))) {
    const end = statementEnd(src, STATEMENT_START.lastIndex - 1);
    ranges.push([match.index, end]);
    STATEMENT_START.lastIndex = end;
  }

  let rest = '';
  let cursor = 0;
  const hoisted = [];
  for (const [start, end] of ranges) {
    rest += src.slice(cursor, start);
    hoisted.push(rewrite(src.slice(start, end)));
    cursor = end;
  }
  rest += src.slice(cursor);

  const testImport = rest.match(TEST_IMPORT);
  if (testImport) {
    rest = rest.replace(TEST_IMPORT, '');
  }

  return `${testImport ? testImport[0] : ''}${hoisted.join('\n')}\n${rest}`;
}

module.exports = {
  process(src, filename) {
    const result = esbuild.transformSync(hoistVitestMocks(src), {
      loader: LOADERS[path.extname(filename)] || 'js',
      format: 'cjs',
      target: 'es2020',
      sourcefile: filename,
      sourcemap: 'inline',
    });
    return { code: result.code };
  },
  hoistVitestMocks,
};
