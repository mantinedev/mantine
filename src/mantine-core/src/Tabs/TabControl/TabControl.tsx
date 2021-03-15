import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { TabProps } from '../Tab/Tab';
import useStyles from './TabControl.styles';

interface TabControlProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
  active: boolean;
  elementRef(node: HTMLButtonElement): void;
  tabProps: TabProps;
}

export function TabControl({
  themeOverride,
  active,
  elementRef,
  tabProps,
  ...others
}: TabControlProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });
  return (
    <button
      {...others}
      tabIndex={active ? 0 : -1}
      className={cx(classes.tab, { [classes.tabActive]: active })}
      type="button"
      role="tab"
      aria-selected={active}
      ref={elementRef}
    >
      <div className={classes.tabInner}>
        {tabProps.icon && <div className={classes.tabIcon}>{tabProps.icon}</div>}
        {tabProps.title && <div>{tabProps.title}</div>}
      </div>
    </button>
  );
}

TabControl.displayName = '@mantine/core/TabControl';
