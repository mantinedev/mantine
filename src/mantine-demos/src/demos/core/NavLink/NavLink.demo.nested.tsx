import React from 'react';
import { Box, NavLink, Group } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { IconGauge, IconFingerprint } from '@tabler/icons-react';

const code = `
import { Box, NavLink } from '@mantine/core';
import { IconGauge, IconFingerprint } from '@tabler/icons-react';

function Demo() {
  return (
    <Box w={240}>
      <NavLink
        label="First parent link"
        icon={<IconGauge size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink label="First child link" />
        <NavLink label="Second child link" />
        <NavLink label="Nested parent link" childrenOffset={28}>
          <NavLink label="First child link" />
          <NavLink label="Second child link" />
          <NavLink label="Third child link" />
        </NavLink>
      </NavLink>

      <NavLink
        label="Second parent link"
        icon={<IconFingerprint size="1rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="First child link" />
        <NavLink label="Second child link" />
        <NavLink label="Third child link" />
      </NavLink>
    </Box>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Box w={240}>
        <NavLink
          label="First parent link"
          icon={<IconGauge size="1rem" stroke={1.5} />}
          childrenOffset={28}
        >
          <NavLink label="First child link" />
          <NavLink label="Second child link" />
          <NavLink label="Nested parent link" childrenOffset={28}>
            <NavLink label="First child link" />
            <NavLink label="Second child link" />
            <NavLink label="Third child link" />
          </NavLink>
        </NavLink>

        <NavLink
          label="Second parent link"
          icon={<IconFingerprint size="1rem" stroke={1.5} />}
          childrenOffset={28}
          defaultOpened
        >
          <NavLink label="First child link" />
          <NavLink label="Second child link" />
          <NavLink label="Third child link" />
        </NavLink>
      </Box>
    </Group>
  );
}

export const nested: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
