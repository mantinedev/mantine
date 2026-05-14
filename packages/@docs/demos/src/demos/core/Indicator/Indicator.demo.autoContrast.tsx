import { Avatar, Group, Indicator } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Avatar, Group, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Indicator inline label="99" color="lime.4">
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
        />
      </Indicator>

      <Indicator inline label="99" color="lime.4" autoContrast>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
        />
      </Indicator>

      <Indicator inline label="99" color="cyan.9">
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
        />
      </Indicator>

      <Indicator inline label="99" color="cyan.9" autoContrast>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"
        />
      </Indicator>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Indicator inline label="99" color="lime.4">
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
        />
      </Indicator>

      <Indicator inline label="99" color="lime.4" autoContrast>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
        />
      </Indicator>

      <Indicator inline label="99" color="cyan.9">
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
        />
      </Indicator>

      <Indicator inline label="99" color="cyan.9" autoContrast>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"
        />
      </Indicator>
    </Group>
  );
}

export const autoContrast: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
