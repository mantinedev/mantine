import React, { useRef, useEffect } from 'react';
import { DefaultProps, mergeStyles, useMantineTheme } from '../../../theme';
import { ColorSwatch } from '../../ColorSwatch/ColorSwatch';
import { HueSlider } from '../ColorSlider/HueSlider';
import { AlphaSlider } from '../ColorSlider/AlphaSlider';
import { Saturation, SaturationStylesNames } from '../Saturation/Saturation';
import { Swatches } from '../Swatches/Swatches';
import { HsvaColor } from '../types';
import { convertHsvaTo } from '../converters';
import useStyles from './MantineColorPicker.styles';

export type MantineColorPickerStylesNames =
  | keyof ReturnType<typeof useStyles>
  | SaturationStylesNames;

interface MantineColorPickerProps extends DefaultProps<MantineColorPickerStylesNames> {
  value: HsvaColor;
  onChange(color: HsvaColor): void;
  withAlpha?: boolean;
  swatches?: string[];
}

export function MantineColorPicker({
  value,
  onChange,
  classNames,
  styles,
  themeOverride,
  withAlpha = false,
  swatches,
}: MantineColorPickerProps) {
  const refValue = useRef(value);
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames as any, 'color-input');
  const _styles = mergeStyles(classes, styles as any);

  useEffect(() => {
    refValue.current = value;
  }, [value]);

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
          <HueSlider
            value={value.h}
            onChange={(h) => onChange({ ...refValue.current, h })}
            // themeOverride={themeOverride}
            // styles={styles as any}
            // classNames={classNames as any}
          />

          {withAlpha && (
            <AlphaSlider
              value={value.a}
              onChange={(a) => onChange({ ...refValue.current, a })}
              color={convertHsvaTo('hex', value)}
            />
          )}
        </div>

        {withAlpha && (
          <ColorSwatch
            color={convertHsvaTo('rgba', value)}
            radius="sm"
            themeOverride={themeOverride}
            size={34}
          />
        )}
      </div>

      {Array.isArray(swatches) && <Swatches data={swatches} onSelect={onChange} />}
    </div>
  );
}

MantineColorPicker.displayName = '@mantine/core/MantineColorPicker';
