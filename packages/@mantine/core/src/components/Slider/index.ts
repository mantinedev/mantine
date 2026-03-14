import type {
  RangeSliderFactory,
  RangeSliderProps,
  RangeSliderValue,
} from './RangeSlider/RangeSlider';
import type { SliderCssVariables, SliderStylesNames } from './Slider.context';
import type { SliderFactory, SliderProps } from './Slider/Slider';
import type { SliderMark } from './SliderMark';

export { Slider } from './Slider/Slider';
export { RangeSlider } from './RangeSlider/RangeSlider';

export type {
  SliderProps,
  SliderStylesNames,
  SliderCssVariables,
  SliderFactory,
  RangeSliderProps,
  RangeSliderValue,
  RangeSliderFactory,
  SliderMark,
};

export namespace Slider {
  export type Props = SliderProps;
  export type StylesNames = SliderStylesNames;
  export type CssVariables = SliderCssVariables;
  export type Factory = SliderFactory;
  export type Mark = SliderMark;
}

export namespace RangeSlider {
  export type Props = RangeSliderProps;
  export type Value = RangeSliderValue;
  export type Factory = RangeSliderFactory;
  export type StylesNames = SliderStylesNames;
  export type CssVariables = SliderCssVariables;
  export type Mark = SliderMark;
}
