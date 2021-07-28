import React from 'react';
import { MantineSize, MantineThemeOverride } from '../../../theme';
import { CloseButton } from '../../ActionIcon/CloseButton/CloseButton';
import { ChevronIcon } from './ChevronIcon';

export interface SelectRightSectionProps {
  shouldClear: boolean;
  themeOverride: MantineThemeOverride;
  clearButtonLabel?: string;
  onClear: () => void;
  size: MantineSize;
  error?: any;
}

export function SelectRightSection({
  shouldClear,
  themeOverride,
  clearButtonLabel,
  onClear,
  size,
  error,
}: SelectRightSectionProps) {
  return shouldClear ? (
    <CloseButton
      themeOverride={themeOverride}
      variant="transparent"
      aria-label={clearButtonLabel}
      onClick={onClear}
      size={size}
    />
  ) : (
    <ChevronIcon error={error} size={size} themeOverride={themeOverride} />
  );
}

SelectRightSection.displayName = '@mantine/core/SelectRightSection';
