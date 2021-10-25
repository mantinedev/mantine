import React from 'react';
import { DefaultProps, MantineColor, ClassNames } from '@mantine/styles';
import { TabProps } from '../Tab/Tab';
import type { TabsVariant } from '../Tabs';
import useStyles from './TabControl.styles';

export type TabControlStylesNames = Exclude<ClassNames<typeof useStyles>, TabsVariant>;

export interface TabControlProps
  extends DefaultProps<TabControlStylesNames>,
    React.ComponentPropsWithoutRef<'button'> {
  active: boolean;
  tabProps: TabProps;
  color?: MantineColor;
  variant?: TabsVariant;
  orientation?: 'horizontal' | 'vertical';
  icon?: React.ReactNode;
  buttonRef?: React.ForwardedRef<HTMLButtonElement>;
}

export function TabControl({
  className,
  active,
  buttonRef,
  tabProps,
  color,
  variant = 'default',
  classNames,
  styles,
  orientation = 'horizontal',
  icon: __,
  ...others
}: TabControlProps) {
  const { label, icon, color: overrideColor, ...props } = tabProps;
  const { classes, cx } = useStyles(
    { color: overrideColor || color, orientation },
    { classNames, styles, name: 'Tabs' }
  );

  return (
    <button
      {...others}
      {...props}
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
    </button>
  );
}

TabControl.displayName = '@mantine/core/TabControl';
