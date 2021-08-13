import React from 'react';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
} from '@mantine/tests';
import { DEFAULT_THEME } from '../../theme';
import { ColorPicker } from './ColorPicker';
import { ColorPicker as ColorPickerStylesApi } from './styles.api';

describe('@mantine/core/ColorPicker', () => {
  itSupportsClassName(ColorPicker, {});
  itSupportsStyle(ColorPicker, {});
  itSupportsOthers(ColorPicker, {});
  itSupportsStylesApi(
    ColorPicker,
    { swatches: [...DEFAULT_THEME.colors.red], format: 'rgba' },
    Object.keys(ColorPickerStylesApi),
    'color-picker'
  );

  it('has correct displayName', () => {
    expect(ColorPicker.displayName).toEqual('@mantine/core/ColorPicker');
  });
});
