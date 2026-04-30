import { createContext } from 'react';

export interface SubMenuContextValue {
  opened: boolean;
  close: () => void;
  open: () => void;
  focusFirstItem: () => void;
  focusParentItem: () => void;
  parentContext: SubMenuContextValue | null;
}

export const SubMenuContext = createContext<SubMenuContextValue | null>(null);
