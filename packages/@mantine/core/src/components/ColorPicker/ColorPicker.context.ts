import { createContext } from 'react';
import { GetStylesApi } from '../../core';
import type { ColorPickerFactory } from './ColorPicker';

interface ColorPickerContextValue {
  getStyles: GetStylesApi<ColorPickerFactory>;
  unstyled: boolean | undefined;
}

export const ColorPickerContext = createContext<ColorPickerContextValue | null>(null);
