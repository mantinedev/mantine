import React from 'react';
import { DefaultProps, mergeStyles, useMantineTheme } from '../../../theme';
import { ColorSwatch } from '../../ColorSwatch/ColorSwatch';
import { Hue, HueStylesNames } from '../Hue/Hue';
import { Alpha, AlphaStylesNames } from '../Alpha/Alpha';
import { Saturation, SaturationStylesNames } from '../Saturation/Saturation';
import { Swatches } from '../Swatches/Swatches';
import { HsvaColor } from '../types';
import { hsvaToHsl } from '../converters/hsva-to-hsl';
import useStyles from './ColorPicker.styles';

export type ColorPickerStylesNames =
  | keyof ReturnType<typeof useStyles>
  | HueStylesNames
  | AlphaStylesNames
  | SaturationStylesNames;

interface ColorPickerProps extends DefaultProps<ColorPickerStylesNames> {
  value: HsvaColor;
  onChange(color: HsvaColor): void;
  withAlpha?: boolean;
  swatches?: string[];
}

export function ColorPicker({
  value,
  onChange,
  classNames,
  styles,
  themeOverride,
  withAlpha = false,
  swatches,
}: ColorPickerProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames as any, 'color-input');
  const _styles = mergeStyles(classes, styles as any);

  return (
    <div style={{ width: 200 }}>
      <Saturation
        value={value}
        onChange={onChange}
        themeOverride={themeOverride}
        styles={styles as any}
        classNames={classNames as any}
      />

      <div className={classes.body} style={_styles.body}>
        <div className={classes.sliders} style={_styles.sliders}>
          <Hue
            value={value}
            onChange={onChange}
            className={classes.slider}
            style={_styles.slider}
            themeOverride={themeOverride}
            styles={styles as any}
            classNames={classNames as any}
          />
          {withAlpha && (
            <Alpha
              value={value}
              onChange={onChange}
              className={classes.slider}
              themeOverride={themeOverride}
              styles={styles as any}
              classNames={classNames as any}
              style={_styles.slider}
            />
          )}
        </div>

        {withAlpha && (
          <ColorSwatch color={hsvaToHsl(value)} radius="sm" themeOverride={themeOverride} size={34}>
            <div className={classes.swatchShadow} style={_styles.swatchShadow} />
          </ColorSwatch>
        )}
      </div>
      {Array.isArray(swatches) && <Swatches data={swatches} />}
    </div>
  );
}

ColorPicker.displayName = '@mantine/core/ColorPicker';
