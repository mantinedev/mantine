import React, { forwardRef } from 'react';
import { DefaultProps } from '@mantine/styles';
import useStyles from './UnstyledButton.styles';

export interface UnstyledButtonProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'button'> {}

export const UnstyledButton = forwardRef<HTMLButtonElement, UnstyledButtonProps>(
  ({ className, ...others }: UnstyledButtonProps, ref) => {
    const { classes, cx } = useStyles();

    return (
      <button
        ref={ref}
        className={cx(classes.button, 'mantine-unstyled-button', className)}
        type="button"
        {...others}
      />
    );
  }
);

UnstyledButton.displayName = '@mantine/core/UnstyledButton';
