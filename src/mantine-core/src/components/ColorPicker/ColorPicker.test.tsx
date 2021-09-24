import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
  checkAccessibility,
} from '@mantine/tests';
import { DEFAULT_THEME } from '@mantine/styles';
import { ColorPicker } from './ColorPicker';
import { ColorPicker as ColorPickerStylesApi } from './styles.api';
import { Swatches } from './Swatches/Swatches';
import { AlphaSlider } from './AlphaSlider/AlphaSlider';
import { Saturation } from './Saturation/Saturation';

const swatches = [...DEFAULT_THEME.colors.red];

describe('@mantine/core/ColorPicker', () => {
  itSupportsClassName(ColorPicker, {});
  itSupportsStyle(ColorPicker, {});
  itSupportsOthers(ColorPicker, {});
  itSupportsStylesApi(
    ColorPicker,
    { swatches, format: 'rgba' },
    Object.keys(ColorPickerStylesApi),
    'color-picker'
  );

  checkAccessibility([
    mount(
      <ColorPicker
        swatches={swatches}
        format="rgba"
        saturationLabel="Saturation"
        alphaLabel="Alpha"
        hueLabel="Hue"
      />
    ),
  ]);

  it('renders swatches list based on prop', () => {
    const withSwatches = shallow(<ColorPicker swatches={swatches} />);
    const withoutSwatches = shallow(<ColorPicker swatches={swatches} />);
    expect(withSwatches.find(Swatches)).toHaveLength(1);
    expect(withoutSwatches.find(Swatches)).toHaveLength(1);
  });

  it('renders AlphaSlider based on color format', () => {
    const hex = shallow(<ColorPicker format="hex" />);
    const rgba = shallow(<ColorPicker format="hex" />);
    expect(hex.find(AlphaSlider)).toHaveLength(0);
    expect(rgba.find(AlphaSlider)).toHaveLength(0);
  });

  it('renders picker based on withPicker prop', () => {
    const withPicker = shallow(<ColorPicker withPicker />);
    const withoutPicker = shallow(<ColorPicker withPicker={false} />);
    expect(withPicker.find(Saturation)).toHaveLength(1);
    expect(withoutPicker.find(Saturation)).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(ColorPicker.displayName).toEqual('@mantine/core/ColorPicker');
  });
});
