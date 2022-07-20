import React from 'react';
import { Tabs, TabsProps, TabsPanelProps } from '@mantine/core';
import { Prism, PrismProps } from '../Prism/Prism';
import useStyles from './PrismTabs.styles';

export function PrismTabs(props: TabsProps) {
  const { classes } = useStyles({ radius: props.radius });
  return <Tabs {...props} variant="outline" classNames={{ tab: classes.tab }} />;
}

export function PrismPanel({ language, children, radius, ...others }: PrismProps & TabsPanelProps) {
  const { classes } = useStyles({ radius });

  return (
    <Tabs.Panel {...others}>
      <Prism
        language={language}
        classNames={{ root: classes.prism, code: classes.code }}
        radius={radius}
      >
        {children}
      </Prism>
    </Tabs.Panel>
  );
}
