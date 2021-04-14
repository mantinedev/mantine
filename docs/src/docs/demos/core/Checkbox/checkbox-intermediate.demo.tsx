import React from 'react';
import { IntermediateCheckbox } from '@mantine/demos';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import code from '!!raw-loader!../../../../../src/mantine-demos/src/IntermediateCheckbox/IntermediateCheckbox';

export function CheckboxIntermediateDemo() {
  return (
    <CodeDemo
      code={code}
      language="tsx"
      toggle
      githubLink="https://github.com/mantinedev/mantine/blob/master/src/mantine-demos/src/IntermediateCheckbox/IntermediateCheckbox.tsx"
    >
      <div style={{ maxWidth: 340, margin: 'auto' }}>
        <IntermediateCheckbox />
      </div>
    </CodeDemo>
  );
}
