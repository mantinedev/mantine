import { Button, Group, HoverCard, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button variant="default">Press Tab to move focus</Button>

      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Button>Hover or focus me</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            The dropdown is opened when the target is hovered or focused with the keyboard.
            Press Escape to close it.
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <Button variant="default">Press Tab to move focus</Button>

      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Button>Hover or focus me</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            The dropdown is opened when the target is hovered or focused with the keyboard. Press
            Escape to close it.
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}

export const keyboard: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
