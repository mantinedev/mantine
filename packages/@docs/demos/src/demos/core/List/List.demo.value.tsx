import { List } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { List } from '@mantine/core';

function Demo() {
  return (
    <List type="ordered">
      <List.Item>First item</List.Item>
      <List.Item value={5}>This item is #5</List.Item>
      <List.Item>This item is #6 (continues from previous)</List.Item>
      <List.Item value={10}>This item is #10</List.Item>
      <List.Item>This item is #11</List.Item>
    </List>
  );
}
`;

function Demo() {
  return (
    <List type="ordered">
      <List.Item>First item</List.Item>
      <List.Item value={5}>This item is #5</List.Item>
      <List.Item>This item is #6 (continues from previous)</List.Item>
      <List.Item value={10}>This item is #10</List.Item>
      <List.Item>This item is #11</List.Item>
    </List>
  );
}

export const value: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
