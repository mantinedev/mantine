import React, { forwardRef } from 'react';
import { DefaultProps } from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { Box } from '../Box';
import useStyles from './UnstyledButton.styles';

export interface UnstyledButtonProps extends DefaultProps {
  children?: React.ReactNode;
  component?: any;
}

export const _UnstyledButton = forwardRef<HTMLDivElement, UnstyledButtonProps>(
  ({ className, component = 'button', unstyled, ...others }, ref) => {
    const { classes, cx } = useStyles(null, { name: 'UnstyledButton', unstyled });
    return (
      <Box
        component={component}
        ref={ref}
        className={cx(classes.root, className)}
        type={component === 'button' ? 'button' : undefined}
        {...others}
      />
    );
  }
);

_UnstyledButton.displayName = '@mantine/core/UnstyledButton';

export const UnstyledButton = createPolymorphicComponent<'button', UnstyledButtonProps>(
  _UnstyledButton
);
