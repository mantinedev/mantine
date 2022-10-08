/* eslint-disable react/no-unused-prop-types */
import React, { forwardRef } from 'react';
import { DefaultProps, useComponentDefaultProps, MantineNumberSize } from '@mantine/styles';
import { Box } from '../Box';
import useStyles, { StackStylesParams } from './Stack.styles';

export interface StackProps
  extends DefaultProps<never, StackStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Key of theme.spacing or number to set gap in px */
  spacing?: MantineNumberSize;

  /** align-items CSS property */
  align?: React.CSSProperties['alignItems'];

  /** justify-content CSS property */
  justify?: React.CSSProperties['justifyContent'];
}

const defaultProps: Partial<StackProps> = {
  spacing: 'md',
  align: 'stretch',
  justify: 'top',
};

export const Stack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const { spacing, className, align, justify, unstyled, ...others } = useComponentDefaultProps(
    'Stack',
    defaultProps,
    props
  );

  const { classes, cx } = useStyles({ spacing, align, justify }, { name: 'Stack', unstyled });
  return <Box className={cx(classes.root, className)} ref={ref} {...others} />;
});

Stack.displayName = '@mantine/core/Stack';
