import React, { forwardRef } from 'react';
import { DefaultProps, useComponentDefaultProps } from '@mantine/styles';
import { Box } from '../Box';
import useStyles from './Kbd.styles';

export interface KbdProps extends DefaultProps, React.ComponentPropsWithoutRef<'kbd'> {
  variant?: string;

  /** Keyboard key */
  children: React.ReactNode;
}

const defaultProps: Partial<KbdProps> = {};

export const Kbd = forwardRef<HTMLElement, KbdProps>((props: KbdProps, ref) => {
  const { className, children, unstyled, variant, ...others } = useComponentDefaultProps(
    'Kbd',
    defaultProps,
    props
  );

  const { classes, cx } = useStyles(null, { name: 'Kbd', unstyled, variant });

  return (
    <Box component="kbd" className={cx(classes.root, className)} ref={ref} {...others}>
      {children}
    </Box>
  );
});

Kbd.displayName = '@mantine/core/Kbd';
