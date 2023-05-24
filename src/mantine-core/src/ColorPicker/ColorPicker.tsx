import React, { useState, useRef, forwardRef } from 'react';
import { useDidUpdate, useUncontrolled } from '@mantine/hooks';
import {
  DefaultProps,
  MantineSize,
  Selectors,
  useComponentDefaultProps,
  getSize,
  rem,
} from '@mantine/styles';
import { Box } from '../Box';
import { ColorSwatch } from '../ColorSwatch/ColorSwatch';
import { convertHsvaTo, isColorValid, parseColor } from './converters';
import { ColorSliderStylesNames } from './ColorSlider/ColorSlider';
import { HueSlider } from './HueSlider/HueSlider';
import { AlphaSlider } from './AlphaSlider/AlphaSlider';
import { Saturation, SaturationStylesNames } from './Saturation/Saturation';
import { Swatches, SwatchesStylesNames } from './Swatches/Swatches';
import { ThumbStylesNames } from './Thumb/Thumb';
import { ColorFormat, HsvaColor } from './types';
import useStyles from './ColorPicker.styles';

export type ColorPickerStylesNames =
  | Selectors<typeof useStyles>
  | ColorSliderStylesNames
  | SwatchesStylesNames
  | SaturationStylesNames
  | ThumbStylesNames;

export interface ColorPickerBaseProps {
  /** Controlled component value */
  value?: string;

  /** Uncontrolled component default value */
  defaultValue?: string;

  /** Called when color changes */
  onChange?(color: string): void;

  /** Called when user stops dragging thumb or changes value with arrows */
  onChangeEnd?(color: string): void;

  /** Color format */
  format?: ColorFormat;

  /** Set to false to display swatches only */
  withPicker?: boolean;

  /** Predefined colors */
  swatches?: string[];

  /** Number of swatches displayed in one row */
  swatchesPerRow?: number;

  /** Predefined component size */
  size?: MantineSize;
}

export interface ColorPickerProps
  extends DefaultProps<ColorPickerStylesNames>,
    ColorPickerBaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange' | 'value' | 'defaultValue'> {
  variant?: string;

  /** Force picker to take 100% width of its container */
  fullWidth?: boolean;

  /** Should interactive elements be focusable */
  focusable?: boolean;

  /** Static selector base */
  __staticSelector?: string;

  /** Saturation slider aria-label */
  saturationLabel?: string;

  /** Hue slider aria-label */
  hueLabel?: string;

  /** Alpha slider aria-label */
  alphaLabel?: string;

  /** Called when color swatch is clicked */
  onColorSwatchClick?(color: string): void;
}

const SWATCH_SIZES = {
  xs: 26,
  sm: 34,
  md: 42,
  lg: 50,
  xl: 54,
};

const defaultProps: Partial<ColorPickerProps> = {
  swatchesPerRow: 10,
  size: 'sm',
  withPicker: true,
  focusable: true,
  __staticSelector: 'ColorPicker',
};

export const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(
  (props: ColorPickerProps, ref) => {
    const {
      value,
      defaultValue,
      onChange,
      onChangeEnd,
      format,
      swatches,
      swatchesPerRow,
      size,
      withPicker,
      fullWidth,
      focusable,
      __staticSelector,
      saturationLabel,
      hueLabel,
      alphaLabel,
      className,
      styles,
      classNames,
      unstyled,
      onColorSwatchClick,
      variant,
      ...others
    } = useComponentDefaultProps('ColorPicker', defaultProps, props);

    const { classes, cx } = useStyles(
      { fullWidth },
      { classNames, styles, name: __staticSelector, unstyled, variant, size }
    );
    const formatRef = useRef(format);
    const valueRef = useRef<string>(null);
    const updateRef = useRef(true);
    const withAlpha = format === 'hexa' || format === 'rgba' || format === 'hsla';

    const [_value, setValue, controlled] = useUncontrolled({
      value,
      defaultValue,
      finalValue: '#FFFFFF',
      onChange,
    });

    const [parsed, setParsed] = useState(parseColor(_value));

    const handleChange = (color: Partial<HsvaColor>) => {
      updateRef.current = false;
      setParsed((current) => {
        const next = { ...current, ...color };
        valueRef.current = convertHsvaTo(formatRef.current, next);
        return next;
      });

      setValue(valueRef.current);

      // Does not work any other way
      setTimeout(() => {
        updateRef.current = true;
      }, 0);
    };

    useDidUpdate(() => {
      if (isColorValid(value) && updateRef.current) {
        setParsed(parseColor(value));
        updateRef.current = true;
      }
    }, [value]);

    useDidUpdate(() => {
      formatRef.current = format;
      setValue(convertHsvaTo(format, parsed));
    }, [format]);

    return (
      <Box className={cx(classes.wrapper, className)} ref={ref} {...others}>
        {withPicker && (
          <>
            <Saturation
              value={parsed}
              onChange={handleChange}
              onChangeEnd={({ s, v }) =>
                onChangeEnd?.(convertHsvaTo(formatRef.current, { ...parsed, s, v }))
              }
              color={_value}
              styles={styles}
              classNames={classNames}
              size={size}
              focusable={focusable}
              saturationLabel={saturationLabel}
              __staticSelector={__staticSelector}
            />

            <div className={classes.body}>
              <div className={classes.sliders}>
                <HueSlider
                  value={parsed.h}
                  onChange={(h) => handleChange({ h })}
                  onChangeEnd={(h) =>
                    onChangeEnd?.(convertHsvaTo(formatRef.current, { ...parsed, h }))
                  }
                  size={size}
                  styles={styles}
                  classNames={classNames}
                  focusable={focusable}
                  aria-label={hueLabel}
                  __staticSelector={__staticSelector}
                />

                {withAlpha && (
                  <AlphaSlider
                    value={parsed.a}
                    onChange={(a) => handleChange({ a })}
                    onChangeEnd={(a) => {
                      onChangeEnd?.(convertHsvaTo(formatRef.current, { ...parsed, a }));
                    }}
                    size={size}
                    color={convertHsvaTo('hex', parsed)}
                    style={{ marginTop: rem(6) }}
                    styles={styles}
                    classNames={classNames}
                    focusable={focusable}
                    aria-label={alphaLabel}
                    __staticSelector={__staticSelector}
                  />
                )}
              </div>

              {withAlpha && (
                <ColorSwatch
                  color={_value}
                  radius="sm"
                  size={getSize({ size, sizes: SWATCH_SIZES })}
                  className={classes.preview}
                />
              )}
            </div>
          </>
        )}

        {Array.isArray(swatches) && (
          <Swatches
            data={swatches}
            style={{ marginTop: rem(5) }}
            swatchesPerRow={swatchesPerRow}
            focusable={focusable}
            classNames={classNames}
            styles={styles}
            __staticSelector={__staticSelector}
            setValue={setValue}
            onChangeEnd={(color) => {
              const convertedColor = convertHsvaTo(format, parseColor(color));
              onColorSwatchClick?.(convertedColor);
              onChangeEnd?.(convertedColor);
              if (!controlled) {
                setParsed(parseColor(color));
              }
            }}
          />
        )}
      </Box>
    );
  }
);

ColorPicker.displayName = '@mantine/core/ColorPicker';
