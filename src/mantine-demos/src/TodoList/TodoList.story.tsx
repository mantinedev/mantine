import React from 'react';
import { storiesOf } from '@storybook/react';
import { TodoList } from './TodoList';

storiesOf('@mantine/core/TodoList', module).add('General usage', () => (
  <div
    style={{
      display: 'flex',
      padding: '40px 10px',
      justifyContent: 'center',
      height: '100vh',
      boxSizing: 'border-box',
    }}
  >
    <div style={{ width: 500 }}>
      <TodoList />
    </div>
  </div>
));
