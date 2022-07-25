import React from 'react';
import { Badge, Box, NavLink, Group } from '@mantine/core';
import { IconHome2, IconGauge, IconChevronRight, IconActivity, IconCircleOff } from '@tabler/icons';

const code = `
import { Badge, Box, NavLink } from '@mantine/core';
import { IconHome2, IconGauge, IconChevronRight, IconActivity, IconCircleOff } from '@tabler/icons';

function Demo() {
  return (
    <Box sx={{ width: 240 }}>
      <NavLink label="With icon" icon={<IconHome2 size={16} stroke={1.5} />} />
      <NavLink
        label="With right section"
        icon={<IconGauge size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={12} stroke={1.5} />}
      />
      <NavLink label="Disabled" icon={<IconCircleOff size={16} stroke={1.5} />} disabled />
      <NavLink
        label="With description"
        description="Additional information"
        icon={
          <Badge size="xs" variant="filled" color="red" sx={{ width: 16, height: 16, padding: 0 }}>
            3
          </Badge>
        }
      />
      <NavLink
        label="Active subtle"
        icon={<IconActivity size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={12} stroke={1.5} />}
        variant="subtle"
        active
      />
      <NavLink
        label="Active light"
        icon={<IconActivity size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={12} stroke={1.5} />}
        active
      />
      <NavLink
        label="Active filled"
        icon={<IconActivity size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={12} stroke={1.5} />}
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
      <Box sx={{ width: 240 }}>
        <NavLink label="With icon" icon={<IconHome2 size={16} stroke={1.5} />} />
        <NavLink
          label="With right section"
          icon={<IconGauge size={16} stroke={1.5} />}
          rightSection={<IconChevronRight size={12} stroke={1.5} />}
        />
        <NavLink label="Disabled" icon={<IconCircleOff size={16} stroke={1.5} />} disabled />
        <NavLink
          label="With description"
          description="Additional information"
          icon={
            <Badge
              size="xs"
              variant="filled"
              color="red"
              sx={{ width: 16, height: 16, padding: 0 }}
            >
              3
            </Badge>
          }
        />
        <NavLink
          label="Active subtle"
          icon={<IconActivity size={16} stroke={1.5} />}
          rightSection={<IconChevronRight size={12} stroke={1.5} />}
          variant="subtle"
          active
        />
        <NavLink
          label="Active light"
          icon={<IconActivity size={16} stroke={1.5} />}
          rightSection={<IconChevronRight size={12} stroke={1.5} />}
          active
        />
        <NavLink
          label="Active filled"
          icon={<IconActivity size={16} stroke={1.5} />}
          rightSection={<IconChevronRight size={12} stroke={1.5} />}
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
