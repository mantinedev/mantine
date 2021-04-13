import React from 'react';
import { Code } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Code } from '@mantine/core';

export function CodeDemo() {
  return <Code>React.createElement()</Code>;
}`;

export function CodeInlineDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Code>React.createElement()</Code>
    </CodeDemo>
  );
}

const blockCode = `import React from 'react';
import { Code } from '@mantine/core';

const codeForPreviousDemo = \`${code}\`;

export function CodeDemo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}`;

export function CodeBlockDemo() {
  return (
    <CodeDemo code={blockCode} language="tsx">
      <Code block>{code}</Code>
    </CodeDemo>
  );
}

const colorCode = `import React from 'react';
import { Code } from '@mantine/core';

export function CodeDemo() {
  return (
    <>
      <Code color="red">React.createElement()</Code>
      <Code color="teal">React.createElement()</Code>
      <Code color="blue">React.createElement()</Code>
    </>
  );
}`;

export function CodeColorDemo() {
  return (
    <CodeDemo code={colorCode} language="tsx">
      <Code color="red">React.createElement()</Code>
      <br />
      <br />
      <Code color="teal">React.createElement()</Code>
      <br />
      <br />
      <Code color="blue">React.createElement()</Code>
    </CodeDemo>
  );
}
