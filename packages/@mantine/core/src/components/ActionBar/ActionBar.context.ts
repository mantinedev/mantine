import { createSafeContext, GetStylesApi } from '../../core';
import type { ActionBarFactory } from './ActionBar';

export interface ActionBarContextValue {
  onClose?: () => void;
  getStyles: GetStylesApi<ActionBarFactory>;
  unstyled: boolean | undefined;
}

export const [ActionBarProvider, useActionBarContext] = createSafeContext<ActionBarContextValue>(
  'ActionBar component was not found in tree'
);
