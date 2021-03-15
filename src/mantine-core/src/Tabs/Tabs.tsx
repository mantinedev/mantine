import React, { useState, useRef } from 'react';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { useReducedMotion } from '@mantine/hooks';
import { Tab, TabType } from './Tab/Tab';
import { TabControl } from './TabControl/TabControl';
import useStyles from './Tabs.styles';

export { Tab };

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

interface TabsProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  initialTab?: number;
  active?: number;
  onTabChange?(tabIndex: number): void;
}

export function Tabs({
  children,
  initialTab = 0,
  themeOverride,
  active,
  onTabChange,
  ...others
}: TabsProps) {
  const classes = useStyles({
    reduceMotion: useReducedMotion(),
    theme: useMantineTheme(themeOverride),
  });

  const controlRefs = useRef<Record<string, HTMLButtonElement>>({});

  const tabs = React.Children.toArray(children).filter(
    (item: TabType) => item.type === Tab
  ) as TabType[];

  const [_activeTab, _setActiveTab] = useState(initialTab);
  const activeTab = clamp(typeof active === 'number' ? active : _activeTab, 0, tabs.length - 1);
  const setActiveTab = (tabIndex: number) => {
    _setActiveTab(tabIndex);

    if (typeof onTabChange === 'function') {
      onTabChange(tabIndex);
    }
  };

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
    <TabControl
      key={index}
      active={activeTab === index}
      tabProps={tab.props}
      onKeyDown={handleKeyDown}
      elementRef={(node) => {
        controlRefs.current[index] = node;
      }}
      onClick={() => setActiveTab(index)}
    />
  ));

  return (
    <div {...others}>
      <div className={classes.tabs}>{panes}</div>
      <div className={classes.body}>{tabs[activeTab].props.children}</div>
    </div>
  );
}

Tabs.displayName = '@mantine/core/Tabs';
