import React, { createContext, useContext } from 'react';

interface ChipGroupContextValue {
  isChipSelected(value: string): boolean;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const ChipGroupContext = createContext<ChipGroupContextValue>(null);

export const ChipGroupProvider = ChipGroupContext.Provider;
export const useChipGroup = () => useContext(ChipGroupContext);
