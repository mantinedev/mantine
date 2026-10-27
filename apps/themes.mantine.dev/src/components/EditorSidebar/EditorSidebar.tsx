'use client';

import { useState } from 'react';
import {
  Accordion,
  Button,
  ScrollArea,
  SegmentedControl,
  Select,
  Stack,
  Switch,
  Title,
} from '@mantine/core';
import { useEditorParams } from '@/hooks/use-editor-params';
import {
  CURSOR_TYPES,
  DEFAULT_OVERRIDES,
  FOCUS_RINGS,
  HEADING_WRAPS,
  type PresetThemeInfo,
  type ScaleGroup,
  SHADOW_PRESETS,
  SURFACE_KEYS,
  type SurfaceKey,
  type ThemeOverrides,
} from '@/preview';
import { FontPicker } from '../FontPicker';
import { ColorsPanel } from './ColorsPanel';
import { Control, HexColorInput, ScaleControl, ValueSlider } from './controls';
import classes from './EditorSidebar.module.css';

const PRESET = 'preset';

const WEIGHTS = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];

const SURFACE_LABELS: Record<SurfaceKey, string> = {
  page: 'Page',
  panel: 'Panel',
  panel2: 'Raised panel',
  sunken: 'Sunken',
  muted: 'Muted',
  input: 'Input',
};

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function withPreset<T extends string>(values: readonly T[]) {
  return [
    { value: PRESET, label: 'Preset' },
    ...values.map((value) => ({ value, label: capitalize(value) })),
  ];
}

function fromPreset<T extends string>(value: string | null) {
  return value === null || value === PRESET ? null : (value as T);
}

interface EditorSidebarProps {
  info: PresetThemeInfo | null;
}

