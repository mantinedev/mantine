import React from 'react';
import { InputIcon, StackIcon, DashboardIcon } from '@modulz/radix-icons';
import { Tabs, Tab, createStyles } from '@mantine/core';
import { InputsDemo } from './InputsDemo';
import { ContentDemos } from './ContentDemos';
import { OverlaysDemos } from './OverlaysDemos';

const useStyles = createStyles((theme) => ({
  body: {
    paddingTop: 20,
  },

  tabControl: {
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
    }`,
    backgroundColor: `${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
    } !important`,

    '@media (max-width: 755px)': {
      fontSize: theme.fontSizes.xs,
    },
  },

  tabActive: {
    backgroundColor: `${theme.colors.blue[theme.colorScheme === 'dark' ? 8 : 6]} !important`,
    color: `${theme.white} !important`,
  },
}));

export function CoreDemo() {
  const iconStyles = { width: 16, height: 16 };
  const { classes } = useStyles();

  return (
    <Tabs grow variant="pills" classNames={classes}>
      <Tab label="Inputs" icon={<InputIcon style={iconStyles} />}>
        <InputsDemo />
      </Tab>
      <Tab label="Overlays" icon={<StackIcon style={iconStyles} />}>
        <OverlaysDemos />
      </Tab>
      <Tab label="Content" icon={<DashboardIcon style={iconStyles} />}>
        <ContentDemos />
      </Tab>
    </Tabs>
  );
}
