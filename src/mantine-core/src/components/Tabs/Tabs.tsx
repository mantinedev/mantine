import React, { useState, useRef } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, mergeStyles } from '../../theme';
import { Group, GroupPosition } from '../Group/Group';
import { Tab, TabType, TabProps } from './Tab/Tab';
import { TabControl } from './TabControl/TabControl';
import useStyles from './Tabs.styles';

export { Tab };
export type { TabProps };

export const TABS_VARIANTS = ['default', 'outline', 'pills'] as const;
export type TabsVariant = typeof TABS_VARIANTS[number];
export type TabsStylesNames = Exclude<keyof ReturnType<typeof useStyles>, TabsVariant>;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export interface TabsProps
  extends DefaultProps<typeof useStyles>,
    React.ComponentPropsWithoutRef<'div'> {
  /** <Tab /> components only */
  children: React.ReactNode;

  /** Index of initial tab */
  initialTab?: number;

  /** Index of active tab, overrides internal state */
  active?: number;

  /** Active tab color from theme */
  color?: string;

  /** True if tabs should take all available space */
  grow?: boolean;

  /** Tab controls position */
  position?: GroupPosition;

  /** Called when tab control is clicked with tab index */
  onTabChange?(tabIndex: number): void;

  /** Controls appearance */
  variant?: 'default' | 'outline' | 'pills';
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
  className,
  children,
  style,
  initialTab,
  themeOverride,
  active,
  position = 'left',
  grow = false,
  onTabChange,
  color,
  variant = 'default',
  classNames,
  styles,
  ...others
}: TabsProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, 'tabs');
  const _styles = mergeStyles(classes, styles);

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
      {...tab.props}
      key={index}
      active={activeTab === index}
      tabProps={tab.props}
      onKeyDown={handleKeyDown}
      color={color}
      variant={variant}
      elementRef={(node) => {
        controlRefs.current[index] = node;
      }}
      onClick={() => activeTab !== index && setActiveTab(index)}
    />
  ));

  const content = tabs[activeTab].props.children;

  return (
    <div {...others} className={cx(classes.root, className)} style={{ ...style, ..._styles.root }}>
      <div
        className={cx(classes.tabsListWrapper, classes[variant])}
        style={{ ..._styles.tabsListWrapper, ..._styles[variant] }}
      >
        <Group
          className={classes.tabsList}
          style={_styles.tabsList}
          role="tablist"
          aria-orientation="horizontal"
          spacing={variant === 'pills' ? 'md' : 0}
          position={position}
          grow={grow}
        >
          {panes}
        </Group>
      </div>

      {content && (
        <div data-mantine-tab-content role="tabpanel" className={classes.body} style={_styles.body}>
          {content}
        </div>
      )}
    </div>
  );
}

Tabs.displayName = '@mantine/core/Tabs';
