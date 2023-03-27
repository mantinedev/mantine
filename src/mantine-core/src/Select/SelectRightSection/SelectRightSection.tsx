import React from 'react';
import { MantineSize } from '@mantine/styles';
import { CloseButton } from '../../CloseButton';
import { ChevronIcon } from './ChevronIcon';

export interface SelectRightSectionProps {
  shouldClear: boolean;
  clearButtonProps?: React.ComponentPropsWithoutRef<'button'>;
  onClear?: () => void;
  size: MantineSize;
  error?: any;
  // eslint-disable-next-line react/no-unused-prop-types
  disabled?: boolean;
}

export function SelectRightSection({
  shouldClear,
  clearButtonProps,
  onClear,
  size,
  error,
}: SelectRightSectionProps) {
  return shouldClear ? (
    <CloseButton
      {...clearButtonProps}
      variant="transparent"
      onClick={onClear}
      size={size}
      onMouseDown={(event) => event.preventDefault()}
    />
  ) : (
    <ChevronIcon error={error} size={size} />
  );
}

SelectRightSection.displayName = '@mantine/core/SelectRightSection';
