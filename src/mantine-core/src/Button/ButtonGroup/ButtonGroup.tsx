/* eslint-disable react/no-unused-prop-types */
import React, { forwardRef } from 'react';
import { DefaultProps, useComponentDefaultProps } from '@mantine/styles';
import { Box } from '../../Box';
import useStyles, { ButtonGroupStylesParams } from './ButtonGroup.styles';

export interface ButtonGroupProps
  extends DefaultProps<never, ButtonGroupStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
  /** <Button /> components */
  children?: React.ReactNode;

  /** Switch between vertical and horizontal orientation */
  orientation?: 'vertical' | 'horizontal';

  /** Child <Button /> border width */
  buttonBorderWidth?: number | string;
}

const defaultProps: Partial<ButtonGroupProps> = {
  orientation: 'horizontal',
  buttonBorderWidth: 1,
};

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  const { className, orientation, buttonBorderWidth, unstyled, ...others } =
    useComponentDefaultProps('ButtonGroup', defaultProps, props);
  const { classes, cx } = useStyles(
    { orientation, buttonBorderWidth },
    { name: 'ButtonGroup', unstyled }
  );
  return <Box className={cx(classes.root, className)} ref={ref} {...others} />;
});

ButtonGroup.displayName = '@mantine/core/ButtonGroup';
