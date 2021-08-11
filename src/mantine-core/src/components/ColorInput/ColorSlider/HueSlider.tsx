import React from 'react';
import { ColorSlider } from './ColorSlider';

export interface HueSliderProps {
  value: number;
  onChange(value: number): void;
  'aria-label'?: string;
}

export function HueSlider({ value, onChange, 'aria-label': ariaLabel }: HueSliderProps) {
  return (
    <ColorSlider
      value={value}
      onChange={onChange}
      maxValue={360}
      label={ariaLabel}
      shouldRound
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
