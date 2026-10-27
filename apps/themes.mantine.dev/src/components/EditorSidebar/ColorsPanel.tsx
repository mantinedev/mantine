'use client';

import { useEffect, useState } from 'react';
import {
  ColorPicker,
  ColorSwatch,
  type MantineColorShade,
  Select,
  Stack,
  Switch,
  Text,
  TextInput,
} from '@mantine/core';
import {
  CUSTOM_COLOR,
  DARK_PALETTES,
  getCustomPalette,
  isBaseColor,
  isHexColor,
  type PresetThemeInfo,
  type ThemeOverrides,
} from '@/preview';
import { Control, HexColorInput, Swatches, ValueSlider } from './controls';
import classes from './EditorSidebar.module.css';

const PRESET = 'preset';

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

interface ShadesProps {
  shades: string[];
  light: number;
  dark: number;
}

function Shades({ shades, light, dark }: ShadesProps) {
  return (
    <div className={classes.shades}>
      {shades.map((shade, index) => (
        <div key={index} className={classes.shade}>
          <ColorSwatch color={shade} radius="sm" className={classes.shadeSwatch} />
          <Text size="xs" className={classes.shadeIndex}>
            {index}
          </Text>
          <Text size="xs" className={classes.shadeMarker}>
            {[index === light && 'L', index === dark && 'D'].filter(Boolean).join(' ')}
          </Text>
        </div>
      ))}
    </div>
  );
}

interface BaseColorInputProps {
  value: string | null;
  onChange: (value: string | null) => void;
}

function BaseColorInput({ value, onChange }: BaseColorInputProps) {
  const [draft, setDraft] = useState(value ?? '');

  useEffect(() => {
    setDraft(value ?? '');
  }, [value]);

  const invalid = draft !== '' && !isBaseColor(draft);

  return (
    <Stack gap="xs">
      <TextInput
        label="Custom color"
        description="Hex or oklch base color, 10 shades are generated from it"
        placeholder="#5474b4 or oklch(0.56 0.106 263)"
        value={draft}
        error={invalid ? 'Enter a hex or oklch color' : undefined}
        leftSection={value ? <ColorSwatch color={value} size={18} /> : undefined}
        onChange={(event) => {
          const next = event.currentTarget.value.trim();
          setDraft(event.currentTarget.value);
          if (next === '') {
            onChange(null);
          } else if (isBaseColor(next)) {
            onChange(next);
          }
        }}
      />
      {(draft === '' || isHexColor(draft)) && (
        <ColorPicker
          fullWidth
          format="hex"
          value={isHexColor(draft) ? draft : '#5474b4'}
          onChange={(next) => {
            setDraft(next);
            onChange(next);
          }}
        />
      )}
    </Stack>
  );
}

interface ColorsPanelProps {
  info: PresetThemeInfo | null;
  overrides: ThemeOverrides;
  setParams: (values: Partial<ThemeOverrides>) => void;
}

