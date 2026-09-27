import { useMatches, UseMatchesInput } from '@mantine/core';

export type PickerDropdownType = 'popover' | 'modal' | 'drawer';

export type ResponsivePickerDropdownType = PickerDropdownType | UseMatchesInput<PickerDropdownType>;

export function useResolvedDropdownType(
  value: ResponsivePickerDropdownType | undefined
): PickerDropdownType {
  const resolved = useMatches<PickerDropdownType>(
    typeof value === 'object' ? value : { base: value ?? 'popover' }
  );

  return resolved ?? 'popover';
}
