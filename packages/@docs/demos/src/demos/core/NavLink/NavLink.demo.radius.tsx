import { FolderIcon, GaugeIcon, UsersIcon } from '@phosphor-icons/react';
import { Box, Group, NavLink } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { FolderIcon, GaugeIcon, UsersIcon } from '@phosphor-icons/react';
import { Box, NavLink } from '@mantine/core';

function Demo() {
  return (
    <Box w={240}>
      <NavLink
        href="#required-for-focus" variant="filled"
        label="Dashboard"
        leftSection={<GaugeIcon size={16} />}
        {{props}}
      />
      <NavLink
        href="#required-for-focus" variant="filled"
        label="Projects"
        leftSection={<FolderIcon size={16} />}
        active
        {{props}}
      />
      <NavLink
        href="#required-for-focus" variant="filled"
        label="Team"
        leftSection={<UsersIcon size={16} />}
        {{props}}
      />
    </Box>
  );
}
`;

function Demo(props: any) {
  return (
    <Group justify="center">
      <Box w={240}>
        <NavLink
          href="#required-for-focus"
          variant="filled"
          label="Dashboard"
          leftSection={<GaugeIcon size={16} />}
          {...props}
        />
        <NavLink
          href="#required-for-focus"
          variant="filled"
          label="Projects"
          leftSection={<FolderIcon size={16} />}
          active
          {...props}
        />
        <NavLink
          href="#required-for-focus"
          variant="filled"
          label="Team"
          leftSection={<UsersIcon size={16} />}
          {...props}
        />
      </Box>
    </Group>
  );
}

export const radius: MantineDemo = {
  type: 'configurator',
  component: Demo,
  code,
  controls: [{ prop: 'radius', type: 'size', initialValue: 'md', libraryValue: 'md' }],
};
