import React from 'react';
import { AuthenticationForm } from '@mantine/demos';
import { useMantineTheme } from '@mantine/theme';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import code from '!!raw-loader!../../../../../src/mantine-demos/src/AuthenticationForm/AuthenticationForm';

export function UseFormAuthDemo() {
  const theme = useMantineTheme();
  return (
    <CodeDemo
      code={code}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]}
    >
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        <AuthenticationForm />
      </div>
    </CodeDemo>
  );
}
