import React from 'react';
import { ColorSlider, BaseColorSliderProps } from '../ColorSlider/ColorSlider';
import { round } from '../converters/parsers';

export interface AlphaSliderProps extends BaseColorSliderProps {
  color: string;
}

export function AlphaSlider({ value, onChange, color, ...others }: AlphaSliderProps) {
  return (
    <ColorSlider
      {...others}
      value={value}
      onChange={(val) => onChange(round(val, 2))}
      maxValue={1}
      round={false}
      overlays={[
        {
          backgroundImage:
            'linear-gradient(45deg, #eee 25%, transparent 25%), linear-gradient(-45deg, #eee 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #eee 75%), linear-gradient(-45deg, #fff 75%, #eee 75%)',
          backgroundSize: '8px 8px',
          backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
        },
        {
          backgroundImage: `linear-gradient(90deg, transparent, ${color})`,
        },
        {
          boxShadow: 'rgba(0, 0, 0, .1) 0px 0px 0px 1px inset, rgb(0, 0, 0, .15) 0px 0px 4px inset',
        },
      ]}
    />
  );
}

AlphaSlider.displayName = '@mantine/core/AlphaSlider';
