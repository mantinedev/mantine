// !!! demo not used on mantine.dev to reduce bundle size
// used only for reference in development and documentation
import hljs from 'highlight.js/lib/core';
import tsLang from 'highlight.js/lib/languages/typescript';
import {
  CodeHighlight,
  CodeHighlightAdapterProvider,
  createHighlightJsAdapter,
} from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';

hljs.registerLanguage('typescript', tsLang);

const exampleCode = `
type FilterPropsRes<T extends Record<string, any>> = {
  [Key in keyof T]-?: T[Key] extends undefined ? never : T[Key];
};

export function filterProps<T extends Record<string, any>>(props: T) {
  return Object.keys(props).reduce<FilterPropsRes<T>>((acc, key: keyof T) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as FilterPropsRes<T>);
}
`;

const code = `
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${exampleCode}\`;

function Demo() {
  return (
    <CodeHighlight
      code={exampleCode}
      language="tsx"
      radius="md"
      background="var(--mantine-color-dark-8)"
      codeColorScheme="dark"
    />
  );
}
`;

const highlightJSAdapter = createHighlightJsAdapter(hljs);

function Demo() {
  return (
    <CodeHighlightAdapterProvider adapter={highlightJSAdapter}>
      <CodeHighlight
        code={exampleCode}
        language="tsx"
        radius="md"
        background="var(--mantine-color-dark-8)"
        codeColorScheme="dark"
      />
    </CodeHighlightAdapterProvider>
  );
}

export const highlightjs: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
