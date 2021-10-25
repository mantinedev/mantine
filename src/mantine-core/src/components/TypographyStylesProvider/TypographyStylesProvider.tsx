import React, { forwardRef } from 'react';
import { DefaultProps, useExtractedMargins } from '@mantine/styles';
import useStyles from './TypographyStylesProvider.styles';

export interface TypographyStylesProviderProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'div'> {
  /** Render any content to add Mantine typography styles */
  children: React.ReactNode;
}

export const TypographyStylesProvider = forwardRef<HTMLDivElement, TypographyStylesProviderProps>(
  ({ className, style, sx, ...others }: TypographyStylesProviderProps, ref) => {
    const { classes, cx } = useStyles(null, { sx, name: 'TypographyStylesProvider' });
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    return <div className={cx(classes.root, className)} style={mergedStyles} ref={ref} {...rest} />;
  }
);

TypographyStylesProvider.displayName = '@mantine/core/TypographyStylesProvider';
