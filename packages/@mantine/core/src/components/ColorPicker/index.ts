import type { AlphaSliderFactory, AlphaSliderProps } from './AlphaSlider/AlphaSlider';
import type {
  __ColorPickerProps,
  ColorPickerCssVariables,
  ColorPickerFactory,
  ColorPickerProps,
  ColorPickerStylesNames,
} from './ColorPicker';
import type { ColorSliderFactory } from './ColorSlider/ColorSlider';
import type { HueSliderFactory, HueSliderProps } from './HueSlider/HueSlider';

export { ColorPicker } from './ColorPicker';
export { AlphaSlider } from './AlphaSlider/AlphaSlider';
export { HueSlider } from './HueSlider/HueSlider';
export * from './converters';

export type {
  ColorPickerProps,
  ColorPickerCssVariables,
  ColorPickerFactory,
  ColorPickerStylesNames,
  __ColorPickerProps,
  ColorSliderFactory,
  HueSliderFactory,
  HueSliderProps,
  AlphaSliderFactory,
  AlphaSliderProps,
};

export namespace ColorPicker {
  export type Props = ColorPickerProps;
  export type CssVariables = ColorPickerCssVariables;
  export type Factory = ColorPickerFactory;
  export type StylesNames = ColorPickerStylesNames;
}

export namespace HueSlider {
  export type Props = HueSliderProps;
  export type Factory = HueSliderFactory;
}

export namespace AlphaSlider {
  export type Props = AlphaSliderProps;
  export type Factory = AlphaSliderFactory;
}
