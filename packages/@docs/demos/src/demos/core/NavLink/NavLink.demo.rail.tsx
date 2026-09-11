import { FolderIcon, GaugeIcon, GearIcon, UsersIcon } from '@phosphor-icons/react';
import { Box, NavLink } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { FolderIcon, GaugeIcon, GearIcon, UsersIcon } from '@phosphor-icons/react';
import { Box, NavLink } from '@mantine/core';

function Demo() {
  return (
    <Box w={240}>
      <NavLink
        href="#required-for-focus"
        label="Dashboard"
        leftSection={<GaugeIcon size={16} />}
        variant="rail"
      />
      <NavLink
        href="#required-for-focus"
        label="Projects"
        leftSection={<FolderIcon size={16} />}
        variant="rail"
        withGuideline
        defaultOpened
      >
        <NavLink href="#required-for-focus" label="Website" variant="rail" active />
        <NavLink href="#required-for-focus" label="Mobile app" variant="rail" />
        <NavLink href="#required-for-focus" label="Design system" variant="rail" />
      </NavLink>
      <NavLink
        href="#required-for-focus"
        label="Team"
        leftSection={<UsersIcon size={16} />}
        variant="rail"
      />
      <NavLink
        href="#required-for-focus"
        label="Settings"
        leftSection={<GearIcon size={16} />}
        variant="rail"
      />
    </Box>
  );
}
`;

function Demo() {
  return (
    <Box w={240}>
      <NavLink
        href="#required-for-focus"
        label="Dashboard"
        leftSection={<GaugeIcon size={16} />}
        variant="rail"
      />
      <NavLink
        href="#required-for-focus"
        label="Projects"
        leftSection={<FolderIcon size={16} />}
        variant="rail"
        withGuideline
        defaultOpened
      >
        <NavLink href="#required-for-focus" label="Website" variant="rail" active />
        <NavLink href="#required-for-focus" label="Mobile app" variant="rail" />
        <NavLink href="#required-for-focus" label="Design system" variant="rail" />
      </NavLink>
      <NavLink
        href="#required-for-focus"
        label="Team"
        leftSection={<UsersIcon size={16} />}
        variant="rail"
      />
      <NavLink
        href="#required-for-focus"
        label="Settings"
        leftSection={<GearIcon size={16} />}
        variant="rail"
      />
    </Box>
  );
}

export const rail: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
