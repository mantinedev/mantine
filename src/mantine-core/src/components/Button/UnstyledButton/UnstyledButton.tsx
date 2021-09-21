import React from 'react';
import { DefaultProps } from '@mantine/styles';
import useStyles from './UnstyledButton.styles';

export interface UnstyledButtonProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'button'> {
  /** Get button ref */
  elementRef?: React.ForwardedRef<HTMLButtonElement>;
}

export function UnstyledButton({ className, elementRef, ...others }: UnstyledButtonProps) {
  const { classes, cx } = useStyles();

  return (
    <button
      ref={elementRef}
      className={cx(classes.button, 'mantine-unstyled-button', className)}
      type="button"
      {...others}
    />
  );
}

UnstyledButton.displayName = '@mantine/core/UnstyledButton';
