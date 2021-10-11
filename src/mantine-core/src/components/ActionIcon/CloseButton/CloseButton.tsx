import React, { forwardRef } from 'react';
import { getSizeValue } from '@mantine/styles';
import { ActionIcon, ActionIconProps } from '../ActionIcon';
import { CloseIcon } from './CloseIcon';

export interface CloseButtonProps extends Omit<ActionIconProps<'button'>, 'children'> {
  /** Width and height of cross icon */
  iconSize?: number;
}

const iconSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
};

type CloseButtonComponent = (props: CloseButtonProps) => React.ReactElement;

export const CloseButton: CloseButtonComponent & { displayName?: string } = forwardRef<
  HTMLButtonElement,
  CloseButtonProps
>(({ iconSize, size = 'md', ...others }: CloseButtonProps, ref) => {
  const _iconSize = iconSize || getSizeValue({ size, sizes: iconSizes });

  return (
    <ActionIcon size={size} ref={ref} {...others}>
      <CloseIcon style={{ width: _iconSize, height: _iconSize }} />
    </ActionIcon>
  );
});

CloseButton.displayName = '@mantine/core/CloseButton';
