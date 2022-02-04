import React from 'react';
import { List } from '@mantine/core';

const code = `
<List listStyleType="disc">
  <List.Item>First order item</List.Item>
  <List.Item>First order item</List.Item>
  <List.Item>
    First order item with list
    <List withPadding listStyleType="disc">
      <List.Item>Nested item</List.Item>
      <List.Item>Nested item</List.Item>
      <List.Item>
        Nested item with list
        <List withPadding listStyleType="disc">
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
    <List listStyleType="disc">
      <List.Item>First order item</List.Item>
      <List.Item>First order item</List.Item>
      <List.Item>
        First order item with list
        <List withPadding listStyleType="disc">
          <List.Item>Nested item</List.Item>
          <List.Item>Nested item</List.Item>
          <List.Item>
            Nested item with list
            <List withPadding listStyleType="disc">
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
