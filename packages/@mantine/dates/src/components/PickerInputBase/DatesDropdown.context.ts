import { createContext, use } from 'react';

export interface DatesDropdownContextValue {
  preventFocus: boolean;
  stopPropagation: boolean;
}

const DEFAULT_VALUE: DatesDropdownContextValue = { preventFocus: false, stopPropagation: false };

const DatesDropdownContext = createContext<DatesDropdownContextValue>(DEFAULT_VALUE);

export const DatesDropdownProvider = DatesDropdownContext.Provider;

export function useDatesDropdownContext(): DatesDropdownContextValue {
  return use(DatesDropdownContext);
}
