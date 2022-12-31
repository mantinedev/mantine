import React, { forwardRef } from 'react';
import { DefaultProps, MantineSize, Selectors, useComponentDefaultProps } from '@mantine/styles';
import { Text } from '../../Text';
import useStyles from './InputDescription.styles';

export type InputDescriptionStylesNames = Selectors<typeof useStyles>;

export interface InputDescriptionProps
  extends DefaultProps<InputDescriptionStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;

  /** Description content */
  children?: React.ReactNode;

  /** Predefined size */
  size?: MantineSize;

  __staticSelector?: string;
}

const defaultProps: Partial<InputDescriptionProps> = {
  size: 'sm',
};

export const InputDescription = forwardRef<HTMLDivElement, InputDescriptionProps>((props, ref) => {
  const {
    children,
    className,
    classNames,
    styles,
    unstyled,
    size,
    __staticSelector,
    variant,
    ...others
  } = useComponentDefaultProps('InputDescription', defaultProps, props);

  const { classes, cx } = useStyles(null, {
    name: ['InputWrapper', __staticSelector],
    classNames,
    styles,
    unstyled,
    variant,
    size,
  });

  return (
    <Text
      color="dimmed"
      className={cx(classes.description, className)}
      ref={ref}
      unstyled={unstyled}
      {...others}
    >
      {children}
    </Text>
  );
});

InputDescription.displayName = '@mantine/core/InputDescription';
