import { RefObject, useEffect, useMemo } from 'react';
import { CompositeChildRole } from '../Composite.types';
import { FocusManager } from './FocusManager';
import type { FocusOptions } from './FocusManager.types';

export const useFocusManager = (
  compositeRef: RefObject<HTMLElement>,
  navigableChildRole: CompositeChildRole,
  options: FocusOptions,
  deps: readonly unknown[]
) => {
  const focusManager = useMemo(
    () => new FocusManager(compositeRef, navigableChildRole, options),
    [navigableChildRole, options]
  );

  useEffect(() => focusManager.init(), [...deps, focusManager]);

  return focusManager;
};
