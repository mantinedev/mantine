import React from 'react';
import { IntermediateCheckbox } from '@mantine/demos';
import { useMantineTheme } from '@mantine/theme';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import code from '!!raw-loader!../../../../../src/mantine-demos/src/IntermediateCheckbox/IntermediateCheckbox';

export function CheckboxIntermediateDemo() {
  const theme = useMantineTheme();

  return (
    <CodeDemo
      code={code}
      language="tsx"
      toggle
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
      githubLink="https://github.com/mantinedev/mantine/blob/master/src/mantine-demos/src/IntermediateCheckbox/IntermediateCheckbox.tsx"
    >
      <div style={{ maxWidth: 340, margin: 'auto' }}>
        <IntermediateCheckbox />
      </div>
    </CodeDemo>
  );
}
