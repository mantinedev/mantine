export interface ComboboxHiddenInputProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'value'> {
  /** Input value */
  value: string | string[] | null;

  /**
   * Divider character to join array values into string
   *
   * @default `','`
   */
  valuesDivider?: string;
}

export function ComboboxHiddenInput({
  value,
  valuesDivider = ',',
  ...others
}: ComboboxHiddenInputProps) {
  return (
    <input
      type="hidden"
      value={Array.isArray(value) ? value.join(valuesDivider) : value || ''}
      {...others}
    />
  );
}

ComboboxHiddenInput.displayName = '@mantine/core/ComboboxHiddenInput';
