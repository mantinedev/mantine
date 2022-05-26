/* eslint-disable react/no-unused-prop-types */
import React, { forwardRef } from 'react';
import { DefaultProps, MantineSize, Selectors } from '@mantine/styles';
import { Box } from '../../Box';
import useStyles, { InputLabelStylesParams } from './InputLabel.styles';

export type InputLabelStylesNames = Selectors<typeof useStyles>;

export interface InputLabelProps
  extends DefaultProps<InputLabelStylesNames, InputLabelStylesParams>,
    React.ComponentPropsWithoutRef<'label'> {
  /** Label content */
  children?: React.ReactNode;

  /** Label root element */
  labelElement?: 'label' | 'div';

  /** Determines whether required asterisk should be displayed */
  required?: boolean;

  /** Predefined label size */
  size?: MantineSize;
}

export const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>(
  (
    {
      labelElement = 'label',
      children,
      required,
      size,
      classNames,
      styles,
      unstyled,
      className,
      ...others
    },
    ref
  ) => {
    const { classes, cx } = useStyles(
      { size },
      { name: 'InputWrapper', classNames, styles, unstyled }
    );

    return (
      <Box<'label'>
        component={labelElement as 'label'}
        ref={ref}
        className={cx(classes.label, className)}
        {...others}
      >
        {children}
        {required && (
          <span className={classes.required} aria-hidden>
            {' *'}
          </span>
        )}
      </Box>
    );
  }
);

InputLabel.displayName = '@mantine/core/InputLabel';
