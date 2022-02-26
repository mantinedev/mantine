import React from 'react';
import { createStyles, MantineSize } from '@mantine/styles';
import { CloseButton } from '../../ActionIcon/CloseButton/CloseButton';
import { ChevronIcon } from './ChevronIcon';

export interface SelectRightSectionProps {
  shouldClear: boolean;
  clearButtonLabel?: string;
  onClear?: () => void;
  size: MantineSize;
  error?: any;
  disabled?: boolean;
}

const useStyles = createStyles(() => ({
  button: {
    '&:disabled': {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
  },
}));

export function SelectRightSection({
  shouldClear,
  clearButtonLabel,
  onClear,
  size,
  error,
  disabled,
}: SelectRightSectionProps) {
  const { classes } = useStyles();

  return shouldClear ? (
    <CloseButton
      variant="transparent"
      aria-label={clearButtonLabel}
      onClick={onClear}
      size={size}
      disabled={disabled}
      className={classes.button}
    />
  ) : (
    <ChevronIcon error={error} size={size} />
  );
}

SelectRightSection.displayName = '@mantine/core/SelectRightSection';
