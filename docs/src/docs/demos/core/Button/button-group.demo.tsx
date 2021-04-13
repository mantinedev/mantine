import React from 'react';
import { Button, ElementsGroup } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Button, ElementsGroup } from '@mantine/core';

function ButtonDemo() {
  return (
    <ElementsGroup position="apart">
      <Button variant="outline">Button 1</Button>
      <Button variant="outline">Button 2</Button>
      <Button variant="outline">Button 3</Button>
    </ElementsGroup>
  );
}`;

export function ButtonGroupDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="apart">
        <Button variant="outline">Button 1</Button>
        <Button variant="outline">Button 2</Button>
        <Button variant="outline">Button 3</Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
