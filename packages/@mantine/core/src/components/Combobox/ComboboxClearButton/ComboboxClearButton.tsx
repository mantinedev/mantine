import React, { forwardRef } from 'react';
import { ElementProps, MantineSize } from '../../../core';
import { __CloseButtonProps, CloseButton } from '../../CloseButton';

export interface ComboboxClearButtonProps extends __CloseButtonProps, ElementProps<'button'> {
  size?: MantineSize | (string & {}) | number;
  onClear: () => void;
}

export const ComboboxClearButton = forwardRef<HTMLButtonElement, ComboboxClearButtonProps>(
  ({ size, onMouseDown, onClick, onClear, ...others }, ref) => (
    <CloseButton
      ref={ref}
      size={size || 'sm'}
      variant="transparent"
      tabIndex={-1}
      aria-hidden
      {...others}
      onMouseDown={(event) => {
        event.preventDefault();
        onMouseDown?.(event);
      }}
      onClick={(event) => {
        onClear();
        onClick?.(event);
      }}
    />
  )
);

ComboboxClearButton.displayName = '@mantine/core/ComboboxClearButton';
