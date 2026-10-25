import { createSafeContext } from '../../../core';

export interface ToolbarToggleGroupContextValue {
  value: string | string[] | null;
  onChange: (itemValue: string) => void;
  type: 'single' | 'multiple';
  disabled: boolean;
}

export const [ToolbarToggleGroupProvider, useToolbarToggleGroupContext] =
  createSafeContext<ToolbarToggleGroupContextValue>(
    'Toolbar.ToggleGroup component was not found in tree'
  );
