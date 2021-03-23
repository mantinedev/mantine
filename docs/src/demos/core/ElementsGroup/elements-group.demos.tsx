import React from 'react';
import { Button, ElementsGroup } from '@mantine/core';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Button, ElementsGroup } from '@mantine/core';

const YourComponent = () => <div data-mantine-composable>I am composed</div>;

export function ElementsGroupDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
        <YourComponent />
        <Button>Me too</Button>
      </ElementsGroup>
    </CodeDemo>
  );
}`;

const YourComponent = () => <div data-mantine-composable>I am composed</div>;

export function ElementsGroupCustomDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
        <YourComponent />
        <Button>Me too</Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
