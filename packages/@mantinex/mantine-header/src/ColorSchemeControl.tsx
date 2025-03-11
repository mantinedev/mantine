import { useEffect } from 'react';
import { IconMoon, IconSun, IconSunMoon } from '@tabler/icons-react';
import cx from 'clsx';
import { MantineColorScheme, useMantineColorScheme } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import { HeaderControl } from './HeaderControl';
import classes from './ColorSchemeControl.module.css';

export function ColorSchemeControl() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const [scheme, toggle] = useToggle(['light', 'auto', 'dark'] as MantineColorScheme[]);
  const tooltip =
    colorScheme === 'auto' ? 'System preferences' : colorScheme === 'light' ? 'Light' : 'Dark';

  useEffect(() => {
    setColorScheme(scheme);
  }, [scheme]);

  return (
    <HeaderControl
      onClick={() => toggle()}
      tooltip={`${tooltip} mode`}
      aria-label="Toggle color scheme"
      data-active={scheme}
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
      <IconSunMoon className={cx(classes.icon, classes.auto)} stroke={1.5} />
    </HeaderControl>
  );
}
