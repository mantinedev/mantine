import React, { forwardRef } from 'react';
import { DefaultProps, PolymorphicComponentProps, PolymorphicRef } from '@mantine/styles';
import { Box } from '../../Box';
import useStyles from './UnstyledButton.styles';

interface _UnstyledButtonProps extends DefaultProps {}

export type UnstyledButtonProps<C> = PolymorphicComponentProps<C, _UnstyledButtonProps>;

type UnstyledButtonComponent = (<C = 'button'>(
  props: UnstyledButtonProps<C>
) => React.ReactElement) & {
  displayName?: string;
};

export const UnstyledButton: UnstyledButtonComponent = forwardRef(
  <C extends React.ElementType = 'button'>(
    { className, component = 'button', ...others }: UnstyledButtonProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles(null, { name: 'UnstyledButton' });
    return (
      <Box<any>
        component={component}
        ref={ref}
        className={cx(classes.root, className)}
        type={component === 'button' ? 'button' : undefined}
        {...others}
      />
    );
  }
);

UnstyledButton.displayName = '@mantine/core/UnstyledButton';
