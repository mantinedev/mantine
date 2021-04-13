import React from 'react';
import { TodoList } from '@mantine/demos';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import code from '!!raw-loader!../../../../../src/mantine-demos/src/TodoList/TodoList';

export function UseListStateDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <div style={{ maxWidth: 500, margin: 'auto' }}>
        <TodoList />
      </div>
    </CodeDemo>
  );
}
