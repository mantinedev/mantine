import {
  createSafeContext,
  GetStylesApi,
  MantineColor,
  MantineRadius,
  MantineSize,
} from '../../core';
import type { ToolbarFactory } from './Toolbar';

export interface ToolbarContextValue {
  getStyles: GetStylesApi<ToolbarFactory>;
  orientation: 'horizontal' | 'vertical';
  size: MantineSize | (string & {}) | undefined;
  radius: MantineRadius | undefined;
  variant: string | undefined;
  color: MantineColor | undefined;
  autoContrast: boolean | undefined;
}

export const [ToolbarProvider, useToolbarContext] = createSafeContext<ToolbarContextValue>(
  'Toolbar component was not found in tree'
);
