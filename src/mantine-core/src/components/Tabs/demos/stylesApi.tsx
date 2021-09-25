import React from 'react';
import { ImageIcon, ChatBubbleIcon, GearIcon } from '@modulz/radix-icons';
import { createStyles } from '@mantine/styles';
import { Tabs, TabsProps, Tab } from '../index';

const code = `
import { createStyles, Tabs, Tab } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  tabControl: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    border: \`1px solid \${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]
    }\`,
    fontSize: theme.fontSizes.md,
    padding: \`\${theme.spacing.lg}px \${theme.spacing.xl}px\`,

    '& + &': {
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
}));

function StyledTabs(props: TabsProps) {
  const { classes } = useStyles();
  return <Tabs variant="unstyled" classNames={classes} {...props} />;
}

function Demo() {
  return (
    <StyledTabs>
      <Tab label="Settings" icon={<GearIcon width={16} height={16} />} />
      <Tab label="Messages" icon={<ChatBubbleIcon width={16} height={16} />} />
      <Tab label="Gallery" icon={<ImageIcon width={16} height={16} />} />
    </StyledTabs>
  );
}
`;

const useStyles = createStyles((theme) => ({
  tabControl: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]
    }`,
    fontSize: theme.fontSizes.md,
    padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,

    '& + &': {
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
}));

function StyledTabs(props: TabsProps) {
  const { classes } = useStyles();
  return <Tabs variant="unstyled" classNames={classes as any} {...props} />;
}

function Demo() {
  return (
    <StyledTabs>
      <Tab label="Settings" icon={<GearIcon width={16} height={16} />} />
      <Tab label="Messages" icon={<ChatBubbleIcon width={16} height={16} />} />
      <Tab label="Gallery" icon={<ImageIcon width={16} height={16} />} />
    </StyledTabs>
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
