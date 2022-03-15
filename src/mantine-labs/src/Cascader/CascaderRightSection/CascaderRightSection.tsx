import React from 'react';
import { MantineSize } from '@mantine/styles';
import { CloseButton } from '@mantine/core';
import { ChevronIcon } from './ChevronIcon';

export interface CascaderRightSectionProps {
  shouldClear: boolean;
  clearButtonLabel?: string;
  onClear?: () => void;
  size: MantineSize;
  error?: any;
  // eslint-disable-next-line react/no-unused-prop-types
  disabled?: boolean;
}

export function CascaderRightSection({
  shouldClear,
  clearButtonLabel,
  onClear,
  size,
  error,
}: CascaderRightSectionProps) {
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

CascaderRightSection.displayName = '@mantine/core/SelectRightSection';
