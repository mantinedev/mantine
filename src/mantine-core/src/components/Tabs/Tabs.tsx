import React, { useRef, forwardRef } from 'react';
import { useUncontrolled, useMergedRef, clamp } from '@mantine/hooks';
import {
  mergeStyles,
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  ClassNames,
  useExtractedMargins,
} from '@mantine/styles';
import { Group, GroupPosition } from '../Group';
import { Tab, TabType } from './Tab/Tab';
import { TabControl, TabControlStylesNames } from './TabControl/TabControl';
import useStyles from './Tabs.styles';

export type TabsVariant = 'default' | 'outline' | 'pills' | 'unstyled';
export type TabsStylesNames =
  | Exclude<ClassNames<typeof useStyles>, TabsVariant>
  | TabControlStylesNames;

export interface TabsProps
  extends DefaultProps<TabsStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
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
  onTabChange?(tabIndex: number): void;

  /** Controls appearance */
  variant?: TabsVariant;

  /** Controls tab content padding-top */
  tabPadding?: MantineNumberSize;

  /** Controls tab orientation */
  orientation?: 'horizontal' | 'vertical';
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

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      className,
      children,
      style,
      initialTab,
      active,
      position = 'left',
      grow = false,
      onTabChange,
      color,
      variant = 'default',
      classNames,
      styles,
      tabPadding = 'xs',
      orientation = 'horizontal',
      ...others
    }: TabsProps,
    ref
  ) => {
    const { classes, cx } = useStyles({ tabPadding, orientation }, classNames, 'tabs');
    const _styles = mergeStyles(classes, styles);
    const { mergedStyles, rest } = useExtractedMargins({ others, style, rootStyle: _styles.root });

    const controlRefs = useRef<Record<string, HTMLButtonElement>>({});

    const tabs = React.Children.toArray(children).filter(
      (item: TabType) => item.type === Tab
    ) as TabType[];

    const [_activeTab, handleActiveTabChange] = useUncontrolled({
      value: active,
      defaultValue: initialTab,
      finalValue: findInitialTab(tabs),
      rule: (value) => typeof value === 'number',
      onChange: onTabChange,
    });

    const activeTab = clamp({ value: _activeTab, min: 0, max: tabs.length - 1 });

    const nextTabCode = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';
    const previousTabCode = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';

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

    const panes = tabs.map((tab, index) => (
      <TabControl
        {...tab.props}
        key={index}
        active={activeTab === index}
        tabProps={tab.props}
        onKeyDown={handleKeyDown}
        color={color}
        variant={variant}
        orientation={orientation}
        buttonRef={useMergedRef((node: HTMLButtonElement) => {
          controlRefs.current[index] = node;
        }, tab.ref)}
        onClick={() => activeTab !== index && handleActiveTabChange(index)}
        classNames={classNames}
        styles={styles}
      />
    ));

    const content = tabs[activeTab].props.children;

    return (
      <div {...rest} ref={ref} className={cx(classes.root, className)} style={mergedStyles}>
        <div
          className={cx(classes.tabsListWrapper, classes[variant])}
          style={{ ..._styles.tabsListWrapper, ..._styles[variant] }}
        >
          <Group
            className={classes.tabsList}
            style={_styles.tabsList}
            role="tablist"
            direction={orientation === 'horizontal' ? 'row' : 'column'}
            aria-orientation={orientation}
            spacing={variant === 'pills' ? 'md' : 0}
            position={position}
            grow={grow}
          >
            {panes}
          </Group>
        </div>

        {content && (
          <div role="tabpanel" className={classes.body} style={_styles.body}>
            {content}
          </div>
        )}
      </div>
    );
  }
);

Tabs.displayName = '@mantine/core/Tabs';
