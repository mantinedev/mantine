import { createContext } from 'react';
import type { ReferenceType } from '@floating-ui/react';

export interface SubMenuContextValue {
  opened: boolean;
  close: () => void;
  open: () => void;
  focusFirstItem: () => void;
  focusParentItem: () => void;
  parentContext: SubMenuContextValue | null;
  setReference: (node: ReferenceType | null) => void;
  setFloating: (node: HTMLElement | null) => void;
  getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
  getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
  registerOpenSub: (closeFn: () => void) => () => void;
}

export const SubMenuContext = createContext<SubMenuContextValue | null>(null);
