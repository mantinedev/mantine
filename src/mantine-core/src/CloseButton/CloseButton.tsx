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

const defaultProps: Partial<CloseButtonProps> = {
  iconSize: 16,
};

export const _CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>((props, ref) => {
  const { iconSize, ...others } = useComponentDefaultProps('CloseButton', defaultProps, props);
  return (
    <ActionIcon ref={ref} __staticSelector="CloseButton" {...others}>
      <CloseIcon width={iconSize} height={iconSize} />
    </ActionIcon>
  );
});

_CloseButton.displayName = '@mantine/core/CloseButton';

export const CloseButton = createPolymorphicComponent<'button', CloseButtonProps>(_CloseButton);
