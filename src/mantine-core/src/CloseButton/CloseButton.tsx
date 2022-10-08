import React, { forwardRef } from 'react';
import { useComponentDefaultProps, useMantineTheme } from '@mantine/styles';
import { ActionIcon, ActionIconProps } from '../ActionIcon/ActionIcon';
import { CloseIcon } from './CloseIcon';

export interface CloseButtonProps
  extends Omit<ActionIconProps, 'children'>,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> {
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

const defaultProps: Partial<CloseButtonProps> = {
  size: 'md',
};

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>((props, ref) => {
  const {
    iconSize,
    size = 'md',
    ...others
  } = useComponentDefaultProps('CloseButton', defaultProps, props);
  const theme = useMantineTheme();
  const _iconSize = iconSize || theme.fn.size({ size, sizes: iconSizes });

  return (
    <ActionIcon size={size} ref={ref} {...others}>
      <CloseIcon width={_iconSize} height={_iconSize} />
    </ActionIcon>
  );
});

CloseButton.displayName = '@mantine/core/CloseButton';
