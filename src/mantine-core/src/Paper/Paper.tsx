import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineShadow,
  useComponentDefaultProps,
} from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { Box } from '../Box';
import useStyles, { PaperStylesParams } from './Paper.styles';

export interface PaperProps extends DefaultProps<never, PaperStylesParams> {
  variant?: string;

  /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
  shadow?: MantineShadow;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: MantineNumberSize;

  /** Adds border styles */
  withBorder?: boolean;

  /** Paper children */
  children?: React.ReactNode;
}

const defaultProps: Partial<PaperProps> = {};

export const _Paper = forwardRef<HTMLDivElement, PaperProps>((props, ref) => {
  const { className, children, radius, withBorder, shadow, unstyled, variant, ...others } =
    useComponentDefaultProps('Paper', defaultProps, props);

  const { classes, cx } = useStyles({ radius, shadow }, { name: 'Paper', unstyled, variant });

  return (
    <Box
      className={cx(classes.root, className)}
      data-with-border={withBorder || undefined}
      ref={ref}
      {...others}
    >
      {children}
    </Box>
  );
});

_Paper.displayName = '@mantine/core/Paper';

export const Paper = createPolymorphicComponent<'div', PaperProps>(_Paper);
