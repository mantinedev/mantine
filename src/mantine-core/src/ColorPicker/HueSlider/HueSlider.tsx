import React, { forwardRef } from 'react';
import { rem, useComponentDefaultProps } from '@mantine/styles';
import { ColorSlider, BaseColorSliderProps } from '../ColorSlider/ColorSlider';

export type HueSliderProps = BaseColorSliderProps;

const defaultProps: Partial<HueSliderProps> = {};

export const HueSlider = forwardRef<HTMLDivElement, HueSliderProps>((props, ref) => {
  const { value, onChange, onChangeEnd, __staticSelector, ...others } = useComponentDefaultProps(
    'HueSlider',
    defaultProps,
    props
  );

  return (
    <ColorSlider
      {...others}
      ref={ref}
      value={value}
      onChange={onChange}
      onChangeEnd={onChangeEnd}
      maxValue={360}
      thumbColor={`hsl(${value}, 100%, 50%)`}
      round
      __staticSelector={__staticSelector || 'HueSlider'}
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
