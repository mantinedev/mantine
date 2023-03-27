import React, { forwardRef } from 'react';
import { DefaultProps, MantineSize, useComponentDefaultProps } from '@mantine/styles';
import { Box } from '../Box';
import useStyles from './Kbd.styles';

export interface KbdProps extends DefaultProps, React.ComponentPropsWithoutRef<'kbd'> {
  variant?: string;

  /** Keyboard key */
  children: React.ReactNode;

  /** Controls component size, 'sm' by default */
  size?: MantineSize;
}

const defaultProps: Partial<KbdProps> = {
  size: 'sm',
};

export const Kbd = forwardRef<HTMLElement, KbdProps>((props: KbdProps, ref) => {
  const { className, children, unstyled, variant, size, ...others } = useComponentDefaultProps(
    'Kbd',
    defaultProps,
    props
  );

  const { classes, cx } = useStyles(null, { name: 'Kbd', unstyled, variant, size });

  return (
    <Box component="kbd" className={cx(classes.root, className)} ref={ref} {...others}>
      {children}
    </Box>
  );
});

Kbd.displayName = '@mantine/core/Kbd';
