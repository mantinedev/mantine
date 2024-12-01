import { CodeHighlight } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';

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
  return <CodeHighlight code={exampleCode} language="tsx" radius="md" />;
}
`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" radius="md" />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
