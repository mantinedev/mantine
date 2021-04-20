import React from 'react';
import { Button, ElementsGroup } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Button, ElementsGroup } from '@mantine/core';

function Demo() {
  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
        <div data-mantine-composable>I am composed</div>
        <Button>Me too</Button>
      </ElementsGroup>
    </CodeDemo>
  );
}`;

export function ElementsGroupCustomDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
        <div data-mantine-composable>I am composed</div>
        <Button>Me too</Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
