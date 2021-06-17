import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '../../../theme';
import useStyles from './UnstyledButton.styles';

interface UnstyledButtonProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
  elementRef?: React.ForwardedRef<HTMLButtonElement>;
}

export function UnstyledButton({
  className,
  themeOverride,
  elementRef,
  ...others
}: UnstyledButtonProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme });

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
