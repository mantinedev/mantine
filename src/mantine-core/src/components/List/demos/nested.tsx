import React from 'react';
import { List } from '../List';

const code = `
<List>
  <List.Item>First order item</List.Item>
  <List.Item>First order item</List.Item>
  <List.Item>
    First order item with list
    <List withPadding>
      <List.Item>Nested item</List.Item>
      <List.Item>Nested item</List.Item>
      <List.Item>
        Nested item with list
        <List withPadding>
          <List.Item>Event more nested</List.Item>
          <List.Item>Event more nested</List.Item>
        </List>
      </List.Item>
      <List.Item>Nested item</List.Item>
    </List>
  </List.Item>
  <List.Item>First order item</List.Item>
</List>
`;

function Demo() {
  return (
    <List>
      <List.Item>First order item</List.Item>
      <List.Item>First order item</List.Item>
      <List.Item>
        First order item with list
        <List withPadding>
          <List.Item>Nested item</List.Item>
          <List.Item>Nested item</List.Item>
          <List.Item>
            Nested item with list
            <List withPadding>
              <List.Item>Event more nested</List.Item>
              <List.Item>Event more nested</List.Item>
            </List>
          </List.Item>
          <List.Item>Nested item</List.Item>
        </List>
      </List.Item>
      <List.Item>First order item</List.Item>
    </List>
  );
}

export const nested: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
