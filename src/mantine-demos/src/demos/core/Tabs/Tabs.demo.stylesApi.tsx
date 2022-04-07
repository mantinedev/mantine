import React from 'react';
import { Photo, MessageCircle, Settings } from 'tabler-icons-react';
import { Tabs, TabsProps } from '@mantine/core';

const code = `
import { TabsProps, Tabs } from '@mantine/core';
import { Photo, MessageCircle, Settings } from 'tabler-icons-react';

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      variant="unstyled"
      styles={(theme) => ({
        tabControl: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
          border: \`1px solid \${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]}\`,
          fontSize: theme.fontSizes.md,
          padding: \`\${theme.spacing.lg}px \${theme.spacing.xl}px\`,

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
        },

        tabActive: {
          backgroundColor: theme.colors.blue[7],
          borderColor: theme.colors.blue[7],
          color: theme.white,
        },
      })}
      {...props}
    />
  );
}

function Demo() {
  return (
    <StyledTabs>
      <Tabs.Tab label="Settings" icon={<Settings size={16} />} />
      <Tabs.Tab label="Messages" icon={<MessageCircle size={16} />} />
      <Tabs.Tab label="Gallery" icon={<Photo size={16} />} />
    </StyledTabs>
  );
}
`;

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      defaultValue="react"
      unstyled
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
          border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]
          }`,
          padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
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
        },

        tabIcon: {
          marginRight: theme.spacing.xs,
          display: 'flex',
          alignItems: 'center',
        },

        tabsList: {
          display: 'flex',
        },

        tabActive: {
          backgroundColor: theme.colors.blue[7],
          borderColor: theme.colors.blue[7],
          color: theme.white,
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
        <Tabs.Tab value="settings" icon={<Settings size={16} />}>
          Settings
        </Tabs.Tab>
        <Tabs.Tab value="messages" icon={<MessageCircle size={16} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="gallery" icon={<Photo size={16} />}>
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
