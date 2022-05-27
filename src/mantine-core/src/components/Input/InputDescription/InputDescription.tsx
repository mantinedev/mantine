import React, { forwardRef } from 'react';
import { DefaultProps, MantineSize, Selectors } from '@mantine/styles';
import { Text } from '../../Text';
import useStyles, { InputDescriptionStylesParams } from './InputDescription.styles';

export type InputDescriptionStylesNames = Selectors<typeof useStyles>;

export interface InputDescriptionProps
  extends DefaultProps<InputDescriptionStylesNames, InputDescriptionStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Description content */
  children?: React.ReactNode;

  /** Predefined size */
  size?: MantineSize;

  __staticSelector?: string;
}

export const InputDescription = forwardRef<HTMLDivElement, InputDescriptionProps>(
  (
    { children, className, classNames, styles, unstyled, size, __staticSelector, ...others },
    ref
  ) => {
    const { classes, cx } = useStyles(
      { size },
      { name: ['InputWrapper', __staticSelector], classNames, styles, unstyled }
    );
    return (
      <Text color="dimmed" className={cx(classes.description, className)} ref={ref} {...others}>
        {children}
      </Text>
    );
  }
);

InputDescription.displayName = '@mantine/core/InputDescription';
