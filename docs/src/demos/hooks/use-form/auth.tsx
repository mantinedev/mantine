import React from 'react';
import { AuthenticationForm } from '@mantine/core/demos';
import { useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import code from '!!raw-loader!../../../../src/mantine-core/demos/AuthenticationForm/AuthenticationForm';

export function UseFormAuthDemo({ toggle = false }: { toggle: boolean }) {
  const theme = useMantineTheme();

  return (
    <CodeDemo
      code={code}
      language="tsx"
      toggle={toggle}
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0]}
      githubLink="https://github.com/mantinedev/mantine/blob/master/src/mantine-demos/src/AuthenticationForm/AuthenticationForm.tsx"
    >
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        <AuthenticationForm
          style={{
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
          }}
        />
      </div>
    </CodeDemo>
  );
}
