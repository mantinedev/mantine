import { Avatar, Group, Indicator } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Avatar, Group, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Indicator inline label={0}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
        />
      </Indicator>

      <Indicator inline label={0} showZero={false}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
        />
      </Indicator>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Indicator inline label={0}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
        />
      </Indicator>

      <Indicator inline label={0} showZero={false}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
        />
      </Indicator>
    </Group>
  );
}

export const showZero: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
