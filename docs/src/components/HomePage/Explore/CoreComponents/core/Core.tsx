import React from 'react';
import { Tabs, createStyles } from '@mantine/core';
import { InputsDemo } from './InputsDemo';
import { ContentDemos } from './ContentDemos';
import { OverlaysDemos } from './OverlaysDemos';

const useStyles = createStyles((theme) => ({
  body: {
    paddingTop: 20,
  },

  tab: {
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,

    '@media (max-width: 755px)': {
      fontSize: theme.fontSizes.xs,
    },

    '&[data-active]': {
      backgroundColor: theme.colors.blue[theme.colorScheme === 'dark' ? 8 : 6],
      color: theme.white,
    },
  },
}));

export function CoreDemo() {
  const { classes } = useStyles();

  return (
    <Tabs variant="pills" defaultValue="inputs" classNames={classes}>
      <Tabs.List grow>
        <Tabs.Tab value="inputs">Inputs</Tabs.Tab>
        <Tabs.Tab value="overlays">Overlays</Tabs.Tab>
        <Tabs.Tab value="content">Content</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="inputs" pt="xs">
        <InputsDemo />
      </Tabs.Panel>

      <Tabs.Panel value="overlays" pt="xs">
        <OverlaysDemos />
      </Tabs.Panel>

      <Tabs.Panel value="content" pt="xs">
        <ContentDemos />
      </Tabs.Panel>
    </Tabs>
  );
}
