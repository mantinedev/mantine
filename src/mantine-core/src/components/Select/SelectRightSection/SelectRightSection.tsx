import React from 'react';
import { MantineSize } from '@mantine/styles';
import { CloseButton } from '../../ActionIcon/CloseButton/CloseButton';
import { ChevronIcon } from './ChevronIcon';

export interface SelectRightSectionProps {
  shouldClear: boolean;
  clearButtonLabel?: string;
  onClear?: () => void;
  size: MantineSize;
  error?: any;
  // eslint-disable-next-line react/no-unused-prop-types
  disabled?: boolean;
  tabIndex?: number;
}

export function SelectRightSection({
  shouldClear,
  clearButtonLabel,
  onClear,
  size,
  error,
  tabIndex,
}: SelectRightSectionProps) {
  return shouldClear ? (
    <CloseButton
      variant="transparent"
      aria-label={clearButtonLabel}
      onClick={onClear}
      size={size}
      tabIndex={tabIndex}
    />
  ) : (
    <ChevronIcon error={error} size={size} />
  );
}

SelectRightSection.displayName = '@mantine/core/SelectRightSection';
