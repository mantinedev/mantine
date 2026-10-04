import { createSafeContext, GetStylesApi } from '../../core';
import type { ToolbarFactory } from './Toolbar';

export interface ToolbarContextValue {
  getStyles: GetStylesApi<ToolbarFactory>;
  orientation: 'horizontal' | 'vertical';
}

export const [ToolbarProvider, useToolbarContext] = createSafeContext<ToolbarContextValue>(
  'Toolbar component was not found in tree'
);