export function ColorsPanel({ info, overrides, setParams }: ColorsPanelProps) {
  const customPalette = getCustomPalette(overrides.customColor);
  const primaryColor = customPalette
    ? CUSTOM_COLOR
    : (overrides.primaryColor ?? info?.primaryColor ?? '');
  const shadeLight =
    overrides.primaryShadeLight ?? customPalette?.baseColorIndex ?? info?.primaryShade.light ?? 6;
  const shadeDark =
    overrides.primaryShadeDark ?? customPalette?.baseColorIndex ?? info?.primaryShade.dark ?? 8;
  const autoContrast = overrides.autoContrast ?? info?.autoContrast ?? false;
  const shades =
    customPalette?.shades ??
    info?.swatches.find((swatch) => swatch.name === primaryColor)?.shades ??
    [];
  const colorOptions = info?.swatches.map((swatch) => swatch.name) ?? [];

  const selectPalette = (name: string) =>
    setParams({
      primaryColor: name,
      customColor: null,
      primaryShadeLight: null,
      primaryShadeDark: null,
    });

  return (
    <Stack gap="md">
      {info?.swatches.some((swatch) => swatch.custom) && (
        <Control label="Preset colors">
          <Swatches
            swatches={info.swatches.filter((swatch) => swatch.custom)}
            value={primaryColor}
            onChange={selectPalette}
          />
        </Control>
      )}
      <Control label="Mantine colors">
        <Swatches
          swatches={info?.swatches.filter((swatch) => !swatch.custom) ?? []}
          value={primaryColor}
          onChange={selectPalette}
        />
      </Control>

      <BaseColorInput
        value={overrides.customColor}
        onChange={(customColor) =>
          setParams({
            customColor,
            primaryColor: null,
            primaryShadeLight: null,
            primaryShadeDark: null,
          })
        }
      />

      {shades.length > 0 && (
        <Control label={`Primary palette: ${primaryColor}`}>
          <Shades shades={shades} light={shadeLight} dark={shadeDark} />
        </Control>
      )}

      <ValueSlider
        label="Primary shade, light scheme"
        value={shadeLight}
        min={0}
        max={9}
        onChange={(value) => setParams({ primaryShadeLight: value as MantineColorShade })}
      />
      <ValueSlider
        label="Primary shade, dark scheme"
        value={shadeDark}
        min={0}
        max={9}
        onChange={(value) => setParams({ primaryShadeDark: value as MantineColorShade })}
      />

      <Switch
        label="Auto contrast"
        description="Pick black or white text on filled backgrounds by color lightness"
        checked={autoContrast}
        onChange={(event) => setParams({ autoContrast: event.currentTarget.checked })}
      />
      {autoContrast && (
        <ValueSlider
          label="Luminance threshold"
          value={overrides.luminanceThreshold ?? info?.luminanceThreshold ?? 0.3}
          min={0}
          max={1}
          step={0.05}
          format={(value) => value.toFixed(2)}
          onChange={(luminanceThreshold) => setParams({ luminanceThreshold })}
        />
      )}
      <Select
        label="Dark palette"
        data={[
          { value: PRESET, label: 'Preset' },
          ...DARK_PALETTES.map((value) => ({ value, label: capitalize(value) })),
        ]}
        value={overrides.darkPalette ?? PRESET}
        onChange={(value) =>
          setParams({
            darkPalette:
              !value || value === PRESET ? null : (value as ThemeOverrides['darkPalette']),
          })
        }
        allowDeselect={false}
        comboboxProps={{ floatingStrategy: 'fixed' }}
      />
      <HexColorInput
        label="White"
        value={overrides.white}
        placeholder={info?.white}
        onChange={(white) => setParams({ white })}
      />
      <HexColorInput
        label="Black"
        value={overrides.black}
        placeholder={info?.black}
        onChange={(black) => setParams({ black })}
      />
      <Select
        label="Gradient start"
        data={colorOptions}
        value={overrides.gradientFrom ?? info?.defaultGradient.from ?? null}
        onChange={(gradientFrom) => setParams({ gradientFrom })}
        allowDeselect={false}
        comboboxProps={{ floatingStrategy: 'fixed' }}
      />
      <Select
        label="Gradient end"
        data={colorOptions}
        value={overrides.gradientTo ?? info?.defaultGradient.to ?? null}
        onChange={(gradientTo) => setParams({ gradientTo })}
        allowDeselect={false}
        comboboxProps={{ floatingStrategy: 'fixed' }}
      />
      <ValueSlider
        label="Gradient angle"
        value={overrides.gradientDeg ?? info?.defaultGradient.deg ?? 45}
        min={0}
        max={360}
        step={5}
        format={(value) => `${value}°`}
        onChange={(gradientDeg) => setParams({ gradientDeg })}
      />
    </Stack>
  );
}
