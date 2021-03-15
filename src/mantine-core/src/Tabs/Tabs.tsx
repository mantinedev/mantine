import React, { useState } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { useReducedMotion } from '@mantine/hooks';
import { Tab, TabType } from './Tab';
import useStyles from './Tabs.styles';

export { Tab };

interface TabsProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  initialTab?: number;
}

export function Tabs({ children, initialTab = 0, themeOverride, ...others }: TabsProps) {
  const classes = useStyles({
    reduceMotion: useReducedMotion(),
    theme: useMantineTheme(themeOverride),
  });

  const tabs = React.Children.toArray(children).filter(
    (item: TabType) => item.type === Tab
  ) as TabType[];

  const [activeTab, setActiveTab] = useState(Math.min(Math.max(initialTab, 0), tabs.length - 1));

  const panes = tabs.map((tab, index) => (
    <button
      className={cx(classes.pane, { [classes.paneActive]: index === activeTab })}
      type="button"
      key={index}
      onClick={() => setActiveTab(index)}
    >
      {tab.props.title}
    </button>
  ));

  return (
    <div {...others}>
      <div className={classes.panes}>{panes}</div>
      <div className={classes.body}>{tabs[activeTab].props.children}</div>
    </div>
  );
}

Tabs.displayName = '@mantine/core/Tabs';
