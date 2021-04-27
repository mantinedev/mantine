import React from 'react';
import { TransactionsTable } from '@mantine/demos';
import { useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import code from '!!raw-loader!../../../../../src/mantine-demos/src/TransactionsTable/TransactionsTable';

export function TransitionsTableDemo() {
  const theme = useMantineTheme();
  return (
    <CodeDemo
      code={code}
      language="tsx"
      toggle
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]}
      githubLink="https://github.com/mantinedev/mantine/blob/master/src/mantine-demos/src/TransactionsTable/TransactionsTable.tsx"
    >
      <div style={{ maxWidth: 700, margin: 'auto' }}>
        <TransactionsTable />
      </div>
    </CodeDemo>
  );
}
