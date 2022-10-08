import React, { forwardRef } from 'react';
import { DefaultProps, MantineSize, Selectors } from '@mantine/styles';
import { Text } from '../../Text';
import useStyles, { InputErrorStylesParams } from './InputError.styles';

export type InputErrorStylesNames = Selectors<typeof useStyles>;

export interface InputErrorProps
  extends DefaultProps<InputErrorStylesNames, InputErrorStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Error content */
  children?: React.ReactNode;

  /** Predefined size */
  size?: MantineSize;

  __staticSelector?: string;
}

export const InputError = forwardRef<HTMLDivElement, InputErrorProps>(
  (
    { children, className, classNames, styles, unstyled, size = 'sm', __staticSelector, ...others },
    ref
  ) => {
    const { classes, cx } = useStyles(
      { size },
      { name: ['InputWrapper', __staticSelector], classNames, styles, unstyled }
    );
    return (
      <Text className={cx(classes.error, className)} ref={ref} role="alert" {...others}>
        {children}
      </Text>
    );
  }
);

InputError.displayName = '@mantine/core/InputError';
