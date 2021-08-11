import React, { useState, useEffect } from 'react';
import cx from 'clsx';
import { useUncontrolled } from '@mantine/hooks';
import { useMantineTheme, DefaultProps, mergeStyles, MantineSize, getSizeValue } from '../../theme';
import { ColorSwatch } from '../ColorSwatch/ColorSwatch';
import { convertHsvaTo, isColorValid, parseColor } from './converters';
import { ColorSliderStylesNames } from './ColorSlider/ColorSlider';
import { HueSlider } from './ColorSlider/HueSlider';
import { AlphaSlider } from './ColorSlider/AlphaSlider';
import { Saturation } from './Saturation/Saturation';
import { Swatches } from './Swatches/Swatches';
import { HsvaColor } from './types';
import useStyles from './ColorPicker.styles';

export type ColorPickerStylesNames = keyof ReturnType<typeof useStyles> | ColorSliderStylesNames;

export interface ColorPickerBaseProps {
  /** Controlled component value */
  value?: string;

  /** Uncontrolled component default value */
  defaultValue?: string;

  /** Called when color changes */
  onChange?(color: string): void;

  /** Color format */
  format?: 'hex' | 'rgba' | 'rgb' | 'hsl' | 'hsla';

  /** Predefined colors */
  swatches?: string[];

  /** Number of swatches displayed in one row */
  swatchesPerRow?: number;

  /** Predefined component size */
  size?: MantineSize;
}

interface ColorPickerProps
  extends DefaultProps<ColorPickerStylesNames>,
    ColorPickerBaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange' | 'value' | 'defaultValue'> {}

const SWATCH_SIZES = {
  xs: 26,
  sm: 34,
  md: 42,
  lg: 50,
  xl: 54,
};

export function ColorPicker({
  value,
  defaultValue,
  onChange,
  format,
  swatches,
  swatchesPerRow = 10,
  size = 'sm',
  themeOverride,
  className,
  styles,
  classNames,
  ...others
}: ColorPickerProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, size }, classNames as any, 'color-picker');
  const _styles = mergeStyles(classes, styles as any);
  const withAlpha = format === 'rgba' || format === 'hsla';

  const [shouldSkip, setShouldSkip] = useState(false);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '#FFFFFF',
    rule: (val) => isColorValid(val),
    onChange,
  });

  const [parsed, setParsed] = useState(parseColor(_value));

  const handleChange = (color: Partial<HsvaColor>) => {
    // This is required for useEffect to work, it's dirty but works fine
    setShouldSkip(true);
    Promise.resolve().then(() => setShouldSkip(false));

    setParsed((current) => {
      const next = { ...current, ...color };
      setValue(convertHsvaTo(format, next));
      return next;
    });
  };

  useEffect(() => {
    if (isColorValid(value) && !shouldSkip) {
      setParsed(parseColor(value));
    }
  }, [value]);

  return (
    <div className={cx(classes.root, className)} {...others}>
      <Saturation
        value={parsed}
        onChange={handleChange}
        color={_value}
        themeOverride={themeOverride}
        styles={styles as any}
        classNames={classNames as any}
        size={size}
      />

      <div className={classes.body} style={_styles.body}>
        <div className={classes.sliders} style={_styles.sliders}>
          <HueSlider
            value={parsed.h}
            onChange={(h) => handleChange({ h })}
            size={size}
            themeOverride={themeOverride}
            styles={styles as any}
            classNames={classNames as any}
          />

          {withAlpha && (
            <AlphaSlider
              value={parsed.a}
              onChange={(a) => handleChange({ a })}
              size={size}
              color={convertHsvaTo('hex', parsed)}
              style={{ marginTop: 6 }}
              themeOverride={themeOverride}
              styles={styles as any}
              classNames={classNames as any}
            />
          )}
        </div>

        {withAlpha && (
          <ColorSwatch
            color={_value}
            radius="sm"
            themeOverride={themeOverride}
            size={getSizeValue({ size, sizes: SWATCH_SIZES })}
          />
        )}
      </div>

      {Array.isArray(swatches) && (
        <Swatches
          data={swatches}
          onSelect={handleChange}
          style={{ marginTop: 5 }}
          swatchesPerRow={swatchesPerRow}
        />
      )}
    </div>
  );
}

ColorPicker.displayName = '@mantine/core/ColorPicker';
