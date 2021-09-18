import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/theme';
import useStyles from './UnstyledButton.styles';

interface UnstyledButtonProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
  elementRef?: React.ForwardedRef<HTMLButtonElement>;
}

export function UnstyledButton({ className, elementRef, ...others }: UnstyledButtonProps) {
  const classes = useStyles();

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
