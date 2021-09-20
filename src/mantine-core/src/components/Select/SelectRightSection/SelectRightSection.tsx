import React from 'react';
import { MantineSize } from '@mantine/tss';
import { CloseButton } from '../../ActionIcon/CloseButton/CloseButton';
import { ChevronIcon } from './ChevronIcon';

export interface SelectRightSectionProps {
  shouldClear: boolean;
  clearButtonLabel?: string;
  onClear?: () => void;
  size: MantineSize;
  error?: any;
}

export function SelectRightSection({
  shouldClear,
  clearButtonLabel,
  onClear,
  size,
  error,
}: SelectRightSectionProps) {
  return shouldClear ? (
    <CloseButton
      variant="transparent"
      aria-label={clearButtonLabel}
      onClick={onClear}
      size={size}
    />
  ) : (
    <ChevronIcon error={error} size={size} />
  );
}

SelectRightSection.displayName = '@mantine/core/SelectRightSection';
