import { Group, Toggle } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group, Toggle } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Toggle autoWidth>Save</Toggle>
      <Toggle autoWidth active>Active</Toggle>
      <Toggle autoWidth disabled>Disabled</Toggle>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Toggle autoWidth>Save</Toggle>
      <Toggle autoWidth active>
        Active
      </Toggle>
      <Toggle autoWidth disabled>
        Disabled
      </Toggle>
    </Group>
  );
}

export const autoWidth: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
