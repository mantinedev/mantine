import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import useStyles from './TypographyStylesProvider.styles';

interface TypographyStylesProviderProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'div'> {
  /** Render any content to add Mantine typography styles */
  children: React.ReactNode;
}

export function TypographyStylesProvider({
  className,
  themeOverride,
  ...others
}: TypographyStylesProviderProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });

  return <div className={cx(classes.innerHtml, className)} {...others} />;
}

TypographyStylesProvider.displayName = '@mantine/core/TypographyStylesProvider';
