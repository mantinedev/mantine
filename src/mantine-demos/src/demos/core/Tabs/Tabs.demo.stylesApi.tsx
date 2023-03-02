import React from 'react';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Tabs, TabsProps, rem } from '@mantine/core';

const code = `
import { Tabs, TabsProps, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      unstyled
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
          border: \`\${rem(1)} solid \${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]}\`,
          padding: \`\${theme.spacing.xs} \${theme.spacing.md}\`,
          cursor: 'pointer',
          fontSize: theme.fontSizes.sm,
          display: 'flex',
          alignItems: 'center',

          '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
          },

          '&:not(:first-of-type)': {
            borderLeft: 0,
          },

          '&:first-of-type': {
            borderTopLeftRadius: theme.radius.md,
            borderBottomLeftRadius: theme.radius.md,
          },

          '&:last-of-type': {
            borderTopRightRadius: theme.radius.md,
            borderBottomRightRadius: theme.radius.md,
          },

          '&[data-active]': {
            backgroundColor: theme.colors.blue[7],
            borderColor: theme.colors.blue[7],
            color: theme.white,
          },
        },

        tabIcon: {
          marginRight: theme.spacing.xs,
          display: 'flex',
          alignItems: 'center',
        },

        tabsList: {
          display: 'flex',
        },
      })}
      {...props}
    />
  );
}

function Demo() {
  return (
    <StyledTabs>
      <Tabs.List>
        <Tabs.Tab value="settings" icon={<IconSettings size="1rem" />}>
          Settings
        </Tabs.Tab>
        <Tabs.Tab value="messages" icon={<IconMessageCircle size="1rem" />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="gallery" icon={<IconPhoto size="1rem" />}>
          Gallery
        </Tabs.Tab>
      </Tabs.List>
    </StyledTabs>
  );
}
`;

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      unstyled
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
          border: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]
          }`,
          padding: `${theme.spacing.xs} ${theme.spacing.md}`,
          cursor: 'pointer',
          fontSize: theme.fontSizes.sm,
          display: 'flex',
          alignItems: 'center',

          '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
          },

          '&:not(:first-of-type)': {
            borderLeft: 0,
          },

          '&:first-of-type': {
            borderTopLeftRadius: theme.radius.md,
            borderBottomLeftRadius: theme.radius.md,
          },

          '&:last-of-type': {
            borderTopRightRadius: theme.radius.md,
            borderBottomRightRadius: theme.radius.md,
          },

          '&[data-active]': {
            backgroundColor: theme.colors.blue[7],
            borderColor: theme.colors.blue[7],
            color: theme.white,
          },
        },

        tabIcon: {
          marginRight: theme.spacing.xs,
          display: 'flex',
          alignItems: 'center',
        },

        tabsList: {
          display: 'flex',
        },
      })}
      {...props}
    />
  );
}

function Demo() {
  return (
    <StyledTabs defaultValue="settings">
      <Tabs.List>
        <Tabs.Tab value="settings" icon={<IconSettings size="1rem" />}>
          Settings
        </Tabs.Tab>
        <Tabs.Tab value="messages" icon={<IconMessageCircle size="1rem" />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="gallery" icon={<IconPhoto size="1rem" />}>
          Gallery
        </Tabs.Tab>
      </Tabs.List>
    </StyledTabs>
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
