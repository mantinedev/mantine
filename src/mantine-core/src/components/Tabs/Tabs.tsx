import React, { useRef, forwardRef, Children } from 'react';
import { useUncontrolled, clamp } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  Selectors,
  ForwardRefWithStaticComponents,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';
import { Group, GroupPosition } from '../Group';
import { TabControl, TabControlStylesNames } from './TabControl/TabControl';
import useStyles from './Tabs.styles';

export type TabsVariant = 'default' | 'outline' | 'pills' | 'unstyled';
export type TabsStylesNames =
  | Exclude<Selectors<typeof useStyles>, TabsVariant>
  | TabControlStylesNames;

export interface TabsProps
  extends DefaultProps<TabsStylesNames>,
    React.ComponentPropsWithRef<'div'> {
  /** <Tab /> components only */
  children: React.ReactNode;

  /** Index of initial tab */
  initialTab?: number;

  /** Index of active tab, overrides internal state */
  active?: number;

  /** Active tab color from theme.colors */
  color?: MantineColor;

  /** True if tabs should take all available space */
  grow?: boolean;

  /** Tab controls position */
  position?: GroupPosition;

  /** Called when tab control is clicked with tab index */
  onTabChange?(tabIndex: number, tabKey?: string): void;

  /** Controls appearance */
  variant?: TabsVariant;

  /** Controls tab content padding-top */
  tabPadding?: MantineNumberSize;

  /** Controls tab orientation */
  orientation?: 'horizontal' | 'vertical';
}

function getPreviousTab(active: number, tabs: React.ReactElement[]) {
  for (let i = active - 1; i >= 0; i -= 1) {
    if (!tabs[i].props.disabled) {
      return i;
    }
  }

  return active;
}

function getNextTab(active: number, tabs: React.ReactElement[]) {
  for (let i = active + 1; i < tabs.length; i += 1) {
    if (!tabs[i].props.disabled) {
      return i;
    }
  }

  return active;
}

function findInitialTab(tabs: React.ReactElement[]) {
  for (let i = 0; i < tabs.length; i += 1) {
    if (!tabs[i].props.disabled) {
      return i;
    }
  }

  return -1;
}

type TabsComponent = ForwardRefWithStaticComponents<TabsProps, { Tab: typeof TabControl }>;

const defaultProps: Partial<TabsProps> = {
  position: 'left',
  grow: false,
  variant: 'default',
  tabPadding: 'xs',
  orientation: 'horizontal',
};

export const Tabs: TabsComponent = forwardRef<HTMLDivElement, TabsProps>(
  (props: TabsProps, ref) => {
    const {
      className,
      children,
      initialTab,
      active,
      position,
      grow,
      onTabChange,
      color,
      variant,
      classNames,
      styles,
      tabPadding,
      orientation,
      ...others
    } = useMantineDefaultProps('Tabs', defaultProps, props);

    const { classes, cx, theme } = useStyles(
      { tabPadding, orientation },
      { classNames, styles, name: 'Tabs' }
    );

    const controlRefs = useRef<Record<string, HTMLButtonElement>>({});
    const tabs = Children.toArray(children) as React.ReactElement[];

    const [_activeTab, handleActiveTabChange] = useUncontrolled({
      value: active,
      defaultValue: initialTab,
      finalValue: findInitialTab(tabs),
      rule: (value) => typeof value === 'number',
      onChange: (value) => {
        if (onTabChange) {
          tabs.some((tab) => tab.props.tabKey)
            ? onTabChange(value, tabs[value].props.tabKey)
            : onTabChange(value);
        }
      },
    });

    const activeTab = clamp({ value: _activeTab, min: 0, max: tabs.length - 1 });

    const nextTabCode =
      orientation === 'horizontal'
        ? theme.dir === 'ltr'
          ? 'ArrowRight'
          : 'ArrowLeft'
        : 'ArrowDown';
    const previousTabCode =
      orientation === 'horizontal' ? (theme.dir === 'ltr' ? 'ArrowLeft' : 'ArrowRight') : 'ArrowUp';

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.nativeEvent.code === nextTabCode) {
        event.preventDefault();
        const nextTab = getNextTab(activeTab, tabs);
        handleActiveTabChange(nextTab);
        controlRefs.current[nextTab].focus();
      }

      if (event.nativeEvent.code === previousTabCode) {
        event.preventDefault();
        const previousTab = getPreviousTab(activeTab, tabs);
        handleActiveTabChange(previousTab);
        controlRefs.current[previousTab].focus();
      }
    };

    const panes = tabs.map((tab, index) =>
      React.cloneElement(tab, {
        key: index,
        active: activeTab === index,
        onKeyDown: handleKeyDown,
        color: tab.props.color || color,
        variant,
        orientation,
        elementRef: (node: HTMLButtonElement) => {
          controlRefs.current[index] = node;
        },
        onClick: () => activeTab !== index && handleActiveTabChange(index),
        classNames,
        styles,
      })
    );

    const content = tabs[activeTab].props.children;

    return (
      <Box ref={ref} className={cx(classes.root, className)} {...others}>
        <div className={cx(classes.tabsListWrapper, classes[variant])}>
          <Group
            className={classes.tabsList}
            role="tablist"
            direction={orientation === 'horizontal' ? 'row' : 'column'}
            aria-orientation={orientation}
            spacing={variant === 'pills' ? 5 : 0}
            position={position}
            grow={grow}
          >
            {panes}
          </Group>
        </div>

        {content && (
          <div role="tabpanel" className={classes.body} key={activeTab}>
            {content}
          </div>
        )}
      </Box>
    );
  }
) as any;

Tabs.displayName = '@mantine/core/Tabs';
Tabs.Tab = TabControl;
