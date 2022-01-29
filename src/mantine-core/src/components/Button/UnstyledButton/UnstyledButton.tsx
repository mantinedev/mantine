import React, { forwardRef } from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../../Box';
import useStyles from './UnstyledButton.styles';

export interface UnstyledButtonProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'button'> {}

export const UnstyledButton = forwardRef<HTMLButtonElement, UnstyledButtonProps>(
  ({ className, ...others }: UnstyledButtonProps, ref) => {
    const { classes, cx } = useStyles(null, { name: 'UnstyledButton' });
    return (
      <Box
        component="button"
        ref={ref}
        className={cx(classes.root, className)}
        type="button"
        {...others}
      />
    );
  }
);

UnstyledButton.displayName = '@mantine/core/UnstyledButton';
