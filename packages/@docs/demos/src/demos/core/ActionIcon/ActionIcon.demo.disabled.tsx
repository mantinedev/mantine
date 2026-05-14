import { HeartIcon } from '@phosphor-icons/react';
import { ActionIcon, Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ActionIcon, Group } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon size="xl" disabled aria-label="Disabled and not interactive">
        <HeartIcon />
      </ActionIcon>

      <ActionIcon size="xl" data-disabled aria-label="Has disabled styles but still interactive">
        <HeartIcon />
      </ActionIcon>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon size="xl" disabled aria-label="Disabled and not interactive">
        <HeartIcon />
      </ActionIcon>

      <ActionIcon size="xl" data-disabled aria-label="Has disabled styles but still interactive">
        <HeartIcon />
      </ActionIcon>
    </Group>
  );
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
