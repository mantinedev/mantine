import React, { forwardRef } from 'react';
import { useComponentDefaultProps } from '@mantine/styles';
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
  xs: 12,
  sm: 16,
  md: 20,
  lg: 28,
  xl: 34,
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
  const _iconSize = iconSize || iconSizes[size];
  return (
    <ActionIcon ref={ref} __staticSelector="CloseButton" size={size} {...others}>
      {children || <CloseIcon width={_iconSize} height={_iconSize} />}
    </ActionIcon>
  );
});

_CloseButton.displayName = '@mantine/core/CloseButton';

export const CloseButton = createPolymorphicComponent<'button', CloseButtonProps>(_CloseButton);
