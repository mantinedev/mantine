import { useRef, useState } from 'react';
import { useDidUpdate, useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSize,
  getSpacing,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { ColorSwatch } from '../ColorSwatch';
import { AlphaSlider } from './AlphaSlider/AlphaSlider';
import { ColorPickerProvider } from './ColorPicker.context';
import { ColorFormat, HsvaColor } from './ColorPicker.types';
import { convertHsvaTo, isColorValid, parseColor } from './converters';
import { HueSlider } from './HueSlider/HueSlider';
import { Saturation } from './Saturation/Saturation';
import { Swatches } from './Swatches/Swatches';
import classes from './ColorPicker.module.css';

export type ColorPickerStylesNames =
  | 'wrapper'
  | 'preview'
  | 'body'
  | 'sliders'
  | 'slider'
  | 'sliderOverlay'
  | 'thumb'
  | 'saturation'
  | 'thumb'
  | 'saturationOverlay'
  | 'thumb'
  | 'swatches'
  | 'swatch';

export type ColorPickerCssVariables = {
  wrapper:
    | '--cp-preview-size'
    | '--cp-width'
    | '--cp-body-spacing'
    | '--cp-swatch-size'
    | '--cp-thumb-size'
    | '--cp-saturation-height';
};

export interface __ColorPickerProps {
  /** Controlled component value */
  value?: string;

  /** Uncontrolled component default value */
  defaultValue?: string;

  /** Called when value changes */
  onChange?: (value: string) => void;

  /** Called when the user stops dragging one of the sliders or changes the value with arrow keys */
  onChangeEnd?: (value: string) => void;

  /** Color format, `'hex'` by default */
  format?: ColorFormat;

  /** Determines whether the color picker should be displayed, `true` by default */
  withPicker?: boolean;

  /** An array of colors in one of the supported formats. Used to render swatches list below the color picker. */
  swatches?: string[];

  /** Number of swatches per row, `7` by default */
  swatchesPerRow?: number;

  /** Controls size of hue, alpha and saturation sliders, `'md'` by default */
  size?: MantineSize | (string & {});
}

export interface ColorPickerProps
  extends BoxProps,
    __ColorPickerProps,
    StylesApiProps<ColorPickerFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
  __staticSelector?: string;

  /** Determines whether the component should take 100% width of its container, `false` by default */
  fullWidth?: boolean;

  /** Determines whether interactive elements (sliders thumbs and swatches) should be focusable, `true` by default */
  focusable?: boolean;

  /** Saturation slider `aria-label` prop */
  saturationLabel?: string;

  /** Hue slider `aria-label` prop */
  hueLabel?: string;

  /** Alpha slider `aria-label` prop */
  alphaLabel?: string;

  /** Called when one of the color swatches is clicked */
  onColorSwatchClick?: (color: string) => void;
}

export type ColorPickerFactory = Factory<{
  props: ColorPickerProps;
  ref: HTMLDivElement;
  stylesNames: ColorPickerStylesNames;
  vars: ColorPickerCssVariables;
}>;

const defaultProps: Partial<ColorPickerProps> = {
  swatchesPerRow: 7,
  withPicker: true,
  focusable: true,
  size: 'md',
  __staticSelector: 'ColorPicker',
};

const varsResolver = createVarsResolver<ColorPickerFactory>((_, { size, swatchesPerRow }) => ({
  wrapper: {
    '--cp-preview-size': getSize(size, 'cp-preview-size'),
    '--cp-width': getSize(size, 'cp-width'),
    '--cp-body-spacing': getSpacing(size),
    '--cp-swatch-size': `${100 / swatchesPerRow!}%`,
    '--cp-thumb-size': getSize(size, 'cp-thumb-size'),
    '--cp-saturation-height': getSize(size, 'cp-saturation-height'),
  },
}));

