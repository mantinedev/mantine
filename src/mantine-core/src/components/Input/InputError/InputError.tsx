import React, { forwardRef } from 'react';
import { DefaultProps, MantineSize, Selectors } from '@mantine/styles';
import { Text } from '../../Text';
import useStyles, { InputErrorStylesParams } from './InputError.styles';

type InputErrorStylesNames = Selectors<typeof useStyles>;

export interface InputErrorProps
  extends DefaultProps<InputErrorStylesNames, InputErrorStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Error content */
  children?: React.ReactNode;

  /** Predefined size */
  size?: MantineSize;
}

export const InputError = forwardRef<HTMLDivElement, InputErrorProps>(
  ({ children, className, classNames, styles, unstyled, size, ...others }, ref) => {
    const { classes, cx } = useStyles(
      { size },
      { name: 'InputWrapper', classNames, styles, unstyled }
    );
    return (
      <Text className={cx(classes.error, className)} ref={ref} {...others}>
        {children}
      </Text>
    );
  }
);

InputError.displayName = '@mantine/core/InputError';
