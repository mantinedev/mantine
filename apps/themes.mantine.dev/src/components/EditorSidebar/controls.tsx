'use client';

import { useEffect, useState } from 'react';
import {
  CheckIcon,
  ColorInput,
  ColorSwatch,
  NumberInput,
  SimpleGrid,
  Slider,
  Switch,
  Text,
} from '@mantine/core';
import {
  isHexColor,
  type PresetColorSwatch,
  SCALE_GROUPS,
  type ScaleGroup,
  type ScaleValue,
} from '@/preview';
import classes from './EditorSidebar.module.css';

interface ControlProps {
  label: string;
  value?: React.ReactNode;
  children: React.ReactNode;
}

export function Control({ label, value, children }: ControlProps) {
  return (
    <div>
      <div className={classes.controlHead}>
        <Text size="sm" className={classes.label}>
          {label}
        </Text>
        {value !== undefined && (
          <Text size="sm" className={classes.value}>
            {value}
          </Text>
        )}
      </div>
      {children}
    </div>
  );
}

interface ValueSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  format?: (value: number) => string;
  onChange: (value: number) => void;
}

export function ValueSlider({
  label,
  value,
  min,
  max,
  step = 1,
  format = String,
  onChange,
}: ValueSliderProps) {
  return (
    <Control label={label} value={format(value)}>
      <Slider
        thumbLabel={label}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        label={format}
      />
    </Control>
  );
}

interface SwatchesProps {
  swatches: PresetColorSwatch[];
  value: string;
  onChange: (value: string) => void;
  children?: React.ReactNode;
}

export function Swatches({ swatches, value, onChange, children }: SwatchesProps) {
  return (
    <div className={classes.swatches}>
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
      {children}
    </div>
  );
}

interface HexColorInputProps {
  label: string;
  value: string | null;
  placeholder?: string;
  onChange: (value: string | null) => void;
}

export function HexColorInput({ label, value, placeholder, onChange }: HexColorInputProps) {
  const [draft, setDraft] = useState(value ?? '');

  useEffect(() => {
    setDraft(value ?? '');
  }, [value]);

  return (
    <ColorInput
      label={label}
      format="hex"
      value={draft}
      placeholder={placeholder}
      onChange={(next) => {
        setDraft(next);
        if (next === '') {
          onChange(null);
        } else if (isHexColor(next)) {
          onChange(next);
        }
      }}
      popoverProps={{ withinPortal: false }}
    />
  );
}

interface ScaleControlProps {
  group: ScaleGroup;
  label?: string;
  base: ScaleValue[];
  percent: number;
  values: Record<string, number> | null;
  onChange: (change: { percent: number; values: Record<string, number> | null }) => void;
}

function roundValue(value: number, step: number) {
  return Math.round(value / step) * step;
}

export function ScaleControl({ group, label, base, percent, values, onChange }: ScaleControlProps) {
  const config = SCALE_GROUPS[group];
  const individual = values !== null;
  const precision = config.step < 1 ? 2 : 0;

  const startIndividual = () =>
    onChange({
      percent: 100,
      values: Object.fromEntries(
        base.map((item) => [
          item.key,
          Number(roundValue((item.value * percent) / 100, config.step).toFixed(precision)),
        ])
      ),
    });

  return (
    <div className={classes.scale}>
      <div className={classes.controlHead}>
        <Text size="sm" className={classes.label}>
          {label ?? config.label}
        </Text>
        <Switch
          size="xs"
          label="Edit each"
          checked={individual}
          onChange={(event) =>
            event.currentTarget.checked
              ? startIndividual()
              : onChange({ percent: 100, values: null })
          }
        />
      </div>

      {individual ? (
        <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
          {base.map((item) => (
            <NumberInput
              key={item.key}
              size="xs"
              label={item.key}
              value={values[item.key] ?? item.value}
              min={config.min}
              max={config.max}
              step={config.step}
              decimalScale={precision}
              suffix={config.unit === 'px' ? 'px' : undefined}
              onChange={(next) =>
                typeof next === 'number' &&
                onChange({ percent: 100, values: { ...values, [item.key]: next } })
              }
            />
          ))}
        </SimpleGrid>
      ) : (
        <>
          <Slider
            thumbLabel={config.label}
            min={config.scaleMin}
            max={config.scaleMax}
            step={5}
            value={percent}
            onChange={(next) => onChange({ percent: next, values: null })}
            label={(next) => `${next}%`}
          />
          <Text size="xs" className={classes.scaleValues}>
            {base
              .map(
                (item) =>
                  `${item.key} ${Number(((item.value * percent) / 100).toFixed(precision))}${config.unit}`
              )
              .join(', ')}
          </Text>
        </>
      )}
    </div>
  );
}
