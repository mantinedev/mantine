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
  (
    { className, component = 'button', unstyled, ...others }: UnstyledButtonProps<'button'>,
    ref: PolymorphicRef<'button'>
  ) => {
    const { classes, cx } = useStyles(null, { name: 'UnstyledButton', unstyled });
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
) as any;

UnstyledButton.displayName = '@mantine/core/UnstyledButton';
