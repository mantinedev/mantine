import { Anchor, Button, Group, HoverCard, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { HoverCard, Button, Text, Group, Anchor } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md" interactive position="bottom-end" offset={40}>
        <HoverCard.Target>
          <Button>Interactive</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Move the pointer diagonally to the{' '}
            <Anchor href="https://mantine.dev" target="_blank">
              link
            </Anchor>{' '}
            – the dropdown stays open
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>

      <HoverCard width={280} shadow="md" position="bottom-end" offset={40}>
        <HoverCard.Target>
          <Button variant="default">Not interactive</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Moving the pointer outside of the target closes this dropdown</Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md" interactive position="bottom-end" offset={40}>
        <HoverCard.Target>
          <Button>Interactive</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Move the pointer diagonally to the{' '}
            <Anchor href="https://mantine.dev" target="_blank">
              link
            </Anchor>{' '}
            – the dropdown stays open
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>

      <HoverCard width={280} shadow="md" position="bottom-end" offset={40}>
        <HoverCard.Target>
          <Button variant="default">Not interactive</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Moving the pointer outside of the target closes this dropdown</Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}

export const interactive: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
