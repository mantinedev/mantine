import { forwardRef } from 'react';
import { ElementProps } from '../../../core';
import { Input, InputClearButtonProps } from '../../Input';

export interface ComboboxClearButtonProps extends InputClearButtonProps, ElementProps<'button'> {
  onClear: () => void;
}

export const ComboboxClearButton = forwardRef<HTMLButtonElement, ComboboxClearButtonProps>(
  ({ size, onMouseDown, onClick, onClear, ...others }, ref) => (
    <Input.ClearButton
      ref={ref}
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
