import React from 'react';
import { getSizeValue } from '@mantine/styles';
import { ActionIcon, ActionIconProps } from '../ActionIcon';
import { CloseIcon } from './CloseIcon';

export interface CloseButtonProps extends Omit<ActionIconProps, 'children'> {
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

export function CloseButton({ iconSize, size = 'md', ...others }: CloseButtonProps) {
  const _iconSize = iconSize || getSizeValue({ size, sizes: iconSizes });

  return (
    <ActionIcon size={size} {...others}>
      <CloseIcon style={{ width: _iconSize, height: _iconSize }} />
    </ActionIcon>
  );
}

CloseButton.displayName = '@mantine/core/CloseButton';
