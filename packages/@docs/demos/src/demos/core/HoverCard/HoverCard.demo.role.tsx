import { Group, HoverCard, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { HoverCard, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md" role="tooltip">
        <HoverCard.Target>
          <Text td="underline dotted" tabIndex={0} w="fit-content">
            Hydration
          </Text>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Attaching React event handlers to the HTML that was rendered on the server
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
      <HoverCard width={280} shadow="md" role="tooltip">
        <HoverCard.Target>
          <Text td="underline dotted" tabIndex={0} w="fit-content">
            Hydration
          </Text>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Attaching React event handlers to the HTML that was rendered on the server
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}

export const role: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
