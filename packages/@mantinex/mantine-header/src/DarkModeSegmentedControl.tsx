import { useEffect, useLayoutEffect, useState } from 'react';
import { IconMoonStars, IconSun, IconYinYangFilled } from '@tabler/icons-react';
import {
  Center,
  px,
  SegmentedControl,
  useMantineColorScheme,
  useMantineTheme,
  type MantineColorScheme,
  type SegmentedControlProps,
} from '@mantine/core';
import classes from './DarkModeSegmentedControl.module.css';

interface DarkModeSegmentedControl extends Omit<SegmentedControlProps, 'data'> {
  iconSizeInRem?: string;
  iconStroke?: number;
}

export function DarkModeSegmentedControl({
  iconSizeInRem = '1rem',
  iconStroke,
  transitionDuration = 200,
  ...restProp
}: DarkModeSegmentedControl) {
  const iconSize = px(iconSizeInRem);
  const theme = useMantineTheme();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [colorSchemeSegmentedControlValue, setColorSchemeSegmentedControlValue] = useState(
    'auto' as MantineColorScheme
  ); // Allow the state of SegmentedControl to change immediately, even before the transition finish

  const lightIcon = (
    <IconSun
      style={{ width: iconSize, height: iconSize }}
      stroke={iconStroke ?? 2.5}
      color={theme.colors.yellow[6]}
    />
  );

  const darkIcon = (
    <IconMoonStars
      style={{ width: iconSize, height: iconSize }}
      stroke={iconStroke ?? 2.5}
      color={theme.colors.blue[6]}
    />
  );

  const autoIcon = (
    <>
      <IconYinYangFilled
        style={{ width: iconSize, height: iconSize }}
        stroke={iconStroke ?? 2.5}
        color={theme.black}
        className={classes.dark}
      />
      <IconYinYangFilled
        style={{ width: iconSize, height: iconSize }}
        stroke={iconStroke ?? 2.5}
        color={theme.white}
        className={classes.light}
      />
    </>
  );

  useEffect(() => {
    setColorSchemeSegmentedControlValue(colorScheme); // Avoid hydration error, meanwhile sync with other color scheme control if any
  }, [colorScheme]);

  useLayoutEffect(() => {
    // Aollow SegmentedControl transition to finish before re-rendering the color scheme
    const timeoutId = setTimeout(() => {
      setColorScheme(colorSchemeSegmentedControlValue);
    }, transitionDuration);
    return () => clearTimeout(timeoutId);
  }, [colorSchemeSegmentedControlValue, transitionDuration]);

  return (
    <>
      <SegmentedControl
        classNames={{
          root: classes['root-background'],
          indicator: classes['indicator-background'],
        }}
        transitionDuration={transitionDuration}
        value={colorSchemeSegmentedControlValue}
        onChange={(value: string) =>
          setColorSchemeSegmentedControlValue(value as MantineColorScheme)
        }
        aria-label="Toggle color scheme"
        {...restProp}
        data={[
          {
            value: 'light',
            label: <Center>{lightIcon}</Center>,
          },
          {
            value: 'auto',
            label: <Center>{autoIcon}</Center>,
          },
          {
            value: 'dark',
            label: <Center>{darkIcon}</Center>,
          },
        ]}
      />
    </>
  );
}
