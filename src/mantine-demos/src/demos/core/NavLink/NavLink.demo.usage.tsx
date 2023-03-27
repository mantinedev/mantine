import React from 'react';
import { Badge, Box, NavLink, Group } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import {
  IconHome2,
  IconGauge,
  IconChevronRight,
  IconActivity,
  IconCircleOff,
} from '@tabler/icons-react';

const code = `
import { Badge, Box, NavLink } from '@mantine/core';
import { IconHome2, IconGauge, IconChevronRight, IconActivity, IconCircleOff } from '@tabler/icons-react';

function Demo() {
  return (
    <Box w={240}>
      <NavLink label="With icon" icon={<IconHome2 size="1rem" stroke={1.5} />} />
      <NavLink
        label="With right section"
        icon={<IconGauge size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
      />
      <NavLink label="Disabled" icon={<IconCircleOff size="1rem" stroke={1.5} />} disabled />
      <NavLink
        label="With description"
        description="Additional information"
        icon={
          <Badge size="xs" variant="filled" color="red" w={16} h={16} p={0}>
            3
          </Badge>
        }
      />
      <NavLink
        label="Active subtle"
        icon={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        variant="subtle"
        active
      />
      <NavLink
        label="Active light"
        icon={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        active
      />
      <NavLink
        label="Active filled"
        icon={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        variant="filled"
        active
      />
    </Box>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Box w={240}>
        <NavLink label="With icon" icon={<IconHome2 size="1rem" stroke={1.5} />} />
        <NavLink
          label="With right section"
          icon={<IconGauge size="1rem" stroke={1.5} />}
          rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        />
        <NavLink label="Disabled" icon={<IconCircleOff size="1rem" stroke={1.5} />} disabled />
        <NavLink
          label="With description"
          description="Additional information"
          icon={
            <Badge size="xs" variant="filled" color="red" w={16} h={16} p={0}>
              3
            </Badge>
          }
        />
        <NavLink
          label="Active subtle"
          icon={<IconActivity size="1rem" stroke={1.5} />}
          rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
          variant="subtle"
          active
        />
        <NavLink
          label="Active light"
          icon={<IconActivity size="1rem" stroke={1.5} />}
          rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
          active
        />
        <NavLink
          label="Active filled"
          icon={<IconActivity size="1rem" stroke={1.5} />}
          rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
          variant="filled"
          active
        />
      </Box>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
