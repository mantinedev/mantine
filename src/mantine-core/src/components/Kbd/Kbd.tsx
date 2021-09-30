import React from 'react';
import { DefaultProps, useExtractedMargins } from '@mantine/styles';
import useStyles from './Kbd.styles';

export interface KbdProps extends DefaultProps, React.ComponentPropsWithoutRef<'kbd'> {
  /** Keyboard key */
  children: React.ReactNode;
}

export function Kbd({ className, children, style, ...others }: KbdProps) {
  const { classes, cx } = useStyles(null, null, 'kbd');
  const { mergedStyles, rest } = useExtractedMargins({ others, style });

  return (
    <kbd className={cx(classes.kbd, className)} style={mergedStyles} {...rest}>
      {children}
    </kbd>
  );
}

Kbd.displayName = '@mantine/core/Kbd';
