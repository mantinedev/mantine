import React from 'react';
import { AuthenticationForm } from '@mantine/demos';
import { useMantineTheme } from '@mantine/theme';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import code from '!!raw-loader!../../../../../src/mantine-demos/src/AuthenticationForm/AuthenticationForm';

export function UseFormAuthDemo({ toggle = false }: { toggle: boolean }) {
  const theme = useMantineTheme();

  return (
    <CodeDemo
      code={code}
      language="tsx"
      toggle={toggle}
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]}
      githubLink="https://github.com/mantinedev/mantine/blob/master/src/mantine-demos/src/AuthenticationForm/AuthenticationForm.tsx"
    >
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        <AuthenticationForm />
      </div>
    </CodeDemo>
  );
}
