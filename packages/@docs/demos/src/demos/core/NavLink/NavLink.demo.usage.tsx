import {
  IconActivity,
  IconChevronRight,
  IconCircleOff,
  IconGauge,
  IconHome2,
} from '@tabler/icons-react';
import { Badge, NavLink } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Badge, NavLink } from '@mantine/core';
import { IconHome2, IconGauge, IconChevronRight, IconActivity, IconCircleOff } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NavLink
        href="#required-for-focus"
        label="With icon"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
      />
      <NavLink
        href="#required-for-focus"
        label="With right section"
        leftSection={<IconGauge size={16} stroke={1.5} />}
        rightSection={
          <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
        }
      />
      <NavLink
        href="#required-for-focus"
        label="Disabled"
        leftSection={<IconCircleOff size={16} stroke={1.5} />}
        disabled
      />
      <NavLink
        href="#required-for-focus"
        label="With description"
        description="Additional information"
        leftSection={
          <Badge size="xs" color="red" circle>
            3
          </Badge>
        }
      />
      <NavLink
        href="#required-for-focus"
        label="Active subtle"
        leftSection={<IconActivity size={16} stroke={1.5} />}
        rightSection={
          <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
        }
        variant="subtle"
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Active light"
        leftSection={<IconActivity size={16} stroke={1.5} />}
        rightSection={
          <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
        }
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Active filled"
        leftSection={<IconActivity size={16} stroke={1.5} />}
        rightSection={
          <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
        }
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
      <NavLink
        href="#required-for-focus"
        label="With icon"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
      />
      <NavLink
        href="#required-for-focus"
        label="With right section"
        leftSection={<IconGauge size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />}
      />
      <NavLink
        href="#required-for-focus"
        label="Disabled"
        leftSection={<IconCircleOff size={16} stroke={1.5} />}
        disabled
      />
      <NavLink
        href="#required-for-focus"
        label="With description"
        description="Additional information"
        leftSection={
          <Badge size="xs" color="red" circle>
            3
          </Badge>
        }
      />
      <NavLink
        href="#required-for-focus"
        label="Active subtle"
        leftSection={<IconActivity size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />}
        variant="subtle"
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Active light"
        leftSection={<IconActivity size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />}
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Active filled"
        leftSection={<IconActivity size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />}
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
