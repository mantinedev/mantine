import { createOptionalContext } from '../../../core';

interface SubMenuContext {
  opened: boolean;
  close: () => void;
  open: () => void;
  focusFirstItem: () => void;
  focusParentItem: () => void;
  parentContext: SubMenuContext | null;
}

export const [SubMenuProvider, useSubMenuContext] = createOptionalContext<SubMenuContext>();
