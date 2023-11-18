import React from 'react';
import { Badge, NavLink } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import {
  IconHome2,
  IconGauge,
  IconChevronRight,
  IconActivity,
  IconCircleOff,
} from '@tabler/icons-react';

const code = `
import { Badge, NavLink } from '@mantine/core';
import { IconHome2, IconGauge, IconChevronRight, IconActivity, IconCircleOff } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NavLink label="With icon" leftSection={<IconHome2 size="1rem" stroke={1.5} />} />
      <NavLink
        label="With right section"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
      />
      <NavLink label="Disabled" leftSection={<IconCircleOff size="1rem" stroke={1.5} />} disabled />
      <NavLink
        label="With description"
        description="Additional information"
        leftSection={
          <Badge size="xs" variant="filled" color="red" w={16} h={16} p={0}>
            3
          </Badge>
        }
      />
      <NavLink
        label="Active subtle"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        variant="subtle"
        active
      />
      <NavLink
        label="Active light"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        active
      />
      <NavLink
        label="Active filled"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        variant="filled"
        active
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <NavLink label="With icon" leftSection={<IconHome2 size="1rem" stroke={1.5} />} />
      <NavLink
        label="With right section"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
      />
      <NavLink label="Disabled" leftSection={<IconCircleOff size="1rem" stroke={1.5} />} disabled />
      <NavLink
        label="With description"
        description="Additional information"
        leftSection={
          <Badge size="xs" variant="filled" color="red" w={16} h={16} p={0}>
            3
          </Badge>
        }
      />
      <NavLink
        label="Active subtle"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        variant="subtle"
        active
      />
      <NavLink
        label="Active light"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        active
      />
      <NavLink
        label="Active filled"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        variant="filled"
        active
      />
    </>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 240,
  component: Demo,
  code,
};
