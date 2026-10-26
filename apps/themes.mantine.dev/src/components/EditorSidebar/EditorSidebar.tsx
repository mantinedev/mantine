'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Button,
  CheckIcon,
  ColorSwatch,
  type MantineColorShade,
  ScrollArea,
  Select,
  SimpleGrid,
  Slider,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useEditorParams } from '@/hooks/use-editor-params';
import {
  DEFAULT_OVERRIDES,
  type GoogleFont,
  loadGoogleFonts,
  type PresetColorSwatch,
  type PresetThemeInfo,
  SYSTEM_FONT,
} from '@/preview';
import classes from './EditorSidebar.module.css';

interface ControlProps {
  label: string;
  value?: string;
  children: React.ReactNode;
}

function Control({ label, value, children }: ControlProps) {
  return (
    <div>
      <div className={classes.controlHead}>
        <Text size="sm" className={classes.label}>
          {label}
        </Text>
        {value && (
          <Text size="sm" className={classes.value}>
            {value}
          </Text>
        )}
      </div>
      {children}
    </div>
  );
}

interface PercentSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

function PercentSlider({ label, value, min, max, onChange }: PercentSliderProps) {
  return (
    <Control label={label} value={`${value}%`}>
      <Slider
        thumbLabel={label}
        min={min}
        max={max}
        step={5}
        value={value}
        onChange={onChange}
        label={(next) => `${next}%`}
      />
    </Control>
  );
}

interface SwatchesProps {
  swatches: PresetColorSwatch[];
  value: string;
  onChange: (value: string) => void;
}

function Swatches({ swatches, value, onChange }: SwatchesProps) {
  return (
    <SimpleGrid cols={8} spacing={8} verticalSpacing={8}>
      {swatches.map((swatch) => (
        <ColorSwatch
          key={swatch.name}
          component="button"
          type="button"
          color={swatch.value}
          aria-label={swatch.name}
          aria-pressed={swatch.name === value}
          onClick={() => onChange(swatch.name)}
          className={classes.swatch}
        >
          {swatch.name === value && <CheckIcon className={classes.check} />}
        </ColorSwatch>
      ))}
    </SimpleGrid>
  );
}

function useFontOptions() {
  const [fonts, setFonts] = useState<GoogleFont[]>([]);

  useEffect(() => {
    let active = true;
    loadGoogleFonts().then((catalog) => active && setFonts(catalog));
    return () => {
      active = false;
    };
  }, []);

  return useMemo(() => [SYSTEM_FONT, ...fonts.map((font) => font.family)], [fonts]);
}

interface FontSelectProps {
  label: string;
  value: string | null;
  data: string[];
  onChange: (value: string | null) => void;
}

function FontSelect({ label, value, data, onChange }: FontSelectProps) {
  return (
    <Select
      label={label}
      placeholder="Preset font"
      data={value && !data.includes(value) ? [value, ...data] : data}
      value={value}
      onChange={onChange}
      searchable
      clearable
      limit={60}
      nothingFoundMessage="No fonts found"
      comboboxProps={{ floatingStrategy: 'fixed' }}
    />
  );
}

interface EditorSidebarProps {
  info: PresetThemeInfo | null;
}

export function EditorSidebar({ info }: EditorSidebarProps) {
  const { overrides, setParams } = useEditorParams();
  const fontOptions = useFontOptions();
  const primaryColor = overrides.primaryColor ?? info?.primaryColor ?? '';
  const shadeLight = overrides.primaryShadeLight ?? info?.primaryShade.light ?? 6;
  const shadeDark = overrides.primaryShadeDark ?? info?.primaryShade.dark ?? 8;
  const customSwatches = info?.swatches.filter((swatch) => swatch.custom) ?? [];
  const mantineSwatches = info?.swatches.filter((swatch) => !swatch.custom) ?? [];
  const changed = JSON.stringify(overrides) !== JSON.stringify(DEFAULT_OVERRIDES);

  return (
    <ScrollArea className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.header}>
          <Title order={2} size="h4" className={classes.title}>
            Theme
          </Title>
          <Button
            variant="default"
            size="xs"
            onClick={() => setParams(DEFAULT_OVERRIDES)}
            disabled={!changed}
          >
            Reset
          </Button>
        </div>

        <section className={classes.section}>
          <Title order={3} size="h6" className={classes.sectionTitle}>
            Colors
          </Title>
          <Stack gap="md">
            {customSwatches.length > 0 && (
              <Control label="Preset colors">
                <Swatches
                  swatches={customSwatches}
                  value={primaryColor}
                  onChange={(value) => setParams({ primaryColor: value })}
                />
              </Control>
            )}
            <Control label="Mantine colors">
              <Swatches
                swatches={mantineSwatches}
                value={primaryColor}
                onChange={(value) => setParams({ primaryColor: value })}
              />
            </Control>
            <Control label="Primary shade, light scheme" value={String(shadeLight)}>
              <Slider
                thumbLabel="Primary shade in light scheme"
                min={0}
                max={9}
                value={shadeLight}
                onChange={(value) => setParams({ primaryShadeLight: value as MantineColorShade })}
              />
            </Control>
            <Control label="Primary shade, dark scheme" value={String(shadeDark)}>
              <Slider
                thumbLabel="Primary shade in dark scheme"
                min={0}
                max={9}
                value={shadeDark}
                onChange={(value) => setParams({ primaryShadeDark: value as MantineColorShade })}
              />
            </Control>
          </Stack>
        </section>

        <section className={classes.section}>
          <Title order={3} size="h6" className={classes.sectionTitle}>
            Typography
          </Title>
          <Stack gap="md">
            <FontSelect
              label="Body font"
              value={overrides.font}
              data={fontOptions}
              onChange={(font) => setParams({ font })}
            />
            <FontSelect
              label="Headings font"
              value={overrides.headingsFont}
              data={fontOptions}
              onChange={(headingsFont) => setParams({ headingsFont })}
            />
            <PercentSlider
              label="Font size"
              value={overrides.fontSize}
              min={80}
              max={130}
              onChange={(fontSize) => setParams({ fontSize })}
            />
          </Stack>
        </section>

        <section className={classes.section}>
          <Title order={3} size="h6" className={classes.sectionTitle}>
            Shape and spacing
          </Title>
          <Stack gap="md">
            <PercentSlider
              label="Radius"
              value={overrides.radius}
              min={0}
              max={250}
              onChange={(radius) => setParams({ radius })}
            />
            <PercentSlider
              label="Spacing"
              value={overrides.spacing}
              min={50}
              max={150}
              onChange={(spacing) => setParams({ spacing })}
            />
          </Stack>
        </section>
      </div>
    </ScrollArea>
  );
}
