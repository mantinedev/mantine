import { useEffect, useLayoutEffect, useState } from 'react';
import { IconMoonStars, IconSun, IconYinYangFilled } from '@tabler/icons-react';
import {
  Center,
  SegmentedControl,
  useMantineColorScheme,
  useMantineTheme,
  type MantineColorScheme,
} from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import classes from './Theming.demo.colorSchemeSegmentedControl.module.css';

const code = `
import { useEffect, useLayoutEffect, useState } from 'react';
import { IconMoonStars, IconSun, IconYinYangFilled } from '@tabler/icons-react';
import {
  Center,
  SegmentedControl,
  useMantineColorScheme,
  useMantineTheme,
  type MantineColorScheme,
} from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const iconSize = 22;
  const iconStroke = 2.5;
  const transitionDuration = 200;
  const theme = useMantineTheme();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [colorSchemeSegmentedControlValue, setColorSchemeSegmentedControlValue] =
    useState<MantineColorScheme>('auto');

  const lightIcon = <IconSun size={iconSize} stroke={iconStroke} color={theme.colors.yellow[6]} />;

  const darkIcon = (
    <IconMoonStars size={iconSize} stroke={iconStroke} color={theme.colors.blue[6]} />
  );

  const autoIcon = (
    <IconYinYangFilled size={iconSize} stroke={iconStroke} className={classes.autoIconColor} />
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
    <SegmentedControl
      classNames={{
        root: classes.rootBackground,
        indicator: classes.indicatorBackground,
      }}
      transitionDuration={transitionDuration}
      value={colorSchemeSegmentedControlValue}
      onChange={(value: string) => setColorSchemeSegmentedControlValue(value as MantineColorScheme)}
      aria-label="Toggle color scheme"
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
  );
}
`;

const cssCode = `
.rootBackground {
  @mixin dark {
    background-color: var(--mantine-color-dark-5);
    border-color: var(--mantine-color-dark-5);
  }
}

.indicatorBackground {
  @mixin dark {
    background-color: var(--mantine-color-dark-3);
  }
}

.autoIconColor {
  color: light-dark(var(--mantine-color-black), var(--mantine-color-white));
}
`;

function Demo() {
  const iconSize = 22;
  const iconStroke = 2.5;
  const transitionDuration = 200;
  const theme = useMantineTheme();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [colorSchemeSegmentedControlValue, setColorSchemeSegmentedControlValue] =
    useState<MantineColorScheme>('auto');

  const lightIcon = <IconSun size={iconSize} stroke={iconStroke} color={theme.colors.yellow[6]} />;

  const darkIcon = (
    <IconMoonStars size={iconSize} stroke={iconStroke} color={theme.colors.blue[6]} />
  );

  const autoIcon = (
    <IconYinYangFilled size={iconSize} stroke={iconStroke} className={classes.autoIconColor} />
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
    <SegmentedControl
      classNames={{
        root: classes.rootBackground,
        indicator: classes.indicatorBackground,
      }}
      transitionDuration={transitionDuration}
      value={colorSchemeSegmentedControlValue}
      onChange={(value: string) => setColorSchemeSegmentedControlValue(value as MantineColorScheme)}
      aria-label="Toggle color scheme"
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
  );
}

export const colorSchemeSegmentedControl: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'Demo.module.css', language: 'scss', code: cssCode },
  ],
};
