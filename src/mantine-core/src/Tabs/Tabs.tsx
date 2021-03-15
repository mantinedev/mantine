import React, { useState, useRef } from 'react';
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

  const controlRefs = useRef<Record<string, HTMLButtonElement>>({});

  const tabs = React.Children.toArray(children).filter(
    (item: TabType) => item.type === Tab
  ) as TabType[];

  const [activeTab, setActiveTab] = useState(Math.min(Math.max(initialTab, 0), tabs.length - 1));

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.nativeEvent.code === 'ArrowRight') {
      const nextTab = activeTab < tabs.length - 1 ? activeTab + 1 : activeTab;
      setActiveTab(nextTab);
      controlRefs.current[nextTab].focus();
    }

    if (event.nativeEvent.code === 'ArrowLeft') {
      const prevTab = activeTab > 0 ? activeTab - 1 : activeTab;
      setActiveTab(prevTab);
      controlRefs.current[prevTab].focus();
    }
  };

  const panes = tabs.map((tab, index) => (
    <button
      className={cx(classes.pane, { [classes.paneActive]: index === activeTab })}
      tabIndex={activeTab === index ? 0 : -1}
      type="button"
      key={index}
      onKeyDown={handleKeyDown}
      ref={(node) => {
        controlRefs.current[index] = node;
      }}
      onClick={() => setActiveTab(index)}
    >
      <div className={classes.paneInner}>
        {tab.props.icon && <div className={classes.paneIcon}>{tab.props.icon}</div>}
        <div>{tab.props.title}</div>
      </div>
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
