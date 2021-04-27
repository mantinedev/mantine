import React, { useState, useRef } from 'react';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { ElementsGroup, ElementsGroupPosition } from '../ElementsGroup/ElementsGroup';
import { Tab, TabType } from './Tab/Tab';
import { TabControl } from './TabControl/TabControl';
import useStyles from './Tabs.styles';

export { Tab };

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

interface TabsProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** <Tab /> components only */
  children: React.ReactNode;

  /** index of initial tab */
  initialTab?: number;

  /** index of active tab, overrides internal state */
  active?: number;

  /** active tab color from theme */
  color?: string;

  /** true if tabs should take all available space */
  grow?: boolean;

  /** tab controls position */
  position?: ElementsGroupPosition;

  /** called when tab control is clicked with tab index */
  onTabChange?(tabIndex: number): void;
}

function getPreviousTab(active: number, tabs: TabType[]) {
  for (let i = active - 1; i >= 0; i -= 1) {
    if (!tabs[i].props.disabled) {
      return i;
    }
  }

  return active;
}

function getNextTab(active: number, tabs: TabType[]) {
  for (let i = active + 1; i < tabs.length; i += 1) {
    if (!tabs[i].props.disabled) {
      return i;
    }
  }

  return active;
}

function findInitialTab(tabs: TabType[]) {
  for (let i = 0; i < tabs.length; i += 1) {
    if (!tabs[i].props.disabled) {
      return i;
    }
  }

  return -1;
}

export function Tabs({
  children,
  initialTab,
  themeOverride,
  active,
  position = 'left',
  grow = false,
  onTabChange,
  color,
  ...others
}: TabsProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });

  const controlRefs = useRef<Record<string, HTMLButtonElement>>({});

  const tabs = React.Children.toArray(children).filter(
    (item: TabType) => item.type === Tab
  ) as TabType[];

  const [_activeTab, _setActiveTab] = useState(
    typeof initialTab === 'number' ? initialTab : findInitialTab(tabs)
  );
  const activeTab = clamp(typeof active === 'number' ? active : _activeTab, 0, tabs.length - 1);
  const setActiveTab = (tabIndex: number) => {
    _setActiveTab(tabIndex);

    if (typeof onTabChange === 'function') {
      onTabChange(tabIndex);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.nativeEvent.code === 'ArrowRight') {
      const nextTab = getNextTab(activeTab, tabs);
      setActiveTab(nextTab);
      controlRefs.current[nextTab].focus();
    }

    if (event.nativeEvent.code === 'ArrowLeft') {
      const previousTab = getPreviousTab(activeTab, tabs);
      setActiveTab(previousTab);
      controlRefs.current[previousTab].focus();
    }
  };

  const panes = tabs.map((tab, index) => (
    <TabControl
      key={index}
      active={activeTab === index}
      tabProps={tab.props}
      onKeyDown={handleKeyDown}
      color={color}
      elementRef={(node) => {
        controlRefs.current[index] = node;
      }}
      onClick={() => activeTab !== index && setActiveTab(index)}
    />
  ));

  const content = tabs[activeTab].props.children;

  return (
    <div {...others}>
      <div className={classes.tabs}>
        <ElementsGroup
          className={classes.tabsInner}
          role="tablist"
          aria-orientation="horizontal"
          spacing={0}
          position={position}
          grow={grow}
        >
          {panes}
        </ElementsGroup>
      </div>

      {content && (
        <div data-mantine-tab-content className={classes.body} role="tabpanel">
          {content}
        </div>
      )}
    </div>
  );
}

Tabs.displayName = '@mantine/core/Tabs';
