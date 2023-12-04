import { createOptionalContext } from '../../core';

interface ChipGroupContextValue {
  isChipSelected: (value: string) => boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  multiple: boolean;
}

export const [ChipGroupProvider, useChipGroupContext] =
  createOptionalContext<ChipGroupContextValue>();
