import { List } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { List } from '@mantine/core';

function Demo() {
  return (
    <List type="ordered" reversed>
      <List.Item>This is item #3</List.Item>
      <List.Item>This is item #2</List.Item>
      <List.Item>This is item #1</List.Item>
    </List>
  );
}
`;

function Demo() {
  return (
    <List type="ordered" reversed>
      <List.Item>This is item #3</List.Item>
      <List.Item>This is item #2</List.Item>
      <List.Item>This is item #1</List.Item>
    </List>
  );
}

export const reversed: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
