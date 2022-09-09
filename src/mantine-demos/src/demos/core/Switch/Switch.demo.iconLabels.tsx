import React from 'react';
import { Switch, Group, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

const code = `
import { Switch, Group, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

function Demo() {
  const theme = useMantineTheme();
  return (
    <Group position="center">
      <Switch
        size="md"
        color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
        onLabel={<IconSun size={16} stroke={2.5} color={theme.colors.yellow[4]} />}
        offLabel={<IconMoonStars size={16} stroke={2.5} color={theme.colors.blue[6]} />}
      />
    </Group>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();
  return (
    <Group position="center">
      <Switch
        size="md"
        color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
        onLabel={<IconSun size={16} stroke={2.5} color={theme.colors.yellow[4]} />}
        offLabel={<IconMoonStars size={16} stroke={2.5} color={theme.colors.blue[6]} />}
      />
    </Group>
  );
}

export const iconLabels: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
