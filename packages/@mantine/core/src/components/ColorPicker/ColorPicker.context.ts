import { createOptionalContext, GetStylesApi } from '../../core';
import type { ColorPickerFactory } from './ColorPicker';

interface ColorPickerContextValue {
  getStyles: GetStylesApi<ColorPickerFactory>;
  unstyled: boolean | undefined;
}

export const [ColorPickerProvider, useColorPickerContext] =
  createOptionalContext<ColorPickerContextValue>(null);
