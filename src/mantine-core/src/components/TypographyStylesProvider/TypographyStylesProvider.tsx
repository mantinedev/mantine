import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/theme';
import useStyles from './TypographyStylesProvider.styles';

export interface TypographyStylesProviderProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'div'> {
  /** Render any content to add Mantine typography styles */
  children: React.ReactNode;
}

export function TypographyStylesProvider({ className, ...others }: TypographyStylesProviderProps) {
  const classes = useStyles(null, null, 'typography-styles-provider');
  return <div className={cx(classes.root, className)} {...others} />;
}

TypographyStylesProvider.displayName = '@mantine/core/TypographyStylesProvider';
