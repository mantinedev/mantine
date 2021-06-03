import React from 'react';
import cx from 'clsx';
import { useMergedRef, useReducedMotion } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, mergeStyles } from '../../../theme';
import { TabProps } from '../Tab/Tab';
import useStyles from './TabControl.styles';

export type TabControlStylesNames = keyof ReturnType<typeof useStyles>;

export interface TabControlProps
  extends DefaultProps<typeof useStyles>,
    React.ComponentPropsWithoutRef<'button'> {
  active: boolean;
  elementRef(node: HTMLButtonElement): void;
  tabProps: TabProps;
  color?: string;
  variant?: 'default' | 'outline';
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
  const classes = useStyles(
    {
      reduceMotion: useReducedMotion(),
      color: overrideColor || color,
      theme,
    },
    classNames
  );

  const _styles = mergeStyles(classes, styles);

  return (
    <button
      {...others}
      {...props}
      data-mantine-tab
      tabIndex={active ? 0 : -1}
      className={cx(classes.root, classes[variant], { [classes.active]: active }, className)}
      type="button"
      role="tab"
      aria-selected={active}
      ref={useMergedRef(elementRef, tabProps.elementRef)}
      style={{
        ...style,
        ..._styles.root,
        ..._styles[variant],
        ...(active ? _styles.active : null),
      }}
    >
      <div className={classes.inner} style={_styles.inner}>
        {icon && (
          <div data-mantine-icon className={classes.icon} style={_styles.icon}>
            {icon}
          </div>
        )}

        {label && (
          <div className={classes.label} style={_styles.label} data-mantine-label>
            {label}
          </div>
        )}
      </div>
    </button>
  );
}

TabControl.displayName = '@mantine/core/TabControl';
