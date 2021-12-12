import React from 'react';
import { DefaultProps, MantineColor, ClassNames } from '@mantine/styles';
import { Box } from '../../Box';
import type { TabsVariant } from '../Tabs';
import useStyles from './TabControl.styles';

export type TabControlStylesNames = Exclude<ClassNames<typeof useStyles>, TabsVariant>;

export interface TabControlProps
  extends DefaultProps<TabControlStylesNames>,
    React.ComponentPropsWithRef<'button'> {
  active?: boolean;
  color?: MantineColor;
  variant?: TabsVariant;
  orientation?: 'horizontal' | 'vertical';
  icon?: React.ReactNode;
  buttonRef?: React.ForwardedRef<HTMLButtonElement>;
  label?: React.ReactNode;
  children?: React.ReactNode;
  ref?: React.ForwardedRef<HTMLButtonElement>;
}

export interface TabType {
  type: any;
  props: TabControlProps;
  ref: React.ForwardedRef<HTMLButtonElement>;
}

export function TabControl({
  className,
  active,
  buttonRef,
  color,
  variant = 'default',
  classNames,
  styles,
  orientation = 'horizontal',
  icon: __,
  label,
  icon,
  color: overrideColor,
  ...others
}: TabControlProps) {
  const { classes, cx } = useStyles(
    { color: overrideColor || color, orientation },
    { classNames, styles, name: 'Tabs' }
  );

  return (
    <Box
      {...others}
      component="button"
      tabIndex={active ? 0 : -1}
      className={cx(
        classes.tabControl,
        classes[variant],
        { [classes.tabActive]: active },
        className
      )}
      type="button"
      role="tab"
      aria-selected={active}
      ref={buttonRef}
    >
      <div className={classes.tabInner}>
        {icon && <div className={classes.tabIcon}>{icon}</div>}
        {label && <div className={classes.tabLabel}>{label}</div>}
      </div>
    </Box>
  );
}

TabControl.displayName = '@mantine/core/TabControl';
