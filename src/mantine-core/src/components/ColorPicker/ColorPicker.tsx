import React, { useState, useEffect } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { useMantineTheme, DefaultProps, mergeStyles } from '../../theme';
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

interface ColorPickerProps extends DefaultProps<ColorPickerStylesNames> {
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
}

export function ColorPicker({
  value,
  defaultValue,
  onChange,
  format,
  swatches,
  themeOverride,
  styles,
  classNames,
  ...others
}: ColorPickerProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames as any, 'color-picker');
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
    <div style={{ width: 200 }} {...others}>
      <Saturation
        value={parsed}
        onChange={handleChange}
        themeOverride={themeOverride}
        styles={styles as any}
        classNames={classNames as any}
      />

      <div className={classes.body} style={_styles.body}>
        <div className={classes.sliders} style={_styles.sliders}>
          <HueSlider
            value={parsed.h}
            onChange={(h) => handleChange({ h })}
            themeOverride={themeOverride}
            styles={styles as any}
            classNames={classNames as any}
          />

          {withAlpha && (
            <AlphaSlider
              value={parsed.a}
              onChange={(a) => handleChange({ a })}
              color={_value}
              style={{ marginTop: 6 }}
              themeOverride={themeOverride}
              styles={styles as any}
              classNames={classNames as any}
            />
          )}
        </div>

        {withAlpha && (
          <ColorSwatch color={_value} radius="sm" themeOverride={themeOverride} size={34} />
        )}
      </div>

      {Array.isArray(swatches) && (
        <Swatches data={swatches} onSelect={handleChange} style={{ marginTop: 5 }} />
      )}
    </div>
  );
}

ColorPicker.displayName = '@mantine/core/ColorPicker';
