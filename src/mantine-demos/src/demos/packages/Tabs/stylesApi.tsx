import React from 'react';
import { ImageIcon, ChatBubbleIcon, GearIcon } from '@modulz/radix-icons';
import { Tabs, TabsProps } from '@mantine/core';

const code = `
import { TabsProps, Tabs, Tab } from '@mantine/core';
import { ImageIcon, ChatBubbleIcon, GearIcon } from '@modulz/radix-icons';

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
      <Tabs.Tab label="Settings" icon={<GearIcon width={16} height={16} />} />
      <Tabs.Tab label="Messages" icon={<ChatBubbleIcon width={16} height={16} />} />
      <Tabs.Tab label="Gallery" icon={<ImageIcon width={16} height={16} />} />
    </StyledTabs>
  );
}
`;

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      variant="unstyled"
      styles={(theme) => ({
        tabControl: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
          border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]
          }`,
          fontSize: theme.fontSizes.md,
          padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,

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
      <Tabs.Tab label="Settings" icon={<GearIcon width={16} height={16} />} />
      <Tabs.Tab label="Messages" icon={<ChatBubbleIcon width={16} height={16} />} />
      <Tabs.Tab label="Gallery" icon={<ImageIcon width={16} height={16} />} />
    </StyledTabs>
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
