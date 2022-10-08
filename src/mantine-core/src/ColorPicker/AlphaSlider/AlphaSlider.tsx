import React, { forwardRef } from 'react';
import { useMantineTheme } from '@mantine/styles';
import { ColorSlider, BaseColorSliderProps } from '../ColorSlider/ColorSlider';
import { round } from '../converters/parsers';

export interface AlphaSliderProps extends BaseColorSliderProps {
  color: string;
}

export const AlphaSlider = forwardRef<HTMLDivElement, AlphaSliderProps>(
  ({ value, onChange, onChangeEnd, color, ...others }: AlphaSliderProps, ref) => {
    const theme = useMantineTheme();
    const _color = theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3];

    return (
      <ColorSlider
        {...others}
        ref={ref}
        value={value}
        onChange={(val) => onChange(round(val, 2))}
        onChangeEnd={(val) => onChangeEnd(round(val, 2))}
        maxValue={1}
        round={false}
        overlays={[
          {
            backgroundImage: `linear-gradient(45deg, ${_color} 25%, transparent 25%), linear-gradient(-45deg, ${_color} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${_color} 75%), linear-gradient(-45deg, ${
              theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
            } 75%, ${_color} 75%)`,
            backgroundSize: '8px 8px',
            backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
          },
          {
            backgroundImage: `linear-gradient(90deg, transparent, ${color})`,
          },
          {
            boxShadow:
              'rgba(0, 0, 0, .1) 0px 0px 0px 1px inset, rgb(0, 0, 0, .15) 0px 0px 4px inset',
          },
        ]}
      />
    );
  }
);

AlphaSlider.displayName = '@mantine/core/AlphaSlider';