export function EditorSidebar({ info }: EditorSidebarProps) {
  const { overrides, setParams } = useEditorParams();
  const [surfaceScheme, setSurfaceScheme] = useState<'light' | 'dark'>('light');
  const changed = JSON.stringify(overrides) !== JSON.stringify(DEFAULT_OVERRIDES);

  const surfaceKey = surfaceScheme === 'light' ? 'surfacesLight' : 'surfacesDark';
  const surfaces = overrides[surfaceKey];

  const scale = (group: ScaleGroup, label?: string) => (
    <ScaleControl
      group={group}
      label={label}
      base={info?.scales[group] ?? []}
      percent={overrides[group]}
      values={overrides[`${group}Values`]}
      onChange={({ percent, values }) =>
        setParams({ [group]: percent, [`${group}Values`]: values } as Partial<ThemeOverrides>)
      }
    />
  );

  const weightSelect = (
    label: string,
    key: 'fontWeightRegular' | 'fontWeightMedium' | 'fontWeightBold' | 'headingsWeight',
    fallback: number | undefined
  ) => (
    <Select
      label={label}
      data={WEIGHTS}
      value={String(overrides[key] ?? fallback ?? '')}
      onChange={(value) => setParams({ [key]: value ? Number(value) : null })}
      allowDeselect={false}
      comboboxProps={{ floatingStrategy: 'fixed' }}
    />
  );

  return (
    <ScrollArea className={classes.root}>
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

      <Accordion multiple defaultValue={['colors']} classNames={{ control: classes.panelControl }}>
        <Accordion.Item value="colors">
          <Accordion.Control>Colors</Accordion.Control>
          <Accordion.Panel>
            <ColorsPanel info={info} overrides={overrides} setParams={setParams} />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="surfaces">
          <Accordion.Control>Surfaces</Accordion.Control>
          <Accordion.Panel>
            <Stack gap="md">
              <SegmentedControl
                fullWidth
                value={surfaceScheme}
                onChange={(value) => setSurfaceScheme(value as 'light' | 'dark')}
                data={[
                  { value: 'light', label: 'Light scheme' },
                  { value: 'dark', label: 'Dark scheme' },
                ]}
              />
              {SURFACE_KEYS.map((key) => (
                <HexColorInput
                  key={`${surfaceScheme}-${key}`}
                  label={SURFACE_LABELS[key]}
                  value={surfaces?.[key] ?? null}
                  placeholder="Preset"
                  onChange={(value) => {
                    const next = { ...surfaces };
                    if (value) {
                      next[key] = value;
                    } else {
                      delete next[key];
                    }
                    setParams({ [surfaceKey]: Object.keys(next).length > 0 ? next : null });
                  }}
                />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="typography">
          <Accordion.Control>Typography</Accordion.Control>
          <Accordion.Panel>
            <Stack gap="md">
              <FontPicker
                label="Body font"
                value={overrides.font}
                onChange={(font) => setParams({ font })}
              />
              <FontPicker
                label="Monospace font"
                value={overrides.monoFont}
                onChange={(monoFont) => setParams({ monoFont })}
              />
              <Switch
                label="Font smoothing"
                checked={overrides.fontSmoothing ?? info?.fontSmoothing ?? true}
                onChange={(event) => setParams({ fontSmoothing: event.currentTarget.checked })}
              />
              {scale('fontSizes')}
              {scale('lineHeights')}
              {weightSelect('Regular weight', 'fontWeightRegular', info?.fontWeights.regular)}
              {weightSelect('Medium weight', 'fontWeightMedium', info?.fontWeights.medium)}
              {weightSelect('Bold weight', 'fontWeightBold', info?.fontWeights.bold)}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="headings">
          <Accordion.Control>Headings</Accordion.Control>
          <Accordion.Panel>
            <Stack gap="md">
              <FontPicker
                label="Headings font"
                value={overrides.headingsFont}
                onChange={(headingsFont) => setParams({ headingsFont })}
              />
              {weightSelect('Headings weight', 'headingsWeight', info?.headingsWeight)}
              <Select
                label="Text wrap"
                data={HEADING_WRAPS.map((value) => ({ value, label: capitalize(value) }))}
                value={overrides.headingsWrap ?? info?.headingsWrap ?? 'wrap'}
                onChange={(value) =>
                  setParams({ headingsWrap: value as ThemeOverrides['headingsWrap'] })
                }
                allowDeselect={false}
                comboboxProps={{ floatingStrategy: 'fixed' }}
              />
              {scale('headingSizes')}
              {scale('headingLineHeights')}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="spacing">
          <Accordion.Control>Spacing</Accordion.Control>
          <Accordion.Panel>{scale('spacing', 'All sizes')}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="radius">
          <Accordion.Control>Radius</Accordion.Control>
          <Accordion.Panel>
            <Stack gap="md">
              {scale('radius', 'All sizes')}
              <Select
                label="Default radius"
                data={info?.scales.radius.map((item) => item.key) ?? []}
                value={overrides.defaultRadius ?? (info?.defaultRadius || null)}
                onChange={(defaultRadius) => setParams({ defaultRadius })}
                allowDeselect={false}
                comboboxProps={{ floatingStrategy: 'fixed' }}
              />
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="shadows">
          <Accordion.Control>Shadows</Accordion.Control>
          <Accordion.Panel>
            <SegmentedControl
              fullWidth
              aria-label="Shadows"
              value={overrides.shadows ?? PRESET}
              onChange={(value) => setParams({ shadows: fromPreset(value) })}
              data={withPreset(SHADOW_PRESETS)}
            />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="interaction">
          <Accordion.Control>Interaction</Accordion.Control>
          <Accordion.Panel>
            <Stack gap="md">
              <Control label="Focus ring">
                <SegmentedControl
                  fullWidth
                  aria-label="Focus ring"
                  value={overrides.focusRing ?? info?.focusRing ?? 'auto'}
                  onChange={(value) =>
                    setParams({ focusRing: value as ThemeOverrides['focusRing'] })
                  }
                  data={FOCUS_RINGS.map((value) => ({ value, label: capitalize(value) }))}
                />
              </Control>
              <Control label="Cursor on buttons and checkboxes">
                <SegmentedControl
                  fullWidth
                  aria-label="Cursor type"
                  value={overrides.cursorType ?? info?.cursorType ?? 'default'}
                  onChange={(value) =>
                    setParams({ cursorType: value as ThemeOverrides['cursorType'] })
                  }
                  data={CURSOR_TYPES.map((value) => ({ value, label: capitalize(value) }))}
                />
              </Control>
              <ValueSlider
                label="Disabled opacity"
                value={overrides.disabledOpacity ?? info?.disabledOpacity ?? 0.6}
                min={0.2}
                max={1}
                step={0.05}
                format={(value) => value.toFixed(2)}
                onChange={(disabledOpacity) => setParams({ disabledOpacity })}
              />
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </ScrollArea>
  );
}
