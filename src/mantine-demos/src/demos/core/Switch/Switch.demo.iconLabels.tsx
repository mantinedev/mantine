import React from 'react';
import { Switch, Group, useMantineTheme } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

const code = `
import { Switch, Group, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function Demo() {
  const theme = useMantineTheme();
  return (
    <Group position="center">
      <Switch
        size="md"
        color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
        onLabel={<IconSun size="1rem" stroke={2.5} color={theme.colors.yellow[4]} />}
        offLabel={<IconMoonStars size="1rem" stroke={2.5} color={theme.colors.blue[6]} />}
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
        onLabel={<IconSun size="1rem" stroke={2.5} color={theme.colors.yellow[4]} />}
        offLabel={<IconMoonStars size="1rem" stroke={2.5} color={theme.colors.blue[6]} />}
      />
    </Group>
  );
}

export const iconLabels: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
