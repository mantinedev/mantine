import React from 'react';
import cx from 'clsx';
import { useMergedRef, useReducedMotion } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, mergeStyles } from '../../../theme';
import { TabProps } from '../Tab/Tab';
import type { TabsVariant } from '../Tabs';
import useStyles from './TabControl.styles';

export type TabControlStylesNames = Exclude<keyof ReturnType<typeof useStyles>, TabsVariant>;

export interface TabControlProps
  extends DefaultProps<typeof useStyles>,
    React.ComponentPropsWithoutRef<'button'> {
  active: boolean;
  elementRef(node: HTMLButtonElement): void;
  tabProps: TabProps;
  color?: string;
  variant?: TabsVariant;
}

export function TabControl({
  className,
  style,
  themeOverride,
  active,
  elementRef,
  tabProps,
  color,
  variant = 'default',
  classNames,
  styles,
  ...others
}: TabControlProps) {
  const { label, icon, color: overrideColor, elementRef: _, ...props } = tabProps;
  const theme = useMantineTheme(themeOverride);
  const reduceMotion = useReducedMotion();
  const classes = useStyles(
    { reduceMotion, color: overrideColor || color, theme },
    classNames,
    'tabs'
  );

  const _styles = mergeStyles(classes, styles);

  return (
    <button
      {...others}
      {...props}
      data-mantine-tab
      tabIndex={active ? 0 : -1}
      className={cx(classes.root, classes[variant], { [classes.tabActive]: active }, className)}
      type="button"
      role="tab"
      aria-selected={active}
      ref={useMergedRef(elementRef, tabProps.elementRef)}
      style={{
        ...style,
        ..._styles.root,
        ..._styles[variant],
        ...(active ? _styles.tabActive : null),
      }}
    >
      <div className={classes.tabInner} style={_styles.tabInner}>
        {icon && (
          <div className={classes.tabIcon} style={_styles.tabIcon}>
            {icon}
          </div>
        )}

        {label && (
          <div className={classes.tabLabel} style={_styles.tabLabel}>
            {label}
          </div>
        )}
      </div>
    </button>
  );
}

TabControl.displayName = '@mantine/core/TabControl';
