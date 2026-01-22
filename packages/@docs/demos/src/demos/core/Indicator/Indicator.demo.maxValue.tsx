import { Avatar, Group, Indicator } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Avatar, Group, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Indicator inline label={50} maxValue={99}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
        />
      </Indicator>

      <Indicator inline label={100} maxValue={99}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
        />
      </Indicator>

      <Indicator inline label={1000} maxValue={999}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
        />
      </Indicator>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Indicator inline label={50} maxValue={99}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
        />
      </Indicator>

      <Indicator inline label={100} maxValue={99}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
        />
      </Indicator>

      <Indicator inline label={1000} maxValue={999}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
        />
      </Indicator>
    </Group>
  );
}

export const maxValue: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
