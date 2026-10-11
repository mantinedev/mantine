import { createContext, useContext } from 'react';

interface ComboboxPopoverContextValue {
  generatedTargetId: string;
  setTargetId: (id: string) => void;
}

export const ComboboxPopoverContext = createContext<ComboboxPopoverContextValue | null>(null);

export const useComboboxPopoverContext = () => useContext(ComboboxPopoverContext);
