import { InfoIcon } from '@phosphor-icons/react';
import { ActionIcon, Group, Text, Tooltip } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { InfoIcon } from '@phosphor-icons/react';
import { ActionIcon, Group, Text, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Group gap={4}>
      <Text size="sm">Monthly active users</Text>
      <Tooltip
        label="Distinct users who performed any action this month"
        events={{ click: true }}
        multiline
        w={220}
        withArrow
      >
        <ActionIcon variant="subtle" color="gray" radius="xl" size="sm" aria-label="More information">
          <InfoIcon size={14} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group gap={4}>
      <Text size="sm">Monthly active users</Text>
      <Tooltip
        label="Distinct users who performed any action this month"
        events={{ click: true }}
        multiline
        w={220}
        withArrow
      >
        <ActionIcon
          variant="subtle"
          color="gray"
          radius="xl"
          size="sm"
          aria-label="More information"
        >
          <InfoIcon size={14} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}

export const click: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
