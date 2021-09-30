import React from 'react';
import { DefaultProps, useExtractedMargins } from '@mantine/styles';
import useStyles from './TypographyStylesProvider.styles';

export interface TypographyStylesProviderProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'div'> {
  /** Render any content to add Mantine typography styles */
  children: React.ReactNode;
}

export function TypographyStylesProvider({
  className,
  style,
  ...others
}: TypographyStylesProviderProps) {
  const { classes, cx } = useStyles(null, null, 'typography-styles-provider');
  const { mergedStyles, rest } = useExtractedMargins({ others, style });
  return <div className={cx(classes.root, className)} style={mergedStyles} {...rest} />;
}

TypographyStylesProvider.displayName = '@mantine/core/TypographyStylesProvider';
