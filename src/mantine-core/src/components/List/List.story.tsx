import React from 'react';
import { storiesOf } from '@storybook/react';
import { List } from './List';

storiesOf('@mantine/core/List', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <div style={{ background: 'red' }}>
      <List>
        <List.Item>List item 1</List.Item>
        <List.Item>List item 2</List.Item>
        <List.Item>List item 3</List.Item>
      </List>
    </div>
  </div>
));
