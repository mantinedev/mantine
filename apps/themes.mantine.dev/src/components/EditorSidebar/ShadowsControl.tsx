'use client';

import { Button, SegmentedControl, Text } from '@mantine/core';
import {
  createShadows,
  getCustomPalettes,
  getShadowSettings,
  hasShadowOverrides,
  type PresetThemeInfo,
  SHADOW_COLORS,
  type ShadowColor,
  type ThemeOverrides,
} from '@/preview';
import { Control, ValueSlider } from './controls';
import classes from './EditorSidebar.module.css';

const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

const COLOR_LABELS: Record<ShadowColor, string> = {
  black: 'Black',
  gray: 'Gray',
  primary: 'Primary',
};

function getShadowColor(color: ShadowColor, info: PresetThemeInfo, overrides: ThemeOverrides) {
  if (color === 'gray') {
    return info.gray[9];
  }

  if (color === 'primary') {
    const name = overrides.primaryColor ?? info.primaryColor;
    const shades =
      getCustomPalettes(overrides).find((palette) => palette.name === name)?.shades ??
      info.swatches.find((swatch) => swatch.name === name)?.shades;
    return shades?.[9] ?? '#000';
  }

  return '#000';
}

interface ShadowsControlProps {
  info: PresetThemeInfo | null;
  overrides: ThemeOverrides;
  setParams: (values: Partial<ThemeOverrides>) => void;
}

export function ShadowsControl({ info, overrides, setParams }: ShadowsControlProps) {
  const custom = hasShadowOverrides(overrides);
  const settings = getShadowSettings(overrides);
  const shadows = info
    ? custom
      ? createShadows(settings, getShadowColor(settings.color, info, overrides))
      : info.shadows
    : null;

  const update = (values: Partial<ThemeOverrides>) =>
    setParams({
      shadowStrength: settings.strength,
      shadowSize: settings.size,
      shadowDistance: settings.distance,
      shadowColor: settings.color,
      ...values,
    });

  return (
    <div className={classes.shadows}>
      <div className={classes.shadowsHead}>
        <Text size="sm" className={classes.label}>
          {custom ? 'Custom shadows' : 'Preset shadows'}
        </Text>
        {custom && (
          <Button
            variant="default"
            size="compact-xs"
            onClick={() =>
              setParams({
                shadowStrength: null,
                shadowSize: null,
                shadowDistance: null,
                shadowColor: null,
              })
            }
          >
            Use preset
          </Button>
        )}
      </div>

      <div className={classes.shadowTiles}>
        {SIZES.map((size) => (
          <div key={size} className={classes.shadowTile} style={{ boxShadow: shadows?.[size] }}>
            <Text size="xs">{size}</Text>
          </div>
        ))}
      </div>

      <ValueSlider
        label="Strength"
        value={settings.strength}
        min={0}
        max={40}
        format={(value) => (value === 0 ? 'None' : `${value}%`)}
        onChange={(shadowStrength) => update({ shadowStrength })}
      />
      <ValueSlider
        label="Size"
        value={settings.size}
        min={25}
        max={250}
        step={5}
        format={(value) => `${value}%`}
        onChange={(shadowSize) => update({ shadowSize })}
      />
      <ValueSlider
        label="Elevation"
        value={settings.distance}
        min={0}
        max={100}
        step={5}
        format={(value) => (value === 0 ? 'Flat' : `${value}%`)}
        onChange={(shadowDistance) => update({ shadowDistance })}
      />
      <Control label="Color">
        <SegmentedControl
          fullWidth
          size="xs"
          aria-label="Shadow color"
          value={settings.color}
          onChange={(value) => update({ shadowColor: value as ShadowColor })}
          data={SHADOW_COLORS.map((value) => ({ value, label: COLOR_LABELS[value] }))}
        />
      </Control>
    </div>
  );
}
