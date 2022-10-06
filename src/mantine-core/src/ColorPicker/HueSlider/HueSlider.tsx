import React, { forwardRef } from 'react';
import { ColorSlider, BaseColorSliderProps } from '../ColorSlider/ColorSlider';

export type HueSliderProps = BaseColorSliderProps;

export const HueSlider = forwardRef<HTMLDivElement, HueSliderProps>(
  ({ value, onChange, onChangeEnd, ...others }: HueSliderProps, ref) => (
    <ColorSlider
      {...others}
      ref={ref}
      value={value}
      onChange={onChange}
      onChangeEnd={onChangeEnd}
      maxValue={360}
      thumbColor={`hsl(${value}, 100%, 50%)`}
      round
      overlays={[
        {
          backgroundImage:
            'linear-gradient(to right,hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(170,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%),hsl(360,100%,50%))',
        },
        {
          boxShadow: 'rgba(0, 0, 0, .1) 0px 0px 0px 1px inset, rgb(0, 0, 0, .15) 0px 0px 4px inset',
        },
      ]}
    />
  )
);

HueSlider.displayName = '@mantine/core/HueSlider';
