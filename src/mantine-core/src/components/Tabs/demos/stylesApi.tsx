import React from 'react';
import { ImageIcon, ChatBubbleIcon, GearIcon } from '@modulz/radix-icons';
import { createUseStyles } from 'react-jss';
import { theming } from '../../../theme';
import { Tabs, TabsProps, Tab } from '../Tabs';

const code = `
import { createUseStyles } from 'react-jss';
import { theming, Tabs, Tab } from '@mantine/core';

const useStyles = createUseStyles(
  (theme) => ({
    tabControl: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
      border: \`1px solid \${
        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]
      }\`,
      fontSize: theme.fontSizes.md,
      padding: [theme.spacing.lg, theme.spacing.xl],

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
  }),
  { theming }
);

function StyledTabs(props: TabsProps) {
  const classes = useStyles();
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

const useStyles = createUseStyles(
  (theme) => ({
    tabControl: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]
      }`,
      fontSize: theme.fontSizes.md,
      padding: [theme.spacing.lg, theme.spacing.xl],

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
  }),
  { theming }
);

function StyledTabs(props: TabsProps) {
  const classes = useStyles();
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

export const stylesApi: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
