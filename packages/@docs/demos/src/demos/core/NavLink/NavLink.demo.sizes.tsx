import { FolderIcon, GaugeIcon, UsersIcon } from '@phosphor-icons/react';
import { Box, Group, NavLink } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const iconSizes: Record<string, number> = { xs: 14, sm: 16, md: 18, lg: 20, xl: 22 };

const code = (props: Record<string, any>) => {
  const size = props.size || 'sm';
  const sizeProp = props.size ? ` size="${props.size}"` : '';
  const iconSize = iconSizes[size] || 16;

  return `
import { FolderIcon, GaugeIcon, UsersIcon } from '@phosphor-icons/react';
import { Box, NavLink } from '@mantine/core';

function Demo() {
  return (
    <Box w={260}>
      <NavLink
        href="#required-for-focus"
        label="Dashboard"
        leftSection={<GaugeIcon size={${iconSize}} />}${sizeProp}
      />
      <NavLink
        href="#required-for-focus"
        label="Projects"
        leftSection={<FolderIcon size={${iconSize}} />}${sizeProp}
        defaultOpened
      >
        <NavLink href="#required-for-focus" label="Website"${sizeProp} active />
        <NavLink href="#required-for-focus" label="Mobile app"${sizeProp} />
      </NavLink>
      <NavLink
        href="#required-for-focus"
        label="Team"
        description="12 members"
        leftSection={<UsersIcon size={${iconSize}} />}${sizeProp}
      />
    </Box>
  );
}
`;
};

function Demo(props: any) {
  const iconSize = iconSizes[props.size] || 16;

  return (
    <Group justify="center">
      <Box w={260}>
        <NavLink
          href="#required-for-focus"
          label="Dashboard"
          leftSection={<GaugeIcon size={iconSize} />}
          {...props}
        />
        <NavLink
          href="#required-for-focus"
          label="Projects"
          leftSection={<FolderIcon size={iconSize} />}
          defaultOpened
          {...props}
        >
          <NavLink href="#required-for-focus" label="Website" active {...props} />
          <NavLink href="#required-for-focus" label="Mobile app" {...props} />
        </NavLink>
        <NavLink
          href="#required-for-focus"
          label="Team"
          description="12 members"
          leftSection={<UsersIcon size={iconSize} />}
          {...props}
        />
      </Box>
    </Group>
  );
}

export const sizes: MantineDemo = {
  type: 'configurator',
  component: Demo,
  code,
  controls: [{ prop: 'size', type: 'size', initialValue: 'sm', libraryValue: 'sm' }],
};
