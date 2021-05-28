import React from 'react';
import { TodoList } from '@mantine/demos';
import { useMantineTheme } from '@mantine/core';
import CodeDemo from '../../components/CodeDemo/CodeDemo';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import code from '!!raw-loader!../../../../src/mantine-demos/src/TodoList/TodoList';

export function UseListStateDemo() {
  const theme = useMantineTheme();
  return (
    <CodeDemo
      code={code}
      language="tsx"
      toggle
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
      githubLink="https://github.com/mantinedev/mantine/blob/master/src/mantine-demos/src/TodoList/TodoList.tsx"
    >
      <div style={{ maxWidth: 500, margin: 'auto' }}>
        <TodoList />
      </div>
    </CodeDemo>
  );
}
