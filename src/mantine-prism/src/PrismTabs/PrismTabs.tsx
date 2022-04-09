import React from 'react';
import { Tabs, TabsProps, TabsPanelProps } from '@mantine/core';
import { Prism, PrismProps } from '../Prism/Prism';
import useStyles from './PrismTabs.styles';

export function PrismTabs(props: TabsProps) {
  const { classes } = useStyles();
  return (
    <Tabs
      {...props}
      variant="outline"
      classNames={{ tabsList: classes.tabs, tab: classes.tab, tabActive: classes.tabActive }}
    />
  );
}

export function PrismPanel({ language, children, ...others }: PrismProps & TabsPanelProps) {
  const { classes } = useStyles();
  return (
    <Tabs.Panel {...others}>
      <Prism language={language} classNames={{ code: classes.code }}>
        {children}
      </Prism>
    </Tabs.Panel>
  );
}
