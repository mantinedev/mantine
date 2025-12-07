import { Factory, factory, rem, useProps } from '../../../core';
import {
  ColorSlider,
  ColorSliderOptions,
  ColorSliderStylesNames,
} from '../ColorSlider/ColorSlider';
import { round } from '../converters/parsers';

export interface AlphaSliderProps extends ColorSliderOptions {
  color: string;
}

export type AlphaSliderFactory = Factory<{
  props: AlphaSliderProps;
  ref: HTMLDivElement;
  stylesNames: ColorSliderStylesNames;
}>;

const defaultProps = {
  __staticSelector: 'AlphaSlider',
} satisfies Partial<AlphaSliderProps>;

export const AlphaSlider = factory<AlphaSliderFactory>((props: AlphaSliderProps) => {
  const { value, onChange, onChangeEnd, color, ...others } = useProps(
    'AlphaSlider',
    defaultProps,
    props
  );

  return (
    <ColorSlider
      {...others}
      value={value}
      onChange={(val) => onChange?.(round(val, 2))}
      onChangeEnd={(val) => onChangeEnd?.(round(val, 2))}
      maxValue={1}
      round={false}
      data-alpha
      overlays={[
        {
          backgroundImage:
            'linear-gradient(45deg, var(--slider-checkers) 25%, transparent 25%), linear-gradient(-45deg, var(--slider-checkers) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--slider-checkers) 75%), linear-gradient(-45deg, var(--mantine-color-body) 75%, var(--slider-checkers) 75%)',
          backgroundSize: `${rem(8)} ${rem(8)}`,
          backgroundPosition: `0 0, 0 ${rem(4)}, ${rem(4)} ${rem(-4)}, ${rem(-4)} 0`,
        },
        {
          backgroundImage: `linear-gradient(90deg, transparent, ${color})`,
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

AlphaSlider.displayName = '@mantine/core/AlphaSlider';
AlphaSlider.classes = ColorSlider.classes;
