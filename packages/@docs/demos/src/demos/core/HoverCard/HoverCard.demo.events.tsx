import { Button, Group, HoverCard, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md" events={{ focus: false }}>
        <HoverCard.Target>
          <Button>Hover only</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Focusing the target does not open this dropdown</Text>
        </HoverCard.Dropdown>
      </HoverCard>

      <HoverCard width={280} shadow="md" events={{ touch: true }}>
        <HoverCard.Target>
          <Button>Hover, focus and touch</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">This dropdown is also opened by a tap on touch devices</Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md" events={{ focus: false }}>
        <HoverCard.Target>
          <Button>Hover only</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Focusing the target does not open this dropdown</Text>
        </HoverCard.Dropdown>
      </HoverCard>

      <HoverCard width={280} shadow="md" events={{ touch: true }}>
        <HoverCard.Target>
          <Button>Hover, focus and touch</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">This dropdown is also opened by a tap on touch devices</Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}

export const events: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
