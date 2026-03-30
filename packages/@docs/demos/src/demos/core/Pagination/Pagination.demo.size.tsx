import { Button, Group, Pagination, TextInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, Pagination, TextInput } from '@mantine/core';

function Demo() {
  return (
    <div>
      <Group>
        <Pagination total={45} size="sm" />
        <Button size="sm">sm button</Button>
        <TextInput size="sm" placeholder="sm input" />
      </Group>

      <Group mt="md">
        <Pagination total={45} size="input-sm" />
        <Button size="sm">sm button</Button>
        <TextInput size="sm" placeholder="sm input" />
      </Group>
    </div>
  );
}
`;

function Demo() {
  return (
    <div>
      <Group>
        <Pagination total={45} size="sm" />
        <Button size="sm">sm button</Button>
        <TextInput size="sm" placeholder="sm input" />
      </Group>

      <Group mt="md">
        <Pagination total={45} size="input-sm" />
        <Button size="sm">sm button</Button>
        <TextInput size="sm" placeholder="sm input" />
      </Group>
    </div>
  );
}

export const size: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
