import React from 'react';
import { ActionIcon, ActionIconProps } from '../ActionIcon';
import { CloseIcon } from './CloseIcon';

export interface CloseButtonProps extends Omit<ActionIconProps, 'children'> {
  /** Width and height of cross icon */
  iconSize?: number;
}

export function CloseButton({ iconSize = 14, ...others }: CloseButtonProps) {
  return (
    <ActionIcon {...others}>
      <CloseIcon style={{ width: iconSize, height: iconSize }} />
    </ActionIcon>
  );
}

CloseButton.displayName = '@mantine/core/CloseButton';
