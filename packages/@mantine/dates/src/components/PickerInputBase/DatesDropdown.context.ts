import { createContext, use } from 'react';

export type DatesDropdownLayout = 'default' | 'sheet';

export interface DatesDropdownContextValue {
  preventFocus: boolean;
  stopPropagation: boolean;
  layout: DatesDropdownLayout;
}

const DEFAULT_VALUE: DatesDropdownContextValue = {
  preventFocus: false,
  stopPropagation: false,
  layout: 'default',
};

const DatesDropdownContext = createContext<DatesDropdownContextValue>(DEFAULT_VALUE);

export const DatesDropdownProvider = DatesDropdownContext.Provider;

export function useDatesDropdownContext(): DatesDropdownContextValue {
  return use(DatesDropdownContext);
}
