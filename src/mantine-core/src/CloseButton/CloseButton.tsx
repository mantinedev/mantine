import React, { forwardRef } from 'react';
import { useComponentDefaultProps, rem } from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { ActionIcon, ActionIconProps } from '../ActionIcon/ActionIcon';
import { CloseIcon } from './CloseIcon';

export interface CloseButtonProps
  extends Omit<ActionIconProps, 'children'>,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> {
  /** Width and height of X icon */
  iconSize?: number | string;
}

const iconSizes = {
  xs: rem(12),
  sm: rem(16),
  md: rem(20),
  lg: rem(28),
  xl: rem(34),
};

const defaultProps: Partial<CloseButtonProps> = {
  size: 'sm',
};

export const _CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>((props, ref) => {
  const { iconSize, size, children, ...others } = useComponentDefaultProps(
    'CloseButton',
    defaultProps,
    props
  );
  const _iconSize = rem(iconSize || iconSizes[size]);
  return (
    <ActionIcon ref={ref} __staticSelector="CloseButton" size={size} {...others}>
      {children || <CloseIcon width={_iconSize} height={_iconSize} />}
    </ActionIcon>
  );
});

_CloseButton.displayName = '@mantine/core/CloseButton';

export const CloseButton = createPolymorphicComponent<'button', CloseButtonProps>(_CloseButton);
