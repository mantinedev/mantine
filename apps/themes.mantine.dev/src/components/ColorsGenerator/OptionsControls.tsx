'use client';

import { Button, SegmentedControl, Stack, Text } from '@mantine/core';
import { Control, ValueSlider } from '../EditorSidebar/controls';
import { isDefaultScheme, SCHEME_DEFAULTS, SCHEME_RANGES, type SchemeParams } from './params';
import classes from './ColorsGenerator.module.css';

const SHADES = ['auto', ...Array.from({ length: 10 }, (_, index) => String(index))];

interface OptionsControlsProps {
  title: string;
  values: SchemeParams;
  resolvedShade: number;
  onChange: (update: Partial<SchemeParams>) => void;
}

export function OptionsControls({ title, values, resolvedShade, onChange }: OptionsControlsProps) {
  return (
    <Stack gap="md">
      <div className={classes.sectionHead}>
        <Text size="sm" className={classes.sectionLabel}>
          {title}
        </Text>
        {!isDefaultScheme(values) && (
          <Button variant="default" size="compact-xs" onClick={() => onChange(SCHEME_DEFAULTS)}>
            Reset
          </Button>
        )}
      </div>

      <Control
        label="Base shade"
        value={values.shade === null ? `auto, shade ${resolvedShade}` : `shade ${values.shade}`}
      >
        <SegmentedControl
          fullWidth
          size="xs"
          value={values.shade === null ? 'auto' : String(values.shade)}
          onChange={(value) => onChange({ shade: value === 'auto' ? null : Number(value) })}
          data={SHADES.map((item) => ({ label: item === 'auto' ? 'Auto' : item, value: item }))}
        />
      </Control>

      <ValueSlider
        label="Lightest shade"
        value={values.lightest}
        min={SCHEME_RANGES.lightest.min}
        max={SCHEME_RANGES.lightest.max}
        format={(value) => `${value}% lightness`}
        onChange={(lightest) => onChange({ lightest })}
      />

      <ValueSlider
        label="Darkest shade"
        value={values.darkest}
        min={SCHEME_RANGES.darkest.min}
        max={SCHEME_RANGES.darkest.max}
        format={(value) => `${value}% lightness`}
        onChange={(darkest) => onChange({ darkest })}
      />

      <ValueSlider
        label="Light shades saturation"
        value={values.lightChroma}
        min={SCHEME_RANGES.lightChroma.min}
        max={SCHEME_RANGES.lightChroma.max}
        step={5}
        format={(value) => `${value}% of base`}
        onChange={(lightChroma) => onChange({ lightChroma })}
      />

      <ValueSlider
        label="Dark shades saturation"
        value={values.darkChroma}
        min={SCHEME_RANGES.darkChroma.min}
        max={SCHEME_RANGES.darkChroma.max}
        step={5}
        format={(value) => `${value}% of base`}
        onChange={(darkChroma) => onChange({ darkChroma })}
      />

      <ValueSlider
        label="Hue shift"
        value={values.hueShift}
        min={SCHEME_RANGES.hueShift.min}
        max={SCHEME_RANGES.hueShift.max}
        format={(value) => `${value > 0 ? '+' : ''}${value}°`}
        onChange={(hueShift) => onChange({ hueShift })}
      />
    </Stack>
  );
}
