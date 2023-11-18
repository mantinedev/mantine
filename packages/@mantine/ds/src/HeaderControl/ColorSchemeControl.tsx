import React from 'react';
import cx from 'clsx';
import { useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { HeaderControl } from './HeaderControl';
import classes from './ColorSchemeControl.module.css';

export function ColorSchemeControl() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <HeaderControl
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      tooltip={`${computedColorScheme === 'dark' ? 'Light' : 'Dark'} mode`}
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </HeaderControl>
  );
}
