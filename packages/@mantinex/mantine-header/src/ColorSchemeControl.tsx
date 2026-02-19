import { MoonIcon, SunIcon } from '@phosphor-icons/react';
import cx from 'clsx';
import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import classes from './ColorSchemeControl.module.css';
import { HeaderControl } from './HeaderControl';

export function ColorSchemeControl() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <HeaderControl
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      tooltip={`${computedColorScheme === 'dark' ? 'Light' : 'Dark'} mode`}
      aria-label="Toggle color scheme"
    >
      <SunIcon className={cx(classes.icon, classes.light)} />
      <MoonIcon className={cx(classes.icon, classes.dark)} />
    </HeaderControl>
  );
}
