import {
  CaretRightIcon,
  GaugeIcon,
  HeartbeatIcon,
  HouseIcon,
  ProhibitIcon,
} from '@phosphor-icons/react';
import { Badge, NavLink, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Badge, NavLink, Stack } from '@mantine/core';
import { HouseIcon, GaugeIcon, CaretRightIcon, HeartbeatIcon, ProhibitIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Stack gap={2}>
      <NavLink
        href="#required-for-focus"
        label="With icon"
        leftSection={<HouseIcon size={16} />}
      />
      <NavLink
        href="#required-for-focus"
        label="With right section"
        leftSection={<GaugeIcon size={16} />}
        rightSection={
          <CaretRightIcon size={12} className="mantine-rotate-rtl" />
        }
      />
      <NavLink
        href="#required-for-focus"
        label="Disabled"
        leftSection={<ProhibitIcon size={16} />}
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
        leftSection={<HeartbeatIcon size={16} />}
        rightSection={
          <CaretRightIcon size={12} className="mantine-rotate-rtl" />
        }
        variant="subtle"
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Active light"
        leftSection={<HeartbeatIcon size={16} />}
        rightSection={
          <CaretRightIcon size={12} className="mantine-rotate-rtl" />
        }
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Active filled"
        leftSection={<HeartbeatIcon size={16} />}
        rightSection={
          <CaretRightIcon size={12} className="mantine-rotate-rtl" />
        }
        variant="filled"
        active
      />
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack gap={2}>
      <NavLink href="#required-for-focus" label="With icon" leftSection={<HouseIcon size={16} />} />
      <NavLink
        href="#required-for-focus"
        label="With right section"
        leftSection={<GaugeIcon size={16} />}
        rightSection={<CaretRightIcon size={12} className="mantine-rotate-rtl" />}
      />
      <NavLink
        href="#required-for-focus"
        label="Disabled"
        leftSection={<ProhibitIcon size={16} />}
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
        leftSection={<HeartbeatIcon size={16} />}
        rightSection={<CaretRightIcon size={12} className="mantine-rotate-rtl" />}
        variant="subtle"
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Active light"
        leftSection={<HeartbeatIcon size={16} />}
        rightSection={<CaretRightIcon size={12} className="mantine-rotate-rtl" />}
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Active filled"
        leftSection={<HeartbeatIcon size={16} />}
        rightSection={<CaretRightIcon size={12} className="mantine-rotate-rtl" />}
        variant="filled"
        active
      />
    </Stack>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 240,
  component: Demo,
  code,
};
