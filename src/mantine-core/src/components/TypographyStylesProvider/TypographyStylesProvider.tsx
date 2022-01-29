import React, { forwardRef } from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../Box';
import useStyles from './TypographyStylesProvider.styles';

export interface TypographyStylesProviderProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'div'> {
  /** Render any content to add Mantine typography styles */
  children: React.ReactNode;
}

export const TypographyStylesProvider = forwardRef<HTMLDivElement, TypographyStylesProviderProps>(
  ({ className, ...others }: TypographyStylesProviderProps, ref) => {
    const { classes, cx } = useStyles(null, { name: 'TypographyStylesProvider' });
    return <Box className={cx(classes.root, className)} ref={ref} {...others} />;
  }
);

TypographyStylesProvider.displayName = '@mantine/core/TypographyStylesProvider';