export const ColorPicker = factory<ColorPickerFactory>((_props, ref) => {
  const props = useProps('ColorPicker', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    format,
    value,
    defaultValue,
    onChange,
    onChangeEnd,
    withPicker,
    size,
    saturationLabel,
    hueLabel,
    alphaLabel,
    focusable,
    swatches,
    swatchesPerRow,
    fullWidth,
    onColorSwatchClick,
    __staticSelector,
    mod,
    ...others
  } = props;

  const getStyles = useStyles<ColorPickerFactory>({
    name: __staticSelector!,
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: 'wrapper',
    vars,
    varsResolver,
  });

  const formatRef = useRef(format);
  const valueRef = useRef<string>('');
  const scrubTimeoutRef = useRef<number>(-1);
  const isScrubbingRef = useRef(false);
  const withAlpha = format === 'hexa' || format === 'rgba' || format === 'hsla';

  const [_value, setValue, controlled] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '#FFFFFF',
    onChange,
  });

  const [parsed, setParsed] = useState<HsvaColor>(parseColor(_value));

  const startScrubbing = () => {
    window.clearTimeout(scrubTimeoutRef.current);
    isScrubbingRef.current = true;
  };

  const stopScrubbing = () => {
    window.clearTimeout(scrubTimeoutRef.current);
    scrubTimeoutRef.current = window.setTimeout(() => {
      isScrubbingRef.current = false;
    }, 200);
  };

  const handleChange = (color: Partial<HsvaColor>) => {
    setParsed((current) => {
      const next = { ...current, ...color };
      valueRef.current = convertHsvaTo(formatRef.current!, next);
      return next;
    });

    setValue(valueRef.current!);
  };

  useDidUpdate(() => {
    if (isColorValid(value!) && !isScrubbingRef.current) {
      setParsed(parseColor(value!));
    }
  }, [value]);

  useDidUpdate(() => {
    formatRef.current = format;
    setValue(convertHsvaTo(format!, parsed));
  }, [format]);

  return (
    <ColorPickerProvider value={{ getStyles, unstyled }}>
      <Box
        ref={ref}
        {...getStyles('wrapper')}
        size={size}
        mod={[{ 'full-width': fullWidth }, mod]}
        {...others}
      >
        {withPicker && (
          <>
            <Saturation
              value={parsed}
              onChange={handleChange}
              onChangeEnd={({ s, v }) =>
                onChangeEnd?.(convertHsvaTo(formatRef.current!, { ...parsed, s: s!, v: v! }))
              }
              color={_value}
              size={size!}
              focusable={focusable}
              saturationLabel={saturationLabel}
              onScrubStart={startScrubbing}
              onScrubEnd={stopScrubbing}
            />

            <div {...getStyles('body')}>
              <div {...getStyles('sliders')}>
                <HueSlider
                  value={parsed.h}
                  onChange={(h) => handleChange({ h })}
                  onChangeEnd={(h) =>
                    onChangeEnd?.(convertHsvaTo(formatRef.current!, { ...parsed, h }))
                  }
                  size={size}
                  focusable={focusable}
                  aria-label={hueLabel}
                  onScrubStart={startScrubbing}
                  onScrubEnd={stopScrubbing}
                />

                {withAlpha && (
                  <AlphaSlider
                    value={parsed.a}
                    onChange={(a) => handleChange({ a })}
                    onChangeEnd={(a) => {
                      onChangeEnd?.(convertHsvaTo(formatRef.current!, { ...parsed, a }));
                    }}
                    size={size}
                    color={convertHsvaTo('hex', parsed)}
                    focusable={focusable}
                    aria-label={alphaLabel}
                    onScrubStart={startScrubbing}
                    onScrubEnd={stopScrubbing}
                  />
                )}
              </div>

              {withAlpha && (
                <ColorSwatch
                  color={_value}
                  radius="sm"
                  size="var(--cp-preview-size)"
                  {...getStyles('preview')}
                />
              )}
            </div>
          </>
        )}

        {Array.isArray(swatches) && (
          <Swatches
            data={swatches}
            swatchesPerRow={swatchesPerRow}
            focusable={focusable}
            setValue={setValue}
            onChangeEnd={(color) => {
              const convertedColor = convertHsvaTo(format!, parseColor(color));
              onColorSwatchClick?.(convertedColor);
              onChangeEnd?.(convertedColor);
              if (!controlled) {
                setParsed(parseColor(color));
              }
            }}
          />
        )}
      </Box>
    </ColorPickerProvider>
  );
});

ColorPicker.classes = classes;
ColorPicker.displayName = '@mantine/core/ColorPicker';
