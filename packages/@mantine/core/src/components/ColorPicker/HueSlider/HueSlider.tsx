import { Factory, factory, rem, useProps } from '../../../core';
import {
  ColorSlider,
  ColorSliderOptions,
  ColorSliderStylesNames,
} from '../ColorSlider/ColorSlider';

export interface HueSliderProps extends ColorSliderOptions {}

export type HueSliderFactory = Factory<{
  props: HueSliderProps;
  ref: HTMLDivElement;
  stylesNames: ColorSliderStylesNames;
}>;

const defaultProps = {
  __staticSelector: 'HueSlider',
} satisfies Partial<HueSliderProps>;

export const HueSlider = factory<HueSliderFactory>((props: HueSliderProps) => {
  const { value, onChange, onChangeEnd, color, ...others } = useProps(
    'HueSlider',
    defaultProps,
    props
  );

  return (
    <ColorSlider
      {...others}
      value={value}
      onChange={onChange}
      onChangeEnd={onChangeEnd}
      maxValue={360}
      thumbColor={`hsl(${value}, 100%, 50%)`}
      round
      data-hue
      overlays={[
        {
          backgroundImage:
            'linear-gradient(to right,hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(170,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%),hsl(360,100%,50%))',
        },
        {
          boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${rem(1)} inset, rgb(0, 0, 0, .15) 0 0 ${rem(
            4
          )} inset`,
        },
      ]}
    />
  );
});

HueSlider.displayName = '@mantine/core/HueSlider';
HueSlider.classes = ColorSlider.classes;
