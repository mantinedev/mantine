import { CodeHighlight } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';

const exampleCode = `
function Button() {
  return <button>Click me</button>;
}
`;

const code = `
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${exampleCode}\`;

function Demo() {
  return (
    <>
      <CodeHighlight
        code={\`// Custom copy label\${exampleCode}\`}
        language="tsx"
        copyLabel="Copy button code"
        copiedLabel="Copied!"
      />
      <CodeHighlight
        code={\`// Without copy button\${exampleCode}\`}
        language="tsx"
        withCopyButton={false}
        mt="md"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <CodeHighlight
        code={`// Custom copy label${exampleCode}`}
        language="tsx"
        copyLabel="Copy button code"
        copiedLabel="Copied!"
      />
      <CodeHighlight
        code={`// Without copy button${exampleCode}`}
        language="tsx"
        withCopyButton={false}
        mt="md"
      />
    </>
  );
}

export const copy: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
