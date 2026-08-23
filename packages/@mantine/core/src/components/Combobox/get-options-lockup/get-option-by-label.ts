import { Primitive } from '../../../core';
import { ComboboxItem } from '../Combobox.types';

/**
 * Finds an enabled option by its label, ignoring casing and surrounding whitespace. Returns
 * `undefined` when the label is ambiguous: options with duplicate labels are valid data, and there
 * is no way to tell which of them was meant.
 */
export function getOptionByLabel<Value extends Primitive = string>(
  optionsLockup: Record<PropertyKey, ComboboxItem<Value>>,
  label: string
): ComboboxItem<Value> | undefined {
  const normalizedLabel = label.trim().toLowerCase();

  if (normalizedLabel === '') {
    return undefined;
  }

  const matchedOptions = Object.values(optionsLockup).filter(
    (option) => !option.disabled && option.label.trim().toLowerCase() === normalizedLabel
  );

  return matchedOptions.length === 1 ? matchedOptions[0] : undefined;
}
