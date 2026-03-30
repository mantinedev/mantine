import { ElementProps } from '../../../core';
import { Input, InputClearButtonProps } from '../../Input';

export interface ComboboxClearButtonProps extends InputClearButtonProps, ElementProps<'button'> {
  onClear: () => void;
}

export function ComboboxClearButton({
  size,
  onMouseDown,
  onClick,
  onClear,
  ...others
}: ComboboxClearButtonProps) {
  return (
    <Input.ClearButton
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
  );
}

ComboboxClearButton.displayName = '@mantine/core/ComboboxClearButton';
