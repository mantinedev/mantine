import React from 'react';
import { ColorSlider, BaseColorSliderProps } from './ColorSlider';

export function HueSlider({ value, onChange, ...others }: BaseColorSliderProps) {
  return (
    <ColorSlider
      {...others}
      value={value}
      onChange={onChange}
      maxValue={360}
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
  );
}

HueSlider.displayName = '@mantine/core/HueSlider';
