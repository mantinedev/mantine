import React, { forwardRef } from 'react';
import { DefaultProps, useExtractedMargins } from '@mantine/styles';
import useStyles from './Kbd.styles';

export interface KbdProps extends DefaultProps, React.ComponentPropsWithoutRef<'kbd'> {
  /** Keyboard key */
  children: React.ReactNode;
}

export const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ className, children, style, sx, ...others }: KbdProps, ref) => {
    const { classes, cx } = useStyles(null, { sx, name: 'Kbd' });
    const { mergedStyles, rest } = useExtractedMargins({ others, style });

    return (
      <kbd className={cx(classes.root, className)} style={mergedStyles} ref={ref} {...rest}>
        {children}
      </kbd>
    );
  }
);

Kbd.displayName = '@mantine/core/Kbd';
