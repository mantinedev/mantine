import React from 'react';
import { Tabs, TabsProps, TabsPanelProps } from '@mantine/core';
import { Prism, PrismProps } from '../Prism';
import useStyles from './PrismTabs.styles';

export function PrismTabs({ variant = 'outline', ...others }: TabsProps) {
  const { classes } = useStyles();
  return (
    <Tabs
      variant={variant}
      classNames={{ tabsList: classes.tabs, tab: classes.tab, tabActive: classes.tabActive }}
      {...others}
    />
  );
}

export function PrismPanel(props: PrismProps & TabsPanelProps) {
  const { classes } = useStyles();
  return (
    <Tabs.Panel value={props.value}>
      <Prism language={props.language} classNames={{ code: classes.code }}>
        {props.children}
      </Prism>
    </Tabs.Panel>
  );
}
