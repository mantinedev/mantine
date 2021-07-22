import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '../../theme';
import useStyles from './TypographyStylesProvider.styles';

export interface TypographyStylesProviderProps
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
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, null, 'typography-styles-provider');
  return <div className={cx(classes.root, className)} {...others} />;
}

TypographyStylesProvider.displayName = '@mantine/core/TypographyStylesProvider';
